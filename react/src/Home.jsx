import React, {useRef} from "react";
import Navbar from "./Navbar";
import './Home.css';
import bannerRight from './image 1.png';
import Slider from "react-slick";
import Header from "./Header";
import Footer from "./Footer";
import {Link} from "react-router-dom";
import ChatWidget from "./ChatWidget";
import BreadCrumb from "./BreadCrumb";
import CategoryNav from "./CategoryNav";

function Home(){

    const sliderRef = useRef();
    const sliderRef2 = useRef();

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        arrows: false,
        // autoplay: true,
        // autoplaySpeed: 2000
    };

    return (
        <div className="Home">
            <Header></Header>
            <Navbar></Navbar>
            <CategoryNav></CategoryNav>
            <ChatWidget></ChatWidget>
            <BreadCrumb></BreadCrumb>
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

            <div className="popular-products-container ms-auto me-auto mt-5">
                <span className="popular-title"> Δημοφιλή προϊόντα</span>
                <div className="w-100 d-flex justify-content-center align-items-center">
                    <button className="text-light btn slick-btn me-3" onClick={()=>sliderRef?.current?.slickPrev()}><i class="bi bi-arrow-left"></i></button>   
                    <Slider ref={sliderRef} {...settings} className="mt-3 w-75">
                        <div className="popular-card bg-light">
                            <img alt="" src="https://static.skyassets.com/contentstack/assets/blt143e20b03d72047e/blt8937265d6aa0575b/622a7dd8eda9a1043584adcb/Carousel_iPad_Blue_Placement02.png"></img>
                        </div>
                        <div className="popular-card bg-light">
                            <img alt="" src="https://images.macrumors.com/t/Au-OUIb73hHvx2w8CirAir5bNbM=/1600x/article-new/2013/09/macbook-air-m2-roundup-header.png"></img>
                        </div>
                        <div className="popular-card bg-light">
                            <img alt="" src="https://a-power.com/app/uploads/2019/09/5879186_5812260896-600x974.png"></img>
                        </div>
                        <div className="popular-card bg-light">
                            <img alt="" src="https://dlcdnwebimgs.asus.com/gain/EFF9D6D8-2F6C-4E76-989F-E5DB594052BA/w717/h525"></img>
                        </div>
                        <div className="popular-card bg-light">
                            <img alt="" src="https://dlcdnwebimgs.asus.com/gain/E0E15911-885A-421B-A775-5E1854731699"></img>
                        </div>
                    </Slider>
                    <button className="text-light btn slick-btn ms-3" onClick={()=>sliderRef?.current?.slickNext()}><i class="bi bi-arrow-right"></i></button>
                </div>
            </div>

            <div className="w-75 ms-auto me-auto categories-title">
                <span className="popular-title">Ψάξτε ανά κατηγορία</span>
            </div>
            <div className="w-75 ms-auto me-auto home-categories">
                <Link to="/monitors" className="category-card d-flex align-items-center justify-content-center flex-column">
                    <img alt="" src="https://images.samsung.com/is/image/samsung/p6pim/no/ls32ag320nuxen/gallery/no-odyssey-g3-g32a-ls32ag320nuxen-531086442?$650_519_PNG$"></img>
                    <span className="text-align-center">Οθόνες</span>
                </Link>
                <Link to="/tablets" className="category-card d-flex align-items-center justify-content-center flex-column">
                    <img alt="" src="https://www.custommacbd.com/cdn/shop/products/ipad-pro-12-select-202104_4bda6238-716d-4a43-997c-bf0caa926e30.png?v=1662195591"></img>
                    <span className="text-align-center">Tablets</span>
                </Link>
                <Link to="/peripherals" className="category-card d-flex align-items-center justify-content-center flex-column">
                    <img alt="" src="https://resource.logitechg.com/w_692,c_lpad,ar_4:3,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/gaming/en/products/pro-x-superlight/pro-x-superlight-black-gallery-1.png?v=1"></img>
                    <span className="text-align-center">Περιφερειακά</span>
                </Link>
                <Link to="/laptops" className="category-card d-flex align-items-center justify-content-center flex-column">
                    <img alt="" src="https://p1-ofp.static.pub/medias/bWFzdGVyfHJvb3R8MzgxMTU4fGltYWdlL3BuZ3xoMDMvaGM5LzE0MzIyOTk4OTAyODE0LnBuZ3xkNTExOTkzODA2NzViZGQwOTY1NDg5NDkzMWViYTFiYjMwMTk5ZWQyM2M5MDg5YzkwOTUwZDdhMjI3NGRiOGM2/lenovo-laptop-thinkpad-l15-intel-hero.png"></img>
                    <span className="text-align-center">Laptops</span>
                </Link>
                <Link to="/desktops" className="category-card d-flex align-items-center justify-content-center flex-column">
                    <img alt="" src="https://benson.ph/cdn/shop/products/T440d8.webp?v=1660708548"></img>
                    <span className="text-align-center">Desktops & Servers</span>
                </Link>
                <Link to="/networking" className="category-card d-flex align-items-center justify-content-center flex-column">
                    <img alt="" src="https://cdn.connectec.uk/uploads/products/U6-LR1.png?scale.height=1000&canvas.height=1000&scale.width=1200&canvas.width=1200&canvas.opacity=0&crop.type=trim&crop.pad.x=5%&crop.pad.y=5%"></img>
                    <span className="text-align-center">Δικτυακά</span>
                </Link>            
            </div>

            <div className="popular-products-container ms-auto me-auto mt-5">
                <span className="popular-title"> Νέα προϊόντα</span>
                <div className="w-100 d-flex justify-content-center align-items-center">
                    <button className="text-light btn slick-btn me-3" onClick={()=>sliderRef2?.current?.slickPrev()}><i class="bi bi-arrow-left"></i></button>   
                    <Slider ref={sliderRef2} {...settings} className="mt-3 w-75">
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
                            <img alt="" src="https://p1-ofp.static.pub/medias/bWFzdGVyfHJvb3R8MjI2NDY5fGltYWdlL3BuZ3xoMDEvaGQxLzE0MDgwNDg0ODY4MTI2LnBuZ3xjZTM1YWNmODQxYWQyNDdjYzEyOTFkNTE1NmIwMjBkMGY0MDBjODY0ODgyNjAxNDA2NDQxYjMwYzc1MDBjZjAy/lenovo-laptop-thinkpad-x1-nano-13-hero.png"></img>
                        </div>
                    </Slider>
                    <button className="text-light btn slick-btn ms-3" onClick={()=>sliderRef2?.current?.slickNext()}><i class="bi bi-arrow-right"></i></button>
                </div>
            </div>

            <div style={{marginTop:"7rem"}}>
                <Footer></Footer>
            </div>
    
        </div>
    )
}

export default Home;