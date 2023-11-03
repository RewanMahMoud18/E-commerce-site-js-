let get_user = localStorage.getItem("username");
let get_email = localStorage.getItem("email");
let products = JSON.parse(localStorage.getItem("products")) || productsDB;

let myProducts = products.filter((i) => i.isMe === "Y");

let userDom2 = document.querySelector("#username");
let userEmailDom = document.getElementById("email");
let productLength = document.querySelector("#products-length span");

userDom2.innerHTML = get_user;
userEmailDom.innerHTML = get_email;
if (myProducts.length != 0) {
  productLength.innerHTML = myProducts.length;
} else {
  productLength.remove();
}


document.getElementById("photoInput").addEventListener("change", function (event) {
  var userPhoto = document.getElementById("userPhoto");

  if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.onload = function (e) {
          userPhoto.src = e.target.result;
          // Save the user's profile photo to local storage
          localStorage.setItem("userProfilePhoto", e.target.result);
      };

      reader.readAsDataURL(event.target.files[0]);
  }
});

// Display the saved profile photo when the page loads
window.addEventListener("load", function () {
  var savedProfilePhoto = localStorage.getItem("userProfilePhoto");
  if (savedProfilePhoto) {
      document.getElementById("userPhoto").src = savedProfilePhoto;
  }
});



