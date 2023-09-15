import React from 'react'

 const MenuNavbar = ({item}) => {
    console.log(item)
     const altmenu ="sub-menu"
    // console.log(item[altmenu])
    const {title,slug}=item
  return (
    <>
      
      <li className="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref=""   data-dropdown >
            {/* Dashboard link */}
            <a
              className="text-neutral-500 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-nonelg:px-2 [&.active]:text-black/90 dark:[&.active]:text-zinc-400"
              href={slug}
              data-te-nav-link-ref=""
            >
              {title}
            </a>
            {item[altmenu] && 
               <div className="dropdown">
               <ul className='list-style-none' data-te-navbar-nav-ref="">
                {item[altmenu].map((item,index) =><li key={index}><a href={item.slug}>{item.title}</a></li> )}
                 
               </ul>
               </div>
              
              }
            {/* <div className="dropdown">
            <ul className='list-style-none' data-te-navbar-nav-ref="">
              <li><a href="#">home1</a>
             
               
                  </li>
              <li><a href="#">home2</a></li>
              <li><a href="#">home3</a></li>
            </ul>
            </div> */}
        </li>
    </>
  )
}
export default MenuNavbar