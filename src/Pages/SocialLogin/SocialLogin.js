import React from 'react';
import './SocialLogin.css';
import { BsFacebook, BsGoogle, BsGithub } from "react-icons/bs";
import auth from '../../firebase_int';
import { useSignInWithFacebook, useSignInWithGoogle } from 'react-firebase-hooks/auth';

const SocialLogin = () => {
    const [signInWithGoogle] = useSignInWithGoogle(auth);
    const [signInWithFacebook] = useSignInWithFacebook(auth);
    return (
        <div className='mx-auto w-50'>
            <div className='d-flex align-items-center '>
                <div className='orDiv' ></div>
                <p className='mb-1'>or</p>
                <div className='orDiv'></div>
            </div>
            <di className='d-flex btn-group'>
                <button className='btn btn-success mb-3 ' onClick={() => signInWithGoogle()} ><BsGoogle className='icon'></BsGoogle> Signin With Google</button>
                <button className='btn btn-success mb-3 ' onClick={() => signInWithFacebook()}> <BsFacebook className='icon'></BsFacebook>Signin With Facebook</button>
                <button className='btn btn-success '><BsGithub className='icon'></BsGithub>Signin With GitHub</button>
            </di>

        </div>
    );
};

export default SocialLogin;