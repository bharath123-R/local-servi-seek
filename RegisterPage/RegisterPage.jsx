import React from 'react'
import { FaFacebookF, FaGoogle, FaUser, FaEnvelope, FaLock, FaEyeSlash } from 'react-icons/fa'
import "./RegisterPage.css"
import { Link } from 'react-router-dom'


export default function RegisterPage() {
    return (
        <div >
            <div className="page">

                <div className="regleft">
                    <img src="https://wallpaperaccess.com/full/806403.jpg" alt="leftpage" />
                </div>


                <div className="regright">
                    <h1>Register</h1>


        

                    <form >
                        <div className="form-box">

                            <div className='input-field'>
                                <FaUser className='icon1' />
                                <input type="Name" placeholder=' Enter Full Name' />
                            </div>

                            <div className="input-field">
                                <FaEnvelope className='icon1' />
                                <input type="email" placeholder=' Email or Phone Number' />
                            </div>
                            <div className="input-field">
                                <FaLock className='icon1' />
                                <input type="Password" placeholder=' Enter Password' />
                            </div>
                            <div className="input-field">
                                <FaLock className='icon1' />
                                <input type="Password" placeholder=' Confirm Password' />
                                <FaEyeSlash className='icon1' />
                            </div>
                            <label className='lorem' >
                                <input type="checkbox" name='terms' />
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos, ducimus.
                            </label> <br />
                            <div className="button-box">
                                <button className="btn1">Submit</button>
                            </div>
                        </div>


                    </form>
                    <h4>Register with</h4>

                    <div className="social1">
                        <div className="logo1"><FaFacebookF /></div>
                        <div className="logo1"><FaGoogle /></div>
                    </div>

                    <div >
                        {/* <h4>Already have an Account? <span className='Login-button'><Link to="/">Login </Link></span></h4> */}

                    </div>
                </div>
            </div>


        </div>
    )
}
