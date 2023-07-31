import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import BreadCrumb from '../components/BreadCrumb';
import Footer from '../components/Footer';

import '../assets/styles/Login.css';
import image from '../assets/images/image 5.png'

function Login(){

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    
    const handleChangeEmail = (event) => {
        setEmail(event.target.value);
    };
    const handleChangePassword = (event) => {
        setPassword(event.target.value);
    };
    const handleLogin = async () => {
        console.log(email+password)
    }

    return(
        <div className="login">
            <Navbar></Navbar>
            <BreadCrumb                 
                items={[{"path":"/login","label":"Σύνδεση"}]}>
            </BreadCrumb>
            <div className="ms-auto me-auto mt-3 login-container d-flex">
                <div className="left">
                        <img className="image-hover" alt="" src={image}></img>
                        <div className="ms-5">
                            <div className="text-light mt-5 w-100 text-center fw-bold fs-1 new-customer">
                                Νέος Χρήστης ;
                            </div>
                            <div className="mt-3 text-warning w-50 text-center fw-bold fs-5 ms-auto me-auto">
                                Πατήστε παρακάτω για να φτιάξετε νέο λογαριασμό
                            </div>
                            <div className="mt-5 text-light w-50 text-center fw-bold fs-5 ms-auto me-auto">
                                <Link className="register-btn" to="/register">
                                    Δημιουργία λογαριασμού
                                </Link>
                            </div>
                        </div>
                        <div className="text-light w-50 text-center fw-bold fs-5 ms-5 me-auto">
                            <Link to="/" className="back-btn d-flex align-items-center">
                                <i className="bi bi-arrow-left-square-fill"></i>
                                <span className="ms-3">Πίσω</span>
                            </Link>
                        </div>

                </div>
                <div className="right d-flex align-items-center justify-content-center">
                    <div className="login-form bg-body">
                        <div className="mt-5 w-100 text-center fw-bold fs-4">
                            Έχετε ήδη λογαριασμό ;
                        </div>
                        <div className="w-100 d-flex justify-content-center mt-4">
                            <input onChange={handleChangeEmail} value={email} id="login-email" type="text" placeholder="Email"></input>
                        </div>
                        <div className="w-100 d-flex justify-content-center mt-3">
                            <input onChange={handleChangePassword} value={password} id="login-password" type="password" placeholder="Password"></input>
                        </div>
                        <div className="w-100 d-flex justify-content-center mt-4">
                            <button onClick={handleLogin} className="fw-bold login-btn btn btn-success">Είσοδος</button>
                        </div>
                        <div className="mt-4 w-100 text-center">
                            <Link to="/forgot-account" className="fst-italic fw-bold forgot-account">
                                Ξεχάσατε τα στοιχεία εισόδου ;
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-5">
                <Footer/>
            </div>

        </div>
    )
}
   
export default Login;