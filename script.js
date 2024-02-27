function validateInputForm(form) {
    // Regular expressions for validation
    const dateRegex = /^\d{2}\/\d{2}\/\d{4}$/;
    const empIDRegex = /^[A-Z]\d{5}$/;
    const nameRegex = /^[A-Z][a-zA-Z]*$/;

    // Validate request date
    if (!dateRegex.test(form.ReqDate)) {
        alert("Invalid request date. Please use mm/dd/yyyy format.");
        return false;
    }

    // Validate employee ID
    if (!empIDRegex.test(form.EmpID)) {
        alert("Invalid employee ID. Must be 6 alphanumeric characters, starting with a capital letter followed by 5 numbers.");
        return false;
    }

    // Validate first name
    if (!nameRegex.test(form.FName)) {
        alert("Invalid first name. Must start with a capital letter.");
        return false;
    }

    // Validate last name
    if (!nameRegex.test(form.LName)) {
        alert("Invalid last name. Must start with a capital letter.");
        return false;
    }

    // Validate problem description
    if (form.ProbDesc.trim() === "") {
        alert("Problem description is required.");
        return false;
    }

    // If all validations pass, return true
    return true;
}
