import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BsFacebook } from "react-icons/bs";
import { FaGooglePlus } from "react-icons/fa";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
// Ensure this path is correct for your project
import Logo from "./blogo.png"; 
import './NewRegisterPage.css';

export default function NewRegisterPage() {
    // State to toggle visibility for both password fields
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const toggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };

    return (
        <div className="register-container">
            {/* LEFT SECTION - REGISTRATION FORM */}
            <div className="left-section">
                <div className="register-content-wrapper">
                    <div className="upper-header">
                        <img src={Logo} alt="ServiSeek Logo" className="brand-logo" />
                        <a className="navbar-brand fw-bold" style={{fontSize: "20px"}} href="#">Local <span className='Servi-color'>Servi</span><span className='Seek-color'>Seek</span></a>
                    </div>

                    <div className="register-form-area">
                        <div className="register-text">
                            <h1>Join Our Community</h1>
                            <p>Sign up to discover and connect with trusted local experts.</p>
                        </div>

                        <div className="social-logins">
                            <button className="social-btn fb" aria-label="Sign up with Facebook">
                                <BsFacebook />
                            </button>
                            <button className="social-btn google" aria-label="Sign up with Google">
                                <FaGooglePlus />
                            </button>
                            <button className="social-btn linkedin" aria-label="Sign up with LinkedIn">
                                <TiSocialLinkedinCircular />
                            </button>
                        </div>

                        <div className="divider">
                            <hr />
                            <span>OR</span>
                            <hr />
                        </div>

                        <form className="register-form" onSubmit={(e) => e.preventDefault()}>
                            <div className="input-group">
                                <input 
                                    type="text" 
                                    className="input-field" 
                                    placeholder="Full Name" 
                                    required 
                                />
                            </div>

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

                            <div className="input-group pwd-group">
                                <input 
                                    type={showConfirmPassword ? "text" : "password"} 
                                    className="input-field" 
                                    placeholder="Confirm Password" 
                                    required 
                                />
                                <span className="pwd-toggle" onClick={toggleConfirmPasswordVisibility}>
                                    {showConfirmPassword ? <FaRegEyeSlash /> : <FaRegEye />}
                                </span>
                            </div>

                            <button type="submit" className="button-primary">Create Account</button>
                        </form>

                        {/* Mobile Only Login Prompt */}
                        <div className="mobile-login-prompt">
                            <p>Already have an account? <Link to="/login" className="orange-link">Log In</Link></p>
                        </div>
                    </div>
                </div>
            </div>

            {/* RIGHT SECTION - LOGIN PROMO */}
            <div className="right-section">
                <div className="promo-content">
                    <h1>Already Registered?</h1>
                    <p>Log in and continue your journey to finding trusted professionals.</p>
                    <Link to="/login">
                        <button className="btn-secondary">Log In</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}