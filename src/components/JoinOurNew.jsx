import React from "react";
import { Link } from "react-router-dom";

const JoinOurNew = ({item}) => {


  const data=item?.data
  const {content1}=item?.data
  const {color1}=item?.data
console.log(color1);
  const parser = new DOMParser();
  const cleanHtml = parser.parseFromString(content1, "text/html").body
  .textContent;
  const dangerouslyHtml = { __html: cleanHtml };


  return (
    <>

      <div className=" relative font-fredoka h-[420px]  md:h-[350px]">
        <div className="w-full h-full">
          <img
            src={data.image}
            alt="joinNewBg"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 hidden md:flex justify-center items-center flex-col h-[200px] space-y-8 mt-8 z-20  w-4/5 lg:w-3/4 mx-auto  animate-bounce1">
          <div className=" me-auto">
          <img
              src="./image/white-curved-line.png"
              alt="whiteCurved"
              className="w-14  mt-5 "
            />
          </div>
          <div className="ms-auto ">
            <img
              src="./image/white-curved-line.png"
              alt="whiteCurved"
              className="w-14  mt-5 "
            />
          </div>
        </div>
        <div className="absolute  bg-[#33c9be]  inset-0 opacity-60"></div>
        <div className="absolute inset-0 flex justify-center items-center flex-col space-y-8 text-white w-3/4 md:w-1/2 lg:w-5/12 mx-auto ">
          <h1 className="text-2xl md:text-4xl lg:text-5xl   font-semibold whitespace-nowrap ">
          {data.title1}
          </h1>
          <p className="text-[14px] lg:text-[16px] text-center xl:px-4 w-full" dangerouslySetInnerHTML={dangerouslyHtml}>
          
          </p>
          <div className="mt-4 font-semibold ">

            <Link
              to='/'
              className="text-[14px] bg-[#FF9B24] hover:bg-[#FFF] overflow-hidden block w-30 px-4 relative group xs:px-8 py-5 rounded-3xl text-white  duration-900 "
            >
              <span className="absolute left-6 bottom-2.5 group-hover: group-hover:left-6 group-hover:bottom-10 duration-500 ">

              {data.button}
              </span>
              <span className="opacity-0 absolute left-6 -bottom-3.5  group-hover:-translate-y-6   group-hover:opacity-100 duration-500 group-hover:text-[#FF9B24]">
              {data.button}
              </span>
            </Link>
          </div>
      </div>
    </div>
    <div className="bg-[#FF9B24] h-[8px]"></div>
    </>
    

  );
};

export default JoinOurNew;
