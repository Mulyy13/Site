import React, { useState } from "react";
import { navbardata } from "../data/navbardata";
import { Link } from "react-router-dom";
import "../style/navbar.scss";
import { FaFacebookF } from "react-icons/fa";

const Navbar = () => {
  const [title, setTitle] = useState(null);
  return (
    <div className="navbar-containter">
      <nav className="navbar-wrapper">
        <Link to={"/home"}>
          <img
            className="navbar-wrapper__logo"
            src="https://scontent-waw1-1.xx.fbcdn.net/v/t31.18172-8/16403418_218861631851041_109459661342966284_o.png?_nc_cat=104&ccb=1-7&_nc_sid=19026a&_nc_ohc=JkoSAb1UllwAX_qETW0&_nc_ht=scontent-waw1-1.xx&oh=00_AfCSTJfU9QnYybZL1O0hurHgutGHQ5O0oZqWPLmXcHWYqw&oe=63D3B31F"
            alt="logo"
          />
        </Link>
        {navbardata.map((item) => (
          <Link
            className={"navbar-wrapper__" + item.className}
            key={item.id}
            to={item.path}
            value={item.title}
            onClick={(e) => {
              console.log(e);
              setTitle(e.nativeEvent.value);
              console.log(title);
              // let text = e.target;
            }}
          >
            {item.title}
          </Link>
        ))}

        <a href="hhttps://www.facebook.com/mukoksjstudiopiekna" className="fb">
          <FaFacebookF className="facebook-icon" />
        </a>
      </nav>
      <div className="navbar-container__title">{title}</div>
    </div>
  );
};

export default Navbar;
