import React, {  useEffect } from "react";
import "./Slider2.css";
import { Carousel, initTE } from "tw-elements";
import { Link } from "react-router-dom";
// import { NavLink } from "react-router-dom";
// import { Link } from "react-router-dom";


const Slider2 = () => {
 useEffect(() => {
initTE({ Carousel });
  
 }, [])
 
  return (
    // <div
    //   id="carouselExampleIndicators"
    //   class="relative sliderContainer"
    //   data-te-carousel-init
    //   data-te-ride="carousel"
    // >
    //   {/* <!--Carousel indicators--> */}
    //   {/* <div
    //     class="absolute bottom-0 left-0 right-0 z-[2] mx-[15%] mb-4 flex list-none justify-center p-0"
    //     data-te-carousel-indicators
    //   >
    //     <button
    //       type="button"
    //       data-te-target="#carouselExampleIndicators"
    //       data-te-slide-to="0"
    //       data-te-carousel-active
    //       class="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
    //       aria-current="true"
    //       aria-label="Slide 1"
    //     ></button>
    //     <button
    //       type="button"
    //       data-te-target="#carouselExampleIndicators"
    //       data-te-slide-to="1"
    //       class="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
    //       aria-label="Slide 2"
    //     ></button>
    //     <button
    //       type="button"
    //       data-te-target="#carouselExampleIndicators"
    //       data-te-slide-to="2"
    //       class="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
    //       aria-label="Slide 3"
    //     ></button>
    //   </div> */}

    //   {/* <!--Carousel items--> */}
    //   <div class="carousel-items relative w-full  overflow-hidden after:clear-both after:block after:content-[''] ">
    //     {/* <!--First item--> */}
    //     <div
    //       class="items firstItem relative float-left -mr-[100%] w-full h-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
    //       data-te-carousel-item
    //       data-te-carousel-active
    //     >
    //       <div class="content content1">
    //         <span>Kindergarten Program</span>
    //         <h1>Best Children's Education</h1>
    //         <div>
    //           <a href="#">Admission Open 22-23</a>
    //         </div>
    //       </div>
    //     </div>
    //     {/* <!--Second item--> */}
    //     <div
    //       class="items secondItem  relative float-left -mr-[100%] hidden w-full h-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
    //       data-te-carousel-item
    //     >
    //       <div class="content content3">
    //         <span>Nursery Program</span>
    //         <h1>Best Nursery Education</h1>
    //         <div>
    //           <a href="#">Admission Open 22-23</a>
    //         </div>
    //       </div>
    //     </div>

    //     {/* <!--Third item--> */}
    //     <div
    //       class="items thirdItem  relative float-left -mr-[100%] hidden w-full h-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
    //       data-te-carousel-item
    //     >
    //       <div class="content content2">
    //         <span>Kindergarten Program</span>
    //         <h1>Best Junior KG Education</h1>
    //         <div>
    //           <a href="#">Admission Open 22-23</a>
    //         </div>
    //       </div>
    //     </div>
    //   </div>

    //   {/* <!--Carousel controls - prev item--> */}

    //   <div class="buttons">
    //     <button
    //       class="rounded-full text-xlg font-bold  z-[1] flex items-center justify-center border border-white border-solid bg-none p-0
    //      text-center text-white  transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] 
    //      hover:text-black hover:bg-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline 
    //      focus:opacity-90 focus:outline-none motion-reduce:transition-none"
    //       type="button"
    //       data-te-target="#carouselExampleIndicators"
    //       data-te-slide="prev"
    //     >
    //       <span class="flex items-center justify-center h-8 w-8">
    //         <svg
    //           xmlns="http://www.w3.org/2000/svg"
    //           fill="none"
    //           viewBox="0 0 24 24"
    //           stroke-width="1.5"
    //           stroke="currentColor"
    //           class="h-6 w-6"
    //         >
    //           <path
    //             stroke-linecap="round"
    //             stroke-linejoin="round"
    //             d="M15.75 19.5L8.25 12l7.5-7.5"
    //           />
    //         </svg>
    //       </span>
    //       <span class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
    //         Previous
    //       </span>
    //     </button>
    //     {/* <!--Carousel controls - next item--> */}
    //     <button
    //       class=" rounded-full  z-[1] flex items-center justify-center border border-white border-solid 
    //     bg-none p-0 text-center text-white  transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] 
    //     hover:text-black hover:bg-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline 
    //     focus:opacity-90 focus:outline-none motion-reduce:transition-none"
    //       type="button"
    //       data-te-target="#carouselExampleIndicators"
    //       data-te-slide="next"
    //     >
    //       <span class="flex items-center justify-center h-8 w-8">
    //         <svg
    //           xmlns="http://www.w3.org/2000/svg"
    //           fill="none"
    //           viewBox="0 0 24 24"
    //           stroke-width="1.5"
    //           stroke="currentColor"
    //           class="h-6 w-6"
    //         >
    //           <path
    //             stroke-linecap="round"
    //             stroke-linejoin="round"
    //             d="M8.25 4.5l7.5 7.5-7.5 7.5"
    //           />
    //         </svg>
    //       </span>
    //       <span class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
    //         Next
    //       </span>
    //     </button>
    //   </div>
    // </div>

/* jsx formati */

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
          className="h-6 w-6"
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
          className="h-6 w-6"
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
