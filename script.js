const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2= document.getElementById("password2");

form.addEventListener('submit',e =>{

    e.preventDefault();
    checkInput();
})

function checkInput(){

    const usernameValue =username.value.trim();
    const emailValue =email.value.trim();
    const passwordValue =password.value.trim();
    const password2Value =password2.value.trim();

    if (usernameValue === '') {
        setError(username,'user name cannot be empty');
    }
    else{
        setSuccess(username);
    }

    if(emailValue ===''){
        setError(email,'email cannot be empty');
    }
    else if(! isEmail(emailValue))
    {
       setError(email ,'not a valid email');
    }
    else{
        setSuccess(email);
    }

 
     if (passwordValue === '') {
          setError(password,'password cannot be empty');
     }
    else{
          setSuccess(password);
     }

     if (password2Value === '') {
        setError(password2,'confirm password cannot be empty');
    }
    else if(passwordValue !== password2Value){
        setError(password2,'confirm password does not match');
    }
    else{
        setSuccess(password2);
    }

}
    function setError(input , message){
        const formControl = input.parentElement;
        const small = formControl.querySelector('small');
        formControl.className ='form-control error';
        small.innerText =message;
    }

    function setSuccess(input){
        const formControl =input.parentElement;
        formControl.className ='form-control success';
    }

function isEmail(email) {
    
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
}