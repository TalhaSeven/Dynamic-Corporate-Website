import React from "react";
import "./OurTeachers.css";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import './styles.css';

// import required modules
import { Pagination } from "swiper/modules";
import cecelia from "./../components/ourTeachers/cecelia.webp";
import emmy from "./../components/ourTeachers/emmy.webp";
import frances from "./../components/ourTeachers/frances.webp";
import olinda from "./../components/ourTeachers/olinda.webp";

const OurTeachers = () => {
  return (
    <div className="swiperParentDiv">
      <div className="swiperHeader">
        <h1>Our Best Teachers</h1>
        <p>
          With the help of teachers and the environment as the third teacher,
          students have opportunities to confidently take risks.
        </p>
      </div>

      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          576: {
            slidesPerView: 2,
            spaceBetween: 10,
          },

          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1200: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
        modules={[Pagination]}
        className="ourTeacherSwiper"
      >
        <SwiperSlide className="ourTeacherSlide">
          <img src={emmy} alt="emmy" />
          <div className="slideContent">
            <div className="contentName">
              <span>Emmy Jonas</span>
            </div>
            <div className="contentJob">
              <span>Teacher</span>
            </div>

            <div className="slideSocialIcons">
              <i className="fa-brands fa-facebook-f"></i>
              <i className="fa-brands fa-twitter"></i>
              <i className="fa-brands fa-instagram"></i>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="ourTeacherSlide">
          <img src={frances} alt="frances" />
          <div className="slideContent">
            <div className="contentName">
              <span>Frances R.</span>
            </div>
            <div className="contentJob">
              <span>Teacher</span>
            </div>

            <div className="slideSocialIcons">
              <i className="fa-brands fa-facebook-f"></i>
              <i className="fa-brands fa-twitter"></i>
              <i className="fa-brands fa-instagram"></i>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="ourTeacherSlide">
          <img src={cecelia} alt="cecelia" />
          <div className="slideContent">
            <div className="contentName">
              <span>Cecelia D.</span>
            </div>
            <div className="contentJob">
              <span>Teacher</span>
            </div>

            <div className="slideSocialIcons">
              <i className="fa-brands fa-facebook-f"></i>
              <i className="fa-brands fa-twitter"></i>
              <i className="fa-brands fa-instagram"></i>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="ourTeacherSlide">
          <img src={olinda} alt="olinda" />
          <div className="slideContent">
            <div className="contentName">
              <span>Olinda L.</span>
            </div>
            <div className="contentJob">
              <span>Teacher</span>
            </div>

            <div className="slideSocialIcons">
              <i className="fa-brands fa-facebook-f"></i>
              <i className="fa-brands fa-twitter"></i>
              <i className="fa-brands fa-instagram"></i>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="ourTeacherSlide">
          <img src={emmy} alt="emmy" />
          <div className="slideContent">
            <div className="contentName">
              <span>Emmy Jonas</span>
            </div>
            <div className="contentJob">
              <span>Teacher</span>
            </div>

            <div className="slideSocialIcons">
              <i className="fa-brands fa-facebook-f"></i>
              <i className="fa-brands fa-twitter"></i>
              <i className="fa-brands fa-instagram"></i>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="ourTeacherSlide">
          <img src={frances} alt="frances" />
          <div className="slideContent">
            <div className="contentName">
              <span>Frances R.</span>
            </div>
            <div className="contentJob">
              <span>Teacher</span>
            </div>

            <div className="slideSocialIcons">
              <i className="fa-brands fa-facebook-f"></i>
              <i className="fa-brands fa-twitter"></i>
              <i className="fa-brands fa-instagram"></i>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="ourTeacherSlide">
          <img src={cecelia} alt="cecelia" />
          <div className="slideContent">
            <div className="contentName">
              <span>Cecelia D.</span>
            </div>
            <div className="contentJob">
              <span>Teacher</span>
            </div>

            <div className="slideSocialIcons">
              <i className="fa-brands fa-facebook-f"></i>
              <i className="fa-brands fa-twitter"></i>
              <i className="fa-brands fa-instagram"></i>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default OurTeachers;
