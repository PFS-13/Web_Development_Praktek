import React from "react";
import { Head } from '@inertiajs/react';

import '../../css/signup-style.css';
import '../../css/base.css';
const SignUp = (data) => {
    return (
            <div className="auth-container">
                <Head title={data.title}/>
                <div className="auth-box">
                    <div className="welcome-icon">
                    <span>🎞️</span>
            </div>
            <h2>
                <b>Movies Hub</b>
            </h2>
            <p>
                <b>Let's Watch a Great Movie</b>
            </p>
            <form id="loginForm" method="post">
                <div className="input-group">
                    <label htmlFor="email">Email</label>
                    <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Your email address"
                    required=""
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="password">Password</label>
                    <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Password"
                    required=""
                    />
                </div>
                <div className="forgot-password">
                    <a href="#">Forgot your password?</a>
                </div>
                <div className="input-group">
                    <button type="submit">Sign in</button>
                </div>
                </form>
                <div className="divider">
                    <span>OR</span>
                </div>
                <div className="social-login">
                    <button className="google">Google</button>
                </div>
                <p className="sign-up">
                    Don't have an account? <a href="/signin">Sign up</a>
                    <br />
                    <a href="beranda.html">Back to home</a>
                </p>
            </div>
        </div>
    )
}

export default SignUp