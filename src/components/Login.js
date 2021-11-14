import React, { useState } from 'react';

function Login(props) {
    const [details, setDetails] = useState({name: "", email: "", password: ""});

    const submitHandler = e => {
        e.preventDefault();
        props.LoginHandler(details);
    }
    const emailHandler = e => {
        setDetails({
            ...details,
            email: e.target.value
        })
    }
    const passwordHandler = e => {
        setDetails({
            ...details,
            password: e.target.value
        })
    }
    return (
        <form className="form" onSubmit={submitHandler}>
            <div className="form-inner">
                <h2>Login</h2>
                {(props.error === "") ? "" : (<div className="error" style={{color: "red"}}>Invalid username or password</div>)}
                <div className="form-group">
                    <label htmlFor="email">Email: </label>
                    <input type="email" name="email" id="email" onChange={emailHandler} value={details.email} />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password: </label>
                    <input type="password" name="password" id="password" onChange={passwordHandler} value={details.password} />
                </div>
                <input type="submit" value="Login" />
            </div>
        </form>
    )
}

export default Login;
