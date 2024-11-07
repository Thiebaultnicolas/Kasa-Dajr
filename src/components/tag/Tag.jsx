import "./tag.scss";
import PropTypes from "prop-types";

const Tag = ({ name }) => {
  return <p className="tag">{name}</p>;
};

Tag.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Tag;