import React from 'react';
import useFirebase from '../../hooks/useFirebase';

const Login = () => {
    const { signInWithGoogle, user, handleSignOut } = useFirebase();
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

                                        <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Log in</p>

                                        <form className="mx-1 mx-md-4">

                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                    <input type="email" id="form3Example3c" className="form-control" placeholder='Your Email' />

                                                </div>
                                            </div>

                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                    <input type="password" id="form3Example4c" className="form-control" placeholder='Password' />

                                                </div>
                                            </div>

                                            <div className="text-center">
                                                <p>Not a member? <a href="#!">Register</a></p>
                                            </div>
                                            <div className="form-check d-flex justify-content-center mb-5">
                                                <input
                                                    className="form-check-input me-2"
                                                    type="checkbox"
                                                    value=""
                                                    id="form2Example3c"
                                                />
                                                <label className="form-check-label" for="form2Example3">
                                                    I agree all statements in <a href="#!">Terms of service</a>
                                                </label>
                                            </div>

                                            <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                                <button type="button" className="btn btn-primary btn-lg">Log in</button>
                                            </div>
                                            <p className='text-muted'>OR</p>

                                            {

                                                user?.uid
                                                    ?
                                                    <button className="btn btn-primary btn-lg" onClick={handleSignOut}>sign out</button>
                                                    :
                                                    <button
                                                        onClick=
                                                        {signInWithGoogle}
                                                        type="button" className="btn btn-primary btn-lg">Continue with Google</button>}

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