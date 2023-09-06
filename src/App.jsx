
 import { useReducer } from "react";
 import DigitButton from "./DigitButton";
 import OperationButton from "./OperationButton";
 import "./style.css";
 import ThemeSelector from './components/ThemeSelector';
 import { reducer } from './calculatorReducer';
 import { formatOperand } from './calculatorFormatting';
 import { ACTIONS } from "./calculatorActions";
 
 

 function App() {
  const [{ currentOperand, previousOperand, operation }, dispatch] = useReducer(
    reducer,
    { currentOperand: "0" } 
  );
 
   return (
     <div className="calculator-grid">
      <div className="theme-selector">
        <h3 className="calc">calc</h3>
        <ThemeSelector />
      </div>
       <div className="output">
         <div className="previous-operand">
           {formatOperand(previousOperand)}{operation}
         </div>
         <div className="current-operand">{formatOperand(currentOperand)}</div>
       </div>
       <div className="buttons">
       <DigitButton digit="7" dispatch={dispatch} />
       <DigitButton digit="8" dispatch={dispatch} />
       <DigitButton digit="9" dispatch={dispatch} />
       <button className="del" onClick={() => dispatch({ type: ACTIONS.DELETE_DIGIT })}>
         DEL
       </button>
       
       <DigitButton digit="4" dispatch={dispatch} />
       <DigitButton digit="5" dispatch={dispatch} />
       <DigitButton digit="6" dispatch={dispatch} />
       <OperationButton operation="+" dispatch={dispatch} />
       <DigitButton digit="1" dispatch={dispatch} />
       <DigitButton digit="2" dispatch={dispatch} />
       <DigitButton digit="3" dispatch={dispatch} />
       <OperationButton operation="-" dispatch={dispatch} />
       <DigitButton digit="." dispatch={dispatch} />
       <DigitButton digit="0" dispatch={dispatch} />
       <OperationButton operation="/" dispatch={dispatch} />
       <OperationButton operation="x" dispatch={dispatch} />
       <button
            className="button-span-two-blue" 
            onClick={() => dispatch({ type: ACTIONS.CLEAR })}
          >
            RESET
          </button>
          <button
            className="button-span-two-red"
            onClick={() => dispatch({ type: ACTIONS.EVALUATE })}
          >
            =
      </button>
      </div>
     </div>
   );
 }
 
 export default App;
 
 

 