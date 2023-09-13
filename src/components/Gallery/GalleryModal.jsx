import React from "react";

function GalleryModal({ isOpen, onClose, content }) {
  if (!isOpen) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-[#000000b3] flex items-center justify-center z-[999]">
      <div className="rounded-lg bg-[#fff] overflow-auto p-5 relative shadow-[0px_0px_15px_rgba(0,0,0,0.3)]" onClick={onClose}>
        <button className="absolute top-0 right-0 bg-[#FF9B24] text-white pb-1 px-4 rounded-lg cursor-pointer text-[20px]" onClick={onClose}>
          Close
        </button>
        <div className="text-center">{content}</div>
      </div>
    </div>
  );
}

export default GalleryModal;
