//declaring variables
const loginForm=document.querySelector("form.login");
const signupForm=document.querySelector("form.signup");
const loginBtn=document.querySelector("label.login");
const signupBtn=document.querySelector("label.signup");
const signupLink=document.querySelector(".signup-link a");
const loginTxt=document.querySelector(".titleContainer .login");
const SignupLText=document.querySelector(".titileContainer .signup");

signupBtn.onclick =(()=>{
loginForm.style.marginLeft="-50%";
loginTxt.style.marginLeft="-50%";
});

loginBtn.onclick =(()=>{
    loginForm.style.marginLeft="0%";
    loginTxt.style.marginLeft="0%";
    });


signupLink.onclick =(()=>{
signupBtn.click();
return false;
    });
