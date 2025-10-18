// Retrieve existing basket or create an empty one
let basket = JSON.parse(localStorage.getItem("basket")) || [];

// Function to add a product to the basket (used in index.html)
function selectProduct(productName, price) {
    let product = { name: productName, price: price };
    basket.push(product);
    localStorage.setItem("basket", JSON.stringify(basket)); // Save updated basket
    window.location.href = "cart.html"; // Redirect to Basket Page
}

// Function to display products in the basket (used in basket.html)
function displayBasket() {
    let basketList = document.getElementById("basket-list");
    let totalPrice = document.getElementById("total-price");
    
    if (!basketList) return;
    if (basketList) {
        basketList.innerHTML = ""; // Clear previous list
        let total = 0;

        basket.forEach((item, index) => {
            let li = document.createElement("li");
            li.innerHTML = `${item.name} - ${item.price}`;
            
            // Create Remove Button
            let removeBtn = document.createElement("button");
            removeBtn.textContent = "Remove";
            removeBtn.onclick = function() {
                removeFromBasket(index);
            };

            li.appendChild(removeBtn);
            basketList.appendChild(li);
            total += item.price;
        });

        totalPrice.textContent = `Total: ${total}`;
    }
}

// Function to remove an item from the basket (used in basket.html)
function removeFromBasket(index) {
    basket.splice(index, 1);
    localStorage.setItem("basket", JSON.stringify(basket)); // Update basket storage
    displayBasket(); // Refresh basket
}

// Function to handle order submission (used in index.html)
function submitOrder(event) {
    event.preventDefault();

    // Get form details
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let address = document.getElementById("address").value;

    if (basket.length === 0) {
        alert("Your basket is empty. Please add items before ordering.");
        return;
    }

    // Simulating order confirmation
    alert('Thank you, ${name}! Your order has been placed.');

    // Clear the basket after order
    localStorage.removeItem("basket");
    basket = [];
}

// Function to proceed to checkout (redirects to order form in index.html)
function proceedToCheckout() {
    window.location.href = "ccheckout.html";
}

// Run basket display function if on basket.html
window.onload = function () {
    if (document.getElementById("basket-list")) {
        displayBasket();
}
};

