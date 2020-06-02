import React, { Component } from 'react'
import { connect } from 'react-redux'
import { update, generateData, isFormValid } from '../utils/Forms/FormActions.js';

import FormField from '../utils/Forms/FormField.js'
import FormAction from '../utils/Forms/FormActions.js'

class Register extends Component {

    state = {
        formError: false,
            formSuccess: '',
            formData: {
                name: {
                    element: 'input',
                    value: '',
                    config: {
                        name: 'name_input',
                        type: 'text', 
                        placeholder: 'Enter your name'
                    },
                    validation: {
                        required: true
                    },
                    valid: false,
                    touched: false,
                    validationMessage: ''
                },
                lastname: {
                    element: 'input',
                    value: '',
                    config: {
                        name: 'lastname_input',
                        type: 'text', 
                        placeholder: 'Enter your lastname'
                    },
                    validation: {
                        required: true
                    },
                    valid: false,
                    touched: false,
                    validationMessage: ''
                },
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
                },
                confirmPassword: {
                    element: 'input',
                    value: '',
                    config: {
                        name: 'confirmPassword_input',
                        type: 'password', 
                        placeholder: 'Confirm your password'
                    },
                    validation: {
                        required: true,
                        confirm: 'password'
                    },
                    valid: false,
                    touched: false,
                    validationMessage: ''
                }
            }
    }

    submitForm = (e) => {
        e.preventDefault();

        let dataToSubmit = generateData(this.state.formData, 'login');
        let formIsValid = isFormValid(this.state.formData, 'login');

        if(formIsValid) {
            console.log(dataToSubmit, 'data to submit')
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
        <div className='page_wrapper'>
            Register
            <div className='container'>
                <div className='register_login_container'>
                    <div className='left'>
                        <form onSubmit={(e) => this.submitForm(e)}>
                            <h2>Personal information</h2>
                            <div className='form_block_two'>
                                <div className='block'>
                                    <FormField 
                                        id={'name'}
                                        formData={formData.name}
                                        change={ (element) => this.updateForm(element) }
                                    />
                                </div>
                                <div className='block'>
                                    <FormField 
                                        id={'lastname'}
                                        formData={formData.lastname}
                                        change={ (element) => this.updateForm(element) }
                                    />
                                </div>
                            </div>
                            <div>
                                <FormField 
                                    id={'email'}
                                    formData={formData.email}
                                    change={ (element) => this.updateForm(element) }
                                />
                            </div>
                            <h2>Verify password</h2>
                            <div className='form_block_two'>
                                <div className='block'>
                                    <FormField 
                                        id={'password'}
                                        formData={formData.password}
                                        change={ (element) => this.updateForm(element) }
                                    />
                                </div>
                                <div className='block'>
                                    <FormField 
                                        id={'confirmPassword'}
                                        formData={formData.confirmPassword}
                                        change={ (element) => this.updateForm(element) }
                                    />
                                </div>
                            </div>
                            { formError ?
                                <div className="error_label">
                                    Please check your data
                                </div> : 
                                null 
                            }
                            <button onClick={ (e) => this.submitForm(e)}>
                                Create an account
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
    }
}

export default connect()(Register);
