var uploadedProducts = [];

function uploadProduct() {
  var name = document.getElementById("productName").value;
  var price = parseFloat(document.getElementById("productPrice").value);
  var image = document.getElementById("productImage").value;

  //define an object and assign the above variables -
  //...name, price and image as values to the
  //object properties or keys - name, price, image
  var newProduct = {
    name: name,
    price: price,
    image: image,
  };

  uploadedProducts.push(newProduct);

  updateProduct();

  document.getElementById("productName").value = "";
  document.getElementById("productPrice").value = "";
  document.getElementById("productImage").value = "";
}

function updateProduct() {
  var productGridElement = document.getElementById("productGrid");

  productGridElement.innerHTML = "";

  for (var i = 0; i < uploadedProducts.length; i++) {
    var product = uploadedProducts[i];

    var cardHtml = `
          <div class="col-md-3 mb-4">
            <div class="card-body">
              <div class="card">
              <img src="${product.image}" class="card-img-top" alt="${
      product.name
    }">
                <h5 class="card-title">${product.name}</h5>
                <p class="card-text">Price: ₦${product.price.toFixed(2)}</p>
              </div>
            </div>
          </div>
        `;

    productGridElement.innerHTML += cardHtml;
  }
}
