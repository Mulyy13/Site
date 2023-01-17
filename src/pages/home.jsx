import Slider from "../components/slider";
import "../style/home.scss";

const Home = () => {
  return (
    <>
      <div className="home-wrapper">
        <div className="image-wrapper">
          <img
            alt="s"
            src="https://piotrsierpinski.pl/wp-content/uploads/2021/06/fryzjer-poznan.jpg"
            className="image-wrapper__image"
          />
        </div>
        <div className="home-wrapper__element">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente cum
          optio velit ducimus odio est beatae animi? Quas similique temporibus,
          cum id voluptas dolorem perferendis obcaecati nam eius? Officia,
          voluptate.
        </div>
        <div className="home-wrapper__element">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
          aliquid inventore quas necessitatibus quo odio, saepe error
          reprehenderit commodi rerum id ex, expedita illum quibusdam earum
          repellendus reiciendis eveniet ratione!
        </div>
        <img
          alt="s"
          src="https://piotrsierpinski.pl/wp-content/uploads/2021/06/fryzjer-poznan.jpg"
          className="image-wrapper__image"
        />
        <img
          alt="s"
          src="https://piotrsierpinski.pl/wp-content/uploads/2021/06/fryzjer-poznan.jpg"
          className="image-wrapper__image"
        />
        <div className="home-wrapper__element">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur
          nulla quod necessitatibus nam ipsa repudiandae, earum quidem neque,
          accusantium assumenda vitae fugiat modi quae maxime dolorem atque
          soluta voluptates porro?
        </div>

        <div className="home-wrapper__element">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In ex fugiat
          asperiores molestias illo nihil! Vitae iste repellendus sunt, ea
          voluptas esse quis velit, enim architecto unde dolor magnam
          blanditiis.
        </div>
        <img
          alt="s"
          src="https://piotrsierpinski.pl/wp-content/uploads/2021/06/fryzjer-poznan.jpg"
          className="image-wrapper__image"
        />
      </div>
      <Slider />
    </>
  );
};

export default Home;
