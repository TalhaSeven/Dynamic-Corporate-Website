import React from "react";

const Footer2 = () => {
  return (
    <div className="mx-auto  container mt-16 mb-16 
    lg:grid lg:grid-cols-4 
    sm:grid sm:grid-cols-2
    font-fredoka
    font-semibold
    justify-between  gap-4 ">
      <div className="mt-10">
        <div className="flex  gap-2 justify-center">
          <div className="text-center">
            <i className="fa-solid fa-book-open text-5xl text-[#FF9B24]"></i>
          </div>

          <div className="text-[#09b1a5] font-bold text-xl">
            <div>kindedo</div>
            <div>Best School</div>
          </div>
        </div>
        <div className="left-0 my-10 flex justify-center text-center">
          In our Adult Participation programs, for most students, it is their
          first program in Kindedo.
        </div>
        <div className="flex gap-10 item justify-center ">
          <div className="rounded-full bg-[#09b1a5] h-11 w-11 text-center pt-2 text-white font-extrabold hover:bg-[#FF9B24] cursor-pointer transform transition-colors duration-300">
            <i className="fa-brands fa-facebook-f"></i>
          </div>
          <div className="rounded-full bg-[#09b1a5] h-11 w-11 text-center pt-2 text-white font-extrabold  hover:bg-[#FF9B24] cursor-pointer transform transition-colors duration-300">
            <i className="fa-brands fa-twitter"></i>
          </div>
          <div className="rounded-full bg-[#09b1a5] h-11 w-11 text-center pt-2 text-white font-extrabold  hover:bg-[#FF9B24] cursor-pointer transform transition-colors duration-300">
            <i className="fa-brands fa-youtube"></i>
          </div>
        </div>
      </div>
      <div className="text-center mt-10">
        <h1 className="text-2xl mb-10 font-bold ">Quick links</h1>
        <ul className="gap-3 flex flex-col">
          <li>About</li>
          <li>Programs</li>
          <li>Shop</li>
          <li>Classes</li>
          <li>News</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="text-center mt-10">
        <h1 className="text-2xl mb-10 font-bold">Programs</h1>
        <ul className="gap-3 flex flex-col">
          <li>Play School</li>
          <li>Nursery</li>
          <li>Junior Kg</li>
          <li>Senior Kg</li>
          <li>Holiday Camp</li>
          <li>Day Care</li>
        </ul>
      </div>
      <div className="text-center mt-10">
        <h1 className="text-2xl mb-10 font-bold text-center">Contact Us</h1>
        <ul className="gap-3 flex flex-col items-center">
          <li className="flex gap-2 items-center hover:text-[#FF9B24] cursor-pointer">
            <i className="fa-solid fa-location-dot "></i>
            <p>14/A, Kilix Home Tower, NYC</p>
          </li>
          <li className="flex gap-2 items-center  hover:text-[#FF9B24] cursor-pointer">
            <i className="fa-solid fa-phone"></i>
            <div>907-200-3462</div>
          </li>
          <li className="flex gap-2 items-center  hover:text-[#FF9B24] cursor-pointer">
            <i className="fa-solid fa-envelope"></i>
            <div>Support@kindedo.com</div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer2;
