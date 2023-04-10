import React, { useState } from 'react'
import { Link } from 'react-router-dom'


const Signup = () => {
    const initialValues = {
        first_name: "",
        last_name: "",
        email: "",
        password: ""
    }
    const [formData, setFormData] = useState(initialValues)

    const handleOnchange = (e) => {
        e.preventDefault()
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value })
    }
    const handleResetClick = () => {
        setFormData(initialValues)
    }
    const addUser = () => {
        fetch("http://localhost:8080/signup", {
            method: "POST",
            crossDomain: true,
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify({
                first_name: formData.first_name,
                last_name: formData.last_name,
                email: formData.email,
                password: formData.password
            }),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data, "userRegister");
                if (data.status == "ok") {
                    alert("Registration Successful");
                } else {
                    alert("Something went wrong");
                }
            });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        addUser()
        handleResetClick()
    };

    console.log("formData", formData)
    return (
        <>
            <div className="auth-wrapper">
                <div className="auth-inner">
                    <form onSubmit={handleSubmit}>
                        <h3>Sign Up</h3>
                        <div className="mb-3">
                            <label>First name</label>
                            <input
                                type="text"
                                name='first_name'
                                value={formData.first_name}
                                className="form-control"
                                placeholder="First name"
                                onChange={handleOnchange}
                            />
                        </div>

                        <div className="mb-3">
                            <label>Last name</label>
                            <input
                                type="text"
                                name='last_name'
                                value={formData.last_name}
                                className="form-control"
                                placeholder="Last name"
                                onChange={handleOnchange}
                            />
                        </div>

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
                                Sign Up
                            </button>
                        </div>
                        <p className="forgot-password text-right">
                            Already registered <Link to={"/login"}>Log in?</Link>
                        </p>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Signup