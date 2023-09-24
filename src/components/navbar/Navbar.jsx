import React, { useEffect, useState } from "react";
import {
    Collapse,
    Dropdown,
    initTE,
  } from "tw-elements";
import NavbarTop from './NavbarTop';
import MenuNavbar from './MenuNavbar';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from "react-router-dom";
import { setLanguage } from "../../features/LanguageSlice";
import { getApiData } from "../../features/ApiSlice";


initTE({ Collapse, Dropdown });

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { menu } = useSelector((state) => state.menu);
  const { preferredLanguage:lang } = useSelector((state) => state.lang);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen); // Toggle mobile menu visibility
  };

  const handleLanguage = (e) => {
    dispatch(setLanguage(e.target.value));
    dispatch(getApiData({page:"index", lang:e.target.value}))
    navigate(`/${e.target.value}/index`)
   
  };

  return (
    <>
      <NavbarTop />
      {/* Main navigation container */}
      <nav
        className="flex-no-wrap relative flex w-full  lg:mb-0 items-center justify-between bg-[#FBFBFB] py-2 shadow-md shadow-black/5
   lg:flex-wrap lg:justify-start lg:py-4"
      >
        <div className="flex w-full flex-wrap items-center justify-between px-3  py-3 mb-0 sm:mb-16 lg:mb-0">
          {/* Hamburger button for mobile view */}
          <button
            className="block border-0 bg-transparent px-2 text-neutral-500 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 md:hidden"
            type="button"
            data-te-collapse-init=""
            data-te-target="#navbarSupportedContent1"
            aria-controls="navbarSupportedContent1"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={toggleMobileMenu}
          >
                     {/* Hamburger icon */}
                     <span className="[&>svg]:w-7">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-7 w-7"
              >
            <path
              fillRule="evenodd"
              d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      </button>
      {/* Collapsible navigation container */}
      <div
        className=" !visible menu hidden flex-grow  items-center sm:!flex lg:basis-auto"
        id="navbarSupportedContent1"
        data-te-collapse-item=""
      >
        {/* Logo */}
        <Link
          className=" mb-0 ml-1 mr-1 lg:ml-2 lg:mr-5 mt-3 flex items-center text-neutral-900 hover:text-neutral-900 focus:text-neutral-900 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400 lg:mb-0 lg:mt-0"
          to="/en/index"
        >
          <img
            src="../images/logo.svg"
            style={{height: "50px" }}
            alt="TE Logo"
            loading="lazy"
          />
        </Link>
        {/* Left navigation links */}
        <ul
          className="list-style-none mr-auto md:flex flex-col pl-0 md:flex-row "
          data-te-navbar-nav-ref=""
        >
       {menu?.length > 0 && menu?.map((item, index) => <MenuNavbar item={item} lang={lang} key={index}/> ) }
       
      </ul>

          </div>
          {/* Right elements */}
          <div className="relative flex items-center">
          <div className="me-2">
            <select value={lang} onChange={handleLanguage}>
              <option value="en">English</option>
              <option value="de">German</option>
            </select>
          </div>
            <button
              type="button"
              data-te-ripple-init=""
              data-te-ripple-color="light"
              className="mr-3 inline-block rounded-3xl bg-[#FF9B24] px-6 pb-2 pt-2.5 text-md font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-[#00BBAE] hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] motion-reduce:transition-none dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
            >
              Sign up for free
            </button>
          </div>
         
        </div>
      </nav>
    </>
  );
};
export default Navbar;
