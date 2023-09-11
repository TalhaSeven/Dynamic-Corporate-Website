import React from "react";

const ProgramDetails = () => {
  return (
    <div className="flex flex-wrap  justify-center gap-10 w-full h-72">
      <div className="bg-[#fff6eb] w-52 mt-10 mb-10 rounded-3xl shadow-xl cursor-pointer shadow-orange-400 hover:shadow-orange-500 ">
        <div className="bg-[#2ec7bd] w-24 mt-6 rounded-3xl mx-auto mb-10 h-16 text-center">
          <i class="fa-solid fa-people-group mt-3 text-3xl text-gray-200"></i>
        </div>
        <div className="mx-auto text-center  ">
          <p className="text-sm font-semibold ">2-2-5 years</p>
          <p className="font-thin">age</p>
        </div>
      </div>
      <div className="bg-[#fff6eb] w-52 mt-10 mb-10 rounded-xl shadow-xl cursor-pointer shadow-orange-400 hover:shadow-orange-500 ">
        <div className="bg-[#ff9b24] w-24 mt-6 rounded-3xl mx-auto mb-10 h-16 text-center">
          <i class="fa-regular fa-calendar-days mt-3 text-3xl text-gray-200"></i>
        </div>
        <div className="mx-auto text-center ">
          <p className="text-sm font-semibold ">5 Days</p>
          <p className="font-thin">weekly</p>
        </div>
      </div>
      <div className="bg-[#fff6eb] w-52 mt-10 mb-10 rounded-xl shadow-xl cursor-pointer shadow-orange-400 hover:shadow-orange-500 ">
        <div className="bg-[#2ec7bd] w-24 mt-6 rounded-3xl mx-auto mb-10 h-16 text-center">
          <i class="fa-solid fa-hourglass-half mt-3 text-3xl text-gray-200"></i>
        </div>
        <div className="mx-auto text-center  ">
          <p className="text-sm font-semibold ">3.30 Hrs</p>
          <p className="font-thin">period</p>
        </div>
      </div>
      <div className="bg-[#fff6eb] w-52 mt-10 mb-10 rounded-xl shadow-xl cursor-pointer shadow-orange-400 hover:shadow-orange-500 ">
        <div className="bg-[#ff577b] w-24 mt-6 rounded-3xl mx-auto mb-10 h-16 text-center">
          <i class="fa-solid  fa-chalkboard-user mt-3 text-3xl text-gray-200"></i>
        </div>
        <div className="mx-auto text-center  ">
          <p className="text-sm font-semibold ">Class Size</p>
          <p className="font-thin">24</p>
        </div>
      </div>
    </div>
  );
};

export default ProgramDetails;
