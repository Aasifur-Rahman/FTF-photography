import React from 'react';
import ServiceItem from '../ServiceItem/ServiceItem';
import './Services.css';

const Services = () => {

    const AllServices = [
        {
            id: 1,
            name: "Standard",
            price: 310,
            img: "https://images.unsplash.com/photo-1629756048377-09540f52caa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
            Description: "Standard package will provide you with 3 hours session, photo editing with 60 Digital photos and online gallery."

        },
        {
            id: 2,
            name: "Premium",
            price: 480,
            img: "https://images.unsplash.com/photo-1638938158700-c3f3e81f6ff3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            Description: "Premium package is for 7 hours photography and videography with photo editing 100 Digital photos online gallery. "


        },
        {
            id: 3,
            name: "Platinum",
            price: 1000,
            img: "https://images.unsplash.com/photo-1611784728558-6c7d9b409cdf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
            Description: "Platinum will provide you with 15hr session of photography and cinematography with pre-wedding shoot is also available."
        }
    ]

    return (
        <div>
            <h2 className='py-5 fs-1 fw-bold '>Our <span className='custom-clr'>Services</span></h2>
            <div className="row row-cols-1 row-cols-md-3 g-4 container mx-auto ">
                {
                    AllServices.map(items => <ServiceItem key={items.id} items={items}></ServiceItem>)
                }
            </div>
        </div>
    );
};

export default Services;