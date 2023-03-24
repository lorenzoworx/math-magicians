import PropTypes from 'prop-types';

function BuildCalc({ handleClick }) {
  const features = ['AC', '+/-', '%', '÷', '7', '8', '9', 'x', '4', '5', '6', '-', '1', '2',
    '3', '+', '0', '.', '='];
  return (
    <div className="calc">
      {features.map((element) => (<button type="button" key={element} value={element} onClick={handleClick}>{element}</button>))}
    </div>
  );
}

BuildCalc.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default BuildCalc;
