// Initialization for ES Users

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "./Settling.css";
import "swiper/css";

import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Settling = ({ item }) => {
  const data = item?.data;
  const { content1 } = item?.data;
  const { images } = item?.data;

 

  const parser = new DOMParser();
  const cleanHtml = parser.parseFromString(content1, "text/html").body
    .textContent;
  const dangerouslyHtml = { __html: cleanHtml };

  return (
    <div className="lg:container">
      <div className="p-8 lg:p-25 font-fredoka ">

        <div className="grid  grid-cols-1 xl:grid-cols-2   gap-5 ">
          <div className="w-full  relative overflow-hidden rounded-3xl">
            <div className="carousel relative rounded-3xl w-full overflow-hidden h-full">
              <Swiper
                modules={[Navigation]}
                spaceBetween={50}
                slidesPerView={1}
                autoHeight={true}
                navigation
                loop={true}
               className="swiperSettling"
              >
                {images.length > 0 && images?.map((image, index) => {
                  return (
                    <SwiperSlide
                      key={index}
                      className="swiperSlideSettling w-full h-full"
                    >
                      <img
                        src={image}
                        alt={`Slide ${index}`}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>


          <div className="  bg-[#FFF6EB]  flex flex-col  space-y-6 lg:space-y-10 rounded-3xl p-8 w-full h-full">
            <h3 className="settlingh3 text-3xl sm:text-[45px] font-semibold py-1  ">
              {data.title1}
            </h3>
            <div
              className="settlingContent"
              dangerouslySetInnerHTML={dangerouslyHtml}
            ></div>
          </div>
            <div className="settlingWrapper flex  items-center justify-center xs:justify-evenly  -ms-2 xl:justify-between  flex-wrap xs:mt-2  md:mt-4">
              <div className="settlingTeacher flex  items-start  space-x-2   pe-2 ">
                <div className="flex ">
                  <img
                    src="image/author-1.png"
                    alt="img not found!"
                    className="imgCircle w-[73px] h-[73px]"
                  />
                  <div className="flex flex-col  justify-center">
                    <span className="text-light text-sm md:text-base whitespace-nowrap ">
                      Settling Teacher
                    </span>
                    <span className="text-xl font-semibold whitespace-nowrap">
                      {data.teacher}
                    </span>
                  </div>
                </div>
              </div>
              <div className="settlingBorder flex flex-col  items-center justify-center px-5 lg:px-8 space-x-2 text-center h-[50px]    ">
                <span className="text-sm md:text-base whitespace-nowrap ">
                  Categories
                </span>
                <span className="text-xl font-semibold whitespace-nowrap">
                  Kindergarten
                </span>
              </div>
              <div className="perMonth flex flex-col items-center space-x-2 text-center ps-2">
                <span className="text-sm md:text-base whitespace-nowrap  ">
                  Per/Month
                </span>
                <span className="text-xl font-semibold whitespace-nowrap">
                  {data.amout}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settling;
