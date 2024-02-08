import PropTypes from "prop-types";

export let QueueCard = ({ value, index }) => {
  QueueCard.propTypes = {
    value: PropTypes.number,
    index: PropTypes.number,
  };

  return <div className="queue-card">
    Item ({value}) with ID ({index})
  </div>;
}