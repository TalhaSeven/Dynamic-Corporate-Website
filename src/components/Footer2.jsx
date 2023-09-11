import React from "react";

const Footer2 = () => {
  return (
    <div className="mx-auto  w-9/12 mt-16 mb-16 flex gap-10">
      <div className="w-4/12">
        <div className="flex items-center gap-2">
          <div className="text-center">
            <i class="fa-solid fa-book-open text-5xl text-[#FF9B24]"></i>
          </div>

          <div className="text-[#09b1a5] font-bold text-xl">
            <div>kindedo</div>
            <div>Best School</div>
          </div>
        </div>
        <div className="left-0 my-10">
          In our Adult Participation programs, for most students, it is their
          first program in Kindedo.
        </div>
        <div className="flex gap-10 item">
          <div className="rounded-full bg-[#09b1a5] h-11 w-11 text-center pt-2 text-white font-extrabold hover:bg-[#FF9B24] cursor-pointer transform transition-colors duration-300">
            <i class="fa-brands fa-facebook-f"></i>
          </div>
          <div className="rounded-full bg-[#09b1a5] h-11 w-11 text-center pt-2 text-white font-extrabold  hover:bg-[#FF9B24] cursor-pointer transform transition-colors duration-300">
            <i class="fa-brands fa-twitter"></i>
          </div>
          <div className="rounded-full bg-[#09b1a5] h-11 w-11 text-center pt-2 text-white font-extrabold  hover:bg-[#FF9B24] cursor-pointer transform transition-colors duration-300">
            <i class="fa-brands fa-youtube"></i>
          </div>
        </div>
      </div>
      <div className="w-4/12 ml-10">
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
      <div className="w-4/12">
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
      <div className="w-4/12 ">
        <h1 className="text-2xl mb-10 font-bold">Contact Us</h1>
        <ul className="gap-3 flex flex-col">
          <li className="flex gap-2 items-center hover:text-[#FF9B24] cursor-pointer">
            <i class="fa-solid fa-location-dot "></i>
            <p>14/A, Kilix Home Tower, NYC</p>
          </li>
          <li className="flex gap-2 items-center  hover:text-[#FF9B24] cursor-pointer">
            <i class="fa-solid fa-phone"></i>
            <div>907-200-3462</div>
          </li>
          <li className="flex gap-2 items-center  hover:text-[#FF9B24] cursor-pointer">
            <i class="fa-solid fa-envelope"></i>
            <div>Support@kindedo.com</div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer2;
