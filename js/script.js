let productDom = document.querySelector(".products");
let products = productsDB;

// display products
let drawProductsUi;
(drawProductsUi = function (products = []) {
  // Check if products is not null
  let productUi = products.map((item) => {
    return `
          <div class="product-item" style="border:${
            item.isMe === "Y" ? "3px solid green" : ""
          }">
          <img src="${item.imageUrl}" alt="airpods" class="product-item-img">
     
      <div class="product-item-desc">
          <a onclick='saveItemData(${item.id})'>${item.title} </a>
          <p>${item.desc}</p>
          <span>Price ${item.price} $</span>
${
  item.isMe === "Y"
    ? `<button class='editProduct' onclick='editProduct(${item.id})'>Edit Product</button>`
    : ""
}

       
      </div>
      <div class="product-item-actions">
          <button class="add-to-cart" onclick="addedToCart(${
            item.id
          })">Add to cart</button>
        
          <i class="fa-solid fa-heart"style="color:${
            item.liked == true ? "#d51024" : ""
          }"onclick="addToFavorite(${item.id})" ></i>
      </div>
      </div>
      `;
  });
  productDom.innerHTML = productUi.join("");
})(JSON.parse(localStorage.getItem("products")) || products);

// add to cart

function addedToCart(id) {
  if (localStorage.getItem("username")) {
    let products = JSON.parse(localStorage.getItem("products")) || productsDB;
    let product = products.find((item) => item.id === id);

    let isProductinCart = addedItems.some((i) => i.id === product.id);
    if (isProductinCart) {
      addedItems = addedItems.map((p) => {
        if (p.id === product.id) p.qty += 1;
        return p;
      });
    } else {
      addedItems.push(product);
    }
    //Ui
    cartProductDom.innerHTML = "";
    addedItems.forEach((item) => {
      cartProductDom.innerHTML += `<p>${item.title} <span class="item-qty" >${item.qty}</span> </p>`;
    });
    //save data
    localStorage.setItem("productsInCart", JSON.stringify(addedItems));

    //add counter to items
    let cartProductItems = document.querySelectorAll(".cartsProducts div p");
    badgeDom.style.display = "block";
    badgeDom.innerHTML = cartProductItems.length;
  } else {
    window.location = "login.html";
  }
}
function getUniqueArray(arr, filterType) {
  let unique = arr
    .map((item) => item[filterType])
    .map((item, i, final) => final.indexOf(item) === i && i)
    .filter((item) => arr[item])
    .map((item) => arr[item]);
  return unique;
}

function saveItemData(id) {
  localStorage.setItem("productId", id);
  window.location = "cartDEtails.html";
}

// search function
window.onload = function () {
  let inputt = document.getElementById("search");

  inputt?.addEventListener("keyup", function (e) {
    // Parse the products from local storage and store them in a variable
    let products = JSON.parse(localStorage.getItem("products"));

    // Check if products is an array before calling search and drawProductsUi
    if (Array.isArray(products)) {
      if (e.target.value.trim() === "") {
        // If the search input is empty, display all products from local storage
        drawProductsUi(products);
      } else {
        // If there is a search query, filter and display the matching products
        search(e.target.value, products);
      }
    }
  });

  function search(title, myArr) {
    let arr = myArr.filter(
      (item) => item.title.toLowerCase().indexOf(title.toLowerCase()) !== -1
    );
    drawProductsUi(arr);
  }
};

// add to favorite

let favoriteItems = localStorage.getItem("productsFavorite")
  ? JSON.parse(localStorage.getItem("productsFavorite"))
  : [];
function addToFavorite(id) {
  if (localStorage.getItem("username")) {
    let chooseItem = products.find((item) => item.id === id);
    chooseItem.liked = true;
    favoriteItems = [...favoriteItems, chooseItem];
    let uniqueProducts = getUniqueArray(favoriteItems, "id");
    localStorage.setItem("productsFavorite", JSON.stringify(uniqueProducts));
    products.map((item) => {
      if (item.id === chooseItem.id) {
        item.liked = true;
      }
    });
    localStorage.setItem("products", JSON.stringify(products));
    drawProductsUi(products);
  } else {
    window.location = "login.html";
  }
}
//edit Product
function editProduct(id) {
  localStorage.setItem("editProduct", id);
  window.location = "editProduct.html";
}
