import React from 'react';
import './Login.css';
import useAuth from './../../../hooks/useAuth';
import { useHistory, useLocation } from 'react-router';

const Login = () => {
    const { signInUsingGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_url = location.state?.from || '/';

    const googleSignIn = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_url);
            })
    }

    return (
        // Login
        <div className="py-5 my-5">
            <div className="py-2">
                <div className="px-3 d-flex flex-column justify-content-center align-items-center">

                    {/* Login Heading */}
                    <h1 className="mb-3" style={{ color: 'rgb(255, 182, 6)' }}>Please Login!!!</h1>

                    {/* Login Form */}
                    <form className="row g-4 mt-3 mb-2 login-form">
                        <div className="col-12 px-0">
                            <input type="email" className="form-control border-0" placeholder="Email"
                                style={{
                                    borderRadius: '5px',
                                    backgroundColor: 'rgba(175, 171, 171, 0.116)',
                                    paddingTop: '20px',
                                    paddingBottom: '20px',
                                    fontSize: '17px'
                                }} />
                        </div>
                        <div className="col-12 px-0">
                            <input type="password" className="form-control border-0" placeholder="Password"
                                style={{
                                    borderRadius: '5px',
                                    backgroundColor: 'rgba(175, 171, 171, 0.116)',
                                    paddingTop: '20px',
                                    paddingBottom: '20px',
                                    fontSize: '17px'
                                }} />
                        </div>
                        {/* Login Button */}
                        <div className="col-12 px-0">
                            <button type="submit" className="form-control border-0" id="login-button">Log in</button>
                        </div>
                    </form>
                </div>

                {/* Google Sign In Button */}
                <div className="d-flex justify-content-center mt-4">
                    <button onClick={googleSignIn} className="mx-1 py-1 px-4" id="google-sign-in"><img src="https://img.icons8.com/color/48/000000/google-logo.png" alt="" /> Google Sign In</button>
                </div>
            </div>
        </div>
    );
};

export default Login;