import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');

    const { signInWithGoogle } = useFirebase();

    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        console.log(email, password);
    }



    return (
        <div>
            <h3 className='mt-4'>Please login</h3>
            <div className="container h-100 mt-4 mb-3">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-lg-12 col-xl-11">
                        <div className="card text-black extra-style">
                            <div className="card-body p-md-5">
                                <div className="row justify-content-center">
                                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                                        <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Log <span className="custom-clr">in</span> </p>

                                        <form onSubmit={handleSubmit} className="mx-1 mx-md-4">

                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                    <input ref={emailRef} type="email" id="form3Example3c" className="form-control" placeholder='Your Email' required />

                                                </div>
                                            </div>

                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                    <input ref={passwordRef} type="password" id="form3Example4c" className="form-control" placeholder='Password' required />

                                                </div>
                                            </div>

                                            <div className="text-center">
                                                <p>Not a member? <Link className="custom-clr" to="/register">Register</Link></p>
                                            </div>
                                            <div className="form-check d-flex justify-content-center mb-5">
                                                <input
                                                    className="form-check-input me-2"
                                                    type="checkbox"
                                                    value=""
                                                    id="form2Example3c"
                                                />
                                                <label className="form-check-label" for="form2Example3">
                                                    I agree all statements in <a className="custom-clr" href="#!">Terms of service</a>
                                                </label>
                                            </div>

                                            <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                                <button type="submit" className="btn custom-btn btn-lg">Log in</button>
                                            </div>
                                            <p className='text-muted'>OR</p>


                                            <button
                                                onClick=
                                                {signInWithGoogle}
                                                type="button" className="btn custom-btn btn-lg">Continue with Google</button>

                                        </form>

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Login;