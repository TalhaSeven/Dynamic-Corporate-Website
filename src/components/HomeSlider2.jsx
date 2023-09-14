import axios from "axios";
import React, { useEffect, useState } from "react";

import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const HomeSlider2 = () => {
  const [sliderData, setSliderData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          "https://fuatmercan.com/kids/api/v1/page.php?slug=index&lang=en&token=frpQ8/CDUfTsNoUUkbL0121PkOOjWJ1eDOfkQd3lWz3n/ZY/zu28pvFTW34u7M8CTKAdaQeWkT42n1rMsw==588cb53f476e2e13cde27315433d124c"
        );

        // console.log(data);
        const filteredData = await data.filter(
          (item) => item.modulName === "slider"
        );

        if (filteredData) {
          setSliderData(filteredData[0].data);
        }

        // console.log(filteredData[0].data);
      } catch (error) {
        console.error("Veri çekme hatası:", error);
      }
    };

    fetchData();
  }, []);

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? sliderData.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const nextSlide = () => {
    const isLastSlide = currentIndex === sliderData.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div>
      {sliderData.map((slide, index) => (
        <div
          key={index}
          className="m-0 p-0 box-border  h-[450px] sm:h-[600px] lg:h-[700px] xl:h-[750px] 2xl:h-[820px] w-full  relative"
        >
          <div
            style={{ backgroundImage: `url(${slide.image})` }}
            className="w-full h-full bg-right bg-cover duration-300"
          >
            <div className="absolute  top-[50%] -translate-x-0 translate-y-[-50%] text-center sm:text-left sm:w-[80%] sm:ms-[15%] text-white">
              <span className="text-[18px] sm:text-[20px] xl:text-[30px] font-semibold">
                {slide.title1}
              </span>
              <h1 className="w-[70%] m-auto sm:m-0 text-[40px] sm:text-[50px]  md:text-[60px] lg:text-[70px] xl:text-[90px] 2xl:text-[110px] font-semibold mt-3">
                {slide.title2}
              </h1>
              <button className="bg-[#ff9b24] xl:text-[20px] font-semibold hover:bg-blue-500  transition duration-300 ease-in-out rounded-full px-5 py-3 mt-10">
                {slide.button}
              </button>
            </div>
          </div>

          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black via-black to-transparent opacity-70"></div>

          <div className="absolute top-[50%] -translate-x-0 translate-y-[-50%]  right-14 lg:right-30 text-2xl   text-white ">
            <div className="mb-10 hidden md:block hover:bg-white hover:text-black transition duration-300 ease-in-out rounded-full p-5 border cursor-pointer">
              <AiOutlineLeft onClick={prevSlide} size={20} />
            </div>

            <div className=" hidden md:block rounded-full hover:bg-white hover:text-black transition duration-300 ease-in-out p-5 border cursor-pointer">
              <AiOutlineRight onClick={nextSlide} size={20} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HomeSlider2;
