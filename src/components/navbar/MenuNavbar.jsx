import React from "react";
import { getApiData } from "../../features/ApiSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const MenuNavbar = ({ item, lang }) => {


  const altmenu = "sub-menu";
  const dispatch = useDispatch();
  const { title, slug } = item;
  return (
    <>
      <li
        className=" lg:mb-0 lg:pr-2"
        data-te-nav-item-ref=""
      //  {`sub-menu` && data-dropdown}
        data-dropdown
      >
        {/* Dashboard link */}
        <Link
          className="text-neutral-500 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-zinc-400 whitespace-nowrap"
          to={`/${lang}/${slug}`}
          data-te-nav-link-ref=""
          onClick={(e)=>dispatch(getApiData({page:slug, lang}))}
        >
          {title}
        </Link>
        {item[altmenu] && 
               <div className="dropdown">
               <ul className='list-style-none' data-te-navbar-nav-ref="">
                {item[altmenu].map((subItem,subIndex) =><li key={subIndex}><Link to={`/${lang}/${slug}?:/${subItem.slug}`}>{subItem.title}</Link></li> )}
                 
               </ul>
               </div>
              
              }
      </li>
    </>
  );
};
export default MenuNavbar;
