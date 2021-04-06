import {  Button, TextField } from '@material-ui/core';
import React, { useState } from 'react';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
 import './Login.css'
import SignUp from './SignUp';

const Login = () => {
    
    const [signIn,setSignIn]=useState(false);

    return (
        <div className="login">
           <div className="login_nav">
                <img className="login_logo" src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="netflix-logo"/> 

                <Button onClick={()=>setSignIn(true)} className="login-btn">
                                    Sign in
                      </Button>

               
           </div>
           <div className="login_gradient"></div>
           <div className="login_content">
               {signIn ? (
                   <SignUp/>
               ) : (
                <>
                <h1>Unlimited movies, TV shows, and more.</h1>
                 <h4>  Unlimited movies, TV shows, and more.</h4>
               <h3> Watch anywhere. Cancel anytime.
       Ready to watch? Enter your email to create or restart your membership.</h3>
       <div className="login_input">
           <div className="input-field">
           <TextField id="filled-basic" type="email" label="Email Address" variant="filled" />
           </div>
           
            <Button className="login-btn" onClick={()=>setSignIn(true)} >Get Started  <ChevronRightIcon/></Button>
            </div>
                </>

               )}
             
           </div>
           
        </div>
    );
};

export default Login;