function Validation(values) {
    let errors = {};

    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phone_pattern = /^[0-9]{10}$/;
    const pincode_pattern = /^[0-9]{6}$/;
    const date_pattern = /^\d{4}-\d{2}-\d{2}$/;

    // Required field validation
    const requiredFields = [
        'application_no', 'roll_no', 'fees_receipt', 'course', 'year', 'student_name',
        'student_photo', 'DOB', 'blood_group', 'gender', 'nationality', 'religion', 'community',
        'caste', 'differently_abled', 'student_mobile_no', 'student_email_id', 'annual_income',
        'permanent_address', 'permanent_city', 'permanent_state', 'permanent_country', 'permanent_pincode',
        'communication_address', 'communication_city', 'communication_state', 'communication_country', 'communication_pincode'
    ];

    requiredFields.forEach(field => {
        if (!values[field]) {
            errors[field] = `${field.replace(/_/g, ' ')} should not be empty`;
        }
    });

    // Additional validation
    if (values.student_email_id && !email_pattern.test(values.student_email_id)) {
        errors.student_email_id = "Invalid email format";
    }

    if (values.student_mobile_no && !phone_pattern.test(values.student_mobile_no)) {
        errors.student_mobile_no = "Invalid mobile number, must be 10 digits";
    }

    if (values.permanent_pincode && !pincode_pattern.test(values.permanent_pincode)) {
        errors.permanent_pincode = "Invalid pincode, must be 6 digits";
    }

    if (values.communication_pincode && !pincode_pattern.test(values.communication_pincode)) {
        errors.communication_pincode = "Invalid pincode, must be 6 digits";
    }

    if (values.DOB && !date_pattern.test(values.DOB)) {
        errors.DOB = "Invalid date format, must be DD-MM-YYYY";
    }

    return errors;
}

export default Validation;
