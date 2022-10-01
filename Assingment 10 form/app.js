function clearErrors(){

    errors = document.getElementsByClassName('formerror');
    for(let item of errors)
    {
        item.innerHTML = "";
    }


}
function seterror(id, error){ 
    element = document.getElementById(id);
    element.getElementsByClassName('formerror')[0].innerHTML = error;

}

function validateForm(){
    var returnval = true;
    clearErrors();

    
    var name = document.forms['myForm']["fname"].value;
    if (name.length<5){
        alert("name", "*Length of name is too short");
        returnval = false;
    }

    if (name.length == 0){
        alert("name", "*Length of name cannot be zero!");
        returnval = false;
    }

    var email = document.forms['myForm']["femail"].value;
    if (email.length>15){
        alert("email", "*Email length is too long");
        returnval = false;
    }

    var phone = document.forms['myForm']["fphone"].value;
    if (phone.length != 11){
        alert("phone", "*Phone number should be of 10 digits!");
        returnval = false;
    }

    var password = document.forms['myForm']["fpass"].value;
    if (password.length < 6){

       
        alert("pass", "*Password should be atleast 6 characters long!");
        returnval = false;
    }

    var zip = document.forms['myForm']["zip"].value;
    if (zip.length>6){
        seterror("zipcode", "*incorect zipcode!");
        returnval = false;
    }

    return returnval;
}