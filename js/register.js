let username =document.querySelector("#username");
let phone =document.querySelector("#phone");
let email =document.querySelector("#email");
let password =document.querySelector("#password");
let register_btn =document.querySelector("#sign_up");

register_btn.addEventListener('click', function(e){
    e.preventDefault();
    if(username.value ==="" || phone.value ==="" || email.value===""
        || password.value===""){
      alert("Please fill data");
        }
    else{
        localStorage.setItem("username",username.value);
        localStorage.setItem("phone",phone.value);
        localStorage.setItem("email",email.value);
        localStorage.setItem("password",password.value);

        setTimeout(()=>{
            window.location="login.html";
        },1000);
    }    

})