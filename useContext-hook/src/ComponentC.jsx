import React, { useState } from 'react';
import ComponentD from './ComponentD.jsx';

// export default function ComponentC({user}) {
    
//     props drilling
//     return(
//         <div className='box'>
//             <h1>Component C</h1>
//             <ComponentD user={user} />
//         </div>
//     );
// }

export default function ComponentC() {
    
    return(
        <div className='box'>
            <h1>Component C</h1>
            <ComponentD />
        </div>
    );
}