import React from 'react'
import { Link } from 'react-router-dom'

 const MenuNavbar = ({item}) => {
    console.log(item)
     const altmenu ="sub-menu"
    // console.log(item[altmenu])
    const {title,slug}=item
  return (
    <>
      
      <li className="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref=""   data-dropdown >
            {/* Dashboard link */}
            <Link
              className="text-neutral-500 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-nonelg:px-2 [&.active]:text-black/90 dark:[&.active]:text-zinc-400"
              to={slug}
              data-te-nav-link-ref=""
            >
              {title}
            </Link>
            {item[altmenu] && 
               <div className="dropdown">
               <ul className='list-style-none' data-te-navbar-nav-ref="">
                {item[altmenu].map((item,index) =><li key={index}><a href={item.slug}>{item.title}</a></li> )}
                 
               </ul>
               </div>
              
              }
        </li>
    </>
  )
}
export default MenuNavbar