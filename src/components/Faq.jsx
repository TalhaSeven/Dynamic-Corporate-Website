import { useEffect } from "react";
import { Collapse, initTE } from "tw-elements";

const Faq = () => {
  useEffect(() => {
    initTE(Collapse);
  }, []);

  return (
    <div className="bg-white flex flex-col lg:flex-row max-w-[1320px] px-5 sm:px-30 py-30  space-y-5 lg:space-y-0 lg:space-x-5 mx-auto font-fredoka">
      <div className="basis-1/2 p-10 md:min-h-[380px]  rounded-3xl flex flex-col space-y-5 lg:space-y-8">
        <h2 className="text-[23px] md:text-[35px] lg:text-[40px] xl:text-5xl font-semibold mb-3 whitespace-nowrap text-center">
          Know More <br />
          About Kindedo
        </h2>
        <div id="accordionFlushExample">
          <div className="w-full rounded-t-lg border-l-0 border-r-0 border-t-0 border-neutral-200 bg-white">
            <h2 className="mb-0" id="flush-headingOne">
              <button
                className="group relative flex w-full items-center rounded-full border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:text-black [&:not([data-te-collapse-collapsed])]:bg-[#FF9B24] [&:not([data-te-collapse-collapsed])]:text-white [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)]"
                type="button"
                data-te-collapse-init
                data-te-target="#flush-collapseOne"
                aria-expanded="false"
                aria-controls="flush-collapseOne"
              >
                What is the best age to start Kindergarten?
                <span className="-mr-1 ml-auto h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:mr-0 group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-blue-300 dark:group-[[data-te-collapse-collapsed]]:fill-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </span>
              </button>
            </h2>
            <div
              id="flush-collapseOne"
              className="!visible border-0"
              data-te-collapse-item
              data-te-collapse-show
              aria-labelledby="flush-headingOne"
              data-te-parent="#accordionFlushExample"
            >
              <p className="px-5 py-4 font-normal">
                Some states and countries implement mandatory early childhood
                education. With such rules, many preschool and kindergarten
                learning centers are built.
              </p>
            </div>
          </div>
          <div className="w-full rounded-t-lg border-l-0 border-r-0 border-t-0 border-neutral-200 bg-white ">
            <h2 className="mb-0" id="flush-headingTwo">
              <button
                className="group relative flex w-full items-center rounded-full border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:text-black [&:not([data-te-collapse-collapsed])]:bg-[#FF9B24] [&:not([data-te-collapse-collapsed])]:text-white [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)]"
                type="button"
                data-te-collapse-init
                data-te-collapse-collapsed
                data-te-target="#flush-collapseTwo"
                aria-expanded="false"
                aria-controls="flush-collapseTwo"
              >
                Which is the best preschool for your child ?
                <span className="-mr-1 ml-auto h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:mr-0 group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-blue-300 dark:group-[[data-te-collapse-collapsed]]:fill-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </span>
              </button>
            </h2>
            <div
              id="flush-collapseTwo"
              className="!visible hidden border-0"
              data-te-collapse-item
              aria-labelledby="flush-headingTwo"
              data-te-parent="#accordionFlushExample"
            >
              <p className="px-5 py-4 font-normal">
                Right after you book your party, you’ll receive an email
                confirming the date, time, and details about what’s included in
                the package you’ve selected result.
              </p>
            </div>
          </div>
          <div className="w-full rounded-t-lg  border-l-0 border-r-0 border-t-0 border-neutral-200 bg-white">
            <h2 className="mb-0" id="flush-headingThree">
              <button
                className="group relative flex w-full items-center rounded-full border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:text-black [&:not([data-te-collapse-collapsed])]:bg-[#FF9B24] [&:not([data-te-collapse-collapsed])]:text-white [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)]"
                type="button"
                data-te-collapse-init
                data-te-collapse-collapsed
                data-te-target="#flush-collapseThree"
                aria-expanded="false"
                aria-controls="flush-collapseThree"
              >
                What is the toution fee on first year?
                <span className="-mr-1 ml-auto h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:mr-0 group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-blue-300 dark:group-[[data-te-collapse-collapsed]]:fill-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </span>
              </button>
            </h2>
            <div
              id="flush-collapseThree"
              classNameName="!visible hidden"
              data-te-collapse-item
              aria-labelledby="flush-headingThree"
              data-te-parent="#accordionFlushExample"
            >
              <p className="px-5 py-4 font-normal">
                There will also be some fantastic outdoor entertainment,
                desserts and drinks, plus tours of the School for those who want
                to continue the celebrations.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="basis-1/2 p-10 md:min-h-[380px]  rounded-3xl flex flex-col space-y-5 lg:space-y-8">
        <img
          src="./image/1.jpg"
          alt="kids"
          className="block  w-full  max-h-[400px]  md:max-h-[440px] lg:h-[496px] object-cover rounded-3xl"
        />
      </div>
    </div>
  );
};

export default Faq;
