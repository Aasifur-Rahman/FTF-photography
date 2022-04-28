import React from 'react';
import './Banner.css'
import image from './carousel-img/carosal-img-1.jpg';
import image2 from './carousel-img/carosal-img-2.jpg';
import image3 from './carousel-img/carosal-img-3.jpg';
const Banner = () => {
    return (
        <div>
            <div id="carouselExampleCaptions" data-interval="4000" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={image} className="d-block w-100" alt="..." />
                        <div className="carousel-caption ">
                            <h1 className='text-size'>Hi! This is Asifur Rahman a professional Wedding Photographer. <br /> I have experience of all types of wedding photos that are trendy in social media, with my creativity i will give you guys a photo to remember.</h1>

                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={image2} className="d-block w-100" alt="..." />
                        <div className="carousel-caption ">
                            <h1 className='style-color text-size'>The purpose of this website is to have a great relationship with our clients and <br /> for the information that our clients needs to know about us.</h1>

                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={image3} className="d-block w-100" alt="..." />
                        <div className="carousel-caption ">
                            <h1 className='text-size'>Make your wedding be the best with greatest memories of your photos. <br />Our packages are budget friendly with professional experience.</h1>

                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};

export default Banner;