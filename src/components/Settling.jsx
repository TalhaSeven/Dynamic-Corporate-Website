// Initialization for ES Users
import { useEffect } from "react";
import { Carousel, initTE } from "tw-elements";

const Settling = () => {
  useEffect(() => {
    initTE({ Carousel });
  }, []);

  return (
    <div className="py-10  font-fredoka">
      <div className="flex space-x-5 container">
        <div className=" carouselDiv basis-1/2">
          <div
            id="carouselExampleCaptions"
            className="relative rounded-lg"
            data-te-carousel-init=""
            data-te-ride="carousel"
          >
            {/*Carousel indicators*/}

            {/*Carousel items*/}
            <div className="relative w-full overflow-hidden after:clear-both after:block after:content-[''] rounded-3xl">
              {/*First item*/}
              <div
                className="relative float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                data-te-carousel-active=""
                data-te-carousel-item=""
                style={{ backfaceVisibility: "hidden" }}
              >
                <img
                  src="./image/home-program-1.jpg"
                  className="block h-full w-full "
                  alt="..."
                />
                <div className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block"></div>
              </div>
              {/*Second item*/}
              <div
                className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                data-te-carousel-item=""
                style={{ backfaceVisibility: "hidden" }}
              >
                <img
                  src="./image/home-program-2.jpg"
                  className="block w-full h-full"
                  alt="..."
                />
              </div>
              {/*Third item*/}
              <div
                className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                data-te-carousel-item=""
                style={{ backfaceVisibility: "hidden" }}
              >
                <img
                  src="./image/home-program-3.jpg"
                  className="block w-full h-full"
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
              <span className="inline-block">
                <div className="h-8 w-8 rounded-full border-2 flex text-white items-center justify-center hover:bg-white hover:text-black">
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
              <span className="inline-block">
                <div className="h-8 w-8 rounded-full border-2 flex items-center justify-center hover:bg-white hover:text-black">
                  <i className="fa-solid fa-chevron-right"></i>
                </div>
              </span>
              <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                Next
              </span>
            </button>
          </div>
        </div>
        <div className="flex flex-col settlingDiv basis-1/2 bg-[#FFF6EB] p-5 justify-between rounded-3xl">
          <h3 className="text-3xl font-semibold">Settling</h3>
          <p className="font-light text-[15px]">
            The foundation of the Montessori philosophy is based upon the idea
            that children should work at their own pace, according to their own
            strengths in surroundings that help to develop their intelligence,
            as well as social and physical abilities.
          </p>
          <p className="font-light text-[15px]">
            Observers of Montessori children note that they are confident,
            caring, independent as well as enthusiastic and motivated learners
            what they learn years comes from perceptive.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center   p-3 divide-x-2 divide-solid divide-[#FF9B24]">
            <div className="flex sm:flex-col items-start justify-center  space-x-2  basis-1/2 ">
              <div className="flex ">
                <img
                  src="image/author-1.png"
                  alt="img not found!"
                  className="w-[73px] h-[73px]"
                />
                <div className="flex flex-col items-center justify-center">
                  <span className="text-light text-sm md:text-base whitespace-nowrap">
                    Settling Teacher
                  </span>
                  <span className="text-xl font-semibold">Alexia Honix</span>
                </div>
              </div>
            </div>
            <div className="flex sm:flex-col items-center space-x-2 text-center basis-1/4 px-3">
              <span className="text-sm md:text-base whitespace-nowrap">
                Categories
              </span>
              <span className="text-xl font-semibold">Kindergarten</span>
            </div>
            <div className="flex sm:flex-col items-center space-x-2 text-center basis-1/4">
              <span className="text-sm md:text-base whitespace-nowrap ">
                Per/Month
              </span>
              <span className="text-xl font-semibold">$160.00</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settling;
