import React, {useState} from 'react'
// import styles from './Hook.module.css'

export default function Hook() {

    const [name, setName] = useState("Guest");
    const [age, setAge] = useState(0);
    const [isEmployed, setIsEmployed] = useState(false);

    const updateName = () => {
        setName("Midhun");
    }

    const incrementAge = () => {
        setAge(age + 1);
    }

    const toggleIsEmployedStatus = () => {
        setIsEmployed(!isEmployed);
    }

    return (
        <>
            <div>
                <p>Name: {name}</p>
                <button onClick={updateName}>Set Name</button>
            </div>
            <div>
                <p>Age: {age}</p>
                <button onClick={incrementAge}>Increment Age</button>
            </div>
            <div>
                <p>Is Employed: <span style={{color : isEmployed ? "green" : "red"}}
                >{isEmployed ? "Yes" : "No"}</span></p>
                <button onClick={toggleIsEmployedStatus}>Toggle Status</button>
            </div>
        </>
    );
}