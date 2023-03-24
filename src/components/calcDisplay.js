import PropTypes from 'prop-types';

function CalcDisplay({ result }) {
  return (
    <div className="calculatorDisplay">
      <span className="current">{result}</span>
    </div>
  );
}

CalcDisplay.propTypes = {
  result: PropTypes.string.isRequired,
};

export default CalcDisplay;
