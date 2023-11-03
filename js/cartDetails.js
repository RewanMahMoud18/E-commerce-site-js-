let products=JSON.parse(localStorage.getItem("products"));
let productId=localStorage.getItem("productId");

let itemDom=document.querySelector(".item-detials");

let productDetails=products.find((item)=>item.id==productId);


itemDom.innerHTML=`
<img src="${productDetails.imageUrl}" alt="airpods">
<h2>${productDetails.title}</h2>
<p>${productDetails.desc}</p>
<span>Price: ${productDetails.price} $</span><br>
<span>Quantity: ${productDetails.qty} </span>
<button class='editProduct' onclick='editProduct(${productId})'>Edit Product</button>
`;
//edit Product
function editProduct(id) {
    localStorage.setItem("editProduct", id);
    window.location = "editProduct.html";
  }