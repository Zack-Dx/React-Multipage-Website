import { Link } from "react-router-dom";
import web from "../images/img2.svg";
import "../Home.css";
import Common from "../components/Common";
const Home = () => {
  return (
    <>
      <Common
        name="Grow your business with"
        imgSrc={web}
        visit="/service"
        btnName="Get Started"
        alternate="home_img"
      />
    </>
  );
};

export default Home;
