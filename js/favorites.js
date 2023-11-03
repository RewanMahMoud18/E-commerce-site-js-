let productsDom = document.querySelector(".products");
let noProductsDom = document.querySelector(".noProducts");

function drawFavProductsUi(allproducts = []) {
  if (JSON.parse(localStorage.getItem("productsFavorite")).length === 0) {
    noProductsDom.innerHTML = "There is no items !!";
  }

  let products =
    JSON.parse(localStorage.getItem("productsFavorite")) || allproducts;
  let productUi = products.map((item) => {
    return `
                <div class="product-item">
                <img src="${item.imageUrl}" alt="airpods" class="product-item-img">
           
            <div class="product-item-desc">
                <h2>${item.title}</h2>
                <p>${item.desc}</p>
                <span>Price: ${item.price} $</span><br>
                <span>Quantity: ${item.qty}</span>

             </div>
            <div class="product-item-actions">
                <button class="add-to-cart" onclick="removeFromFav(${item.id})">Remove from favorite</button>
               
            </div>
            </div>
            `;
  });
  productsDom.innerHTML = productUi.join("");
}
drawFavProductsUi();

function removeFromFav(id) {
  let productsFavorite = localStorage.getItem("productsFavorite");

  if (productsFavorite) {
    let items = JSON.parse(productsFavorite);

    let filteredData = items.filter((item) => item.id !== id);

    localStorage.setItem("productsFavorite", JSON.stringify(filteredData));
    drawFavProductsUi(filteredData);
  }
}
