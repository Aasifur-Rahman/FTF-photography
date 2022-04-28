import React from 'react';
import image4 from '../../../images/marissa-grootes--837JygbCJo-unsplash.jpg';
import Footer from '../../Footer/Footer';
const OurGoal = () => {
    return (
        <div className="">
            <div className='container'>
                <h2 className='py-5'>Our <span className='custom-clr'>Goal</span></h2>
                <div className="row">
                    <div className="col-md-6 ">
                        <img className='img-fluid' src={image4} alt="" />
                    </div>
                    <div className="col-md-6 d-flex align-items-center ">
                        <p className='fs-4'>Our Goal is to make our client happy it is our most main priority. We want to understand what our client wants. We also want to visualize the story of a wedding and give our client a precious memories to remember that is our first priority. To Reach that goal We have expandend year by year now we are focusing on our Client and services.
                        </p>
                    </div>
                </div>
            </div>
            {
                <Footer></Footer>
            }
        </div>
    );
};

export default OurGoal;