import React from "react";
import { useSelector } from "react-redux";

const Footer = () => {
  const { site } = useSelector((state) => state.site);
  const { translations } = useSelector((state) => state.translations);
  const transData = translations;
  const siteData = site;
  const parser = new DOMParser();
  const cleanHtml = parser.parseFromString(site.adress01, "text/html").body
    .textContent;
  const dangerouslyHtml = { __html: cleanHtml };

  return (
    <>
      {site && translations && (
        <div
          className="mx-auto container mt-16 mb-16 
    lg:grid lg:grid-cols-4 
    sm:grid sm:grid-cols-2
    font-fredoka
    font-semibold
    justify-between  gap-4"
          style={{ backgroundColor: site.footerColor }}
        >
          <div className="mt-10">
            <div className="flex  gap-2 justify-center">
              <div className="text-center">
                <img src={siteData.logo01} alt="" />
              </div>

              <div className="text-[#09b1a5] font-bold text-xl">
                <div></div>
              </div>
            </div>
            <div className="left-0 my-10 flex justify-center text-center">
              {siteData.title}
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
            <h1 className="text-2xl mb-10 font-bold ">
              {transData.quickLinks}
            </h1>
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
            <h1 className="text-2xl mb-10 font-bold">{transData.programs}</h1>
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
            <h1 className="text-2xl mb-10 font-bold text-center">
              {transData.contactUs}
            </h1>
            <ul className="gap-3 flex flex-col items-center">
              <li className="flex gap-2 items-center hover:text-[#FF9B24] cursor-pointer">
                <i className="fa-solid fa-location-dot "></i>
                <p dangerouslySetInnerHTML={dangerouslyHtml}></p>
              </li>
              <li className="flex gap-2 items-center hover:text-[#FF9B24] cursor-pointer">
                <i className="fa-solid fa-location-dot "></i>
                <p>{siteData.adress02}</p>
              </li>
              <li className="flex gap-2 items-center  hover:text-[#FF9B24] cursor-pointer">
                <i className="fa-solid fa-phone"></i>
                <div>{siteData.phone01}</div>
              </li>
              <li className="flex gap-2 items-center  hover:text-[#FF9B24] cursor-pointer">
                <i className="fa-solid fa-phone"></i>
                <div>{siteData.phone02}</div>
              </li>
              <li className="flex gap-2 items-center  hover:text-[#FF9B24] cursor-pointer">
                <i className="fa-solid fa-envelope"></i>
                <div>{siteData.email}</div>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;
