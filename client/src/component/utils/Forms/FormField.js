import React from 'react';

const FormField = ({ id, formData, change }) => {

    const showError = () => {
        let errorMessage = null;

        if(formData.validation && !formData.valid){
            errorMessage = (
                <div className="error_label">
                    {formData.validationMessage}
                </div>
            )
        }

        return errorMessage;
    }

    const renderTemplate = () => {
        let formTemplate = null;

        switch(formData.element) {
            case 'input': 
                formTemplate = (
                    <div className='formBlock'>
                        <input 
                            {...formData.config}
                            value={formData.value}
                            onBlur={ (e) => change({ e, id, blur: true })}
                            onChange={ (e) => change({ e, id })}
                        />
                        {showError()}
                    </div>
                )
            break;
            default: 
                return formTemplate = null;
        }
        
        return formTemplate;


    }

    return (
        <div>
            {renderTemplate()}
        </div>
    );
};

export default FormField;