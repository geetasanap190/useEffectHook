
import { isEditable } from '@testing-library/user-event/dist/utils';
import './App.css';
import React, { useEffect, useRef, useState } from 'react';
function App() {
  const [count, setCount] = useState(1);
  const [add, setAdd] = useState(2);

   useEffect(()=> {
console.log("mounted");

   }, [add])

   function countFun(){
    setCount(count +1);
   }

   function Add(){
    setAdd(add +1);
   }
  return (
    <>
   <h1> Learning useEffect</h1>
  <p>{count}</p>
   <button onClick={countFun}>Count</button>
   <p>{add}</p>
   <button onClick={Add}>Count</button>
    </>
  );
}

export default App;
