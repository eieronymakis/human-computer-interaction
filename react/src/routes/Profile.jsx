import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import BreadCrumb from '../components/BreadCrumb';
import Footer from '../components/Footer';

import '../assets/styles/Profile.css';
import image from '../assets/images/image 5.png'

function Profile(){

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [password2, setPassword2] = useState("")
    
    const handleChangeName = (event) => {
        setFirstName(event.target.value);
    };   
    const handleChangeSurname = (event) => {
        setLastName(event.target.value);
    };
    const handleChangeEmail = (event) => {
        setEmail(event.target.value);
    };
    const handleChangePassword = (event) => {
        setPassword(event.target.value);
    };
    const handleChangePassword2 = (event) => {
        setPassword2(event.target.value);
    };
    const handleRegister = async () => {
        console.log(firstName+lastName+email)
    }

    return(  
        <div className="login">
            <Navbar></Navbar>
            <BreadCrumb                 
                items={[{"path":"/profile","label":"Λογαριασμός"}]}>
            </BreadCrumb>
            <div className="ms-auto me-auto mt-3 account-container d-flex">

                <div className="right d-flex align-items-center justify-content-center">
                    <div className="account-form">  
                        <div className="w-100 d-flex justify-content-center mt-4">
                            <input onChange={handleChangeName} value={firstName} id="account-first-name" type="text" placeholder="Όνομα"></input>
                            <input onChange={handleChangeSurname} value={lastName} id="account-last-name" type="text" placeholder="Επίθετο"></input>
                        </div>
                        <div className="w-100 mt-4 shift-right-input">  
                            <input onChange={handleChangeEmail} value={email} id="account-email" type="email" placeholder="Email"></input>
                        </div>
                        <div className="w-100 d-flex justify-content-center mt-4">
                            <input onChange={handleChangePassword} value={password} id="account-password" type="password" placeholder="Κωδικός Πρόσβασης"></input>
                            <input onChange={handleChangePassword2} value={password2} id="account-password-2" type="password" placeholder="Επιβεβαίωση Κωδικού"></input>
                        </div>
                    </div>
      
                </div>

            </div>   
                
            <div className="left w-100 d-flex mt-5 justify-content-center">
                <button onClick={handleRegister} className="shift-right-btn save-changes-btn btn btn-success">ΑΠΟΘΗΚΕΥΣΗ ΑΛΛΑΓΩΝ</button>
            </div>   

            <div className="mt-5">
                <Footer/>
            </div>

        </div>
    )
}

export default Profile;