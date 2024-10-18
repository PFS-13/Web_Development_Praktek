import React from "react";

import '../../css/signin-style.css'
import '../../css/base.css'

const SignIn = () => {
    return (
        <div className="signup-container">
            <h2>Sign Up</h2>
            <form action="/authentication.html" method="post">
                <div className="form-group">
                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username" name="username" placeholder="Username" />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" placeholder="abc@email.com" />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Password"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="confirm_password">Confirm Password:</label>
                    <input
                        type="password"
                        id="confirm_password"
                        name="confirm_password"
                        required=""
                    />
                </div>
                <button type="submit" className="signup-btn">
                Signup
                </button>
            </form>
            <p>
                Already have an account? <a href="/login">Login here</a>.
            </p>
            <p>
                <a href="/">Back to Home</a>.
            </p>
        </div>

    );
};

export default SignIn;