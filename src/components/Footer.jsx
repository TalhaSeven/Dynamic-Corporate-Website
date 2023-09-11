import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#09b1a5] mx-auto  w-9/12 rounded-3xl h-96 flex ">
      <div className="items-center justify-between mx-auto my-auto w-8/12">
        {" "}
        <div className="text-[60px] font-extrabold text-white text-center mx-10">
          Join Our Newsletter
        </div>
        <div className="text-center text-lg mt-10 text-white">
          Subscribe our newsletter to get our latest update & news.
        </div>
        <div className="relative">
          <input
            type="text"
            placeholder="your mail"
            className="w-full h-[72px] mx-auto mt-14 px-4 py-2 border rounded-3xl"
          />
          <button className="bg-[#FF9B24] text-white absolute top-[65px] right-1 px-4 py-2 rounded-3xl h-[68px] w-44 hover:bg-[#09b1a5] flex justify-center items-center  ">
            <span>
              <i class="fa-solid fa-location-arrow"></i>
            </span>
            <span className="ml-2 font-bold">Subscribe Now</span>
          </button>
        </div>
      </div>
    </div>
  );
};
// mt-[65px]
export default Footer;
