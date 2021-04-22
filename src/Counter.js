import React, {useState} from 'react';
import "./Counter.css";

const Counter = () => {

    const [count, setCount] = useState(0);

    const handleadd = () => {
      setCount(count+1);
    }
  
    const handlesub = () => {
      setCount(count-1);
    }
  
    return (
        <div className="counter">
            <h1>{count}</h1>
            <button className="button__add" onClick={handleadd}>add +</button>
            <button className="button__sub" onClick={handlesub}>sub -</button>
        </div>
    )
}

export default Counter
