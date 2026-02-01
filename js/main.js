/**
 * MAIN.JS
 * Initialize the site when page loads
 */

// Wait for page to fully load
document.addEventListener('DOMContentLoaded', () => {
    console.log('Page loaded');
    console.log('Products available:', allProducts.length);
    
    // Hamburger menu toggle
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
        
        // Close menu when clicking a link
        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }
    
    // Initialize homepage
    if (document.getElementById('featured-products')) {
        console.log('Homepage detected - rendering featured products');
        // Show first 4 products on homepage
        const featuredProducts = allProducts.slice(0, 4);
        renderProducts(featuredProducts, 'featured-products');
        console.log('Featured products rendered');
    }
    
    // Initialize products page
    if (document.getElementById('products-grid')) {
        console.log('Products page detected');
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
        console.log('Cart page detected');
        cart.renderCart();
    }
    
    // Initialize contact form
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        console.log('Contact form detected');
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