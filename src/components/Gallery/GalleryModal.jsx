import React from "react";
import "./Modal.css";

function GalleryModal({ isOpen, onClose, content }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal">
        <button className="modal-close-button" onClick={onClose}>
          Close
        </button>
        <div className="modal-content">{content}</div>
      </div>
    </div>
  );
}

export default GalleryModal;
