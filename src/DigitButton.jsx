
import PropTypes from "prop-types"; // Import PropTypes

const DigitButton = ({ digit, dispatch }) => {
  return (
    <button onClick={() => dispatch({ type: "add-digit", payload: { digit } })}>
      {digit}
    </button>
  );
};

DigitButton.propTypes = {
  digit: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default DigitButton;
