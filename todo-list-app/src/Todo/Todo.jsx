import React, { useState } from 'react';
import styles from './Todo.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from "@fortawesome/free-solid-svg-icons";


export default function Todo() {

    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState([]);

    const handleInputChange = (event) => {
        setNewTask(event.target.value);
    }

    const addTask = () => {
        if (newTask.trim() !== "") {
            setTasks(t => [...t, newTask]);
            setNewTask("");
        }
    }

    const deleteTask = (index) => {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    }

    const moveTaskUp = (index) => {
        if (index > 0) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] = 
            [updatedTasks[index - 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    const moveTaskDown = (index) => {
        if (index < tasks.length - 1) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] = 
            [updatedTasks[index + 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    return(
        <div>
            <h1>TODO <i style={{fontWeight: "normal", fontFamily: "monospace"}}>List</i></h1>
            <div className={styles['input-container']}>
                <input value={newTask} onChange={handleInputChange} type="text" placeholder='Enter task' />
                <button onClick={addTask}>Add</button>
            </div>
            <ul className={styles['list-container']}>
                {tasks.map((task, index) => 
                    <li key={index}>
                        <span className={styles['text']}>{task}</span>
                        <button onClick={() => deleteTask(index)}>
                            <FontAwesomeIcon className={styles['icon']} icon={faTrash} style={{color: "#000000",fontSize: "1.5rem"}} />
                        </button>
                        <button onClick={() => moveTaskUp(index)}>👆🏼</button>
                        <button onClick={() => moveTaskDown(index)}>👇🏼</button>
                    </li>)}
            </ul>
        </div>
    );
}