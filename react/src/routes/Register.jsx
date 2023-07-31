import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import BreadCrumb from '../components/BreadCrumb';
import Footer from '../components/Footer';

import '../assets/styles/Register.css';
import image from '../assets/images/image 5.png'

function Register(){

    const [fullname, setFullname] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword1] = useState("")
    const [password2, setPassword2] = useState("")
    
    const handleChangeFullname = (event) => {
        setFullname(event.target.value);
    };
    const handleChangeEmail = (event) => {
        setEmail(event.target.value);
    };
    const handleChangePassword = (event) => {
        setPassword1(event.target.value);
    };
    const handleChangePassword2 = (event) => {
        setPassword2(event.target.value);
    };
    const handleRegister = async () => {
        console.log(fullname+email)
    }

    return(
        <div className="login">
            <Navbar></Navbar>
            <BreadCrumb                 
                items={[{"path":"/register","label":"Εγγραφή"}]}>
            </BreadCrumb>
            <div className="ms-auto me-auto mt-3 login-container d-flex">

                <div className="left">
                    <img className="image-hover" alt="" src={image}></img>
                </div>
                <div className="right d-flex align-items-center justify-content-center">
                    <div className="register-form bg-body">
                        <div className="mt-5 w-100 text-center fw-bold fs-4">
                            Εγγραφή - Παρακαλούμε συμπληρώστε τα στοιχεία σας
                        </div>
                        <div className="w-100 d-flex justify-content-center mt-4">
                            <input onChange={handleChangeFullname} value={fullname} id="register-fullname" type="text" placeholder="Ονοματεπώνυμο (Επωνυμία εταιρείας)"></input>
                            <input onChange={handleChangeEmail} value={email} id="register-email" type="email" placeholder="Email"></input>
                        </div>
                        <div className="w-100 d-flex justify-content-center mt-4">
                            <input onChange={handleChangePassword} value={password} id="register-password" type="password" placeholder="Κωδικός Πρόσβασης"></input>
                            <input onChange={handleChangePassword2} value={password2} id="register-password-2" type="password" placeholder="Επαλήθευση Κωδικού Πρόσβασης"></input>
                        </div>
                        <div className="w-100 d-flex justify-content-center mt-4">  
                            <button onClick={handleRegister} className="fw-bold register-btn btn btn-success">Εγγραφή</button>
                        </div>
                        <div className="mt-4 w-100 text-center">
                            <Link to="/login" className="fst-italic fw-bold forgot-account">
                                Έχετε ήδη λογαριασμό;
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

export default Register;