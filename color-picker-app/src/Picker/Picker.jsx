import React, {useState} from 'react';
import styles from './Picker.module.css'

export default function Picker() {

    const [color, setColor] = useState("#4d1c5f");

    const handleColorChange = (event) => {
        setColor(event.target.value);
    }

    return(
        <>
        <link rel="shortcut icon" href="./react.svg" type="image/x-icon" />
        <title>Color Picker App</title>
            <div className={styles['color-picker-container']}>
                <h1 className={styles['heading']}>Color Picker</h1>
                <div className={styles['color-display']}
                style={{backgroundColor: color}}>
                    <p className={styles['color-name']}>
                        Selected color: {color}
                    </p>
                </div>
                <div className={styles['color-input']}>
                    <label htmlFor="color">
                        Select color: <br />
                        <input id='color' style={{border: "none", 
                                                borderRadius: "10px"}}
                            type="color" 
                            value={color} 
                            onChange={handleColorChange} />
                    </label>
                </div>
            </div>
        </>
    );
}