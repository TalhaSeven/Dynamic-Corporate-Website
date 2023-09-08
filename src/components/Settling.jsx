// Initialization for ES Users
import { useEffect } from "react";
import { Carousel, initTE } from "tw-elements";

const Settling = () => {
  useEffect(() => {
    initTE({ Carousel });
  }, []);

  return (
    <div className="p-8 lg:p-30 font-fredoka">
      <div className="flex flex-col space-y-5 lg:space-y-0  lg:flex-row lg:space-x-5 container  ">
        <div className=" basis-1/2 h-full w-full">
          <div
            id="carouselExampleCaptions"
            className="relative rounded-lg "
            data-te-carousel-init=""
            data-te-ride="carousel"
          >
            {/*Carousel indicators*/}

            {/*Carousel items*/}
            <div className="itemsSlide relative w-full  overflow-hidden after:clear-both after:block after:content-[''] rounded-3xl">
              {/*First item*/}
              <div
                className="relative float-left -mr-[100%] h-full w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none "
                data-te-carousel-active=""
                data-te-carousel-item=""
                style={{ backfaceVisibility: "hidden" }}
              >
                <img
                  src="./image/home-program-1.jpg"
                  className="block  w-full  max-h-[400px]  md:max-h-[440px] lg:h-[496px] object-cover "
                  alt="img"
                />
                <div className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block"></div>
              </div>
              {/*Second item*/}
              <div
                className="relative float-left -mr-[100%] hidden h-full w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                data-te-carousel-item=""
                style={{ backfaceVisibility: "hidden" }}
              >
                <img
                  src="./image/home-program-2.jpg"
                  className="block w-full  object-cover max-h-[400px] md:max-h-[440px]  lg:h-[496px]"
                  alt="..."
                />
              </div>
              {/*Third item*/}
              <div
                className="relative float-left -mr-[100%] h-full hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                data-te-carousel-item=""
                style={{ backfaceVisibility: "hidden" }}
              >
                <img
                  src="./image/home-program-3.jpg"
                  className="block w-full  object-cover max-h-[400px]  md:max-h-[440px] lg:h-[496px]"
                  alt="..."
                />
              </div>
            </div>
            {/*Carousel controls - prev item*/}
            <button
              className="absolute bottom-0 left-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white  transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none hover:bg-transparent"
              type="button"
              data-te-target="#carouselExampleCaptions"
              data-te-slide="prev"
            >
              <span className="btnInline inline-block">
                <div className="h-6 w-6 sm:h-8 sm:w-8 rounded-full border-2 flex text-white items-center justify-center hover:bg-white hover:text-black">
                  <i className="fa-solid fa-chevron-left"></i>
                </div>
              </span>
              <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                Previous
              </span>
            </button>
            {/*Carousel controls - next item*/}
            <button
              className="absolute bottom-0 right-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90  hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none hover:bg-transparent"
              type="button"
              data-te-target="#carouselExampleCaptions"
              data-te-slide="next"
            >
              <span className="btnInline inline-block">
                <div className="h-6 w-6 sm:h-8 sm:w-8 rounded-full border-2 flex items-center justify-center hover:bg-white hover:text-black">
                  <i className="fa-solid fa-chevron-right"></i>
                </div>
              </span>
              <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                Next
              </span>
            </button>
          </div>
        </div>
        <div className=" basis-1/2 bg-[#FFF6EB]  flex flex-col justify-between rounded-3xl p-5 min-h-[400px] md:max-h-[440px] lg:h-[496px]">
          <h3 className="text-4xl font-semibold pt-2">Settling</h3>
          <p className="font-normal lg:font-light text-[15px] lg:min-h-[80px] py-2 lg:py-0">
            The foundation of the Montessori philosophy is based upon the idea
            that children should work at their own pace, according to their own
            strengths in surroundings that help to develop their intelligence,
            as well as social and physical abilities.
          </p>
          <p className="font-normal lg:font-light text-[15px] lg:min-h-[60px]">
            Observers of Montessori children note that they are confident,
            caring, independent as well as enthusiastic and motivated learners
            what they learn years comes from perceptive.
          </p>

          <div className="flex  items-center justify-center xs:justify-start xl:justify-between  flex-wrap xs:mt-2  md:mt-0">
            <div className="settlingTeacher flex  items-start  space-x-2   pe-3 ">
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
                  <span className="text-xl font-semibold whitespace-nowrap">Alexia Honix</span>
                </div>
              </div>
            </div>
            <div className="settlingBorder flex flex-col  items-center justify-center px-3 space-x-2 text-center h-[50px]    ">
              <span className="text-sm md:text-base whitespace-nowrap ">
                Categories
              </span>
              <span className="text-xl font-semibold whitespace-nowrap">Kindergarten</span>
            </div>
            <div className="perMonth flex flex-col items-center space-x-2 text-center ps-2">
              <span className="text-sm md:text-base whitespace-nowrap  ">
                Per/Month
              </span>
              <span className="text-xl font-semibold whitespace-nowrap">$160.00</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settling;
