//import logo from './logo.svg';
import './App.css';
import DisplayFoodItems from './components/DisplayFoodItems';
import React, {useState} from "react";

function App() {
  const [count, setCount] = useState(0);
  const sayHello = (name) => {
    alert(`${name} penis`);
    //IMPORTANT FUCKING NOTICE... "THIS", AND 'THIS' IS FUCKING INCORRECT.
    //     `SEE THIS SHIT? THIS SHIT CORRECT `` FOR SOME FUCKING REASON`
  };
  return (
    <div className="App">
      <DisplayFoodItems></DisplayFoodItems>
      <button onClick={() => alert("Hello! nerd")}>Say shutup</button>
      <button value="Fos!" onClick={(e) => alert(e.target.value)}>Farok</button>
      <p>{count}</p>
      <button onClick={() => setCount(count +1)}>increment</button>
      <button onClick={() => {setCount(count -1); sayHello("Fred Fucks");}}>increment not</button>
    </div>
  );
}

export default App;
