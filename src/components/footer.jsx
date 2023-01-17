import "../style/footer.scss";
import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="footer-wrapper">
        <div className="footer-wrapper__location">
          <h5>Lokalizacja</h5>
          <span>Fryderyka Chopina 12,</span>
          <span> 32-800 Brzesko</span>
        </div>
        <div className="footer-wrapper__info">
          <h5>Informacje i zapisy</h5>
          <span>Tel. +48 14 686 20 44</span>
          <span>
            e-mail:<a href="mailto: nazwa@onet.pl"> nazwa@onet.pl</a>
          </span>
        </div>
        <div className="footer-wrapper__opening-hours">
          <h5>Godziny otwarcia</h5>
          <span>Pn-pt - 8:00-18:00</span>
          <span>Sobota - 8:00 - 16:00</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
