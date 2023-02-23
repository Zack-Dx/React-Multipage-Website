import web from "../images/hero-img.png";
import "../About.css";
import Common from "../components/Common";
const About = () => {
  return (
    <>
      <Common
        name="About"
        imgSrc={web}
        visit="/contact"
        btnName="Contact Now"
        alternate="about_img"
      />
    </>
  );
};

export default About;
