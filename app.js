// List of GI products based on states/regions with images, prices, and descriptions
const giProducts = {
    "Karnataka": [
        { 
            name: "Mysore Silk", 
            image: "images/mysore-silk.jpg", 
            price: 5000, 
            description: "Mysore Silk is known for its smooth texture, natural sheen, and vibrant colors. Woven from pure mulberry silk, it is adorned with intricate zari work, making it one of the finest silk fabrics in India."
        },
        { 
            name: "Coorg Coffee", 
            image: "images/coorg-coffee.jpg", 
            price: 300, 
            description: "Grown in the misty hills of Coorg, Karnataka, this coffee is medium-bodied with a unique flavor that reflects the region’s rich soil and climate."
        },
        { 
            name: "Dharwad Pedha", 
            image: "images/dharwad-pedha.jpg", 
            price: 200, 
            description: "A traditional sweet from Dharwad, Karnataka, made from milk and sugar with a granular texture and a mildly sweet flavor."
        },
        {
            name: "Coorg Orange",
            image: "images/coorg-orange.jpg",
            price: 300,
            description: "A famous citrus fruit from the Coorg region, known for its tangy and sweet flavor. It's grown in the misty hills of Kodagu."
        },
        {
            name: "Mysore Betel Leaf",
            image: "images/mysore-betel-leaf.jpg",
            price: 150,
            description: "Known for its unique aroma and flavor, Mysore Betel Leaf is used for both medicinal and cultural purposes in South India."
        },
        {
            name: "Nanjanagud Banana",
            image: "images/nanjanagud-banana.jpg",
            price: 120,
            description: "This variety of banana is grown in the Nanjangud region and is appreciated for its distinctive taste and rich flavor."
        },
        {
            name: "Mysore Jasmine",
            image: "images/mysore-jasmine.jpg",
            price: 200,
            description: "Mysore Jasmine is famous for its intoxicating fragrance and is used in traditional garlands and perfumes."
        },
        {
            name: "Udupi Jasmine",
            image: "images/udupi-jasmine.jpg",
            price: 180,
            description: "This fragrant flower from Udupi is widely used in religious ceremonies and for making garlands."
        },
        {
            name: "Hadagali Jasmine",
            image: "images/hadagali-jasmine.jpg",
            price: 190,
            description: "Hadagali Jasmine is known for its strong fragrance and long-lasting freshness, often used in South Indian rituals."
        },
        {
            name: "Monsooned Malabar Arabica Coffee",
            image: "images/malabar-arabica-coffee.jpg",
            price: 400,
            description: "This unique coffee is exposed to monsoon winds, which gives it a distinct flavor and smooth texture, ideal for espresso."
        },
        {
            name: "Monsooned Malabar Robusta Coffee",
            image: "images/malabar-robusta-coffee.jpg",
            price: 380,
            description: "Robusta coffee beans aged by monsoon winds, offering a rich and bold flavor with a characteristic smoothness."
        },
        {
            name: "Coorg Green Cardamom",
            image: "images/coorg-green-cardamom.jpg",
            price: 600,
            description: "Known for its strong aroma and flavor, Coorg green cardamom is widely used in Indian cuisine and desserts."
        },
        {
            name: "Appemidi Mango",
            image: "images/appemidi-mango.jpg",
            price: 250,
            description: "A rare variety of mango from Karnataka, prized for its sour taste and used in traditional pickling."
        },
        {
            name: "Kamalapur Red Banana",
            image: "images/kamalapur-red-banana.jpg",
            price: 140,
            description: "Grown in the Kamalapur region, this red-skinned banana is known for its sweet taste and nutritional value."
        },
        {
            name: "Byadagi Chilli",
            image: "images/byadagi-chilli.jpg",
            price: 220,
            description: "A mild, richly colored chilli from Karnataka, often used in Indian cuisines for its flavor and vibrant red color."
        },
        {
            name: "Udupi Mattu Gulla Brinjal",
            image: "images/udupi-mattu-gulla.jpg",
            price: 130,
            description: "A unique variety of brinjal from Udupi, known for its distinct flavor and used in traditional Udupi dishes."
        },
        {
            name: "Bangalore Blue Grapes",
            image: "images/bangalore-blue-grapes.jpg",
            price: 90,
            description: "Famous for their sweetness, these grapes from Bangalore are used to make juice and wine."
        },
        {
            name: "Bangalore Rose Onion",
            image: "images/bangalore-rose-onion.jpg",
            price: 60,
            description: "A small variety of onion with a sharp flavor, often used in salads and pickles."
        },
        {
            name: "Malabar Pepper",
            image: "images/malabar-pepper.jpg",
            price: 350,
            description: "World-renowned for its strong pungency and flavor, Malabar Pepper is a key spice in Indian cuisine."
        },
        {
            name: "Sirsi Supari",
            image: "images/sirsi-supari.jpg",
            price: 280,
            description: "A high-quality variety of arecanut grown in Sirsi, Karnataka, used for chewing and in traditional ceremonies."
        },
        
        {
            name: "Gulbarga Tur Dal",
            image: "images/gulbarga-tur-dal.jpg",
            price: 70,
            description: "Gulbarga Tur Dal is known for its high protein content and is a staple ingredient in Indian cooking."
        },
        {
            name: "Kari Ishad Mango",
            image: "images/kari-ishad-mango.jpg",
            price: 260,
            description: "A rare mango variety from Karnataka, loved for its sweet flavor and juicy texture."
        },
        {
            name: "Indi Lime",
            image: "images/indi-lime.jpg",
            price: 50,
            description: "Indi Lime is a small, juicy lime grown in Karnataka, used in beverages and for pickling."
        },
        {
            name: "Devanahalli Pomello",
            image: "images/devanahalli-pomello.jpg",
            price: 300,
            description: "A large citrus fruit from Devanahalli, known for its mild sweetness and tangy flavor."
        },
        {
            name: "Bidriware",
            image: "images/bidriware.jpg",
            price: 7000,
            description: "An exquisite form of metal handicraft from Karnataka, known for its intricate inlay work."
        },
        {
            name: "Channapatna Toys & Dolls",
            image: "images/channapatna-toys.jpg",
            price: 800,
            description: "Colorful wooden toys handcrafted in the town of Channapatna, often made using eco-friendly methods."
        },
        {
            name: "Mysore Rosewood Inlay",
            image: "images/mysore-rosewood-inlay.jpg",
            price: 6000,
            description: "This beautiful inlay work on rosewood from Mysore is prized for its fine craftsmanship and detailed artistry."
        },
        {
            name: "Kasuti Embroidery",
            image: "images/kasuti-embroidery.jpg",
            price: 3000,
            description: "A traditional form of embroidery from Karnataka, known for its geometric patterns and meticulous detailing."
        },
        {
            name: "Mysore Traditional Paintings",
            image: "images/mysore-traditional-paintings.jpg",
            price: 9000,
            description: "Exquisite paintings from Mysore known for their rich colors, intricate designs, and traditional themes."
        },
        {
            name: "Ilkal Sarees",
            image: "images/ilkal-sarees.jpg",
            price: 3500,
            description: "Handwoven sarees from Ilkal, Karnataka, famous for their unique designs and durability."
        },
        {
            name: "Ganjifa Cards of Mysore",
            image: "images/ganjifa-cards.jpg",
            price: 2000,
            description: "Traditional handcrafted playing cards made in Mysore, known for their vibrant artwork and historical significance."
        },
        {
            name: "Navalgund Durries",
            image: "images/navalgund-durries.jpg",
            price: 2800,
            description: "Handwoven cotton rugs from Navalgund, Karnataka, prized for their durability and intricate designs."
        },
        {
            name: "Karnataka Bronze Ware",
            image: "images/karnataka-bronze-ware.jpg",
            price: 5500,
            description: "Fine bronze artifacts crafted in Karnataka, often used for religious and decorative purposes."
        },
        {
            name: "Molakalmuru Sarees",
            image: "images/molakalmuru-sarees.jpg",
            price: 4000,
            description: "Beautiful silk sarees from Molakalmuru, featuring intricate designs and woven with traditional techniques."
        }
    ],
    "Tamil Nadu": [
        { 
            name: "Kanchipuram Silk", 
            image: "images/kanchipuram-silk.jpg", 
            price: 6000, 
            description: "Kanchipuram Silk is renowned for its durability and beauty. The sarees are often adorned with rich gold zari work and are a symbol of elegance and luxury in Tamil Nadu."
        },
        { 
            name: "Madurai Jasmine", 
            image: "images/madurai-jasmine.jpg", 
            price: 150, 
            description: "Known for its strong fragrance and bright white petals, Madurai Jasmine is used in traditional garlands for weddings and religious ceremonies."
        }
    ],
    "West Bengal": [
        { 
            name: "Darjeeling Tea", 
            image: "images/darjeeling-tea.jpg", 
            price: 400, 
            description: "Darjeeling Tea is known for its floral and fruity aroma with a muscatel flavor. Grown in the high-altitude tea gardens of West Bengal, it is often referred to as the 'Champagne of Teas'."
        },
        { 
            name: "Bengal Muslin", 
            image: "images/bengal-muslin.jpg", 
            price: 7000, 
            description: "Bengal Muslin is a fine cotton fabric, once sought after by royalty and nobility for its delicate, sheer quality and intricate handwoven patterns."
        }
    ],
    "Maharashtra": [
        { 
            name: "Kolhapuri Chappal", 
            image: "images/kolhapuri-chappal.jpg", 
            price: 1000, 
            description: "Handcrafted from natural leather, Kolhapuri Chappals are durable and stylish. Each pair is unique due to the traditional, intricate crafting methods passed down through generations."
        },
        { 
            name: "Paithani Saree", 
            image: "images/paithani-saree.jpg", 
            price: 8000, 
            description: "The Paithani Saree is a luxurious handwoven silk saree with intricate gold zari borders and peacock motifs. It is a symbol of Maharashtra’s rich textile heritage."
        }
    ]
};

