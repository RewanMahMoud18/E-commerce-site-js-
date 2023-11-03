let cartProductDom = document.querySelector(".cartsProducts div");
let badgeDom = document.querySelector(".badge");
let cartProductsMenu = document.querySelector(".cartsProducts");
let shoppingCartIcon = document.querySelector(".shopping-cart");


// open cart menu
shoppingCartIcon.addEventListener("click", openCartMenu);


//  create empty array to store product items in
let addedItems = localStorage.getItem("productsInCart")
  ? JSON.parse(localStorage.getItem("productsInCart"))
  : [];

if (addedItems) {
  addedItems.map((item) => {
    cartProductDom.innerHTML += `<p>${item.title} ${item.qty}</p>`;
  });
  badgeDom.style.display = "block";
  badgeDom.innerHTML += addedItems.length;
}
// open cart menu
function openCartMenu() {
    if (cartProductDom.innerHTML != "") {
      if (cartProductsMenu.style.display == "block") {
        cartProductsMenu.style.display = "none";
      } else {
        cartProductsMenu.style.display = "block";
      }
    }
  }