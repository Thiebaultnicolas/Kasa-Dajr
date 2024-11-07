import "./rate.scss";
import StarActive from "../../assets/star-active.svg";
import StarInactive from "../../assets/star-inactive.svg";
import PropTypes from "prop-types";

const Rate = ({ rating }) => {
  const starActive = Array.from({ length: parseInt(rating) }).map((e, idx) => (
    <img key={idx} src={StarActive} />
  ));

  const starInactive = Array.from({ length: 5 - parseInt(rating) }).map(
    (e, idx) => <img key={idx} src={StarInactive} />
  );

  return (
    <div className="rating">
      {starActive}
      {starInactive}
    </div>
  );
};

Rate.propTypes = {
  rating: PropTypes.string.isRequired, 
};

export default Rate;