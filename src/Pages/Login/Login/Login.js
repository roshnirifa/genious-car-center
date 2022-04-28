import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase_int';
import SocialLogin from '../../SocialLogin/SocialLogin';
import './Login.css';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';


const Login = () => {
    const emailRef = useRef('');
    const passRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();
    const [
        signInWithEmailAndPassword,
        user] = useSignInWithEmailAndPassword(auth);
    let from = location.state?.from?.pathname || "/";

    const handleSubmit = e => {
        e.preventDefault();
        const email = emailRef.current.value;
        const pass = passRef.current.value;
        signInWithEmailAndPassword(email, pass)

    }
    if (user) {
        navigate(from, { replace: true });
    }
    const navigateSignUp = () => {
        navigate('/signup');
    }

    return (
        <div className='mx-auto box my-4'>

            <h2 className='text-center mt-3 text-primary'>Please login!!!!!</h2>
            <Form onSubmit={handleSubmit} className='m-5'>
                <Form.Group className="mb-3">
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Control ref={passRef} type="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Login
                </Button>
                <p className='mt-4 text-danger fw-bold'>New to CarDoctor? <span className='text-primary' onClick={navigateSignUp} style={{ cursor: 'pointer' }}>Please Signup</span></p>

                <SocialLogin></SocialLogin>
            </Form>


        </div>
    );
};

export default Login;