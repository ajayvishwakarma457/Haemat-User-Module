import React, { useState } from 'react';
import { Link } from "react-router-dom";

import './Login.css';

const ForgotPassword = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const emailChangeHandler = (e) => {
        setEmail(e.target.value);
    };

    const passwordChangeHandler = (e) => {
        setPassword(e.target.value);
    };

    const loginHandler = (e) => {
        e.preventDefault();
        console.log(email);
        console.log(password);
    };

    return (
        <>
            <section className="login-wrapper">
                <section>
                    <form onSubmit={loginHandler}>
                        <h1>Login</h1>
                        <div className="inputbox">
                            <input type="email" placeholder='Email' id='txtEmail' onChange={emailChangeHandler} />
                        </div>
                        <button type='submit' className='button'>Send</button>
                        <div className="forget">
                            <Link to="/">Login In</Link>
                        </div>
                    </form>
                </section>
            </section>
        </>
    )
};

export default ForgotPassword;