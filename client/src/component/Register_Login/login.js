import React, { Component } from 'react';

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { loginUser } from '../../Redux/actions/user_actions.js';

import FormField from '../utils/Forms/FormField.js';
import { update, generateData, isFormValid } from '../utils/Forms/FormActions.js';

class Login extends Component {
    constructor(){
        super()

        this.state = {
            formError: false,
            formSuccess: '',
            formData: {
                email: {
                    element: 'input',
                    value: '',
                    config: {
                        name: 'email_input',
                        type: 'email', 
                        placeholder: 'Enter your email'
                    },
                    validation: {
                        required: true, 
                        email: true
                    },
                    valid: false,
                    touched: false,
                    validationMessage: ''
                },
                password: {
                    element: 'input',
                    value: '',
                    config: {
                        name: 'password_input',
                        type: 'password', 
                        placeholder: 'Enter your password'
                    },
                    validation: {
                        required: true
                    },
                    valid: false,
                    touched: false,
                    validationMessage: ''
                }
            }
        };
    }

    submitForm = (e) => {
        e.preventDefault();

        let dataToSubmit = generateData(this.state.formData, 'login');
        let formIsValid = isFormValid(this.state.formData, 'login');

        if(formIsValid) {
            this.props.dispatch(loginUser(dataToSubmit))
                .then(response => {
                   if(response.payload.loginSuccess) {
                       console.log(response.payload, "response")
                       this.props.history.push('/users/dashboard')
                   } else {
                       this.setState({
                           formError: true
                       })
                   }
                });
        } else {
            this.setState({
                formError: true
            })
        }
    }

    updateForm = (element) => {
        const newFormData = update(element, this.state.formData, 'login');
        this.setState({ 
            formError: false,
            formData: newFormData
        })
    }

    render() {
        const { formData, formError} = this.state; 
        return (
            <div className='signin_wrapper'>
                <form onSubmit={ (e) => this.submitForm(e)}>
                    <FormField 
                        id={'email'}
                        formData={formData.email}
                        change={ (element) => this.updateForm(element) }
                    />
                    <FormField 
                        id={'password'}
                        formData={formData.password}
                        change={ (element) => this.updateForm(element) }
                    />
                    { formError ?
                        <div className="error_label">
                            Please check your data
                        </div> : 
                        null 
                    }
                    <button onClick={ (e) => this.submitForm(e)}>
                        Log In
                    </button>
                </form>
            </div>
        )
    }
}

export default connect()(withRouter(Login))
