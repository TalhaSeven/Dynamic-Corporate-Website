import React from "react";

const Component1 = ({ item }) => {
  const dangerouslyHtml = { 
    __html: new DOMParser().parseFromString(item?.data?.content1 || "", "text/html").body.textContent 
  };
  
  return (
    <>
      {item && (
        <main>
          <section>
            <div className="bg-white mx-auto justify-center items-center my-10 gap-10 container grid grid-cols-1 lg:grid-cols-2 font-fredoka  font-semibold">
              {item.data.image && (
                <div className="justify-center flex items-center ">
                  <img
                    src={item.data.image}
                    alt=""
                    className="rounded-full h-80 object-fill shadow-3xl "
                  />
                </div>
              )}

              <div className=" bg-white ">
                {item.data.title1 && (
                  <div>
                    <h1 className="text-4xl font-bold my-4">
                      {item.data.title1}
                    </h1>
                  </div>
                )}

                <div className=" flex ">
                  <p
                    className="leading-6"
                    dangerouslySetInnerHTML={dangerouslyHtml}
                  ></p>
                </div>
                <div className=" grid grid-cols-1 divide-y md:grid-cols-3 px-8 md:px-2  md:divide-x md:divide-y-0  bg-teal-300  my-8 p-2  rounded-xl">
                  <div className="flex flex-row lg:flex-col xl:flex-row justify-start md:justify-center items-center ">
                    <p className="text-3xl font-black  text-white">14+</p>
                    <div className="ps-2 flex lg:flex-col">
                      <p className="text-sm pe-1 tracking-tighter leading-3 mt-1.5  text-white">
                        Years of
                      </p>
                      <p className="text-sm tracking-tighter leading-3 mt-1.5  text-white">
                        experience
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-row lg:flex-col xl:flex-row justify-start  md:justify-center items-center">
                    <p className="text-3xl font-bold  text-white">7K+</p>
                    <div className="ps-2 flex lg:flex-col">
                      <p className="text-sm pe-1 tracking-tighter leading-3 mt-1.5  text-white">
                        Students
                      </p>
                      <p className="text-sm tracking-tighter leading-3 mt-1.5  text-white">
                        each year
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-row lg:flex-col xl:flex-row justify-start  md:justify-center items-center ">
                    <p className="text-3xl font-bold  text-white">15+</p>
                    <div className="ps-2 flex lg:flex-col">
                      <p className="text-sm pe-1 tracking-tighter leading-3 mt-1.5  text-white">
                        Award
                      </p>
                      <p className="text-sm tracking-tighter leading-3 mt-1.5  text-white">
                        Wining
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex gap-2 bg-white mb-2">
                    <i className="fa-solid fa-chevron-right text-xs bg-teal-400 rounded-full text-center w-4 h-4 text-cyan-700"></i>
                    <p className="font-thin">
                      We believe every child is intelligent so we care.
                    </p>
                  </div>
                  <div className="flex gap-2 bg-white">
                    <i className="fa-solid fa-chevron-right text-xs bg-teal-400 rounded-full text-center w-4 h-4 text-cyan-700"></i>
                    <p className="font-thin">
                      Teachers make a difference of your child.
                    </p>
                  </div>
                </div>
                <div className="flex justify-start m-4 gap-6">
                  <div className="">
                    {item.data.button && (
                      <button className="bg-orange-400 text-white rounded-full text-center pl-6 pr-6 p-1.5 font-extralight hover:bg-teal-300">
                        {item.data.button}
                      </button>
                    )}
                  </div>
                  <div className="flex justify-center gap-2">
                    <i className="fa-regular fa-circle-play mt-1.5  hover:text-teal-300 "></i>
                    <div className="h-6">
                      <a href="https://www.youtube.com/watch?v=l62SIcbCPwo&t=8s">
                        <h1 className="font-thin  hover:text-teal-300">
                          Promotional Video
                        </h1>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      )}
    </>
  );
};

export default Component1;