// Function to get the user's location
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        document.getElementById('location-status').innerHTML = "Geolocation is not supported by this browser.";
    }
}

// Function to handle successful location retrieval
function showPosition(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    let region;

    // Check for Karnataka
    if (latitude >= 12.0 && latitude <= 18.5 && longitude >= 74.0 && longitude <= 78.5) {
        region = "Karnataka";
    } 
    // Check for Tamil Nadu
    else if (latitude >= 8.5 && latitude <= 13.5 && longitude >= 77.0 && longitude <= 80.5) {
        region = "Tamil Nadu";
    } 
    // Check for West Bengal
    else if (latitude >= 22.0 && latitude <= 27.5 && longitude >= 86.0 && longitude <= 89.5) {
        region = "West Bengal";
    } 
    // Check for Maharashtra
    else if (latitude >= 18.0 && latitude <= 22.0 && longitude >= 72.5 && longitude <= 80.0) {
        region = "Maharashtra";
    } 
    // Default to Karnataka if location is unclear
    else {
        region = "Karnataka"; 
    }

    document.getElementById('location-status').innerHTML = `Your location is detected as: ${region}`;
    displayProducts(region);
}


// Function to display GI products for the matched region
function displayProducts(region) {
    const productList = document.getElementById('product-list');
    productList.innerHTML = '';

    const products = giProducts[region];
    if (products) {
        products.forEach(product => {
            const productItem = document.createElement('div');
            productItem.classList.add('product-item');

            const productLink = document.createElement('a');
            productLink.href = `product.html?name=${encodeURIComponent(product.name)}`;

            const productImage = document.createElement('img');
            productImage.src = product.image;
            productImage.alt = product.name;

            const productName = document.createElement('h3');
            productName.textContent = product.name;

            const productPrice = document.createElement('p');
            productPrice.textContent = `Price: ₹${product.price}`;

            const productDescription = document.createElement('pr');
            productDescription.textContent = product.description;

            productLink.appendChild(productImage);
            productItem.appendChild(productLink);
            productItem.appendChild(productName);
            productItem.appendChild(productPrice);
            productItem.appendChild(productDescription);
            productList.appendChild(productItem);
        });
    } else {
        productList.innerHTML = `<div>No GI products found for your region.</div>`;
    }
}

