import React, { useState } from 'react';

export default function Counter() {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(c => c + 1)
    }

    const decrement = () => {
        setCount(c => c - 1)
    }

    const reset = () => {
        setCount(0)
    }

    return(
        <>
        <div style={{display: "flex", 
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "50px"}}>
            <div style={{fontSize: "10rem",}}>
                <p id='display'>{count}</p>
            </div>
            <div>
                <button style={{fontSize: "1.5rem", padding: "20px", cursor: "pointer"}} onClick={increment}>Increment</button>
                <button style={{fontSize: "1.5rem", padding: "20px", cursor: "pointer"}} onClick={reset}>Reset</button>
                <button style={{fontSize: "1.5rem", padding: "20px", cursor: "pointer"}} onClick={decrement}>Decrement</button>
            </div>
        </div>
        </>
    );
}