import { useState } from 'react';

function LoginLogout() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return(
        <>
        <div>
            <h1> Conditional rendering Example </h1>
            {isLoggedIn ? (
                <h2> Welcome ! You are logged In</h2>
            ) : (
                <h2> Please Log in </h2>
            )}

            <button onClick={() => setIsLoggedIn(!isLoggedIn)} >
                {isLoggedIn ? 'Logout' : 'Login'}
            </button>
        </div>
        </>
    );
}

export default LoginLogout;