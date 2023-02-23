import web from "../images/s1.jpg";
import app from "../images/app.jpeg";
import android from "../images/android.jpeg";
import software from "../images/software.jpeg";
import marketing from "../images/marketing.jpg";
import digital_marketing from "../images/digital.jpeg";
import Card from "../components/Card";

const Service = () => {
  const cardData = [
    {
      imgSrc: web,
      title: "Web Development",
    },
    {
      imgSrc: app,
      title: "App Development",
    },
    {
      imgSrc: android,
      title: "Android Development",
    },
    {
      imgSrc: software,
      title: "Software Development",
    },
    {
      imgSrc: marketing,
      title: "Marketing Service",
    },
    {
      imgSrc: digital_marketing,
      title: "Digital Marketing",
    },
  ];
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Our Services</h1>
      </div>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">
              {cardData.map((card, index) => {
                return (
                  <Card
                    key={index}
                    imgSrc={card.imgSrc}
                    title={card.title}
                    visit="/"
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
