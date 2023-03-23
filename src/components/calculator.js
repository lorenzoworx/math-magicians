import './calculator.css';
import CalcDisplay from './calcDisplay';
import BuildCalc from './calcBuild';

function Calculator() {
  return (
    <div className="calculator">
      <CalcDisplay />
      <BuildCalc />
    </div>
  );
}

export default Calculator;
