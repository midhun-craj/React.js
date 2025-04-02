import React, { useState, useEffect } from 'react';

export default function Component() {

    const [count, setCount] = useState(0);
    const [color, setColor] = useState("green");

    // useEffect(() => {
    //     document.title = "Count: " + count + " " + color;
    // });

    // useEffect(() => {
    //     document.title = "Count: " + count + " " + color;
    // }, []);

    useEffect(() => {
        document.title = "Count: " + count + " " + color;

        return () => {
            // DO SOME CLEAN UP CODE HERE
        }

    }, [count, color]);

    function handleCountChange() {
        setCount(c => c + 1);
    }

    function handleCountChangeMinus() {
        setCount(c => c - 1);
    }

    function changeColor() {
        setColor(c => c === "green" ? "red" : "green");
    }

    return(
        <div style={{fontFamily: "monospace", fontSize: "2rem", textAlign: "center"}}>
            <h1>Count:<span style={{fontSize: "2.5em", color: color}}>{count}</span></h1>
            <button style={{fontSize: "1.5em", borderRadius: "5px", marginBottom: "10px"}} onClick={handleCountChange}>Add</button> <br />
            <button style={{fontSize: "1.5em", borderRadius: "5px", marginBottom: "10px"}} onClick={handleCountChangeMinus}>Subtract</button> <br />
            <button style={{fontSize: "1.5em", borderRadius: "5px"}} onClick={changeColor}>Change Color</button>
        </div>
    );
}