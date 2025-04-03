import React, { useState } from 'react';
import ComponentC from './ComponentC.jsx'

// export default function ComponentB({user}) {
    
//     props drilling
//     return(
//         <div className='box'>
//             <h1>Component B</h1>
//             <ComponentC user={user} /> 
//         </div>
//     );
// }

export default function ComponentB() {
    
    return(
        <div className='box'>
            <h1>Component B</h1>
            <ComponentC /> 
        </div>
    );
}