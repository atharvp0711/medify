import React from "react";
import "./index.css";
import "swiper/css"; // Core Swiper Styles
import "swiper/css/pagination"; // Pagination Dots
import "swiper/css/navigation";
import HomePage from "./Pages/HomePage/HomePage";

import Specialisation from "./Components/Specialisation/Specialisation";

import { Route, Routes } from "react-router-dom";
import SearchResultsPage from "./Pages/SearchResultsPage/SearchResultsPage";
import OfferSwiper from "./Components/Swiper/OfferSwiper";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/SearchResultsPage" element={<SearchResultsPage />} />
      </Routes>
      <div>
        {/* <HomePage />
        <OfferSwiper />
        <Specialisation /> */}
      </div>
    </>
  );
};

export default App;
