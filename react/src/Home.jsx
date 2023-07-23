import React from "react";
import Navbar from "./Navbar";
import './Home.css';
import bannerRight from './image 1.png';
import Slider from "react-slick";
import Header from "./Header";
import Footer from "./Footer";
import {Link} from "react-router-dom";

function Home(){
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        autoplay: true,
        autoplaySpeed: 2500
    };

    return (
        <div className="Home">
            <Header></Header>
            <Navbar></Navbar>
            <div className="w-100">
                <div className="menu d-flex flex-row justify-content-center align-items-center border-bottom border-secondary">
                    <Link className="menu-item bg-transparent btn p-0" to="/desktops">
                        <i className="bi bi-pc-display"></i>
                        <span className="ms-3">Desktops</span>
                    </Link>
                    <Link className="menu-item bg-transparent btn p-0" to="/laptops">
                        <i className="bi bi-laptop"></i>
                        <span className="ms-3">Laptops</span>
                    </Link>
                    <Link className="menu-item bg-transparent btn p-0" to="/tablets">
                        <i className="bi bi-tablet-landscape"></i>
                        <span className="ms-3">Tablets</span>
                    </Link>
                    <Link className="menu-item bg-transparent btn p-0" to="/phones">
                        <i className="bi bi-phone"></i>
                        <span className="ms-3">Κινητά</span>
                    </Link>
                    <Link className="menu-item bg-transparent btn p-0" to="/consoles">
                        <i className="bi bi-joystick"></i>
                        <span className="ms-3">Consoles</span>
                    </Link>
                    <Link className="menu-item bg-transparent btn p-0" to="/networks">
                        <i className="bi bi-router"></i>
                        <span className="ms-3">Δικτυακά</span>
                    </Link>
                    <Link className="menu-item bg-transparent btn p-0" to="/categories">
                        <i className="bi bi-plus-circle"></i>
                        <span className="ms-3">Περισσότερα</span>
                    </Link>
                </div>
            </div>
            <div className="w-100 d-flex mt-4 justify-content-center align-items-center">
                <div className="banner border-light border bg-secondary">
                    <button className="mt-2 btn btn-light shadow-none right-banner-btn text-light fw-bold btn-banner">
                        Περισσότερα
                    </button>
                </div>
                <div className="right-banner bg-secondary me-2 border border-light d-flex align-items-center flex-column">
                    <img alt="" src={bannerRight}></img>
                    <span className="fw-bold">
                        Φτιάξε τον δικό σου Η/Υ
                    </span>
                    <button className="mt-2 btn btn-light shadow-none right-banner-btn text-light fw-bold">
                        Επόμενο
                    </button>
                </div>
            </div>

            <div className="w-75 ms-auto me-auto mt-4">
                <span className="popular-title"> Δημοφιλή προϊόντα</span>
                <Slider {...settings} className="mt-3">
                    <div className="popular-card bg-light">
                        <img alt="" src="https://www.pngmart.com/files/22/iPhone-14-Pro-Max-PNG.png"></img>
                    </div>
                    <div className="popular-card bg-light">
                        <img alt="" src="https://images.macrumors.com/t/Au-OUIb73hHvx2w8CirAir5bNbM=/1600x/article-new/2013/09/macbook-air-m2-roundup-header.png"></img>
                    </div>
                    <div className="popular-card bg-light">
                        <img alt="" src="https://www.pngall.com/wp-content/uploads/13/Galaxy-S23-Ultra-PNG-Clipart.webp"></img>
                    </div>
                    <div className="popular-card bg-light">
                        <img alt="" src="https://www.freepnglogos.com/uploads/airpods-png/airpods-pro-airpods-what-the-difference-and-10.png"></img>
                    </div>
                    <div className="popular-card bg-light">
                        <img alt="" src="https://dlcdnwebimgs.asus.com/gain/E0E15911-885A-421B-A775-5E1854731699"></img>
                    </div>
                </Slider>
            </div>

            <div className="w-75 ms-auto me-auto mt-5">
                <span className="popular-title"> Νέα προϊόντα</span>
                <Slider {...settings} className="mt-3">
                    <div className="popular-card bg-light">
                        <img alt="" src="https://www.in-win.com/uploads/Product/gaming-chassis/d-frame-2/d-frame2_overview_options_02.png"></img>
                    </div>
                    <div className="popular-card bg-light">
                        <img alt="" src="https://asset.msi.com/resize/image/global/product/product_1665552671c76199be0956de9b63d7e35b33b91acb.png62405b38c58fe0f07fcef2367d8a9ba1/1024.png"></img>
                    </div>
                    <div className="popular-card bg-light">
                        <img alt="" src="https://shop.asisnet.gr/wp-content/uploads/2022/06/DELL-Server-PowerEdge-R550-2U.png"></img>
                    </div>
                    <div className="popular-card bg-light">
                        <img alt="" src="https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/Alienware_x14_3.png"></img>
                    </div>
                    <div className="popular-card bg-light">
                        <img alt="" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f0e13eb8-4db6-4a3e-97ea-918a4dce742b/deb2976-e88ef583-9b52-4035-a879-b0cdfb76c084.png/v1/fill/w_723,h_720/ps5_disc_edition_box__united_states___png__by_regularshowfan2005_deb2976-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6IlwvZlwvZjBlMTNlYjgtNGRiNi00YTNlLTk3ZWEtOTE4YTRkY2U3NDJiXC9kZWIyOTc2LWU4OGVmNTgzLTliNTItNDAzNS1hODc5LWIwY2RmYjc2YzA4NC5wbmciLCJ3aWR0aCI6Ijw9NzIzIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.3gTn415DLTV7u9SGvVsTSENm66639jafTSDK2EALePA"></img>
                    </div>
                </Slider>
            </div>


            <Footer></Footer>
        </div>
    )
}

export default Home;