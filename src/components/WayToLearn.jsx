const WayToLearn = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row max-w-[1320px] px-5 sm:px-30 py-30  space-y-5 lg:space-y-0 lg:space-x-5 mx-auto font-fredoka">
        <div className="basis-1/2 p-10 md:min-h-[380px]  bg-[#FFF6EB] rounded-3xl flex flex-col space-y-5 lg:space-y-8">
          <h3 className="text-3xl font-semibold">Way to Learn</h3>
          <p className="font-normal  text-[14px]  py-2 lg:py-0">
            As a result, the child should have a reasonable amount of freedom to
            do as they please, while at the same time being wholly immersed in
            an environment which stimulates their senses as well as exercising
            their creativity. Literally their classroom is their world,
            providing exposure to materials and experiences that foster greater
            intellectual growth. You will love it.
          </p>
          <p className="font-normal  text-[15px]  py-2 lg:py-0">
            Please take a moment to read this website, and I’m sure that you
            will come to agree that there would be better place.
          </p>
          <div className="btnKnow mt-3 lg:mt-0  ">
            <a
              href="about.html"
              className="text-[14px] bg-[#FF9B24] hover:bg-[#FF577B] overflow-hidden block w-30 px-4 relative group xs:px-8 py-5 rounded-3xl text-white  duration-900 "
            >
              <span className="absolute left-6 bottom-2.5 group-hover: group-hover:left-6 group-hover:bottom-9 duration-500 ">
                Know More
              </span>
              <span className="opacity-0 absolute left-6 -bottom-3  group-hover:-translate-y-6   group-hover:opacity-100 duration-500">
                Know More
              </span>
            </a>
          </div>
        </div>
        <div className="basis-1/2 lg:min-h-[380px]  max-h-[470px]">
          <img
            src="./image/details-1.jpg"
            alt="wayToLearn"
            className="max-h-[470px] lg:min-h-[380px] object-cover h-full w-full rounded-3xl"
          />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row max-w-[1320px] px-5 sm:px-30 py-30  space-y-5 lg:space-y-0 lg:space-x-5 mx-auto font-fredoka">
        <div className="basis-1/2 lg:min-h-[380px]  max-h-[470px]">
          <img
            src="./image/details-1.jpg"
            alt="wayToLearn"
            className="max-h-[470px] lg:min-h-[380px] object-cover h-full w-full rounded-3xl"
          />
        </div>
        <div className="basis-1/2 p-10 md:min-h-[380px]  bg-[#FFF6EB] rounded-3xl flex flex-col space-y-5 lg:space-y-8">
          <h3 className="text-3xl font-semibold">Way to Learn</h3>
          <p className="font-normal  text-[14px]  py-2 lg:py-0">
            As a result, the child should have a reasonable amount of freedom to
            do as they please, while at the same time being wholly immersed in
            an environment which stimulates their senses as well as exercising
            their creativity. Literally their classroom is their world,
            providing exposure to materials and experiences that foster greater
            intellectual growth. You will love it.
          </p>
          <p className="font-normal  text-[15px]  py-2 lg:py-0">
            Please take a moment to read this website, and I’m sure that you
            will come to agree that there would be better place.
          </p>
          <div className="btnKnow mt-3 lg:mt-0  ">
            <a
              href="about.html"
              className="text-[14px] bg-[#FF9B24] hover:bg-[#FF577B] overflow-hidden block w-30 px-4 relative group xs:px-8 py-5 rounded-3xl text-white  duration-900 "
            >
              <span className="absolute left-6 bottom-2.5 group-hover: group-hover:left-6 group-hover:bottom-9 duration-500 ">
                Know More
              </span>
              <span className="opacity-0 absolute left-6 -bottom-3  group-hover:-translate-y-6   group-hover:opacity-100 duration-500">
                Know More
              </span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default WayToLearn;
