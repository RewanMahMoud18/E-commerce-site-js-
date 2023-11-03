let products = JSON.parse(localStorage.getItem("products")) || productsDB;
let productId = JSON.parse(localStorage.getItem("editProduct"));
let getProduct = products.find((i) => i.id === productId);
let productName = document.getElementById("product-name");
let productDesc = document.getElementById("product-desc");
let productPrice = document.getElementById("product-price");
let updateForm = document.getElementById("update-form");
let inputFile = document.getElementById("upload-img");
let productImg;


productName.value = getProduct.title;
productDesc.value=getProduct.desc;
productPrice.value=getProduct.price;
productImg=getProduct.imageUrl;

updateForm.addEventListener("submit", updateProductFun);
inputFile.addEventListener("change", uploadImg);

function updateProductFun(e) {
  e.preventDefault();
  getProduct.title=productName.value;
  getProduct.desc=productDesc.value;
  getProduct.price=productPrice.value;
  getProduct.imageUrl=productImg;


  localStorage.setItem("products", JSON.stringify(products));
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
