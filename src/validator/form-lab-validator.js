
var form_lab_validator = {
    validaCvRequest: function(body) {
        var isValid = true;
        isValid = isValid && !!body.names;
        isValid = isValid && !!body.last_name;
        isValid = isValid && !!body.phone_number;
        isValid = isValid && !!body.email;
        isValid = isValid && !!body.birth_date;
        isValid = isValid && !!body.identification_number;
        isValid = isValid && !!body.cv_file;
        return isValid;
    },
    validaCourseRequest: function(body) {
        var isValid = true;
        isValid = isValid && !!body.name;
        isValid = isValid && !!body.identification;
        isValid = isValid && !!body.birthdate;
        isValid = isValid && !!body.gender;
        isValid = isValid && !!body.ocupation;
        isValid = isValid && !!body.hours_per_week;
        isValid = isValid && !!body.provider;
        return isValid;
    },
    validaSubscribeRequest: function(body) {
        var isValid = true;
        isValid = isValid && !!body.name;
        isValid = isValid && !!body.surname;
        isValid = isValid && !!body.provider;
        isValid = isValid && !!body.username;
        isValid = isValid && !!body.password;
        isValid = isValid && !!body.password_confirmation;
        return isValid;
    },
    validaLoginRequest: function(body) {
        var isValid = true;
        isValid = isValid && !!body.username;
        isValid = isValid && !!body.password;
        isValid = isValid && !!body.provider;
        return isValid;
    }
};

module.exports = form_lab_validator;