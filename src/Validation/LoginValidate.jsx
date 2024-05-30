function Validation(values) {
    let error = {}
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;


    if(values.name === "") {
        error.name = "Name should not be empty"
    }
    else {
        error.name = ""
    }

    if(values.password === "") {
        error.password = "Password should not be empty"
    }
    else if(!password_pattern.test(values.password)) {
        error.password = `Password should be 8 characters long and include:<br/> 
        - At least one digit<br/> 
        - At least one lowercase letter<br/> 
        - At least one uppercase letter.`;
    }
    else {
        error.password = ""
    }
    return error;
}

export default Validation;