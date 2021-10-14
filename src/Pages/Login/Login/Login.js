import React from 'react';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const {signInUsingGoogle} = useAuth();
    return (
        <div>
            <h1>Please Login</h1>
            <button onClick={signInUsingGoogle} className="btn btn-warning">Google Sign-in</button>
        </div>
    );
};

export default Login;