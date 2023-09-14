import React from "react";
import "./Modal.css";

function GalleryModal({ isOpen, onClose, content }) {
  if (!isOpen) return null;

  return (
    <div className="gallery-modal-overlay" onClick={onClose}>
      <div className="gallery-modal rounded-md">
        <button className="gallery-modal-close-button" onClick={onClose}>
          Close
        </button>
        <div className="gallery-modal-content">{content}</div>
      </div>
    </div>
  );
}

export default GalleryModal;
