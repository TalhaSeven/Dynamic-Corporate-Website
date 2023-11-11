import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css/pagination";
import "./Component4.css";

const Component4 = ({ item }) => {
  const data = item?.data;
  const { content1 } = item?.data;
  const parser = new DOMParser();
  const cleanHtml1 = parser.parseFromString(content1, "text/html").body
    .textContent;
  const dangerouslyHtml = { __html: cleanHtml1 };
  return (
    <>
      {data && (
        <div className="px-18 py-20 md:p-24 lg:p-30 bg-gradient-to-r from-[#FEF7EC] to-[#F1FCF8] font-fredoka">
          <div className="container mx-auto">
            <div className="flex justify-center ">
              {data.title1 && dangerouslyHtml && (
                <div className="text-center basis-1/3 md:basis-1/2 mb-10">
                  <h2 className="text-[23px] md:text-[35px] lg:text-[40px] xl:text-5xl font-semibold mb-3 whitespace-nowrap ">
                    {data.title1}
                  </h2>
                  <p
                    className="font-light text-[14px] lg:text-[18px]"
                    dangerouslySetInnerHTML={dangerouslyHtml}
                  ></p>
                </div>
              )}
            </div>

            <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={30}
              slidesPerView={3}
              pagination={{ clickable: true }}
              className="swiperOur"
              onSwiper={(swiper) => console.log()}
              onSlideChange={() => console.log()}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                767: {
                  slidesPerView: 1,
                },

                768: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                1200: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
              }}
            >
              {data.other.map((item, index) => {
                const {
                  title1: title2,
                  content1: content2,
                  age,
                  days,
                  hours,
                  color1,
                  image,
                } = item;
                const parser = new DOMParser();
                const cleanHtml = parser.parseFromString(content2, "text/html")
                  .body.textContent;
                const dangerouslyHtml = { __html: cleanHtml };
                return (
                  <>
                    {item && (
                      <SwiperSlide key={index}>
                        <div className="flex flex-col  space-y-2 bg-white p-3 rounded-xl group justify-between min-h-[615px]  ">
                          <div className="relative">
                            <div className="overflow-hidden rounded-lg">
                              <img
                                src={image}
                                alt="hmprg1"
                                className="h-full w-full hover:scale-110 duration-500 object-cover"
                              />
                            </div>
                            <div className="hidden group-hover:block group-hover:absolute -bottom-7 right-0 duration-500">
                              <svg
                                width="97"
                                height="51"
                                viewBox="0 0 97 61"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M64.6716 54.1604C66.9487 53.8135 68.0029 53.176 70.1655 51.8716C72.687 50.3497 74.6533 48.7547 76.851 46.7751C81.5182 42.5716 85.6125 37.7759 88.3885 32.1351C89.3558 30.1686 90.1276 27.6273 90.1313 25.5758C90.1315 25.3005 90.1117 25.0277 90.0918 24.7549C90.0265 23.8818 90.2031 25.3139 90.0405 24.4639C89.9925 24.2075 89.5555 22.9191 89.7728 23.4319C89.2072 22.1159 89.0297 21.9948 87.919 21.0408C88.3994 21.4535 87.6126 20.8359 87.5796 20.8122C87.3117 20.6295 87.0241 20.4728 86.742 20.3146C86.1464 19.9801 86.0413 19.952 85.2752 19.7431C84.1901 19.448 82.8104 19.4448 81.687 19.6363C78.5001 20.1766 75.6296 21.8098 72.9716 23.5842C68.3495 26.675 64.3591 30.7652 60.7083 34.9302C57.6486 38.419 54.7864 42.1477 52.4483 46.1651C50.7786 49.0329 45.5641 47.1191 46.89 43.8848C51.1259 33.5329 58.2673 24.4618 60.3324 13.286C60.5123 12.3117 60.5829 11.5264 60.5346 10.2197C60.5086 9.53722 60.3305 8.76235 60.0088 8.17986C59.9287 8.03562 59.4795 7.46359 59.9681 8.0724C59.8265 7.8973 59.6603 7.74064 59.4975 7.586C58.9409 7.05461 60.0584 7.95649 59.4036 7.52241C59.2016 7.38715 58.978 7.28138 58.7599 7.17412C59.5708 7.57229 57.6109 6.91683 58.1827 6.98555C57.3018 6.87835 57.1842 6.93649 56.5835 7.0797C54.2764 7.62392 52.1345 9.91104 50.3687 12.0559C48.1084 14.8068 46.3554 18.0372 44.7495 21.1985C42.4766 25.6689 40.4435 30.4271 39.1985 35.2997C38.3627 38.5742 33.0058 38.039 33.2313 34.5522C33.5916 28.9728 33.2617 22.5516 29.4062 18.2114C26.7668 15.2407 23.0084 14.0789 19.1031 14.0364C15.4058 13.9974 11.8239 14.9631 8.76894 16.835C8.46428 17.0232 8.16959 17.2264 7.8819 17.4337C8.43815 17.0361 7.48374 17.7919 7.35335 17.9126C7.12532 18.1217 6.91976 18.3484 6.71218 18.5786C6.49139 18.8478 6.52116 18.8043 6.8015 18.4481C6.67742 18.6145 6.57085 18.791 6.46227 18.971C6.33953 19.1755 6.03656 19.9994 6.36393 19.1009C6.3243 19.2181 6.28817 19.3372 6.26107 19.4569C6.09281 20.0879 6.30183 18.7477 6.25786 19.3897C6.20414 20.1941 6.07556 18.8971 6.28012 19.6826C6.38155 19.9839 6.34925 19.9186 6.18121 19.4902C6.25911 19.6705 6.36665 19.8399 6.47068 20.0073C8.54804 23.3209 3.27758 26.3221 1.20373 23.0105C-1.32813 18.9724 1.35314 14.7891 4.67051 12.3172C8.5432 9.43318 13.6276 8.1448 18.3911 7.97801C23.9493 7.78467 29.5454 9.6761 33.4772 13.6823C38.7859 19.0949 39.7676 27.2972 39.2968 34.507C37.3071 34.259 35.3194 34.0075 33.3296 33.7595C34.8894 27.6545 37.5757 21.6679 40.5532 16.1388C43.6956 10.3081 48.0598 3.42806 54.7197 1.29441C60.5782 -0.583104 65.8989 3.60425 66.5299 9.38255C67.1754 15.2812 64.4622 21.4763 62.1681 26.7512C60.4793 30.6302 58.5384 34.3961 56.561 38.1364C55.7379 39.6914 54.9022 41.2438 54.0826 42.8009C53.7803 43.3731 53.4869 43.9458 53.1986 44.5261C53.0443 44.8337 52.3024 46.5149 52.7585 45.4015C50.9044 44.6437 49.0523 43.8824 47.2002 43.1212C50.572 37.3296 54.9473 32.0148 59.5792 27.1934C64.7323 21.8329 70.81 16.6656 77.9757 14.3106C84.0554 12.3087 90.9808 13.9268 94.5512 19.4886C97.6943 24.3837 95.8393 30.7009 93.4918 35.4782C90.5195 41.5238 85.8091 46.8692 80.8339 51.3476C76.879 54.9076 71.7076 59.1841 66.2523 60.0156C64.6203 60.2635 63.0014 59.5995 62.5384 57.8713C62.1353 56.4111 63.0341 54.4098 64.6716 54.1604Z"
                                  fill={color1}
                                ></path>
                              </svg>
                            </div>
                          </div>

                          <div
                            className={`group group-hover:[color:'${color1}'] `}
                          >
                            <h3 className="swiperOurh3 font-semibold text-xl md:text-2xl  duration-500">
                              {title2}
                            </h3>
                          </div>

                          <div
                            className="text-[15px] lg:text-[15px] min-h-[66px] md:min-h-[96px] xl:min-h-[70px] font-light"
                            dangerouslySetInnerHTML={dangerouslyHtml}
                          ></div>
                          <div
                            className={`flex flex-col sm:flex-row items-center justify-center bg-[${color1}]  rounded-xl p-3 sm:divide-x-2 divide-dashed text-white`}
                          >
                            <div className="flex sm:flex-col items-center space-x-2 text-center basis-1/3">
                              <span className="font-bold text-sm md:text-base whitespace-nowrap">
                                {age}
                              </span>
                              <span className="text-xs">age</span>
                            </div>
                            <div className="flex sm:flex-col items-center space-x-2 text-center basis-1/3">
                              <span className="font-bold text-sm md:text-base whitespace-nowrap">
                                {days}
                              </span>
                              <span className="text-xs">weekly</span>
                            </div>
                            <div className="flex sm:flex-col items-center space-x-2 text-center basis-1/3">
                              <span className="font-bold text-sm md:text-base whitespace-nowrap ">
                                {hours}
                              </span>
                              <span className="text-xs">period</span>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    )}
                  </>
                );
              })}
            </Swiper>
          </div>
        </div>
      )}
    </>
  );
};

export default Component4;
