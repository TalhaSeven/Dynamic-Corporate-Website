import React, { useEffect, useCallback } from "react";

function GalleryModal({
  isOpen,
  onClose,
  content,
  images,
  setSelectedImageIndex,
}) {
  // Önceki resmi görüntüleme fonksiyonu
  const handlePrevious = () => {
    setSelectedImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  // Sonraki resmi görüntüleme fonksiyonu
  const handleNext = () => {
    setSelectedImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Klavye ok tuşlarına tepki verme fonksiyonu
  const handleKeyDown = useCallback(
    (e) => {
      if (e.keyCode === 37) {
        e.preventDefault();
        handlePrevious();
      } else if (e.keyCode === 39) {
        e.preventDefault();
        handleNext();
      }
    },
    [handlePrevious, handleNext]
  );

  // Klavye olaylarını dinleme ve temizleme
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.keyCode === 37) {
        e.preventDefault();
        handlePrevious();
      } else if (e.keyCode === 39) {
        e.preventDefault();
        handleNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handlePrevious, handleNext]);

  // Modal açık değilse null döndür
  if (!isOpen) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-[#000000b3] flex items-center justify-center z-[999]">
      <div className="rounded-lg bg-[#fff] overflow-auto p-5 relative shadow-[0px_0px_15px_rgba(0,0,0,0.3)]">
        {/* Modal'ı kapatma düğmesi */}
        <button
          className="absolute top-0 right-0 bg-[#FF9B24] text-white pb-1 px-4 rounded-lg cursor-pointer text-[20px]"
          onClick={onClose}
        >
          Close
        </button>
        <div className="text-center px-5 py-5">
          {/* Önceki ve sonraki resmi görüntüleme düğmeleri */}
          {content} {/* İçerik burada görüntülenir */}
        </div>
      </div>
      <button className="absolute top-2/4 left-0" onClick={handlePrevious}>
        <span className="h-10 w-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="4"
            stroke="white"
            className="h-10 w-10 transform rotate-90"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </span>
      </button>
      <button className="absolute top-2/4 right-0" onClick={handleNext}>
        <span className="h-10 w-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="4"
            stroke="white"
            className="h-10 w-10 transform -rotate-90"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </span>
      </button>
    </div>
  );
}

export default GalleryModal;
