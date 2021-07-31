
function checkFirstName(firstname){
    var l = firstname.value.length;
    if(l != 0)
    {
        return true;
    }
    else
    {
        document.querySelector('#firstNameP').innerHTML = "Required";
        console.log("firstname empty");
        firstname.focus();
    }
}

function checkEmail(email){
    var l = email.value.length;
    if(l != 0)
    {
        return true;
    }
    else
    {
        document.querySelector('#emailP').innerHTML = "Required";
        console.log("email empty");
        email.focus();
    }
}

function checkLastName(lastName){
    var l = lastName.value.length;
    if(l != 0)
    {
        return true;
    }
    else
    {
        document.querySelector('#lastNameP').innerHTML = "Required";
        console.log("lastname empty");
        lastName.focus();
    }
}

function checkUserType(employee, school, university){
    if(school.checked){
        return true;
    }
    else if(employee.checked){
        return true;
    }
    else if(university.checked){
        return true;
    }else{
        document.querySelector('#userTypeP').innerHTML = "user type required";
        userType.focus();
        console.log("user type empty")
    }
}

function paymentChoice(paymentType){
    if(paymentType == 'default'){
        document.querySelector('#paymentP').innerHTML = "Required";
    }
    else
        return true;
}

function checkContactNo(contactNo){
    var phoneno = /^\d{10}$/;
    if(contactNo.value.match(phoneno))
    {
        return true;
    }
    else
    {
        document.querySelector('#contactNoP').innerHTML = "TP should be a 10 digits no";
        contactNo.focus();
    }
}

function checkAddress(address){
    var l = address.value.length;
    if(l != 0)
    {
        return true;
    }
    else
    {
        document.querySelector('#addressP').innerHTML = "Required";
        console.log("email empty");
        address.focus();
    }
}

//validate each field of the form
function validateForm(){
    var firstName = document.userRegistration.firstName;
    var email = document.userRegistration.email;
    var lastName = document.userRegistration.lastName;
    var school = document.getElementById("school");
    var university = document.getElementById("university");
    var employee = document.getElementById("employee");
    var payment = document.userRegistration.payment.value;
    var contactNo = document.userRegistration.contactNo;
    var address = document.userRegistration.address;
    //user type array
    var userType = { school: school, uni: university, emp: employee};

    //now validate the user inputs
    if (checkFirstName(firstName)){
        if(checkEmail(email)){
            if(checkLastName(lastName)){
                if(checkUserType(userType.emp, userType.school, userType.uni)){
                    if(paymentChoice(payment)){
                        if(checkContactNo(contactNo)){
                            if(checkAddress(address)){
                                alert("User added successfully!!");
                                window.location.reload()
                                return true;
                            }
                            return false;
                        }
                        return false;
                    }
                    return false;
                }
                return false;
            }
            return false;
        }
        return false;
    }
    else{
        return false;
    }
}


