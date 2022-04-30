import React, { useRef, useState } from 'react';
import { Link, useNavigate, } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useSendEmailVerification } from 'react-firebase-hooks/auth';
import "./Register.css";
import app from '../../firebase.init';
import { getAuth } from 'firebase/auth';

const Register = () => {

    const auth = getAuth(app);

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    let navigate = useNavigate();

    const [sendEmailVerification] = useSendEmailVerification(auth);

    const emailRef = useRef("")
    const passwordRef = useRef("")
    const nameRef = useRef("")

    const [registerError, setRegisterError] = useState("")

    const handleRegister = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        if (error) {
            setRegisterError(error.message)
            return;
        }
        createUserWithEmailAndPassword(email, password)

        sendEmailVerification()

    }
    if (user) {
        console.log(user)
        navigate("/")

    }

    return (
        <div>
            <h3 className='mt-4'>Please Register now</h3>
            <div className="container h-100 mt-4 mb-3">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-lg-12 col-xl-11">
                        <div className="card text-black extra-style">
                            <div className="card-body p-md-5">
                                <div className="row justify-content-center">
                                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                                        <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign <span className="custom-clr" >up</span> </p>

                                        <form onSubmit={handleRegister} className="mx-1 mx-md-4">

                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                    <input ref={nameRef} type="text" id="form3Example1c" className="form-control" placeholder='Your Name' />

                                                </div>
                                            </div>

                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                    <input ref={emailRef} type="email" id="form3Example3c" className="form-control" placeholder='Your Email' />

                                                </div>
                                            </div>

                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                    <input ref={passwordRef} type="password" id="form3Example4c" className="form-control" placeholder='Password' />

                                                </div>
                                            </div>

                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                    <input type="password" id="form3Example4cd" className="form-control" placeholder='Repeat you password' />

                                                </div>
                                            </div>
                                            <div className="text-center">
                                                <p>Already have an account? <Link className="custom-clr" to="/login">Log in</Link></p>
                                            </div>

                                            <div className="form-check d-flex justify-content-center mb-5">

                                                <input
                                                    className="form-check-input me-2"
                                                    type="checkbox"
                                                    value=""
                                                    id="form2Example3c"
                                                />

                                                <label className="form-check-label" for="form2Example3">
                                                    I agree all statements in <a className='custom-clr' href="#!">Terms of service</a>
                                                </label>
                                            </div>

                                            <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                                <button type="submit" className="btn custom-btn btn-lg">Register</button>
                                            </div>
                                            <p className='text-danger fs-5'>{registerError}</p>
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

export default Register;