import React from "react";
import "../style/modal.scss";
import { BsArrowRightSquareFill, BsArrowLeftSquareFill } from "react-icons/bs";

const Modal = ({ clickedImage, handleRight, handleLeft, setClickedImage }) => {
  const handleClick = (e) => {
    if (e.target.classList.contains("dismiss")) {
      setClickedImage(null);
    }
  };
  return (
    <>
      <div className="overlay dismiss" onClick={handleClick}>
        <img src={clickedImage} alt="ss" />
        <span className="dismiss" onClick={handleClick}>
          X
        </span>
        <div className="overlay__right" onClick={handleRight}>
          <BsArrowRightSquareFill />
        </div>
        <div className="overlay__left" onClick={handleLeft}>
          <BsArrowLeftSquareFill />
        </div>
      </div>
    </>
  );
};

export default Modal;
