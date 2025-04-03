import React, { useContext } from 'react';
import { UserContext } from './ComponentA';

// export default function ComponentD({user}) {
    
//     props drilling
//     return(
//         <div className='box'>
//             <h1>Component D</h1>
//             <h2>User: {user}</h2>
//         </div>
//     );
// }


export default function ComponentD() {

    const user = useContext(UserContext);
    
    return(
        <div className='box'>
            <h1>Component D</h1>
            <h2>User: {user}</h2>
        </div>
    );
}
