import React from "react";

const BestFor = () => {
  return (
    <main>
      <section>
        <div
          className="bg-white mx-auto justify-center items-center my-10 gap-10 container grid grid-col-1 sm:grid sm:grid-cols-2 font-fredoka  font-semibold
"
        >
          <div className="justify-center flex">
            <img
              /*   src="images/kids.jpg"*/
              src="https://playtolearnpreschool.us/wp-content/uploads/2015/05/FEATURED-SQUARED-2.png"
              alt=""
              className="rounded-full h-80 object-fill shadow-3xl "
            />
          </div>

          <div className="w-96 bg-white mx-auto ">
            <div>
              {" "}
              <h1 className="text-4xl font-bold my-4">Best For Your Kids</h1>
            </div>

            <div className=" flex ">
              {" "}
              <p className="text-xs leading-6">
                Being brave isn’t always a grand gesture sometimes it just means
                having a go attempting that difficult question, offering an
                answer in a lesson when you’re simply really trying new.
                {/* burada span vermeyi düşündüm ama yapamadım */}
              </p>
            </div>
            <div className="flex justify-center bg-teal-300 items-center my-8 p-2 gap-2 rounded-xl">
              <div className="flex justify-center">
                <p className="text-3xl font-black  text-white">14+</p>
                <p className="text-xs tracking-tighter leading-3 mt-1.5  text-white">
                  Years of experience
                </p>
                <div className="text-white font-thin mt-1.5">|</div>
              </div>
              <div className="flex justify-center">
                <p className="text-3xl font-bold  text-white">7K+</p>
                <p className="text-xs tracking-tighter leading-3 mt-1.5  text-white">
                  Students each year
                </p>
                <div className="text-white font-thin items-center mt-1.5">
                  |
                </div>
              </div>
              <div className="flex justify-center">
                <p className="text-3xl font-bold  text-white">15+</p>
                <p className="text-xs tracking-tighter leading-3 mt-1.5  text-white">
                  Award Wining
                </p>
              </div>
            </div>
            <div>
              <div className="flex gap-2 bg-white mb-2">
                <i class="fa-solid fa-chevron-right text-xs bg-teal-400 rounded-full text-center w-4 h-4 text-cyan-700"></i>
                <p className="text-4xs font-thin">
                  We believe every child is intelligent so we care.
                </p>
              </div>
              <div className="flex gap-2 bg-white">
                <i class="fa-solid fa-chevron-right text-xs bg-teal-400 rounded-full text-center w-4 h-4 text-cyan-700"></i>
                <p className="text-4xs font-thin">
                  Teachers make a difference of your child.
                </p>
              </div>
            </div>
            <div className="flex justify-start m-4 gap-6">
              <div className="">
                <button className="bg-orange-400 text-white rounded-full text-center text-4xs pl-6 pr-6 p-1.5 font-extralight hover:bg-teal-300">
                  View More
                </button>
              </div>
              <div className="flex justify-center gap-2">
                <i class="fa-regular fa-circle-play mt-1.5  hover:text-teal-300 "></i>
                <div className="h-6">
                  {" "}
                  <a href="https://www.youtube.com/watch?v=l62SIcbCPwo&t=8s">
                    <h className="text-4xs font-thin  hover:text-teal-300">
                      Promotional Video
                    </h>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default BestFor;
