import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import BreadCrumb from '../components/BreadCrumb';
import Footer from '../components/Footer';

import '../assets/styles/OrderHistory.css';
import image from '../assets/images/image 5.png'

function OrderHistory(){

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
                items={[{"path":"/order-history","label":"Παραγγελίες"}]}>
            </BreadCrumb>

            <br></br><br></br>

            <div className="page-title">
                <h4><b><u>ΙΣΤΟΡΙΚΟ ΠΑΡΑΓΓΕΛΙΩΝ</u></b></h4>
            </div>

            <div className="pending-order cart-section container">

                <div className="cart-up"> 

                    <div className="screen"> 
                        <table>
                            <tbody>
                                <tr className="headers">
                                    <th><b>ΑΡΙΘΜΟΣ ΠΑΡΑΓΓΕΛΙΑΣ</b></th>
                                    <th><b>ΗΜΕΡΟΜΗΝΙΑ</b></th>
                                    <th><b>ΚΑΤΑΣΤΑΣΗ</b></th>
                                    <th><b>ΠΟΣΟ ΠΛΗΡΩΜΗΣ</b></th>
                                </tr>
                                
                                <tr>
                                    <th>456456456</th>
                                    <th>23/10/2023</th>
                                    <th>ΣΤΗ ΜΕΤΑΦΟΡΙΚΗ</th>
                                    <th>2885.00€</th>
                                </tr>
                            </tbody>
                        </table>
                        <br></br>
                        <h5 style={{margin: 'auto'}}><b>ΠΛΗΡΟΦΟΡΙΕΣ ΠΑΡΑΓΓΕΛΙΑΣ</b></h5>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                    </div>
                </div>


            </div>   

            <br></br>

            <div className="ms-auto me-auto mt-3 account-container d-flex delivered-order">

                <div className="right d-flex align-items-center justify-content-center">
                    <div className="account-form">  
                        <div className="w-100 d-flex justify-content-center mt-4">
                            <input className="border border-2" onChange={handleChangeName} value={firstName} id="account-first-name" type="text" placeholder="Όνομα"></input>
                            <input className="border border-2" onChange={handleChangeSurname} value={lastName} id="account-last-name" type="text" placeholder="Επίθετο"></input>
                        </div>
                        <div className="w-100 mt-4 shift-right-input">  
                            <input className="border border-2" onChange={handleChangeEmail} value={email} id="account-email" type="email" placeholder="Email"></input>
                        </div>
                        <div className="w-100 d-flex justify-content-center mt-4">
                            <input className="border border-2" onChange={handleChangePassword} value={password} id="account-password" type="password" placeholder="Κωδικός Πρόσβασης"></input>
                            <input className="border border-2" onChange={handleChangePassword2} value={password2} id="account-password-2" type="password" placeholder="Επιβεβαίωση Κωδικού"></input>
                        </div>
                    </div>
    
                </div>

            </div>   

            <br></br>

            <div className="ms-auto me-auto mt-3 account-container d-flex cancelled-order">

                <div className="right d-flex align-items-center justify-content-center">
                    <div className="account-form">  
                        <div className="w-100 d-flex justify-content-center mt-4">
                            <input className="border border-2" onChange={handleChangeName} value={firstName} id="account-first-name" type="text" placeholder="Όνομα"></input>
                            <input className="border border-2" onChange={handleChangeSurname} value={lastName} id="account-last-name" type="text" placeholder="Επίθετο"></input>
                        </div>
                        <div className="w-100 mt-4 shift-right-input">  
                            <input className="border border-2" onChange={handleChangeEmail} value={email} id="account-email" type="email" placeholder="Email"></input>
                        </div>
                        <div className="w-100 d-flex justify-content-center mt-4">
                            <input className="border border-2" onChange={handleChangePassword} value={password} id="account-password" type="password" placeholder="Κωδικός Πρόσβασης"></input>
                            <input className="border border-2" onChange={handleChangePassword2} value={password2} id="account-password-2" type="password" placeholder="Επιβεβαίωση Κωδικού"></input>
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

export default OrderHistory;