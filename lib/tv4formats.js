let nameRegex = "^[a-zA-Z]{4,}(?: [a-zA-Z]+){0,2}$";
let emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
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
        if (emailRegex.test(data)) {
            valid = true;
        }
        return valid ? null : "InValid E-mail address.";
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
        return valid ? null : "Must be greater than zero."
    },
    "orderBy": data => {
        let valid = false;
        if(data == 1 || data == -1){
            valid = true;
        }
        return valid ? null : "Either 1 or -1."
    }
}