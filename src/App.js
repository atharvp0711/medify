import React from "react";
import "./index.css";
import { Swiper, SwiperSlide } from "swiper/react"; // Swiper React Components
import "swiper/css"; // Core Swiper Styles
import "swiper/css/pagination"; // Pagination Dots
import "swiper/css/navigation";
import HomePage from "./Pages/HomePage/HomePage";
import offerImageOne from "./Assets/offerImageOne.png";
import offerImageTwo from "./Assets/offerImageTwo.png";
import Specialisation from "./Components/Specialisation/Specialisation";

import { Navigation, Pagination } from "swiper/modules";

const App = () => {
  return (
    <div>
      <HomePage />
      <main>
        <Swiper
          grabCursor={true} // Cursor changes when grabbing slides
          centeredSlides={false} // Center the active slide
          slidesPerView={3}
          navigation={true}
          loop={true}
          pagination={{ clickable: true }}
          modules={[Navigation, Pagination]}
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
          <SwiperSlide>
            <img src={offerImageTwo} alt="slide4" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={offerImageOne} alt="slide5" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={offerImageTwo} alt="slide6" />
          </SwiperSlide>
        </Swiper>
      </main>
      <Specialisation />
    </div>
  );
};

export default App;
