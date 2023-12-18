// Array to store uploaded products
var uploadedProducts = [];

// Function to upload a new product
function uploadProduct() {
  // Get values from the form
  var name = document.getElementById("productName").value;
  var price = parseFloat(document.getElementById("productPrice").value);
  var image = document.getElementById("productImage").value;

  // Create a new product object
  var newProduct = {
    name: name,
    price: price,
    image: image,
  };

  // Add the new product to the array
  uploadedProducts.push(newProduct);

  // Call a function to update the product grid
  updateProductGrid();

  // Clear the form
  document.getElementById("productName").value = "";
  document.getElementById("productPrice").value = "";
  document.getElementById("productImage").value = "";
}

// Function to update the product grid
function updateProductGrid() {
  var productGridElement = document.getElementById("productGrid");

  // Clear existing product grid
  productGridElement.innerHTML = "";

  // Loop through uploaded products and create grid items
  for (var i = 0; i < uploadedProducts.length; i++) {
    var product = uploadedProducts[i];

    // Create a Bootstrap card for each product
    var cardHtml = `
          <div class="col-md-4 mb-4">
            <div class="card">
              <img src="${product.image}" class="card-img-top" alt="${
      product.name
    }">
              <div class="card-body">
                <h5 class="card-title">${product.name}</h5>
                <p class="card-text">Price: $${product.price.toFixed(2)}</p>
              </div>
            </div>
          </div>
        `;

    // Append the card to the product grid
    productGridElement.innerHTML += cardHtml;
  }
}
