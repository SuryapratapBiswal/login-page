import React, { useState } from 'react'
import { Link } from "react-router-dom"
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate()
    const initialValues = {
        email: '',
        password: ''
    }
    const [formData, setFormData] = useState(initialValues)

    const handleOnchange = (e) => {
        e.preventDefault()
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value })
    }
    const loginUser = () => {
        fetch("https://login-page-be-render.onrender.com/login", {
            method: "POST",
            crossDomain: true,
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify({
                email: formData.email,
                password: formData.password
            }),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data, "userRegister");
                if (data.status == "ok") {
                    localStorage.setItem("token", data.data)
                    alert("login Successful");
                } else {
                    alert("Something went wrong");
                }
            });
    }
    const handleResetClick = () => {
        setFormData(initialValues)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        loginUser()
        handleResetClick()
        navigate('/')
    };
    return (
        <>
            <div className="auth-wrapper">
                <div className="auth-inner">
                    <form onSubmit={handleSubmit}>
                        <h3>Log In</h3>
                        <div className="mb-3">
                            <label>Email address</label>
                            <input
                                type="email"
                                name='email'
                                value={formData.email}
                                className="form-control"
                                placeholder="Enter email"
                                onChange={handleOnchange}

                            />
                        </div>

                        <div className="mb-3">
                            <label>Password</label>
                            <input
                                type="password"
                                name='password'
                                value={formData.password}
                                className="form-control"
                                placeholder="Enter password"
                                onChange={handleOnchange}
                            />
                        </div>

                        <div className="d-grid">
                            <button type="submit" className="btn btn-primary">
                                Log in
                            </button>
                        </div>
                        <p className="forgot-password text-right">
                            New user sign up here <Link to={"/signup"}>Sign up?</Link>
                        </p>
                    </form>
                </div>
            </div>
        </>

    )
}

export default Login