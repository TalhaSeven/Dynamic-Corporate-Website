// import React, { useState } from "react";
// import "./OurTeacherSwiper.css";

// const OurTeacherSwiper = () => {
//   const homeSlides = [
//     {
//       url: "https://images.unsplash.com/photo-1693946282321-32024c5072b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
//     },

//     {
//       url: "https://images.unsplash.com/photo-1694344862077-4d683f1a58e5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
//     },
//     {
//       url: "https://images.unsplash.com/photo-1585817934451-158d9f444228?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
//     },
//     {
//       url: "https://images.unsplash.com/photo-1693946282321-32024c5072b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
//     },
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);

//   const goToSlide = (slideIndex) => {
//     setCurrentIndex(slideIndex);
//   };

//   return (
//     <div className="bg-red-400 max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 ">
//       <div
//         style={{ backgroundImage: `url(${homeSlides[currentIndex].url})` }}
//         className="w-96 inline-block  h-full rounded-2xl bg-center bg-cover duration-500 "
//       ></div>

//       <div className="flex top-4 justify-center py-2">
//         {homeSlides.map((slide, slideIndex) => (
//           <div
//             key={slideIndex}
//             onClick={() => goToSlide(slideIndex)}
//             className="cursor-pointer w-6 h-2 bg-white hover:bg-black m-2 rounded-full "
//           >
//             {/* <RxDot /> */}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default OurTeacherSwiper;
