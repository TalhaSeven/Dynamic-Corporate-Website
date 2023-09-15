import React, { useState } from "react";

import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const HomeSlider2 = () => {
  const homeSlides = [
    {
      url: "https://images.unsplash.com/photo-1507537509458-b8312d35a233?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      span: "Kindergarten Program",
      h1: "Best Children's Education",
      button: "Admission Open 22-23",
    },

    {
      url: "https://images.unsplash.com/photo-1473492201326-7c01dd2e596b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
      span: "Nursery Program",
      h1: "Best Nursery Education",
      button: "Admission Open 22-23",
    },
    {
      url: "https://images.unsplash.com/photo-1529007196863-d07650a3f0ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      span: "Kindergarten Program",
      h1: "Best Junior KG Education",
      button: "Admission Open 22-23",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? homeSlides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const nextSlide = () => {
    const isLastSlide = currentIndex === homeSlides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="m-0 p-0 box-border  h-[450px] sm:h-[600px] lg:h-[700px] xl:h-[750px] 2xl:h-[820px] w-full  relative">
      {/* useStage  */}

      <div
        style={{ backgroundImage: `url(${homeSlides[currentIndex].url})` }}
        className="w-full h-full bg-right bg-cover duration-300"
      ></div>

      {/* linear gradient  */}

      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black via-black to-transparent opacity-70"></div>

      {/* content map started */}

      <div className="absolute  top-[50%] -translate-x-0 translate-y-[-50%] text-center sm:text-left sm:w-[80%] sm:ms-[15%] text-white">
        <span className="text-[18px] sm:text-[20px] xl:text-[30px] font-semibold">
          {homeSlides[currentIndex].span}
        </span>
        <h1 className="w-[70%] m-auto sm:m-0 text-[40px] sm:text-[50px]  md:text-[60px] lg:text-[70px] xl:text-[90px] 2xl:text-[110px] font-semibold mt-3">
          {homeSlides[currentIndex].h1}
        </h1>
        <button className="bg-[#ff9b24] xl:text-[20px] font-semibold hover:bg-blue-500  transition duration-300 ease-in-out rounded-full px-5 py-3 mt-10">
          {homeSlides[currentIndex].button}
        </button>
      </div>

      {/* content map finished */}

      {/* arrows started */}

      <div className="absolute top-[50%] -translate-x-0 translate-y-[-50%]  right-14 lg:right-30 text-2xl   text-white ">
        {/* left arrow */}
        <div className="mb-10 hidden md:block hover:bg-white hover:text-black transition duration-300 ease-in-out rounded-full p-5 border cursor-pointer">
          <AiOutlineLeft onClick={prevSlide} size={20} />
        </div>

        {/* right arrow */}
        <div className=" hidden md:block rounded-full hover:bg-white hover:text-black transition duration-300 ease-in-out p-5 border cursor-pointer">
          <AiOutlineRight onClick={nextSlide} size={20} />
        </div>
      </div>

      {/* arrows finished */}
    </div>
  );
};

export default HomeSlider2;
