let productName = document.getElementById("product-name");
let productDesc = document.getElementById("product-desc");
let productPrice = document.getElementById("product-price");
let createForm = document.getElementById("create-form");
let inputFile = document.getElementById("upload-img");
let productImg;

createForm.addEventListener("submit", createProductFun);
inputFile.addEventListener("change", uploadImg);

function createProductFun(e) {
  e.preventDefault();

  let allProducts = JSON.parse(localStorage.getItem("products")) || productsDB;
  let nameValue = productName.value;
  let descValue = productDesc.value;
  let priceValue = productPrice.value;

  let obj = {
    id: allProducts ? allProducts.length + 1 : 1,
    title: nameValue,
    desc: descValue,
    qty: 1,
    price: priceValue,
    imageUrl: productImg,
    isMe:"Y",
  };
  let newProducts = allProducts ? [...allProducts, obj] : [obj];
  localStorage.setItem("products", JSON.stringify(newProducts));
  productName.value = "";
  productDesc.value = "";
  productPrice.value = "";
  setTimeout(()=>{
    window.location="index.html";
  },500)

}

function uploadImg() {
  let file = this.files[0];
  let types = ["image/png", "image/jpeg"];
  if (types.indexOf(file.type) == -1) {
    alert("type not suported");
    return;
  }
  if (file.size > 2 * 1024 * 1024) {
    alert("image not Exced 2MG");
    return;
  }
  getImgBase64(file);

//   productImg = URL.createObjectURL(file);
}
function getImgBase64(file) {
  let reader = new FileReader();

  reader.readAsDataURL(file);

  reader.onload = function () {
    productImg = reader.result;
  };
  reader.onerror = function () {
    alert("Error!!");
  };
}
