import React from "react";
import HomePage from "./Pages/HomePage/HomePage";
import "./index.css";
import { Swiper, SwiperSlide } from "swiper/react"; // Swiper React Components
import "swiper/css"; // Core Swiper Styles
import "swiper/css/pagination"; // Pagination Dots
import offerImageOne from "./Assets/offerImageOne.png";
import offerImageTwo from "./Assets/offerImageTwo.png";

import { Pagination } from "swiper/modules";

const App = () => {
  return (
    <div>
      <HomePage />
      <main>
        <Swiper
          grabCursor={true} // Cursor changes when grabbing slides
          // centeredSlides={false} // Center the active slide
          slidesPerView={3}
          loop={true}
          pagination={{ clickable: true }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {/* Slides */}
          <SwiperSlide>
            <img src={offerImageOne} alt="slide1" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={offerImageTwo} alt="slide2" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={offerImageOne} alt="slide3" />
          </SwiperSlide>
        </Swiper>
      </main>
    </div>
  );
};

export default App;
