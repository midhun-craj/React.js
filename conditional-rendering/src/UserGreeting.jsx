import PropTypes from 'prop-types'

function UserGreeting({ isLoggedIn = false, name = "Guest"}) {
        // if(isLoggedIn) {
        //     return (
        //         <h1>Welcome {name}</h1>
        //     );
        // } else {
        //     return (
        //         <h1>Please login to continue..</h1>
        //     );
        // }

        // return ( isLoggedIn ? <h1 className='welcome-message'>Welcome {name}</h1> :
        //                         <h1 className='login-prompt'>Please login to continue..</h1>
        // );

        const welcomeMessage = <h1 className='welcome-message'>Welcome {name}</h1>
        const loginPrompt = <h1 className='login-prompt'>Please login to continue..</h1>

        return (
            isLoggedIn ? welcomeMessage : loginPrompt
        );
}

UserGreeting.propTypes = {
    isLoggedIn: PropTypes.bool,
    name: PropTypes.string
}

export default UserGreeting