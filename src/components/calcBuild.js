function BuildCalc() {
  const features = ['AC', '+/-', '%', '÷', '7', '8', '9', 'x', '4', '5', '6', '-', '1', '2',
    '3', '+', '0', '.', '='];
  return (
    <div className="calc">
      {features.map((element) => (<button type="button" key={element}>{element}</button>))}
    </div>
  );
}

export default BuildCalc;
