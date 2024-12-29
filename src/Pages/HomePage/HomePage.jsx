import React, { useState, useEffect } from "react";
import Hero from "../../Components/Hero/Hero";
import Slogan from "../../Components/Slogan/Slogan";
import styles from "./HomePage.module.css";
import CategoryCard from "../../Components/CategoryCard/CategoryCard";
import backendURL from "../../utils/constData";
import { FaUserDoctor } from "react-icons/fa6";
import { ImLab } from "react-icons/im";
import { FaRegHospital } from "react-icons/fa";
import { GiMedicines } from "react-icons/gi";
import { LiaAmbulanceSolid } from "react-icons/lia";
import Navbar from "../../Components/Navbar/Navbar";
import { useNavigate } from "react-router-dom";
import OfferSwiper from "../../Components/Swiper/OfferSwiper";
import Specialisation from "../../Components/Specialisation/Specialisation";

const HomePage = () => {
  const [stateOptions, setStateOptions] = useState([]);
  const [selectedState, setSelectedState] = useState("");

  const [cityOptions, setCityOptions] = useState([]);
  const [selectedCity, setSelectedCity] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${backendURL}/states`)
      .then((res) => res.json())
      .then((data) => setStateOptions(data))
      .catch((error) => console.error("Error receiving State Data :" + error));
  }, []);

  useEffect(() => {
    if (!selectedState) {
      return;
    } else {
      fetch(`${backendURL}/cities/${selectedState}`)
        .then((res) => res.json())
        .then((data) => setCityOptions(data))
        .catch((error) => console.error("Error receiving City Data :" + error));
    }
  }, [selectedState]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedState && selectedCity) {
      navigate(
        `/SearchResultsPage?state=${selectedState}&city=${selectedCity}`
      );
    } else {
      alert("Please select both state and city before searching.");
    } // if (selectedState && selectedCity) {
    //   navigate(`/data?state=${selectedState}&city=${selectedCity}`);
    // }
  };

  return (
    <div>
      <Slogan />
      <div className={styles.heroContainer}>
        <Navbar />
        <Hero />
        <div className={styles.overlay}>
          <div className={styles.searchSection}>
            <select
              name="state"
              id="state"
              value={selectedState}
              onChange={(e) => {
                setSelectedState(e.target.value);
                setCityOptions([]);
              }}
              style={{
                margin: "10px",
                padding: "5px",
                width: "200px",
              }}
            >
              <option value="" disabled>
                Select State
              </option>
              {stateOptions.map((state, index) => (
                <option value={state} key={index}>
                  {state}
                </option>
              ))}
            </select>
            <select
              name="city"
              id="city"
              value={selectedCity}
              onChange={(e) => {
                setSelectedCity(e.target.value);
              }}
              disabled={!selectedState}
              style={{
                margin: "10px",
                padding: "5px",
                width: "200px",
              }}
            >
              <option value="" disabled>
                Select City
              </option>
              {cityOptions.map((city, index) => (
                <option value={city} key={index}>
                  {city}
                </option>
              ))}
            </select>
            <button
              type="submit"
              onClick={handleSubmit}
              // startIcon={<SearchIcon />}
            >
              Search
            </button>
          </div>
          <div className={styles.categorySection}>
            <h3> You may be looking for</h3>
            <div className={styles.categories}>
              <CategoryCard icon={FaUserDoctor} title="Doctors" size="50" />
              <CategoryCard icon={ImLab} title="Labs" size="50" />
              <CategoryCard icon={FaRegHospital} title="Hospitals" size="50" />
              <CategoryCard
                icon={GiMedicines}
                title="Medical Store"
                size="50"
              />
              <CategoryCard
                icon={LiaAmbulanceSolid}
                title="Ambulance"
                size="50"
                color="#2aa8ff"
              />
            </div>
          </div>
        </div>
      </div>
      {/* <div>
        <OfferSwiper />
      </div> */}
      <OfferSwiper />
      <Specialisation />
    </div>
  );
};

export default HomePage;
