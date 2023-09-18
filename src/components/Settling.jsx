import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { homeAll } from "../features/homeSlice";
import { Carousel } from "antd";
const contentStyle = {
  margin: 0,
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

const Settling = () => {

  const dispatch = useDispatch();
  const { pageData, error, loading } = useSelector((state) => state.home);
  const pgData = pageData?.filter((item) => item.modulName === "component6");
  
  useEffect(() => {
    dispatch(homeAll());
  }, [dispatch]);

  const title1 = pgData?.[0]?.data?.title1 || "";
  const content1 = pgData?.[0]?.data?.content1 || "";
  const teacher = pgData?.[0]?.data?.teacher || "";
  const amout = pgData?.[0]?.data?.amout || "";
  const images = pgData?.[0]?.data?.images || [];
  const parser = new DOMParser();
  const cleanHtml = parser.parseFromString(content1, "text/html").body
    .textContent;
  const dangerouslyHtml = { __html: cleanHtml };
  
  return (
    <div className="p-8 lg:p-30 font-fredoka">
      {loading && (
        <div className="flex items-center justify-center">
          <img src="./loading.gif" alt="imgGif" />
        </div>
      )}
      {error && <h1>{error}</h1>}
      <div className="flex flex-col space-y-5 lg:space-y-0  lg:flex-row lg:space-x-5   ">
        <div className=" basis-1/2 h-full w-full">
          <div
            id="carouselExampleCaptions"
            className="relative rounded-lg "
            data-te-carousel-init=""
            data-te-ride="carousel"
          >
            <div className="itemsSlide relative w-full overflow-hidden after:clear-both after:block after:content-[''] rounded-3xl">
              <Carousel effect="fade">
                {images.map((image, index) => (
                  <div
                    style={contentStyle}
                    key={index}
                    className="relative float-left -mr-[100%] h-full w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                  >
                    <img
                      src={image}
                      className="block w-full max-h-[400px] md:max-h-[440px] lg:h-[496px] object-cover"
                      alt={teacher}
                      style={contentStyle}
                    />
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
          <div className=" basis-1/2 bg-[#FFF6EB]  flex flex-col justify-between rounded-3xl p-5 min-h-[400px] md:max-h-[440px] lg:h-[496px]">
            <h3 className="text-3xl sm:text-4xl font-semibold pt-1 sm:pt-2">
              {title1}
            </h3>
            <p
              dangerouslySetInnerHTML={dangerouslyHtml}
              className="font-normal lg:font-light text-[15px] lg:min-h-[80px] py-2 lg:py-0"
            ></p>
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
                      {teacher}
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
                  {amout}
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
