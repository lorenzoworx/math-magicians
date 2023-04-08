import './calculator.css';
import { useState } from 'react';
import CalcDisplay from './calcDisplay';
import BuildCalc from './calcBuild';
import calculate from '../logic/calculate';

const calcObject = {
  total: null,
  next: null,
  operation: null,
};

function Calculator() {
  const [calcResult, setCalcResult] = useState('0');
  const handleClick = (e) => {
    const { total = null, next = null, operation = null } = calculate(calcObject, e.target.value);
    calcObject.total = total;
    calcObject.next = next;
    calcObject.operation = operation;
    if (calcObject.total || calcObject.next) {
      setCalcResult(calcObject.next ? calcObject.next : calcObject.total);
    } else {
      setCalcResult('0');
    }
  };
  return (
    <div className="calculatorPage">
      <h1>Lets do some math</h1>
      <div className="calculator">
        <CalcDisplay result={calcResult} />
        <BuildCalc handleClick={handleClick} />
      </div>
    </div>
  );
}

export default Calculator;
