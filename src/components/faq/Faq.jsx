import { useState, useEffect } from "react";
import { TECollapse } from "tw-elements-react";
import { useDispatch, useSelector } from "react-redux";
import { homeAll } from "../../features/homeSlice";

const Faq = () => {
  const dispatch = useDispatch();
  const { pageData, error, loading } = useSelector((state) => state.home);
  const [activeElement, setActiveElement] = useState(null);
  const faqData = pageData?.filter((item) => item.modulName === "component2");
  const title1 = faqData[0]?.data.title1 || "";
  const image = faqData[0]?.data.image || "";
  const other = faqData[0]?.data.other || [];

  const handleClick = (value) => {
    if (value === activeElement) {
      setActiveElement(null);
    } else {
      setActiveElement(value);
    }
  };

  useEffect(() => {
    dispatch(homeAll());
  }, []);

  return (
    <>
      {faqData && (
        <div className="p-20 space-10 font-fredoka">
          {loading && (
            <div className="flex items-center justify-center">
              <img src="./loading.gif" alt="imgGif" />
            </div>
          )}
          {error && <h1>{error}</h1>}
          <h4 className="text-[23px] md:text-[35px] lg:text-[40px] xl:text-5xl font-semibold mb-4 whitespace-nowrap ">
            {title1}
          </h4>
          <div className="flex flex-col md:flex-row gap-8">
          {/*Verilerin Olduğu Alan*/}
            <div id="accordionExample" className="w-full md:w-1/2">
              {other.map((item, index) => {
                // HTML içeriğini temizle
                const parser = new DOMParser();
                const cleanHtml = parser.parseFromString(
                  item.content,
                  "text/html"
                ).body.textContent;

                // Güvenlik için HTML içeriği doğrudan yerleştirilir
                const dangerouslyHtml = { __html: cleanHtml };

                return (
                  <div
                    key={index}
                    className="mb-3 rounded-lg border border-neutral-200 bg-white"
                  >
                    <h2 className="mb-0" id={`heading${index}`}>
                      <button
                        className={`text-white rounded-lg ${
                          activeElement === index
                            ? "dark:shadow-inset-0 -1px 0 rgba(75,85,99)"
                            : ""
                        } group relative flex w-full items-center border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white [&:not([data-te-collapse-collapsed])]:bg-[#FF9B24]`}
                        type="button"
                        onClick={() => handleClick(index)}
                        aria-expanded={activeElement === index}
                        aria-controls={`collapse${index}`}
                      >
                        {item.title}
                        <span
                          className={`${
                            activeElement === index
                              ? "rotate-[-180deg] -mr-1"
                              : "rotate-0 fill-[#212529]  dark:fill-white"
                          } ml-auto h-5 w-5 shrink-0 fill-[#336dec] transition-transform duration-200 ease-in-out motion-reduce:transition-none dark:fill-blue-300`}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="h-6 w-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                            />
                          </svg>
                        </span>
                      </button>
                    </h2>
                    <TECollapse
                      show={activeElement === index}
                      className="!mt-0 !rounded-b-none !shadow-none"
                    >
                      {/* Temizlenmiş HTML içeriği güvenli bir şekilde yerleştirilir */}
                      <div
                        className="px-5 py-4"
                        dangerouslySetInnerHTML={dangerouslyHtml}
                      ></div>
                    </TECollapse>
                  </div>
                );
              })}
            </div>
            {/*Resimin Olduğu Alan*/}
            <div className="w-full md:w-1/2">
              <img src={image} className="w-full rounded-xl" alt="Resim" />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Faq;
