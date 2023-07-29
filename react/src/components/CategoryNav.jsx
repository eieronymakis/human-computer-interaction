import React from "react";
import { Link } from "react-router-dom";

import '../assets/styles/CategoryNav.css';

function CategoryNav(){
    return(
        <div className="w-100 category-nav">
            <div className="menu d-flex flex-row justify-content-center align-items-center border-bottom border-secondary bg-body">
                <Link className="menu-item bg-transparent btn p-0" to="/desktops">
                    <i className="bi bi-pc-display"></i>
                    <span className="ms-2">Desktops</span>
                </Link>
                <Link className="ms-5 menu-item bg-transparent btn p-0" to="/categories/laptops">
                    <i className="bi bi-laptop"></i>
                    <span className="ms-2">Laptops</span>
                </Link>
                <Link className="ms-5 menu-item bg-transparent btn p-0" to="/tablets">
                    <i className="bi bi-tablet-landscape"></i>
                    <span className="ms-2">Tablets</span>
                </Link>
                <Link className="ms-5 menu-item bg-transparent btn p-0" to="/hardware">
                    <i className="bi bi-cpu"></i>
                    <span className="ms-2">Hardware</span>
                </Link>
                <Link className="ms-5 menu-item bg-transparent btn p-0" to="/consoles">
                    <i className="bi bi-keyboard"></i>
                    <span className="ms-2">Περιφερειακά</span>
                </Link>
                <Link className="ms-5 menu-item bg-transparent btn p-0" to="/networking">
                    <i className="bi bi-router"></i>
                    <span className="ms-2">Δικτυακά</span>
                </Link>
                <Link className="ms-5 menu-item bg-transparent btn p-0" to="/categories">
                    <i className="bi bi-plus-circle"></i>
                    <span className="ms-2">Περισσότερα</span>
                </Link>
            </div>
        </div>
    )
}

export default CategoryNav;