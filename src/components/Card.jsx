import { Link } from "react-router-dom";
const Card = (props) => {
  return (
    <>
      <div className=" col-lg-4 col-md-6 col-sm-6">
        <div className="card">
          <img src={props.imgSrc} className="card-img-top" alt="card_img" />
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <Link to={props.visit} className="btn btn-primary">
              Read More
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
