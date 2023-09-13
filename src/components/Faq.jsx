import React, { useState } from "react";
import { TECollapse } from "tw-elements-react";
import { data } from "../data.js"; // Veri kaynağını içe aktar.

const Faq = () => {
 
  const [activeElement, setActiveElement] = useState(null); // Faq elemanlarının açık/kapalı durumunu tutan state.

  // "data" dizisinden "modulName" özelliği "component2" olan veriyi buluyoruz.
  const faqData = data.find((item) => item.modulName === "component2");

  // Destructuring ile faq verisini çıkartıyoruz.
  const { title1, image, other } = faqData.data;

  // Tıklanma işlemi için bir işlev.
  const handleClick = (value) => {
    if (value === activeElement) {
      // Eğer tıklanan eleman zaten açıksa, kapat.
      setActiveElement(null);
    } else {
      // Eğer tıklanan eleman kapalıysa, aç.
      setActiveElement(value);
    }
  };

  return (
    <div className="flex flex-col md:flex-row gap-8 p-20 font-fredoka">
      {/* Sol Alan */}
      <div id="accordionExample" className="w-full md:w-1/2">
        {/* Başlık */}
        <h4 className="text-[23px] md:text-[35px] lg:text-[40px] xl:text-5xl font-semibold mb-4 whitespace-nowrap text-center">{title1}</h4>

        {/* FAQ öğelerini listeleyin */}
        {other.map((item, index) => (
          <div
            key={index}
            className="mb-3 rounded-lg border border-neutral-200 bg-white dark:border-neutral-600 dark:bg-neutral-800"
          >
            <h2 className="mb-0" id={`heading${index}`}>
              {/* Soru başlığı */}
              <button
                className={`text-white rounded-lg ${
                  activeElement === index
                    ? "dark:shadow-inset-0 -1px 0 rgba(75,85,99)"
                    : ""
                } group relative flex w-full items-center border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white [&:not([data-te-collapse-collapsed])]:bg-[#FF9B24]`}
                type="button"
                onClick={() => handleClick(index)} // Butona tıklama işlevi ekleniyor.
                aria-expanded={activeElement === index}
                aria-controls={`collapse${index}`}
              >
                {item.title} {/* Soru başlığı metni */}
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
            {/* Açılan içerik */}
            <TECollapse
              show={activeElement === index} // Eğer açık element bu element ise Collapse gösterilir.
              className="!mt-0 !rounded-b-none !shadow-none"
            >
              <div className="px-5 py-4">{item.content}</div>
            </TECollapse>
          </div>
        ))}
      </div>
      {/* Sağ Alan - Resim */}
      <div className="w-full md:w-1/2">
        <img src={image} className="w-full rounded-xl" alt="Resim" />
      </div>
    </div>
  );
};

export default Faq;
