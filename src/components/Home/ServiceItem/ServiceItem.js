import React from 'react';
import './ServiceItem.css';
import { useNavigate } from 'react-router-dom';

const ServiceItem = ({ items }) => {
    let navigate = useNavigate();
    return (
        <div>
            <div className='col '>
                <div className="card  mb-5">
                    <img src={items.img} className="card-img-top service-img" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title fs-2">{items.name}</h5>
                        <p className="card-text fs-6">{items.Description}</p>
                        <h4>Price: ${items.price}</h4>

                        <div class="card-btn">
                            <button onClick={() => navigate("/checkout")} className='btn  custom-btn fs-5 mt-3 mb-2'>Checkout</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceItem;