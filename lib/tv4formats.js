let nameRegex = "^[a-zA-Z]{4,}(?: [a-zA-Z]+){0,2}$";
let emailRegex = "/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i";
let passwordRegex = "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$";


module.exports = {
    "nameValidate": data => {
        let valid = false;
        if (data.match(nameRegex)) {
            valid = true;
        }
        return valid ? null : "Atleast 4 characters required & Only alphabets allowed.";
    },
    "emailValidate": data => {
        let valid = false;
        if (!new RegExp(emailRegex).test(data)) {
            valid = true;
        }
        return valid ? null : "Email should be in proper format.";
    },
    "passwordValidate": data => {
        let valid = false;
        if (data.match(passwordRegex)) {
            valid = true;
        }
        return valid ? null : "8 characters required & Must Contain uppercase, lowercase, integer and special character.";
    },
    "positiveNumber": data => {
        let valid = false;
        if(data > 0){
            valid = true;
        }
        return valid ? null : "Age must be greater than zero."
    }
}