import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';
import './Header.css';


const Header = () => {
    const { user, handleSignOut } = useFirebase();
    return (
        <div className='header'>
            <nav className="navbar navbar-expand-lg navbar-dark bg-color">
                <div className="container-fluid">
                    <a className="navbar-brand ms-4" href="/">Freeze Frame Photography</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
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
                                    user?.uid
                                        ?
                                        <button className="btn custom-btn btn-lg fs-6 sign-out-btn " onClick={handleSignOut}>Sign out</button>
                                        :
                                        <Link className='nav-link text-white fs-6 me-4' to="/login">Login</Link>
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