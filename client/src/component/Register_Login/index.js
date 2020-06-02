import React from 'react';
import MyButton from '../utils/button.js';
import Login from './login.js'

const RegisterLogin = () => {
    return (
        <div className='page_wrapper'>
            <div className="container">
                <div className="register_login_container">
                    <div className="left">
                        <h1>New customers</h1>
                        <p>If you are a new customer and does not have an account yet, hit the button below to create your account. </p>
                        <MyButton 
                            type="default"
                            title="Create an account"
                            linkTo='/register'
                            addStyles={{ margin: '10px 0 0 0'}}
                        />
                    </div>
                    <div className="right">
                        <h2>Registered customers</h2>
                        <p>If you do have an account, please login here</p>
                        <Login />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RegisterLogin;
