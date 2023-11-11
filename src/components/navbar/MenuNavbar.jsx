import React from "react";
import { getApiData } from "../../features/ApiSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const MenuNavbar = ({ item, lang }) => {
  const dispatch = useDispatch();
  const { title, slug } = item;
  
  return (
    <>
      <li className=" lg:mb-0 lg:pr-2" data-te-nav-item-ref="" data-dropdown>
        <Link
          className="text-neutral-500 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-zinc-400 whitespace-nowrap"
          to={`/${lang}/${slug}`}
          data-te-nav-link-ref=""
          onClick={(e) => dispatch(getApiData({ page: slug, lang }))}
        >
          {title}
        </Link>
        {item["sub-menu"] && (
          <div className="dropdown">
            <ul className="list-style-none" data-te-navbar-nav-ref="">
              {item["sub-menu"].map((subItem, index) => (
                <li key={index}>
                  <Link
                    to={`/${lang}/${slug}/${subItem.slug}`}
                    onClick={(e) => dispatch(getApiData({ page: subItem.slug, lang }))}
                  >
                    {subItem.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </li>
    </>
  );
};

export default MenuNavbar;
