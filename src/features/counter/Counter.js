import React from "react";
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './counterSlice'

const Counter = () => {
  const count = useSelector((state) => state.counter.count)
  const dispatch = useDispatch()
  return (
    <div>
      <button onClick={()=>{dispatch(decrement())}} style={{ fontSize: "40px", padding: "20px", margin: "24px" }}>
        -
      </button>
      <span  style={{ fontSize: "40px", padding: "20px", margin: "24px" }}>
        {count}
      </span>
      <button onClick={()=>{dispatch(increment())}} style={{ fontSize: "40px", padding: "20px", margin: "24px" }}>
        +
      </button>
    </div>
  );
};

export default Counter;
