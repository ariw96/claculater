import {useReducer} from 'react';
import './App.css';
const ACTIONS = {
  ADD_DIGIT:"add-digit",
  CHOOES_OPERATION:"choose-operation",
  CLEAR:"clear",
  CLEAR_ENTRY:"clear-entry",
  EVALUATE:"evaluate"
}
function reducer (state,{type,payload}){
  switch(t)
}

function App() {
  const [{currentOperand,pendingOperand,operator},dispatch] = useReducer(calculatorReducer,{})            
  return (
    <div className="calculater-grid">
      <div className="output">
        <div className="previous-operand">{previousOperand}  {operation}</div>
        <div className="current-operand">{currentOperand}</div>
      </div>
      <button className= "span-two">AC</button>
      <button >DEL</button>
      <button >÷</button>
      <button >1</button>
      <button >2</button>
      <button >3</button>
      <button >*</button>
      <button >4</button>
      <button >5</button>
      <button >6</button>
      <button >+</button>
      <button >7</button>
      <button >8</button>
      <button >9</button>
      <button >9</button>
      <button >-</button>
      <button >.</button>
      <button >0</button>
      <button className="span-tow">=</button>
    </div>
  );
}

export default App;
