import React, { useRef, useEffect } from 'react';

export default function Component() {
    
    const inputRef = useRef("");

    useEffect(() => {
        console.log("Rerendered");
    });
    
    function handleClick() {
        inputRef.current.focus();
        inputRef.current.style.backgroundColor = "yellow";
    }
    
    return(
        <div>
            <input style={{fontSize: "1rem"}} ref={inputRef} type="text" />
            <button style={{fontSize: "1rem"}} onClick={handleClick}>Click me!</button>
        </div>
    );
}