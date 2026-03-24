import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BsFacebook } from "react-icons/bs";
import { FaGooglePlus } from "react-icons/fa";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import Logo from "./blogo.png"; 
import './LoginPage.css';

export default function LoginPage() {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="login-container">
            
            <div className="left-section">
                <div className="login-content-wrapper">
                    <div className="upper-header">
                        
                        <img src={Logo} alt="ServiSeek Logo" className="brand-logo" />
                        <a className="navbar-brand fw-bold" style={{fontSize: "25px"}} href="#">Local <span className='Servi-color'>Servi</span><span className='Seek-color'>Seek</span></a>
                    </div>

                    <div className="login-form-area">
                        <div className="login-text">
                            <h1>Welcome Back</h1>
                            <p>Login to connect with trusted local experts.</p>
                        </div>

                        <div className="social-logins">
                            <button className="social-btn fb" aria-label="Login with Facebook">
                                <BsFacebook />
                            </button>
                            <button className="social-btn google" aria-label="Login with Google">
                                <FaGooglePlus />
                            </button>
                            <button className="social-btn linkedin" aria-label="Login with LinkedIn">
                                <TiSocialLinkedinCircular />
                            </button>
                        </div>

                        <div className="divider">
                            <hr />
                            <span>OR</span>
                            <hr />
                        </div>

                        <form className="login-form" onSubmit={(e) => e.preventDefault()}>
                            <div className="input-group">
                                <input 
                                    type="email" 
                                    className="input-field" 
                                    placeholder="Email Address" 
                                    required 
                                />
                            </div>
                            
                            <div className="input-group pwd-group">
                                <input 
                                    type={showPassword ? "text" : "password"} 
                                    className="input-field" 
                                    placeholder="Password" 
                                    required 
                                />
                                <span className="pwd-toggle" onClick={togglePasswordVisibility}>
                                    {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
                                </span>
                            </div>

                            <div className="forgot-password">
                                <Link to="/forgot-password">Forgot Password?</Link>
                            </div>

                            <button type="submit" className="button-primary">Sign In</button>
                        </form>

                        {/* Mobile Only Sign Up Prompt */}
                        <div className="mobile-signup-prompt">
                            <p>New Here? <Link to="/register" className="orange-link">Create an account</Link></p>
                        </div>
                    </div>
                </div>
            </div>

            {/* RIGHT SECTION - SIGN UP PROMO */}
            <div className="right-section">
                <div className="promo-content">
                    <h1>New Here?</h1>
                    <p>Sign up today and discover a world of new opportunities and trusted professionals right in your neighborhood.</p>
                    <Link to="/register">
                        <button className="btn-secondary">Create Account</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}