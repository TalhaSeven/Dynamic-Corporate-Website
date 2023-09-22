// Initialization for ES Users

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Settling.css'; 
import {IoIosArrowDropright} from 'react-icons/io'
import {IoIosArrowDropleft} from 'react-icons/io'

const Settling = ({item}) => {




  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  
  };

  const previousSlide = () => {
    slider.slickPrev();
  };

  const nextSlide = () => {
    slider.slickNext();
  };

  let slider;

 
  const data=item?.data
  const {content1}=item?.data

  const parser = new DOMParser();
  const cleanHtml = parser.parseFromString(content1, "text/html").body
    .textContent;
  const dangerouslyHtml = { __html: cleanHtml };

  return (
    <div className="md:container">
      <div className="p-8 lg:p-25 font-fredoka ">
      <div className="grid  grid-cols-1 lg:grid-cols-2   gap-5 ">
        <div className=" col-span-1  md:w-full  relative overflow-hidden rounded-3xl h-['533px']">
      <Slider {...settings} ref={(c) => (slider = c)} className="w-full h-full">
        {data.images.map((image, index) => (
         
            <img key={index} src={image} alt={`slide-${index}`} className=" w-full h-full object-cover "/>
          
        ))}
      </Slider>
     
      <IoIosArrowDropleft className="slider-button left" onClick={previousSlide}/>
      <IoIosArrowDropright className="slider-button right" onClick={nextSlide}/>
     
    </div>
       
        <div className=" col-span-1 bg-[#FFF6EB]  flex flex-col justify-between space-y-3 xs:space-y-1 rounded-3xl p-8 w-full h-full">
          <h3 className="settlingh3 text-3xl sm:text-4xl font-semibold py-1  ">
          {data.title1}
          </h3>
          <div className='settlingContent -my-2'  dangerouslySetInnerHTML={dangerouslyHtml}> 
       
          </div>
         
          
          <div className="settlingWrapper flex  items-center justify-center xs:justify-evenly -ms-2 xl:justify-between  flex-wrap xs:mt-2  md:mt-0">
            <div className="settlingTeacher flex  items-start  space-x-2   pe-2 ">
              <div className="flex ">
                <img
                  src="image/author-1.png"
                  alt="img not found!"
                  className="imgCircle w-[73px] h-[73px]"
                />
                <div className="flex flex-col  justify-center">
                  <span className="text-light text-sm md:text-base whitespace-nowrap ">
                    Settling Teacher
                  </span>
                  <span className="text-xl font-semibold whitespace-nowrap">
                    {data.teacher}
                  </span>
                </div>
              </div>
            </div>
            <div className="settlingBorder flex flex-col  items-center justify-center px-5 lg:px-8 space-x-2 text-center h-[50px]    ">
              <span className="text-sm md:text-base whitespace-nowrap ">
                Categories
              </span>
              <span className="text-xl font-semibold whitespace-nowrap">
                Kindergarten
              </span>
            </div>
            <div className="perMonth flex flex-col items-center space-x-2 text-center ps-2">
              <span className="text-sm md:text-base whitespace-nowrap  ">
                Per/Month
              </span>
              <span className="text-xl font-semibold whitespace-nowrap">
                {data.amout}
              </span>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
    
  );
};

export default Settling;
