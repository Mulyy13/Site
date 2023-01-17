import React, { useState, useEffect } from "react";
import slider1 from "../images/slider1.jpg";
import slider2 from "../images/slider4.jpg";
import slider3 from "../images/slider6.jpg";
import "../style/slider.scss";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";

const sliders = [slider1, slider2, slider3];

export const Slider = () => {
  const [slider, setSlider] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (slider >= sliders.length - 1) {
        return setSlider(0);
      }
      return setSlider((prevState) => prevState + 1);
    }, 4000);

    return () => clearInterval(interval);
  }, [slider]);

  const swipeRight = () => {
    if (slider >= sliders.length - 1) {
      setSlider(0);
    } else {
      setSlider(slider + 1);
    }
  };

  const swipeLeft = () => {
    if (slider < 1) {
      setSlider(sliders.length - 1);
    } else {
      setSlider(slider - 1);
    }
  };

  return (
    <div className="slider-wrapper">
      <div
        className="slider-wrapper__slider-images"
        style={{
          backgroundImage: `url("${sliders[slider]}")`,
        }}
      >
        <div
          className="slider-wrapper__slider-images--previous-image"
          onClick={swipeLeft}
        >
          <AiFillCaretLeft />
        </div>
        <div
          className="slider-wrapper__slider-images--next-image"
          onClick={swipeRight}
        >
          <AiFillCaretRight />
        </div>
      </div>
    </div>
  );
};

export default Slider;
