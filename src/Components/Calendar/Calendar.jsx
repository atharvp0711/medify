import DaySelector from "./DaySelector/DaySelector";
import { Box, Typography } from "@mui/material";
import { useState } from "react";
import { startOfDay } from "date-fns";
import TimeSlotPicker from "./TimeSlotPicker/TimeSlotPicker";
import PropTypes from "prop-types";

export default function Calendar({
  availableSlots = {},
  details = {},
  handleBooking = () => {},
}) {
  const [selectedDate, setSelectedDate] = useState(startOfDay(new Date()));

  const slots = {
    morning: availableSlots.morning || [],
    afternoon: availableSlots.afternoon || [],
    evening: availableSlots.evening || [],
  };

  const totalSlots =
    availableSlots.morning.length +
    availableSlots.afternoon.length +
    availableSlots.evening.length;

  return (
    <Box>
      <DaySelector
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
        totalSlots={totalSlots}
      />
      {totalSlots > 0 ? (
        <TimeSlotPicker
          availableSlots={slots}
          selectedDate={selectedDate}
          details={details}
          handleBooking={handleBooking}
        />
      ) : (
        <Typography textAlign="center" color="text.secondary" mt={3}>
          No slots available for the selected date.
        </Typography>
      )}
    </Box>
  );
}
// Prop type validation
Calendar.propTypes = {
  availableSlots: PropTypes.shape({
    morning: PropTypes.arrayOf(PropTypes.string),
    afternoon: PropTypes.arrayOf(PropTypes.string),
    evening: PropTypes.arrayOf(PropTypes.string),
  }),
  details: PropTypes.object,
  handleBooking: PropTypes.func,
};
