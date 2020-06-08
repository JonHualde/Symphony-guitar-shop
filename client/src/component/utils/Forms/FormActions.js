
// ------ UPDATE THE STATE ON LOGIN COMPONENT ------ //
export const update = (element, formData, formName) => {
    const newFormData = {
        ...formData
    };

    const newElement = {
        ...newFormData[element.id]
    }

    newElement.value = element.e.target.value;

    if(element.blur) {
// --- VALIDATE FUNCTION HAS BEEN IMPLEMENTED TO CHECK EMAIL/PASSWORD --- //
        let validData = validate(newElement, formData);
        newElement.valid = validData[0];
        newElement.validationMessage = validData[1];
    }

    newElement.touched = element.blur;
    newFormData[element.id] = newElement;

    return newFormData;
};

// ------ CHECK AND VALIDATE IS BOTH FIELDS HAVE BEEN CORRECTLY FILLED OUT ------ //
export const validate = (element, formData = []) => {
    let error = [true, ''];

    if(element.validation.email) {
        const valid = /\S+@\S+\.\S+/.test(element.value)
        const message = `${!valid ? 'Must be a valid email address' : null }`;
        error = !valid ? [valid, message] : error;
    }

    if(element.validation.confirm){
        const valid = element.value.trim() === formData[element.validation.confirm].value ;
        const message = `${!valid ? 'Password does not match' : null }`;
        error = !valid ? [valid, message] : error;
    }

    if(element.validation.required){
        const valid = element.value.trim() !== '';
        const message = `${!valid ? 'This field is required' : null }`;
        error = !valid ? [valid, message] : error;
    }
    return error; 
}


// ------ GENERATES DATA FROM THE FORM ------ //
export const generateData = ( formData, formName ) => {
    let dataToSubmit = {};
    
    for (let key in formData) {
        if(key !== 'confirmPassword'){
            dataToSubmit[key] = formData[key].value; 
        }
    }

    return dataToSubmit;
}


// ------ FINAL CHECK OF THE VALIDITY OF THE FORM ------ //
export const isFormValid = ( formData, formName) => {
    let isFormValid = true;

    for(let key in formData){
        isFormValid = formData[key].valid && isFormValid
    }

    return isFormValid;
}