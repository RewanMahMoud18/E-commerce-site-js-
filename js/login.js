let username = document.querySelector("#username");
let password = document.querySelector("#password");

let login_btn = document.querySelector("#sign_in");

let getUser = localStorage.getItem("username");
let getPassword = localStorage.getItem("password");

login_btn.addEventListener("click", function (e) {
  e.preventDefault();
  if (username.value === "" || password.value === "") {
    alert("Please fill data");
  } else {
    if (
      getUser &&
      getUser.trim() === username.value.trim() &&
      getPassword &&
      getPassword === password.value
    ) {
      setTimeout(() => {
        window.location = "index.html";
      }, 1000);
    } else {
      alert("UserName and Password not found");
    }
  }
});
