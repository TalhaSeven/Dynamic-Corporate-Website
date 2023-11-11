import { Link } from "react-router-dom";

const Component8 = ({ item }) => {
  const { data, data: { content1 } } = item || {};
  const parser = new DOMParser();
  const cleanHtml = parser.parseFromString(content1, "text/html").body
    .textContent;
  const dangerouslyHtml = { __html: cleanHtml };

  return (
    <>
      {data && (
        <div className="flex flex-col lg:flex-row max-w-[1320px] px-5 sm:px-30 py-30  space-y-5 lg:space-y-0 lg:space-x-5 mx-auto font-fredoka">
          <div className="basis-1/2 p-10 md:min-h-[380px]  bg-[#FFF6EB] rounded-3xl flex flex-col space-y-5 lg:space-y-8">
            <h3 className="text-3xl font-semibold">{data.title1}</h3>
            <p
              className="font-normal  text-[14px]  py-2 lg:py-0"
              dangerouslySetInnerHTML={dangerouslyHtml}
            ></p>
            {data?.button && (
              <div className="btnKnow mt-3 lg:mt-0  ">
                <Link
                  to="/"
                  className="text-[14px] bg-[#FF9B24] hover:bg-[#FF577B] overflow-hidden block w-30 px-4 relative group xs:px-8 py-5 rounded-3xl text-white  duration-900 "
                >
                  <span className="absolute left-6 bottom-2.5 group-hover: group-hover:left-6 group-hover:bottom-10 duration-500 ">
                    {data.button}
                  </span>
                  <span className="opacity-0 absolute left-6 -bottom-3  group-hover:-translate-y-6   group-hover:opacity-100 duration-500">
                    {data.button}
                  </span>
                </Link>
              </div>
            )}
          </div>
          {data.image && (
            <div className="basis-1/2 lg:min-h-[380px]  max-h-[470px]">
              <img
                src={data.image}
                alt="wayToLearn"
                className="max-h-[470px] lg:min-h-[380px] object-cover h-full w-full rounded-3xl"
              />
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Component8;
