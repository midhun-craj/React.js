import React, { useState } from 'react';

export default function Array() {

    const [cars, setCars] = useState([]);
    const [carYear, setCarYear] = useState(new Date().getFullYear());
    const [carMake, setCarMake] = useState("");
    const [carModel, setCarModel] = useState("");

    const handleAddCar = () => {

        const newCar = {year: carYear,
                        make: carMake,
                        model: carModel};

        setCars(c => [...c, newCar]);

        setCarYear(new Date().getFullYear());
        setCarMake("");
        setCarModel("");
    }

    const handleRemoveCar = (index) => {
        setCars(c => c.filter((_, i) => i !== index));
    }

    const handleCarYearChange = (event) => {
        setCarYear(event.target.value);
    }

    const handleCarMakeChange = (event) => {
        setCarMake(event.target.value);
    }

    const handleCarModelChange = (event) => {
        setCarModel(event.target.value)
    }

    return(
        <div style={{fontFamily: "monospace", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
            <h1 style={{fontSize: "2rem"}}>List Of Car Objects</h1>
            <ul>
                {cars.map((car, index) => 
                    <li style={{cursor: "pointer", backgroundColor: "gray", display: "inline", padding: "10px", borderRadius: "5px"}} onClick={() => handleRemoveCar(index)} key={index}>
                        {car.year} {car.make} {car.model}
                    </li>
                )}
            </ul>
            <input style={{padding: "5px", borderRadius: "5px", outline: "none"}} type="number" onChange={handleCarYearChange} value={carYear} /><br />
            <input style={{padding: "5px", borderRadius: "5px", outline: "none"}} type="text" onChange={handleCarMakeChange} value={carMake} placeholder='Enter car make' /><br />
            <input style={{padding: "5px", borderRadius: "5px", outline: "none"}} type="text" onChange={handleCarModelChange} value={carModel} placeholder='Enter car model' /><br />
            <button style={{padding: "5px", borderRadius: "5px", outline: "none"}} onClick={handleAddCar}>Add Car</button>
        </div>
    );
}