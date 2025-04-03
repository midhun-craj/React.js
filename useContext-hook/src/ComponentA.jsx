import React, { useState, createContext } from 'react';
import ComponentB from './ComponentB.jsx';

// export default function ComponentA() {

//     const [user, setUser] = useState("Azrael");
    
//     props drilling
//     return(
//         <div className='box'>
//             <h1>Component A</h1>
//             <h2>User: {user}</h2>
//             <ComponentB user={user} />
//         </div>
//     );
// }

export const UserContext = createContext();

export default function ComponentA() {

    const [user, setUser] = useState("Azrael");
    
    return(
        <div className='box'>
            <h1>Component A</h1>
            <h2>User: {user}</h2>
            <UserContext.Provider value={user}> 
                <ComponentB />
            </UserContext.Provider>
        </div>
    );
}