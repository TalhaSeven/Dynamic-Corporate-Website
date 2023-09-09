import { Link } from "react-router-dom";
import "./Slider2.css";
import { Carousel, initTE } from "tw-elements";
import { useEffect } from "react";

const Slider2 = () => {
  useEffect(() => {
    initTE(Carousel);
  }, []);

  return (
    <div
      id="carouselExampleIndicators"
      className="relative sliderContainer"
      data-te-carousel-init=""
      data-te-ride="carousel"
    >
      {/*Carousel items*/}
      <div className="carousel-items relative w-full  overflow-hidden after:clear-both after:block after:content-[''] ">
        {/*First item*/}
        <div
          className="items firstItem relative float-left -mr-[100%] w-full h-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          data-te-carousel-item=""
          data-te-carousel-active=""
        >
          <div className="content content1">
            <span>Kindergarten Program</span>
            <h1>Best Children's Education</h1>
            <div>
              <Link to="#">Admission Open 22-23</Link>
            </div>
          </div>
          <img
            src="{slider3}"
            className="img1 block w-full h-full display"
            alt="slider3"
          />
        </div>
        {/*Second item*/}
        <div
          className="items secondItem  relative float-left -mr-[100%] hidden w-full h-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          data-te-carousel-item=""
        >
          <div className="content content3">
            <span>Nursery Program</span>
            <h1>Best Nursery Education</h1>
            <div>
              <Link to="#">Admission Open 22-23</Link>
            </div>
          </div>

          <img
            src="{slider2}"
            className="img2 block w-full h-full"
            alt="slider2"
          />
        </div>
        {/*Third item*/}
        <div
          className="items thirdItem  relative float-left -mr-[100%] hidden w-full h-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          data-te-carousel-item=""
        >
          <div className="content content2">
            <span>Kindergarten Program</span>
            <h1>Best Junior KG Education</h1>
            <div>
              <Link to="#">Admission Open 22-23</Link>
            </div>
          </div>

          <img
            src="{slider1}"
            className="img2 block w-full h-full"
            alt="slider1"
          />
        </div>
      </div>
      {/*Carousel controls - prev item*/}
      <div className="buttons">
        <button
          className="rounded-full text-xlg font-bold  z-[1] flex items-center justify-center border border-white border-solid bg-none p-0
   text-center text-white  transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] 
   hover:text-black hover:bg-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline 
   focus:opacity-90 focus:outline-none motion-reduce:transition-none"
          type="button"
          data-te-target="#carouselExampleIndicators"
          data-te-slide="prev"
        >
          <span className="flex items-center justify-center h-8 w-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-6 w-6  p-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </span>
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Previous
          </span>
        </button>
        {/*Carousel controls - next item*/}
        <button
          className=" rounded-full  z-[1] flex items-center justify-center border border-white border-solid 
  bg-none p-0 text-center text-white  transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] 
  hover:text-black hover:bg-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline 
  focus:opacity-90 focus:outline-none motion-reduce:transition-none"
          type="button"
          data-te-target="#carouselExampleIndicators"
          data-te-slide="next"
        >
          <span className="flex items-center justify-center h-8 w-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-6 w-6 p-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </span>
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Next
          </span>
        </button>
      </div>
    </div>
  );
};

export default Slider2;
