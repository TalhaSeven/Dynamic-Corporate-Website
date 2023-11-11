import { Link } from "react-router-dom";

const BreadCrumb = ({ item: { data } = {} }) => {
  return (
    <>
      {data && (
        <div className=" relative font-fredoka h-[320px]  md:h-[300px]">
          {data.image && (
            <div className="w-full h-full">
              <img
                src={data.image}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          )}
          <div className="absolute bg-[#00BBAE] inset-0 opacity-70"></div>
          <div className="absolute inset-0 flex justify-center items-center flex-col">
            {data.title1 && (
              <h1 className="text-4xl xl:text-5xl  text-white font-semibold mb-2">
                {data.title1}
              </h1>
            )}
            <div className="flex items-center text-white space-x-3">
              <Link to="/" className="flex items-center space-x-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  viewBox="0 0 50 50"
                  strokeWidth="3"
                  stroke="white"
                  className="w-[20px] h-[20px] xl:w-[24px] xl:h-[24px]"
                >
                  <path
                    d="M 24.962891 1.0546875 A 1.0001 1.0001 0 0 0 24.384766 1.2636719 L 1.3847656 19.210938 A 1.0005659 1.0005659 0 0 0 2.6152344 20.789062 L 4 19.708984 L 4 46 A 1.0001 1.0001 0 0 0 5 47 L 18.832031 47 A 1.0001 1.0001 0 0 0 19.158203 47 L 30.832031 47 A 1.0001 1.0001 0 0 0 31.158203 47 L 45 47 A 1.0001 1.0001 0 0 0 46 46 L 46 19.708984 L 47.384766 20.789062 A 1.0005657 1.0005657 0 1 0 48.615234 19.210938 L 41 13.269531 L 41 6 L 35 6 L 35 8.5859375 L 25.615234 1.2636719 A 1.0001 1.0001 0 0 0 24.962891 1.0546875 z M 25 3.3222656 L 44 18.148438 L 44 45 L 32 45 L 32 26 L 18 26 L 18 45 L 6 45 L 6 18.148438 L 25 3.3222656 z M 37 8 L 39 8 L 39 11.708984 L 37 10.146484 L 37 8 z M 20 28 L 30 28 L 30 45 L 20 45 L 20 28 z"
                    fill="#fff"
                  ></path>
                </svg>
                {data.title1 && (
                  <span className="text-[15px] xl:text-[17px]">
                    Kindedo - {data.title1}
                  </span>
                )}
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BreadCrumb;
