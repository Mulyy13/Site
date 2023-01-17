import React from "react";
import { GalleryData } from "../data/galleryData";
import "../style/gallery.scss";
import { useState } from "react";
import Modal from "../components/modal";

const Gallery = () => {
  const [clickedImage, setClickedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);

  const handleImage = (item, id) => {
    setCurrentIndex(id);
    setClickedImage(item.src);
  };
  const handleLeft = () => {
    const newIndex = currentIndex - 1;
    const newUrl = GalleryData.filter((item) => {
      return GalleryData.indexOf(item) === newIndex;
    });
    const newItem = newUrl[0].src;
    setClickedImage(newItem);
    setCurrentIndex(newIndex);
  };

  const handleRight = () => {
    const totalLength = GalleryData.length;
    if (currentIndex + 1 >= totalLength) {
      setCurrentIndex(0);
      const newUrl = GalleryData[0].src;
      setClickedImage(newUrl);
      return;
    }
    const newIndex = currentIndex + 1;
    const newUrl = GalleryData.filter((item) => {
      return GalleryData.indexOf(item) === newIndex;
    });
    const newItem = newUrl[0].src;
    setClickedImage(newItem);
    setCurrentIndex(newIndex);
  };

  return (
    <div className="images-container">
      {clickedImage && (
        <Modal
          clickedImage={clickedImage}
          handleRight={handleRight}
          setClickedImage={setClickedImage}
          handleLeft={handleLeft}
        />
      )}
      {GalleryData.map((item, id) => (
        <div className={"images-container__" + item.className} key={item.id}>
          <img
            src={item.src}
            alt="paznokcie"
            onClick={() => handleImage(item, id)}
          />
        </div>
      ))}
    </div>
  );
};

export default Gallery;
