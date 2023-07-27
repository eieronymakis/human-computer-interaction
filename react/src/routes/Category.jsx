import React from "react";
import {useParams} from 'react-router-dom'

import Navbar from "../components/Navbar";
import CategoryNav from "../components/CategoryNav";
import Footer from "../components/Footer";

import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import BreadCrumb from '../components/BreadCrumb';

import '../assets/styles/Category.css';

export default function Category(){

    let {categoryId} = useParams();

    const [value, setValue] = React.useState([0, 8000]);

    function valuetext() {
        return `${value}$`;
    }

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    return(
        <div className="category-page w-100 h-100">
            <Navbar/>
            <CategoryNav/>
            <BreadCrumb 
                items={[{"path":"/categories","label":"Categories"}, {"path":"/category/laptops","label":"Laptops"}]}>
            </BreadCrumb>
            <div className="mt-3 w-100 d-flex align-items-center justify-content-center">
                <div className="category-search-bar d-flex border border border-secondary">
                    <input id="category-search" placeholder="Αναζητήστε με βάση όνομα προϊόντος, μάρκα ..." className="search-bar-text text-dark" type="text"></input>
                    <div className="text-light search-bar-btn d-flex align-items-center justify-content-center">
                        <i className="bi bi-search fs-5"></i>
                    </div>
                </div>
            </div>
            <div className="mt-5 category-container d-flex ms-auto me-auto">
                <div className="category-left-sidebar d-flex flex-column">
                    <button className="btn bg-body text-left category-left-sidebar-tag fw-bold border border-2" type="button" data-bs-toggle="collapse" data-bs-target="#manufacturers" aria-expanded="false" aria-controls="collapseExample">
                        Κατασκευαστές
                    </button>
                    <div className="collapse show" id="manufacturers">
                        <div className="mt-1 w-100 d-flex justify-content-center">
                            <input id="lenovo" type="checkbox" name="lenovo"/>
                            <label className="ms-3 fs-5 w-100 d-flex justify-content-between">Lenovo <span className="category-type-amount">100</span></label>
                        </div>
                        <div className="mt-1 w-100 d-flex justify-content-center">
                            <input id="asus" type="checkbox" name="asus"/>
                            <label className="ms-3 fs-5 w-100 d-flex justify-content-between">Asus <span className="category-type-amount">14</span></label>
                        </div>
                        <div className="mt-1 w-100 d-flex justify-content-center">
                            <input id="apple" type="checkbox" name="asus"/>
                            <label className="ms-3 fs-5 w-100 d-flex justify-content-between">Apple <span className="category-type-amount">4</span></label>
                        </div>
                        <div className="mt-1 w-100 d-flex justify-content-center">
                            <input id="dell" type="checkbox" name="asus"/>
                            <label className="ms-3 fs-5 w-100 d-flex justify-content-between">Dell <span className="category-type-amount">56</span></label>
                        </div>
                    </div>
                    <button className="mt-3 btn bg-body text-left fs-5 fw-bold border border-2" type="button" data-bs-toggle="collapse" data-bs-target="#ram" aria-expanded="false" aria-controls="collapseExample">
                        Μνήμη RAM
                    </button>
                    <div className="collapse show" id="ram">
                        <div className="mt-1 w-100 d-flex justify-content-center">
                            <input id="8gb" type="checkbox" name="8gb"/>
                            <label className="ms-3 fs-5 w-100 d-flex justify-content-between">8 GB <span className="category-type-amount">123</span></label>
                        </div>
                        <div className="mt-1 w-100 d-flex justify-content-center">
                            <input id="16gb" type="checkbox" name="16gb"/>
                            <label className="ms-3 fs-5 w-100 d-flex justify-content-between">16 GB <span className="category-type-amount">85</span></label>
                        </div>
                        <div className="mt-1 w-100 d-flex justify-content-center">
                            <input id="32gb" type="checkbox" name="32gb"/>
                            <label className="ms-3 fs-5 w-100 d-flex justify-content-between">32 GB <span className="category-type-amount">42</span></label>
                        </div>
                    </div>
                    <button className="mt-3 btn bg-body text-left fs-5 fw-bold border border-2" type="button" data-bs-toggle="collapse" data-bs-target="#disk" aria-expanded="false">
                        Σκληρός δίσκος
                    </button>
                    <div className="collapse show" id="disk">
                        <div className="mt-1 w-100 d-flex justify-content-center">
                            <input id="256gb" type="checkbox" name="256gb"/>
                            <label className="ms-3 fs-5 w-100 d-flex justify-content-between">256 GB <span className="category-type-amount">4</span></label>
                        </div>
                        <div className="mt-1 w-100 d-flex justify-content-center">
                            <input id="512gb" type="checkbox" name="512gb"/>
                            <label className="ms-3 fs-5 w-100 d-flex justify-content-between">512 GB <span className="category-type-amount">32</span></label>
                        </div>
                        <div className="mt-1 w-100 d-flex justify-content-center">
                            <input id="1tb" type="checkbox" name="1tb"/>
                            <label className="ms-3 fs-5 w-100 d-flex justify-content-between">1 TB <span className="category-type-amount">121</span></label>
                        </div>
                    </div>
                    <button className="mt-3 btn bg-body text-left fs-5 fw-bold border border-2" type="button" data-bs-toggle="collapse" data-bs-target="#cpu" aria-expanded="false">
                        Επεξεργαστής
                    </button>
                    <div className="collapse show" id="cpu">
                        <div className="mt-1 w-100 d-flex justify-content-center">
                            <input id="i3" type="checkbox" name="i3"/>
                            <label className="ms-3 fs-5 w-100 d-flex justify-content-between">Intel Core i3 <span className="category-type-amount">24</span></label>
                        </div>
                        <div className="mt-1 w-100 d-flex justify-content-center">
                            <input id="i5" type="checkbox" name="i5"/>
                            <label className="ms-3 fs-5 w-100 d-flex justify-content-between">Intel Core i5 <span className="category-type-amount">163</span></label>
                        </div>
                        <div className="mt-1 w-100 d-flex justify-content-center">
                            <input id="i7" type="checkbox" name="i7"/>
                            <label className="ms-3 fs-5 w-100 d-flex justify-content-between">Intel Core i7<span className="category-type-amount">92</span></label>
                        </div>
                        <div className="mt-1 w-100 d-flex justify-content-center">
                            <input id="i9" type="checkbox" name="i9"/>
                            <label className="ms-3 fs-5 w-100 d-flex justify-content-between">Intel Core i9<span className="category-type-amount">29</span></label>
                        </div>
                        <div className="mt-1 w-100 d-flex justify-content-center">
                            <input id="ryzen9" type="checkbox" name="ryzen9"/>
                            <label className="ms-3 fs-5 w-100 d-flex justify-content-between">AMD Ryzen 9<span className="category-type-amount">200</span></label>
                        </div>
                    </div>
                    <div className="mt-3 text-left fs-5 fw-bold">
                        Εύρος Τιμών
                    </div>
                    <Box className="w-100 mt-3 border border-2 rounded d-flex align-items-center justify-content-center">
                        <Slider style={{width: '80%'}}
                            getAriaLabel={() => "Price Range"}
                            value={value}   
                            max={8000}
                            onChange={handleChange}
                            valueLabelDisplay="auto"
                            getAriaValueText={valuetext}
                        />
                    </Box>
                </div>
                <div className="right ms-5">
                    <span className="fst-italic">Προβολή 18 από τα 55 αποτελέσματα</span>
                    <div className="grid-container mt-3">
                        <div className="grid-item d-flex align-items-center flex-column text-dark">
                            <img src="https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/vostro-notebooks/15-3510/media-gallery/archive/dv3510nt_cnb_05000ff090_bk.psd?fmt=png-alpha&pscan=auto&scl=1&hei=402&wid=606&qlt=100,1&resMode=sharp2&size=606,402&chrss=full" alt=""></img>
                            <span>Dell Vostro 3000</span>
                        </div>
                        <div className="grid-item d-flex align-items-center flex-column text-dark">
                            <img src="https://www.lenovo.com/medias/lenovo-laptops-thinkpad-e-series-e14-gen3-amd-hero.png?context=bWFzdGVyfHJvb3R8MzI1MDI2fGltYWdlL3BuZ3xoMTAvaDAxLzE0MTA2OTI4MzgxOTgyLnBuZ3wwNWVkMTUzOGE0ZGNhOTNmMjNhYzJhYTZkNzdhMzAyNmE1ZmRkYTc4MWVlMzk1ODAwNTA0ZmQ1ZmUxYzBlNmI2" alt=""></img>
                            <span>Thinkpad E14 Gen 3 (14" AMD)</span>
                        </div>
                        <div className="grid-item d-flex align-items-center flex-column text-dark">
                            <img src="https://p1-ofp.static.pub/medias/bWFzdGVyfHJvb3R8MTAzNjUyfGltYWdlL3BuZ3xoNTUvaDAzLzEwODE0ODcyMzg3NjE0LnBuZ3wyMDM4ODhmOTI0YTFkNzA1NThkMTliNGRiMTM0Njc3ZmZmMmUxM2I1MjVlYzRhMTFjM2QxY2JjY2Q0N2EyOGMx/lenovo-laptop-thinkpad-l14-intel-gallery-2.png" alt=""></img>
                            <span>Lenovo Thinkpad L14</span>
                        </div>
                        <div className="grid-item d-flex align-items-center flex-column text-dark">
                            <img src="https://p1-ofp.static.pub/medias/bWFzdGVyfHJvb3R8ODQ4NDd8aW1hZ2UvcG5nfGgyMi9oOGYvMTA2NzQ1ODc3Mjk5NTAucG5nfDQzODYxOTc5ODA0MWJhZTQyYThjOTAzZjE0NDI2NWVjYjY5MjE3MGFiMWEzODhlN2UyMGUwNGZhMWRmOTJmNzg/lenovo-laptop-thinkpad-x1-carbon-gen8-subseries-hero.png" alt=""></img>
                            <span>Lenovo Thinkpad X1 Carbon</span>
                        </div>
                        <div className="grid-item d-flex align-items-center flex-column text-dark">
                            <img src="https://images.macrumors.com/t/MwgTEggiztXrvIN2l8bZny1f93M=/1600x/article-new/2013/09/2023-macbook-pro-transparent.png" alt=""></img>
                            <span>Macbook Pro M2</span>
                        </div>
                        <div className="grid-item d-flex align-items-center flex-column text-dark">
                            <img src="https://images.macrumors.com/t/AI0UfpE0Io0I3yfew8TtFUxyi3s=/800x0/smart/article-new/2013/09/macbook-air-m2-roundup-header.png?lossy" alt=""></img>
                            <span>Macbook Air M2</span>
                        </div>
                        <div className="grid-item d-flex align-items-center flex-column text-dark">
                            <img src="https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/vostro-notebooks/15-3510/media-gallery/archive/dv3510nt_cnb_05000ff090_bk.psd?fmt=png-alpha&pscan=auto&scl=1&hei=402&wid=606&qlt=100,1&resMode=sharp2&size=606,402&chrss=full" alt=""></img>
                            <span>Dell Vostro 3000</span>
                        </div>
                        <div className="grid-item d-flex align-items-center flex-column text-dark">
                            <img src="https://www.lenovo.com/medias/lenovo-laptops-thinkpad-e-series-e14-gen3-amd-hero.png?context=bWFzdGVyfHJvb3R8MzI1MDI2fGltYWdlL3BuZ3xoMTAvaDAxLzE0MTA2OTI4MzgxOTgyLnBuZ3wwNWVkMTUzOGE0ZGNhOTNmMjNhYzJhYTZkNzdhMzAyNmE1ZmRkYTc4MWVlMzk1ODAwNTA0ZmQ1ZmUxYzBlNmI2" alt=""></img>
                            <span>Thinkpad E14 Gen 3 (14" AMD)</span>
                        </div>
                        <div className="grid-item d-flex align-items-center flex-column text-dark">
                            <img src="https://p1-ofp.static.pub/medias/bWFzdGVyfHJvb3R8MTAzNjUyfGltYWdlL3BuZ3xoNTUvaDAzLzEwODE0ODcyMzg3NjE0LnBuZ3wyMDM4ODhmOTI0YTFkNzA1NThkMTliNGRiMTM0Njc3ZmZmMmUxM2I1MjVlYzRhMTFjM2QxY2JjY2Q0N2EyOGMx/lenovo-laptop-thinkpad-l14-intel-gallery-2.png" alt=""></img>
                            <span>Lenovo Thinkpad L14</span>
                        </div>
                        <div className="grid-item d-flex align-items-center flex-column text-dark">
                            <img src="https://p1-ofp.static.pub/medias/bWFzdGVyfHJvb3R8ODQ4NDd8aW1hZ2UvcG5nfGgyMi9oOGYvMTA2NzQ1ODc3Mjk5NTAucG5nfDQzODYxOTc5ODA0MWJhZTQyYThjOTAzZjE0NDI2NWVjYjY5MjE3MGFiMWEzODhlN2UyMGUwNGZhMWRmOTJmNzg/lenovo-laptop-thinkpad-x1-carbon-gen8-subseries-hero.png" alt=""></img>
                            <span>Lenovo Thinkpad X1 Carbon</span>
                        </div>
                        <div className="grid-item d-flex align-items-center flex-column text-dark">
                            <img src="https://images.macrumors.com/t/MwgTEggiztXrvIN2l8bZny1f93M=/1600x/article-new/2013/09/2023-macbook-pro-transparent.png" alt=""></img>
                            <span>Macbook Pro M2</span>
                        </div>
                        <div className="grid-item d-flex align-items-center flex-column text-dark">
                            <img src="https://images.macrumors.com/t/AI0UfpE0Io0I3yfew8TtFUxyi3s=/800x0/smart/article-new/2013/09/macbook-air-m2-roundup-header.png?lossy" alt=""></img>
                            <span>Macbook Air M2</span>
                        </div>
                    </div>

                </div>
            </div>
            <div className="mt-5 w-100">
                <Footer/>
            </div>
        </div>
    )
}