let productsDom = document.querySelector(".products");
let noProductsDom=document.querySelector('.noProducts');


    function drawCartProductsUi(allproducts=[]){
        if(JSON.parse(localStorage.getItem('productsInCart')).length===0){
            noProductsDom.innerHTML="There is no items !!";
        }

        let products=JSON.parse(localStorage.getItem('productsInCart'))|| allproducts
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
                <button class="add-to-cart" onclick="removeFromCart(${item.id})">Remove from cart</button>
                <i class="fa-solid fa-heart"style="color:${
                    item.liked == true ? "#d51024" : ""
                  }"onclick="addToFavorite(${item.id})" ></i>
            </div>
            </div>
            `;
          });
          productsDom.innerHTML = productUi.join("");
        }
        drawCartProductsUi();

function removeFromCart(id){
let productsInCart=localStorage.getItem('productsInCart');

    if(productsInCart){
    let items=JSON.parse(productsInCart);

   let filteredData= items.filter((item)=>item.id!==id);
   
    localStorage.setItem('productsInCart',JSON.stringify(filteredData))
    drawCartProductsUi(filteredData);
}}

    