// Function to handle errors in geolocation
function showError(error) {
    switch(error.code) {
        case error.PERMISSION_DENIED:
            document.getElementById('location-status').innerHTML = "User denied the request for Geolocation.";
            break;
        case error.POSITION_UNAVAILABLE:
            document.getElementById('location-status').innerHTML = "Location information is unavailable.";
            break;
        case error.TIMEOUT:
            document.getElementById('location-status').innerHTML = "The request to get user location timed out.";
            break;
        case error.UNKNOWN_ERROR:
            document.getElementById('location-status').innerHTML = "An unknown error occurred.";
            break;
    }
}

// Function to retrieve the query parameter from URL
function getProductFromURL() {
    const params = new URLSearchParams(window.location.search);
    return params.get('name');
}

// Function to display the product details on product.html
function displayProductDetails() {
    const productName = getProductFromURL();
    let product;

    // Find the product in the giProducts list
    for (const region in giProducts) {
        product = giProducts[region].find(p => p.name === productName);
        if (product) break;
    }

    if (product) {
        document.getElementById('product-name').textContent = product.name;
        document.getElementById('product-image').src = product.image;
        document.getElementById('product-price').textContent = `Price: ₹${product.price}`;
        document.getElementById('product-description').textContent = product.description;

        // Handle add to cart action
        document.getElementById('add-to-cart').addEventListener('click', () => {
            addToCart(product);
            alert(`${product.name} added to cart!`);
        });
    }
}

