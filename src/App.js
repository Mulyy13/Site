import "./style/App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/about";
import Home from "./pages/home";
import Layout from "./components/layout";
import Gallery from "./pages/gallery";
import PriceList from "./pages/pricelist";
import Offer from "./pages/offer";
// import Navbar from "./components/navbar";
function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/about" element={<About />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/offer" element={<Offer />}></Route>
          <Route path="/gallery" element={<Gallery />}></Route>
          <Route path="/price-list" element={<PriceList />}></Route>
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
