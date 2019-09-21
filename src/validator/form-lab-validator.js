
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
    }
};

module.exports = form_lab_validator;