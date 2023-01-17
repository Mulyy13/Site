import PropTypes from "prop-types";
import Navbar from "./navbar";
import Footer from "./footer";
import "../style/layout.scss";
// import { navbardata } from "../data/navbardata";

const Layout = ({ children }) => {
  return (
    <div className="app-wrapper">
      <Navbar />
      <main className="app-wrapper__main">{children}</main>
      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
