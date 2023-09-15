import React from "react";

const Footer = () => {
  return (
    <div
      className="bg-[#09b1a5] mx-auto rounded-3xl lg:h-80  flex container lg:min-h-[400px] min-h-[520px] mt-20 font-fredoka  font-semibold
    "
    >
      <div className="items-center justify-between mx-auto my-20">
        {" "}
        <div className="lg:text-[60px] text-5xl font-extrabold text-white text-center mx-10">
          Join Our Newsletter
        </div>
        <div className="text-center text-lg mt-10 mb-10 text-white">
          Subscribe our newsletter to get our latest update & news.
        </div>
        <div className="relative">
          <input
            type="text"
            placeholder="your mail"
            className="w-full h-[72px] outline-none
           absolute
            px-4 py-2 border rounded-3xl "
          />
          <button
            className="
          bg-orange-400
          absolute lg:right-[2px] lg:top-0 w-full lg:w-1/4 
          sm:right-0 
          translate-y-20 duration-1000
          lg:-translate-y-0 
          rounded-3xl h-[70px] hover:bg-[#1dd1c5] "
          >
            <span>
              <i className="fa-solid fa-location-arrow text-xl text-white"></i>
            </span>
            <span className="ml-0 md:ml-2  font-normal text-white">Subscribe Now</span>
          </button>
        </div>
      </div>
    </div>
  );
};
// mt-[65px]
export default Footer;
