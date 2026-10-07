// Global Cart State
let shoppingCart = [];

/**
 * Calculates custom pizza size and topping prices based on form selections
 */
function getReceipt() {
    let text1 = "<h3>You Ordered:</h3>";
    let runningTotal = 0;
    let sizeTotal = 0;
    let selectedSize = "";

    // Array of pizza size elements
    const sizeArray = document.getElementsByClassName("size");

    // Calculate base size price
    for (let i = 0; i < sizeArray.length; i++) {
        if (sizeArray[i].checked) {
            selectedSize = sizeArray[i].value;
        }
    }

    if (selectedSize === "Personal Pizza") {
        sizeTotal = 6;
    } else if (selectedSize === "Small Pizza") {
        sizeTotal = 8;
    } else if (selectedSize === "Medium Pizza") {
        sizeTotal = 10;
    } else if (selectedSize === "Large Pizza") {
        sizeTotal = 14;
    } else if (selectedSize === "Extra Large Pizza") {
        sizeTotal = 16;
    }

    runningTotal = sizeTotal;
    text1 += selectedSize + " - $" + sizeTotal + ".00<br>";

    // Delegate to calculate topping costs
    getTopping(runningTotal, text1);
}

/**
 * Helper function calculating topping totals and updating display/cart
 */
function getTopping(runningTotal, text1) {
    let toppingTotal = 0;
    let selectedToppings = [];
    const toppingArray = document.getElementsByClassName("toppings");

    for (let j = 0; j < toppingArray.length; j++) {
        if (toppingArray[j].checked) {
            selectedToppings.push(toppingArray[j].value);
            text1 += toppingArray[j].value + "<br>";
        }
    }

    const toppingCount = selectedToppings.length;
    // 1 free meat topping calculation logic
    if (toppingCount > 1) {
        toppingTotal = toppingCount - 1;
    } else {
        toppingTotal = 0;
    }

    runningTotal = runningTotal + toppingTotal;

    // Output summary preview in DOM
    const receiptBox = document.getElementById("cart");
    receiptBox.classList.remove("hidden");
    document.getElementById("showText").innerHTML = text1;
    document.getElementById("totalPrice").innerHTML =
        "<h3>Total: <strong>$" + runningTotal + ".00</strong></h3>";

    // Append to global cart array
    const pizzaName = "Custom " + getSelectedSizeName() + (toppingCount > 0 ? " (" + toppingCount + " meats)" : "");
    addToCart(pizzaName, runningTotal);
}

/**
 * Utility to fetch name of selected radio button
 */
function getSelectedSizeName() {
    const sizeArray = document.getElementsByClassName("size");
    for (let i = 0; i < sizeArray.length; i++) {
        if (sizeArray[i].checked) {
            return sizeArray[i].value;
        }
    }
    return "Pizza";
}

/**
 * Cart State Management Functions
 */
function addPresetToCart(name, price) {
    addToCart(name, price);
    alert(name + " has been added to your cart!");
}

function addToCart(name, price) {
    shoppingCart.push({ name: name, price: price });
    updateCartUI();
}

function removeFromCart(index) {
    shoppingCart.splice(index, 1);
    updateCartUI();
}

function updateCartUI() {
    const cartCountEl = document.getElementById("cartCount");
    const cartItemsEl = document.getElementById("cartItems");
    const drawerTotalEl = document.getElementById("drawerTotal");

    // Update Badge Counter
    cartCountEl.innerText = shoppingCart.length;

    // Render Drawer List
    if (shoppingCart.length === 0) {
        cartItemsEl.innerHTML = '<p class="empty-cart-msg">Your cart is currently empty.</p>';
        drawerTotalEl.innerText = "$0.00";
        return;
    }

    let itemsHTML = "";
    let grandTotal = 0;

    shoppingCart.forEach((item, index) => {
        grandTotal += item.price;
        itemsHTML += `
            <div class="cart-item">
                <div>
                    <strong>${item.name}</strong><br>
                    <small>$${item.price.toFixed(2)}</small>
                </div>
                <button class="btn btn-outline" style="padding:2px 8px; font-size:0.8rem;" onclick="removeFromCart(${index})">Remove</button>
            </div>
        `;
    });

    cartItemsEl.innerHTML = itemsHTML;
    drawerTotalEl.innerText = "$" + grandTotal.toFixed(2);
}

function toggleCart() {
    const drawer = document.getElementById("cartDrawer");
    const overlay = document.getElementById("cartOverlay");
    drawer.classList.toggle("open");
    overlay.classList.toggle("active");
}

function checkout() {
    if (shoppingCart.length === 0) {
        alert("Your cart is empty! Please add items before checking out.");
        return;
    }
    alert("Thank you for your order! Your food is being prepared with perfection.");
    shoppingCart = [];
    updateCartUI();
    toggleCart();
}

/**
 * Authentication Modal Controls
 */
function openAuthModal(mode) {
    const modal = document.getElementById("authModal");
    modal.classList.add("active");
    switchTab(mode);
}

function closeAuthModal() {
    const modal = document.getElementById("authModal");
    modal.classList.remove("active");
}

function switchTab(mode) {
    const tabLogin = document.getElementById("tabLogin");
    const tabSignup = document.getElementById("tabSignup");
    const formLogin = document.getElementById("formLogin");
    const formSignup = document.getElementById("formSignup");

    if (mode === "login") {
        tabLogin.classList.add("active");
        tabSignup.classList.remove("active");
        formLogin.classList.remove("hidden");
        formSignup.classList.add("hidden");
    } else {
        tabSignup.classList.add("active");
        tabLogin.classList.remove("active");
        formSignup.classList.remove("hidden");
        formLogin.classList.add("hidden");
    }
}

function handleAuthSubmit(event, mode) {
    event.preventDefault();
    if (mode === "login") {
        alert("Successfully signed in!");
    } else {
        alert("Account created successfully!");
    }
    closeAuthModal();
}

/**
 * Contact Form Submission Handler
 */
function handleContactSubmit(event) {
    event.preventDefault();
    alert("Thank you for reaching out! We will get back to you shortly.");
    document.getElementById("contactForm").reset();
}