import React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import { Typography, Grid } from "@mui/material";
// import Grid from "@mui/material/Grid2";
import CategoryCard from "../../Components/CategoryCard/CategoryCard";
import specialisationsData from "../../utils/specialisationsData";

import "./Specialisation.module.css";

const Specialisation = () => {
  const [visibleCount, setVisibleCount] = useState(8);

  const handleViewAll = () => {
    setVisibleCount(specialisationsData.length);
  };

  const handleHide = () => {
    setVisibleCount(8);
  };
  return (
    <>
      <Box
        sx={{
          background: "linear-gradient(#E7F0FF , #E8F1FF78)",
        }}
      >
        <Box mt={5} p={10}>
          <Typography variant="h3" component="h2" align="center" mb={4}>
            Find By Specialisation
          </Typography>
        </Box>
        <Box
          sx={{
            width: "80%",
            margin: "0 auto",
          }}
        >
          <Grid container spacing={3} justifyContent="center">
            {specialisationsData.slice(0, visibleCount).map((item) => (
              <Grid item xs={12} sm={6} md={3} key={item.id}>
                <CategoryCard
                  icon={item.icon}
                  title={item.title}
                  size={50}
                  color="#2aa8ff"
                />
              </Grid>
            ))}
          </Grid>
        </Box>

        <Box textAlign="center" mt={4}>
          {visibleCount < specialisationsData.length ? (
            <button
              onClick={handleViewAll}
              style={{
                backgroundColor: "#2aa8ff",
                color: "#fff",
                padding: "10px 20px",
                borderRadius: "8px",
                border: "none",
                cursor: "pointer",
                fontSize: "16px",
              }}
            >
              View All
            </button>
          ) : (
            <button
              onClick={handleHide}
              style={{
                backgroundColor: "#2aa8ff",
                color: "#fff",
                padding: "10px 20px",
                borderRadius: "8px",
                border: "none",
                cursor: "pointer",
                fontSize: "16px",
              }}
            >
              Hide
            </button>
          )}
        </Box>
      </Box>
    </>
  );
};

export default Specialisation;
