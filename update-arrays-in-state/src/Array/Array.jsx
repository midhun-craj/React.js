import React, { useState } from 'react';

export default function Array() {

    const [foods, setFoods] = useState(["Apple", "Orange", "Banana"]);

    const handleAddFood = () => {
        const newFood = document.getElementById("newFood").value;
        document.getElementById("newFood").value = "";

        setFoods(f => [...f, newFood]);
    }

    const handleRemoveFood = (index) => {
        setFoods(foods.filter((_, i) => index !== i));
    }

    return(
        <div style={{fontFamily: "monospace"}}>
            <h1 style={{fontSize: "2rem"}}>List Of Food</h1>
            <p><i>Tap on foods to remove it...</i></p>
            <ul>
                {foods.map((food, index) => 
                    <li style={{fontSize: "1.5rem", cursor: "pointer"}} key={index} onClick={() => handleRemoveFood(index)}>
                        {food}
                    </li>
                )}
            </ul>
            <input id='newFood' type="text" placeholder='Enter food name' />
            <button onClick={handleAddFood}>Add Food</button>
        </div>
    );
}