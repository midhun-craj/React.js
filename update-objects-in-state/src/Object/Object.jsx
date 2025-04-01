import React, { useState } from 'react';

export default function Object(){
    
    const [car, setCar] = useState({year: 2025, 
                                    make: "Ford", 
                                    model: "Mustang"});

    const handleYearChange = (event) => {
        setCar(c => ({...car, year: event.target.value}))
    }

    const handleMakeChange = (event) => {
        setCar(c => ({...car, make: event.target.value}))
    }

    const handleModelChange = (event) => {
        setCar(c => ({...car, model: event.target.value}))
    }

    return(
        <div style={{fontFamily: "monospace"}}>
            <p>Your favorite car is:<strong> {car.year} {car.make} {car.model} </strong></p>
            <input type="number" onChange={handleYearChange} value={car.year}/>
            <input type="text" onChange={handleMakeChange} value={car.make}/>
            <input type="text" onChange={handleModelChange} value={car.model}/>
        </div>
    );
}