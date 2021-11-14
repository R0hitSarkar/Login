import React, { useState } from 'react';

function Signup(props) {
    const [details, setDetails] = useState({name: "", email: "", password: ""});

    const submitHandler = e => {
        e.preventDefault();
        props.SignupHandler(details);
        setDetails({name: "", email: "", password: ""})
    }
    const nameHandler = e => {
        setDetails({
            ...details,
            name: e.target.value
        })
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
                <h2>Sign up</h2>
                <div className="form-group">
                    <label htmlFor="name">Name: </label>
                    <input type="text" name="name" id="name" onChange={nameHandler} value={details.name} />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email: </label>
                    <input type="email" name="email" id="email" onChange={emailHandler} value={details.email} />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password: </label>
                    <input type="password" name="password" id="password" onChange={passwordHandler} value={details.password} />
                </div>
                <input type="submit" value="Sign up" />
            </div>
        </form>
    )
}

export default Signup;