let productsDom = document.querySelector(".products");
let noProductsDom = document.querySelector(".noProducts");
// display products
let drawProductsUi;
(drawProductsUi = function (products = []) {
  // Check if products is not null
  let myProducts = products.filter((item) => item.isMe === "Y");
  if (myProducts != 0) {
    let productUi = myProducts.map((item) => {
      return `
          <div class="product-item" style="border:${
            item.isMe === "Y" ? "3px solid green" : ""
          }">
          <img src="${item.imageUrl}" alt="airpods" class="product-item-img">
     
      <div class="product-item-desc">
          <a onclick='saveItemData(${item.id})'>${item.title} </a>
          <p>${item.desc}</p>
          <span>Price ${item.price} $</span>
           <button  class='editProduct' onclick='edirProduct(${
             item.id
           } )'>Edit Product</button>
      <button  class='editProduct' onclick='deleteProduct(${
        item.id
      } )'>Delete Product</button>
          
      </div>
          
      </div>
      `;
    });
    productsDom.innerHTML = productUi.join("");
  } else {
    noProductsDom.innerHTML = "No Products !!";
  }
})(JSON.parse(localStorage.getItem("products")) || productsDB);

//edit Product
function edirProduct(id) {
  localStorage.setItem("editProduct", id);
  window.location = "editProduct.html";
}

//delete product
function deleteProduct(id) {
  let products = JSON.parse(localStorage.getItem("products")) || productsDB;
  let myProducts = products.filter((item) => item.isMe === "Y");
  let filtered = myProducts.filter((i) => i.id !== id);
 
  let clickedItem = myProducts.find((i) => i.id === id);
  products = products.filter((i) => i.id !== clickedItem.id);
  localStorage.setItem("products", JSON.stringify(products));
  drawProductsUi(filtered);
}
