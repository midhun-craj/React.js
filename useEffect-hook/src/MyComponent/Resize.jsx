import React, { useState, useEffect } from 'react';

export default function Resize() {

    const [length, setLength] = useState(window.innerHeight);
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        window.addEventListener("resize", resize);
        console.log("EVENT LISTENER ADDED.");

        return(() => {
            window.removeEventListener("resize", resize);
            console.log("EVENT LISTENER REMOVED.");
        })
    }, []);

    useEffect(() => {
        document.title = `Size: ${length} X ${width}`;
    }, [length, width]);

    function resize() {
        setLength(window.innerHeight);
        setWidth(innerWidth);
    }
 
    return(
        <div>
            <h1>Length: {length}</h1>
            <h1>Width: {width}</h1>
        </div>
    );
}