import { useState } from "react";
import "./Parentsays.css";

const Parentsays = () => {
  // modal
  const [showVideo, setShowVideo] = useState(false);

  const toggleVideo = () => {
    setShowVideo(!showVideo);
  };

  // slider
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div className="containerDiv ">
      {/*  Modal Video */}

      <div className="modalImg  relative w-screen   flex items-center justify-center">
        <img
          src="../image/testimonail-bg.9724f680.png" // Önizleme resmi URL'sini buraya ekleyin
          alt="Video Preview"
          className={`w-full h-full object-cover ${
            showVideo ? "hidden" : "block"
          }`}
        />
        {!showVideo && (
          <button
            className="playBtn absolute  text-white rounded-full"
            onClick={toggleVideo}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="90"
              height="90"
              viewBox="0 0 40 40"
            >
              <circle
                cx="20"
                cy="20"
                r="16"
                stroke="white"
                strokeWidth="2"
                fill="none"
              />
              <polygon points="15,12 15,28 28,20" fill="white" />
            </svg>
          </button>
        )}

        {showVideo && (
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="bg-black bg-opacity-70 absolute inset-0"></div>
            <div className=" w-4/5 h-3/4 relative z-50">
              <button
                className="closeButton absolute top-4 right-4 bg-red-500 text-white p-2 rounded-full hover:bg-red-600"
                onClick={toggleVideo}
              >
                Close
              </button>
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  src="https://www.youtube.com/embed/9YYxvVawZdI" // YouTube video URL'sini buraya ekleyin
                  title="YouTube Video"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                ></iframe>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Slider */}

      <div className="sliderDiv w-full relative ">
        <div className="w-full h-full flex">
          <div
            className={`w-full h-full ${
              currentPage === 1 ? "block" : "hidden"
            }`}
          >
            {/* İlk Sayfa */}
            <div className="pages w-full h-full   text-white ">
              
              <h1 className="text-4xl pt-20 mt-35 ps-5">Parents Says</h1>
              <div className="starIcons flex mt-10 ms-5 text-xl gap-1 text-yellow-400">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </div>
              <p className="mt-10 m-4">
                Happy Christmas to the whole Kindedo from everyone at Monkton. A
                big thank you to Kindedo pupil Will who lent his Kindedo to this
                card.
              </p>

              <div className="flex items-center justify-between mt-10 p-4 ">
                <div className="flex justify-center items-center gap-3">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ_BYDkDg5q_L3co0ZetO7Am-_gjBeyUgRvQ2BW0fotuDk-rtEapPhvyaGJn2DOV1kBKQ&usqp=CAU"
                    alt="profil1"
                    className="w-20 h-20 rounded-full"
                  />
                  <span>Norma J. Johnston</span>
                </div>
                <i className="fa-solid fa-quote-right text-5xl "></i>
              </div>
            
            </div>
          </div>
          <div
            className={`w-full h-full ${
              currentPage === 2 ? "block" : "hidden"
            }`}
          >
            {/* İkinci Sayfa */}
            <div className="pages w-full h-full   text-white ">
              <h1 className="text-4xl pt-20 mt-35 ps-5">Parents Says</h1>
              <div className="starIcons flex mt-10 ms-5 text-xl gap-1 text-yellow-400">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
              </div>
              <p className="mt-10 ms-5">
                Your child will laugh, play and explore at Summer at MLS. From
                soccer, water play, art, music, theater and science, Shabbat
                celebrations, cooking.
              </p>

              <div className="flex items-center justify-between mt-10 p-4 ">
                <div className="flex justify-center items-center gap-3">
                  <img
                    src="https://i.pinimg.com/736x/9d/28/35/9d2835c305f54f35279d0b393bcd50cc.jpg"
                    alt="profil1"
                    className="w-20 h-20 rounded-full"
                  />
                  <span>Mateo D. Daniel</span>
                </div>
                <i class="fa-solid fa-quote-right text-5xl "></i>
              </div>
            </div>
          </div>
          <div
            className={`w-full h-full ${
              currentPage === 3 ? "block" : "hidden"
            }`}
          >
            {/* Üçüncü Sayfa */}
            <div className="pages w-full h-full   text-white ">
              <h1 className="text-4xl pt-20 mt-35 ps-5">Parents Says</h1>
              <div className="starIcons flex mt-10 ms-5 text-xl gap-1 text-yellow-400">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
              </div>
              <p className="mt-10 ms-5">
                The unique Mentone Grammar Community is our point of difference
                compared to many in the industry. The School often talks about
                the concept.
              </p>

              <div className="flex items-center justify-between mt-10 p-4 ">
                <div className="flex justify-center items-center gap-3">
                  <img
                    alt="profil1"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ_BYDkDg5q_L3co0ZetO7Am-_gjBeyUgRvQ2BW0fotuDk-rtEapPhvyaGJn2DOV1kBKQ&usqp=CAU"
                    className="w-20 h-20 rounded-full"
                  />
                  <span>Michael M. Mason</span>
                </div>
                <i class="fa-solid fa-quote-right text-5xl "></i>
              </div>
            </div>
          </div>
        </div>

        <div className="sliderButton">
          <button
            className={`w-4 h-2 rounded-full bg-white hover:bg-black`}
            onClick={() => handlePageChange(1)}
          ></button>
          <button
            className={`w-4 h-2 rounded-full bg-white hover:bg-black`}
            onClick={() => handlePageChange(2)}
          ></button>
          <button
            className={`w-4 h-2 rounded-full bg-white hover:bg-black`}
            onClick={() => handlePageChange(3)}
          ></button>
        </div>
      </div>
    </div>
  );
};

export default Parentsays;
