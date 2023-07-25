import React, { useState } from "react";
import Navbar from "./Navbar";
import Breadcrumb from "./BreadCrumb";
import CategoryNav from "./CategoryNav";
import Footer from "./Footer";
import './Product.css';

function Product(){

    const [num, setNum] = useState(0);
    const CounterI = () => {
        setNum (num+1);   
    }
    const CounterD = () => {
        setNum (num-1);
    }
    return(
        <div className="product">
            <Navbar></Navbar>
            <CategoryNav></CategoryNav>
            <Breadcrumb items={[{"path":"/products", "label":"Products"}, {"path":"/here","label":"Macbook Air M2"}]}></Breadcrumb>
            <div className="mt-4 d-flex ms-auto me-auto product-container">
                <div className="left h-100 d-flex justify-content-end">
                    <div className="product-card d-flex justify-content-center align-items-center border border-3">
                        <img src="https://static0.xdaimages.com/wordpress/wp-content/uploads/2023/02/macbook-air-m2-1.png"></img>
                    </div>
                </div>
                <div className="right h-100">
                    <div className="fs-3 fw-bold ms-5 product-title">
                        Apple MacBook Air 15" (2023) 15.3" Retina Display (M2-8‑core/8GB/512GB SSD) Midnight (International English Keyboard)
                    </div>
                    <div className="ms-5 mt-3 product-rating fs-5 d-flex border border-2 justify-content-center">
                        <div className="fw-bold">Βαθμολογία</div>
                        <i class="text-warning ms-2 bi bi-star-fill me-2"></i>
                        <div className="fw-bold me-2">: </div>5
                    </div>
                    <div className="ms-5 mt-2 fs-2 text-success product-price fw-bold">
                        1.788,02€
                    </div>
                    <div className="ms-5 mt-2 product-description">
                    Σχεδίαση
Ακόμη πιο ελαφρύ.
Ανασχεδιασμένο με βάση το πιο σύγχρονο M2 chip, το MacBook Air είναι εντυπωσιακά λεπτό, έχει ανθεκτικό περίβλημα αποκλειστικά από αλουμίνιο και προσφέρει εξαιρετική ταχύτητα και ενεργειακή αποδοτικότητα. Είναι ένα ταχύτατο laptop με εξαιρετικές δυνατότητες, που σου επιτρέπει να εργάζεσαι, να παίζεις και να δημιουργείς οτιδήποτε θέλεις, όπου κι αν βρίσκεσαι.
                    </div>
                    <div className="mt-3 fs-5 ms-5 product-stock d-flex align-items-center justify-content-center border border-2">
                        <div className="fw-bold">Απόθεμα</div>
                        <i className="ms-2 bi bi-box-seam-fill me-2" style={{color : '#CD9F61'}}></i><div className="fw-bold me-3">:</div>2
                    </div>
                    <div className="fw-bold ms-5 mt-3 fs-5">
                        Ποσότητα
                    </div>
                    <div className="mt-1 ms-5 product-amount d-flex">
                        <button onClick={CounterD} className="btn fs-3 bg-light text-dark me-2 d-flex align-items-center justify-content-center">
                            -
                        </button>
                        <div className="value bg-light text-dark d-flex align-items-center justify-content-center fw-bold">{num}</div>
                        <button onClick={CounterI} className="btn fs-3 bg-light text-dark ms-2 d-flex align-items-center justify-content-center">
                            +
                        </button>
                    </div>
                    <div className="product-buttons ms-5 mt-3 d-flex">
                        <button className="product-buy btn btn-success fw-bold d-flex align-items-center justify-content-center">
                            <i className="bi bi-cash me-2 fs-4"></i> Αγορά
                        </button>
                        <button className="ms-3 product-add-to-cart btn btn-secondary fw-bold d-flex align-items-center justify-content-center">
                            <i className="bi bi-cart-plus-fill fs-4 me-2"></i> Προσθήκη στο καλάθι
                        </button>
                    </div>
                    <div className="ms-5 fst-italic mt-4 product-utils d-flex flex-column">
                        <span>Κωδικός προιόντος: 1223</span>
                        <span>κατηγορία: Ρολόι, Οθόνη Αφής</span>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default Product;