import React from "react";
import "../style/offer.scss";
import { Link, useSearchParams } from "react-router-dom";
import { offerData } from "../data/offerData";

const Offer = () => {
  // const [searchParams] = useSearchParams();
  // const filter = searchParams.get("filter");
  // const setFilterParams = (value) => `?filter=${value}`;
  // const data = offerData.filter((item) => {
  //   if (!filter) return true;
  //   if (item.type === filter) return true;
  //   return false;
  // });

  return (
    <div className="offer-wrapper">
      {}
      <Link className="offer-wrapper__offer-box">
        <img
          src="https://piotrsierpinski.pl/wp-content/uploads/2021/06/fryzjer-poznan.jpg"
          alt="kk"
        />
        <Link className="offer-box__text">Włosy</Link>
      </Link>
      <Link className="offer-wrapper__offer-box">
        <img
          src="https://piotrsierpinski.pl/wp-content/uploads/2021/06/fryzjer-poznan.jpg"
          alt="kk"
        />
        <Link className="offer-box__text">Twarz</Link>
      </Link>
      <Link className="offer-wrapper__offer-box">
        <img
          src="https://piotrsierpinski.pl/wp-content/uploads/2021/06/fryzjer-poznan.jpg"
          alt="kk"
        />
        <Link className="offer-box__text">Dłonie</Link>
      </Link>
      <Link className="offer-wrapper__offer-box">
        <img
          src="https://piotrsierpinski.pl/wp-content/uploads/2021/06/fryzjer-poznan.jpg"
          alt="kk"
        />
        <Link className="offer-box__text">masaż</Link>
      </Link>
      <Link className="offer-wrapper__offer-box">
        <img
          src="https://piotrsierpinski.pl/wp-content/uploads/2021/06/fryzjer-poznan.jpg"
          alt="kk"
        />
        <Link className="offer-box__text">regeneracja</Link>
      </Link>
      <Link className="offer-wrapper__offer-box">
        <img
          src="https://piotrsierpinski.pl/wp-content/uploads/2021/06/fryzjer-poznan.jpg"
          alt="kk"
        />
        <Link className="offer-box__text">inne zabiegi</Link>
      </Link>
      <div className="offer-wrapper__offer-box">
        <img
          src="https://piotrsierpinski.pl/wp-content/uploads/2021/06/fryzjer-poznan.jpg"
          alt="kk"
        />
        <Link className="offer-box__text">masaż</Link>
      </div>
      <div className="offer-wrapper__offer-box">
        <img
          src="https://piotrsierpinski.pl/wp-content/uploads/2021/06/fryzjer-poznan.jpg"
          alt="kk"
        />
        <Link className="offer-box__text">regeneracja</Link>
      </div>
      <div className="offer-wrapper__offer-box">
        <img
          src="https://piotrsierpinski.pl/wp-content/uploads/2021/06/fryzjer-poznan.jpg"
          alt="kk"
        />
        <Link className="offer-box__text">inne zabiegi</Link>
      </div>
    </div>
  );
};

export default Offer;
