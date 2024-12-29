import React, { useEffect, useState } from "react";
import backendURL from "../../utils/constData";
import { useLocation } from "react-router-dom";
import HospitalCard from "../../Components/HospitalCard/HospitalCard";
import Slogan from "../../Components/Slogan/Slogan";
import Navbar from "../../Components/Navbar/Navbar";
import Calendar from "../../Components/Calendar/Calendar";
import Modal from "@mui/material/Modal";
import { Button } from "@mui/material";
import { startOfDay, format } from "date-fns";

const SearchResultsPage = () => {
  const [hospitalDetails, setHospitalDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedHospital, setSelectedHospital] = useState(null);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [selectedDate, setSelectedDate] = useState(startOfDay(new Date())); // Define selectedDate state
  const [myBookings, setMyBookings] = useState([]); // Store confirmed bookings

  const location = useLocation();

  // Extract query parameters
  const queryParams = new URLSearchParams(location.search);
  const state = queryParams.get("state");
  const city = queryParams.get("city");

  useEffect(() => {
    if (state && city) {
      fetch(`${backendURL}/data?state=${state}&city=${city}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Failed to fetch data");
          }
          return response.json();
        })
        .then((data) => {
          setHospitalDetails(data);
          setLoading(false);
        })
        .catch((err) => {
          console.error(err);
          setError("Failed to fetch hospital details. Please try again.");
          setLoading(false);
        });
    } else {
      setError("State or city is missing in the URL parameters.");
      setLoading(false);
    }
  }, [state, city]);

  const handleBookingClick = (hospital) => {
    setSelectedHospital(hospital); // Set the hospital to book
    setIsModalOpen(true); // Open the calendar modal
  };

  const closeModal = () => {
    setIsModalOpen(false); // Close the modal
    setSelectedHospital(null); // Reset selected hospital
    setSelectedSlot(null); // Reset selected slot
    setSelectedDate(startOfDay(new Date())); // Reset selected date
  };
  const handleBookingConfirm = (date, time) => {
    const newBooking = {
      hospital: selectedHospital,
      date,
      time,
    };
    setMyBookings((prev) => [...prev, newBooking]); // Add to bookings list
    closeModal();
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (hospitalDetails.length === 0)
    return <p>No hospitals found for the selected location.</p>;

  return (
    <div>
      <Slogan />
      <Navbar />
      <div
        style={{
          padding: "2rem",
          maxWidth: "1200px",
          margin: "0 auto",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            fontSize: "1.8rem",
            marginBottom: "1.5rem",
            color: "#333",
          }}
        >
          Hospitals in {city.toUpperCase()}, {state}
        </h2>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "1.5rem",
          }}
        >
          {hospitalDetails.map((hospital, index) => (
            <HospitalCard
              key={index}
              details={hospital}
              onBookVisit={() => handleBookingClick(hospital)}
            />
          ))}
        </div>
      </div>
      <Modal open={isModalOpen} onClose={closeModal}>
        <div
          style={{
            background: "#fff",
            margin: "5% auto",
            padding: "20px",
            borderRadius: "10px",
            maxWidth: "600px",
          }}
        >
          <h3 style={{ textAlign: "center" }}>Select a Date and Time</h3>
          <Calendar
            availableSlots={{
              morning: ["11:30 AM"],
              afternoon: [
                "12:00 PM",
                "12:30 PM",
                "01:30 PM",
                "02:00 PM",
                "02:30 PM",
              ],
              evening: ["06:00 PM", "06:30 PM", "07:00 PM", "07:30 PM"],
            }}
            selectedDate={selectedDate} // Pass selectedDate
            setSelectedDate={setSelectedDate} // Pass setter
            details={selectedHospital}
            handleBooking={(bookingDetails) =>
              setSelectedSlot(bookingDetails.bookingTime)
            }
          />
          {selectedSlot && (
            <Button
              variant="contained"
              color="primary"
              fullWidth
              onClick={() => handleBookingConfirm(selectedDate, selectedSlot)}
              style={{ marginTop: "1rem" }}
            >
              Book Now
            </Button>
          )}
        </div>
      </Modal>
      <div
        style={{
          padding: "2rem",
          maxWidth: "1200px",
          margin: "0 auto",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            fontSize: "1.8rem",
            marginBottom: "1.5rem",
            color: "#333",
          }}
        >
          My Bookings
        </h2>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          {myBookings.length === 0 ? (
            <p>No bookings yet.</p>
          ) : (
            myBookings.map((booking, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "1rem",
                  border: "1px solid #ddd",
                  borderRadius: "8px",
                  backgroundColor: "#f9f9f9",
                }}
              >
                <div>
                  <p style={{ margin: 0, fontWeight: "bold" }}>
                    {booking.hospital.name}
                  </p>
                  <p style={{ margin: 0, fontSize: "0.9rem", color: "#666" }}>
                    {booking.hospital.address}
                  </p>
                </div>
                <div>
                  <p style={{ margin: 0 }}>{booking.date}</p>
                  <p style={{ margin: 0 }}>{booking.time}</p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchResultsPage;
