import PropTypes from 'prop-types';
import { ACTIONS } from './calculatorActions';  // Import ACTIONS from your actions file

const OperationButton = ({ operation, dispatch }) => {
  return (
    <button onClick={() => dispatch({ type: ACTIONS.CHOOSE_OPERATION, payload: { operation } })}>
      {operation}
    </button>
  );
};

OperationButton.propTypes = {
  operation: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default OperationButton;




