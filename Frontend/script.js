function handleSubmit() {
    const isValid = validateForm();
    if (isValid) {
        document.getElementById("registrationForm").submit();
    }
}


function validateForm(){
    //Get all the input Fields from HTML Entered by User.
    const regno = document.getElementById("stdid").value.trim();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const mobileno = document.getElementById("mblno").value.trim();
    const event = document.getElementById("event").value.trim();

    const errorMsg = document.getElementById("error-msg");

    //All Fields Requires Validation
    if (!regno || !name || !email || !mobileno || !event) {
        errorMsg.innerText = "All fields are required.";
        return false;
    }

    //Email Validation
    if (!email.includes('@')) {
        errorMsg.innerText = "Please enter a valid email address.";
        return false;
    }

    //Mobile Number Validation
    if (mobileno.length != 10 || isNaN(mobileno)) {
        errorMsg.innerText = "Please enter a valid Mobile Number.";
        return false;
    }
    
    return true;
}

window.onload = () => {
    document.getElementById("registrationForm").reset();
};