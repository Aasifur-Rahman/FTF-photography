import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {

    return (
        <div classNameName='header'>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">Freeze Frame Photography</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <Link className='nav-link text-white active fs-6 me-2' to="/">Home</Link>
                            </li>

                            <li className="nav-item">
                                <Link className='nav-link text-white fs-6 me-2' to="/blog">Blog</Link>
                            </li>
                            <li className="nav-item">
                                <Link className='nav-link text-white fs-6 me-2' to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className='nav-link text-white fs-6 me-2' to="/register">Register</Link>
                            </li>

                            <li className="nav-item">
                                <Link className='nav-link text-white fs-6 me-2' to="/checkout">Checkout</Link>
                            </li>

                            <li className="nav-item">
                                {

                                    <Link className='nav-link text-white fs-6 me-2' to="/login">Login</Link>
                                }
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </div >
    );
};

export default Header;