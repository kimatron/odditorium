/**
 * PRODUCTS RENDERING
 * Functions to create and display product cards
 */

/**
 * Create HTML for a single product card
 * @param {Object} product - Product data object
 * @returns {string} HTML string for product card
 */
function createProductCard(product) {
    return `
        <div class="product-card">
            <!-- Product Image -->
            <div class="product-image-wrapper">
                <img src="${product.image}" alt="${product.name}" class="product-image">
            </div>
            
            <!-- Product Details (price and badge) -->
            <div class="product-details">
                <span class="product-price">€${product.price.toFixed(2)}</span>
                ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ''}
            </div>
            
            <!-- Product Title -->
            <div class="product-title-wrapper">
                <h3 class="product-title">${product.name}</h3>
                <p class="product-artist">by ${product.artist}</p>
            </div>
            
            <!-- Add to Cart Button (appears on hover) -->
            <div class="product-button-wrapper">
                <button class="add-to-cart-btn" data-id="${product.id}">
                    Add to Cart
                </button>
            </div>
        </div>
    `;
}

/**
 * Render products to a container
 * @param {Array} products - Array of product objects
 * @param {string} containerId - ID of container element
 */
function renderProducts(products, containerId) {
    const container = document.getElementById(containerId);
    
    // If container doesn't exist, exit
    if (!container) return;
    
    // Generate HTML for all products
    container.innerHTML = products.map(p => createProductCard(p)).join('');
    
    // Attach click handlers to add-to-cart buttons
    attachCartButtons(container);
}

/**
 * Attach event listeners to add-to-cart buttons
 * @param {HTMLElement} container - Container with buttons
 */
function attachCartButtons(container) {
    const buttons = container.querySelectorAll('.add-to-cart-btn');
    
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Get product ID from button
            const productId = btn.dataset.id;
            
            // Find product in data
            const product = allProducts.find(p => p.id === productId);
            
            if (product) {
                // Add to cart
                cart.addItem(product);
                
                // Visual feedback
                btn.textContent = 'Added!';
                btn.style.background = 'var(--secondary)';
                
                // Reset after 1.5 seconds
                setTimeout(() => {
                    btn.textContent = 'Add to Cart';
                    btn.style.background = '';
                }, 1500);
            }
        });
    });
}

/**
 * Filter products by category
 * @param {string} category - Category to filter by ('all' or category name)
 * @returns {Array} Filtered products
 */
function filterProducts(category) {
    if (category === 'all') {
        return allProducts;
    }
    return allProducts.filter(p => p.category === category);
}

/**
 * Sort products
 * @param {Array} products - Products to sort
 * @param {string} sortBy - How to sort ('featured', 'price-low', 'price-high', 'name')
 * @returns {Array} Sorted products
 */
function sortProducts(products, sortBy) {
    const sorted = [...products]; // Create copy
    
    switch(sortBy) {
        case 'price-low':
            sorted.sort((a, b) => a.price - b.price);
            break;
        case 'price-high':
            sorted.sort((a, b) => b.price - a.price);
            break;
        case 'name':
            sorted.sort((a, b) => a.name.localeCompare(b.name));
            break;
        default:
            // 'featured' - keep original order
            break;
    }
    
    return sorted;
}