import React, {useState} from 'react'
import styles from './Counter.module.css'

export default function Counter() {

    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    }

    const decrement = () => {
        setCount(count - 1);
    }

    const reset = () => {
        setCount(0);
    }

    return (
        <>
            <div className={styles['counter-container']}>
                <p className={styles['counter-display']}>{count}</p>
                <button className={styles['counter-button']} onClick={increment}>Increment</button>
                <button className={styles['counter-button']} onClick={decrement}>Decrement</button>
                <button className={styles['counter-button']} onClick={reset}>Reset</button>
            </div>
        </>
    );
}