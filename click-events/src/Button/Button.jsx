

export default function Button() {

    // const handleClick = () => {
    //     console.log("Ouch! 🤕");
    // }

    // const handleClick2 = (name) => {
    //     console.log(`${name} don't click me 😳`);
    // }
    // let count = 0;
    
    // const handleClick = (name) => {
        
    //     if(count < 3) {
    //         count++;
    //         console.log(`${name} you clicked me ${count} time/s.`);
    //     } else {
    //         console.log(`${name} stop clicking me.`);
    //     }

    // };

    const handleClick = (e) => {
        e.target.textContent = "OUCH! 🤕";
    };

    return(
        <>
            {/* we also have onDoubleclick() method. */}
            <button onClick={(e) => handleClick(e)}>Click Me 😊</button>
        </>
    );
}