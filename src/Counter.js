import React, { useState } from 'react';

function Counter () {
 const[count,setCount] =useState(0);
 const increment = () => {
  setCount(count+1);
 };
 const decrement = () => {
  setCount(count-1);
 };
 const reset = () => {
  setCount(0);
 };

  return (
    <center>
      <div>
      <h1>Counter</h1>
      <p>Count: {count}</p>
      <button id='first'  onClick={increment}>Increment</button>
      <button id = 'second' onClick={reset}>Reset</button>
      <button  id = 'third' onClick={decrement}>Decrement</button>
    </div>
    </center>
  );

}
function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

export default App;
