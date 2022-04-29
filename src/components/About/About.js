import React from 'react';
import Footer from '../Footer/Footer';
import aboutImg from './../../images/2.jpg';
import './About.css';

const About = () => {
    return (
        <div>
            <div className='container '>
                <div className='img-div'>
                    <img className='mt-5 mb-5 img-style' width={340} src={aboutImg} alt="" />
                </div>

                <div className='mt-4  new-bg'>
                    <p className='fs-4'>Hi! I am Asif. I am a Professional Photographer. I've been in this field since 2016. I am Senior Photographer in Freeze Frame Photography. I am eager to satisfy my clients. In first Photography was a hobby for me and i took this as passion and now i am a Professional Photographer. I always set my plans for every year this year i did great satisfying 5000+ clients. My goal is to expand our reach to satisfy every couples, models and products. </p>
                </div>
            </div>
            {
                <Footer></Footer>
            }
        </div>
    );
};

export default About;