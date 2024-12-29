import React from "react";
import { Swiper, SwiperSlide } from "swiper/react"; // Swiper React Components
import offerImageOne from "../../Assets/offerImageOne.png";
import offerImageTwo from "../../Assets/offerImageTwo.png";
import "./OfferSwiper.module.css";

import { Navigation, Pagination } from "swiper/modules";

const OfferSwiper = () => {
  return (
    <div>
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
    </div>
  );
};

export default OfferSwiper;