// Function to add product to the cart using localStorage
function addToCart(product) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
}

function displayCart() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartList = document.getElementById('cart-list');

    cartList.innerHTML = '';

    // Group products by name and calculate total quantities
    const groupedProducts = {};
    cart.forEach(item => {
        if (!groupedProducts[item.name]) {
            groupedProducts[item.name] = { ...item, quantity: 0 };
        }
        groupedProducts[item.name].quantity += 1;
    });

    for (const productName in groupedProducts) {
        const product = groupedProducts[productName];
        const productContainer = document.createElement('div');
        productContainer.classList.add('cart-item');

        // Create image element for product
        const productImage = document.createElement('img');
        productImage.src = product.image;
        productImage.alt = product.name;

        // Create quantity input
        const quantityInput = document.createElement('input');
        quantityInput.type = 'number';
        quantityInput.value = product.quantity;
        quantityInput.min = 1;
        quantityInput.classList.add('quantity-input');

        // Update total price based on quantity change
        quantityInput.addEventListener('change', function () {
            product.quantity = parseInt(this.value);
            priceDisplay.textContent = `₹${product.price * product.quantity}`;
            updateCartQuantity(product.name, product.quantity);
        });

        // Create price display
        const priceDisplay = document.createElement('span');
        priceDisplay.textContent = `₹${product.price * product.quantity}`;

        // Assemble the cart item
        productContainer.appendChild(productImage);
        productContainer.appendChild(document.createTextNode(`${product.name} `));
        productContainer.appendChild(quantityInput);
        productContainer.appendChild(priceDisplay);
        cartList.appendChild(productContainer);
    }
}


// Function to update cart quantities in localStorage
function updateCartQuantity(productName, newQuantity) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Update the quantity of the specific product in the cart
    cart = cart.map(item => {
        if (item.name === productName) {
            return { ...item, quantity: newQuantity };
        }
        return item;
    });

    localStorage.setItem('cart', JSON.stringify(cart));
}

// Proceed to payment when checkout button is clicked
if (window.location.pathname.includes('cart.html')) {
    displayCart();
    document.getElementById('checkout').addEventListener('click', () => {
        window.location.href = 'payment.html';
    });
}

// Trigger location fetching on page load (for index.html)
if (window.location.pathname.includes('index.html')) {
    getLocation();
}

// Trigger product display on product.html load
if (window.location.pathname.includes('product.html')) {
    displayProductDetails();
}

// Handle form submission for payment (payment.html)
if (window.location.pathname.includes('payment.html')) {
    const paymentForm = document.getElementById('payment-form');
    paymentForm.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Payment Successful!');
        localStorage.removeItem('cart'); // Clear cart after successful payment
        window.location.href = 'index.html'; // Redirect to homepage after payment
    });
}
// Function to display cart items from localStorage
function displayCart() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartList = document.getElementById('cart-list');

    cartList.innerHTML = '';
    
    // Group products by name and calculate total quantities
    const groupedProducts = {};
    cart.forEach(item => {
        if (!groupedProducts[item.name]) {
            groupedProducts[item.name] = { ...item, quantity: 0 };
        }
        groupedProducts[item.name].quantity += 1;
    });

    for (const productName in groupedProducts) {
        const product = groupedProducts[productName];
        const productContainer = document.createElement('div');
        productContainer.classList.add('cart-item');

        // Create image element for product
        const productImage = document.createElement('img');
        productImage.src = product.image; // Set the source to the product image
        productImage.alt = product.name; // Alt text for accessibility
        productImage.style.width = '50px'; // Set a width for the image
        productImage.style.height = 'auto'; // Keep aspect ratio

        // Create quantity input
        const quantityInput = document.createElement('input');
        quantityInput.type = 'number';
        quantityInput.value = product.quantity;
        quantityInput.min = 1; // Minimum quantity
        quantityInput.classList.add('quantity-input');

        // Create price display
        const priceDisplay = document.createElement('span');
        priceDisplay.textContent = `₹${product.price * product.quantity}`;

        // Assemble the cart item
        productContainer.appendChild(productImage);
        productContainer.appendChild(document.createTextNode(`${product.name} `));
        productContainer.appendChild(quantityInput);
        productContainer.appendChild(priceDisplay);
        cartList.appendChild(productContainer);
    }
}
