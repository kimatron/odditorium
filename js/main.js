/**
 * MAIN.JS
 * Initialize the site when page loads
 */

// Wait for page to fully load
document.addEventListener('DOMContentLoaded', () => {
    
    // Initialize homepage
    if (document.getElementById('featured-products')) {
        // Show first 4 products on homepage
        const featuredProducts = allProducts.slice(0, 4);
        renderProducts(featuredProducts, 'featured-products');
    }
    
    // Initialize products page
    if (document.getElementById('products-grid')) {
        // Show all products
        let currentProducts = [...allProducts];
        renderProducts(currentProducts, 'products-grid');
        updateResultsCount(currentProducts.length);
        
        // Filter by category
        const categoryFilter = document.getElementById('category-filter');
        if (categoryFilter) {
            categoryFilter.addEventListener('change', () => {
                const category = categoryFilter.value;
                const sortBy = document.getElementById('sort-filter').value;
                
                // Filter then sort
                currentProducts = filterProducts(category);
                currentProducts = sortProducts(currentProducts, sortBy);
                
                renderProducts(currentProducts, 'products-grid');
                updateResultsCount(currentProducts.length);
            });
        }
        
        // Sort products
        const sortFilter = document.getElementById('sort-filter');
        if (sortFilter) {
            sortFilter.addEventListener('change', () => {
                const sortBy = sortFilter.value;
                currentProducts = sortProducts(currentProducts, sortBy);
                renderProducts(currentProducts, 'products-grid');
            });
        }
    }
    
    // Initialize cart page
    if (document.getElementById('cart-items')) {
        cart.renderCart();
    }
    
    // Initialize contact form
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactSubmit);
    }
});

/**
 * Update results counter on products page
 */
function updateResultsCount(count) {
    const counter = document.getElementById('results-count');
    if (counter) {
        counter.textContent = count;
    }
}

/**
 * Handle contact form submission
 */
function handleContactSubmit(e) {
    e.preventDefault(); // Prevent actual form submission
    
    // Get form data
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    
    // Simple validation
    if (!data.name || !data.email || !data.subject || !data.message) {
        alert('Please fill in all required fields');
        return;
    }
    
    // Show success message
    const successMsg = document.getElementById('success-message');
    if (successMsg) {
        successMsg.style.display = 'block';
        
        // Reset form
        e.target.reset();
        
        // Hide message after 5 seconds
        setTimeout(() => {
            successMsg.style.display = 'none';
        }, 5000);
    }
}