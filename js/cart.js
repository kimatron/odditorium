/**
 * SHOPPING CART
 * Manages cart items with localStorage
 */

class ShoppingCart {
    constructor() {
        // Load cart from localStorage or start empty
        const saved = localStorage.getItem('odditorium-cart');
        this.items = saved ? JSON.parse(saved) : [];
        
        // Update cart count on page load
        this.updateCartCount();
    }

    /**
     * Add item to cart
     */
    addItem(product) {
        // Check if item already exists
        const existingItem = this.items.find(item => item.id === product.id);
        
        if (existingItem) {
            // Increase quantity
            existingItem.quantity += 1;
        } else {
            // Add new item with quantity 1
            this.items.push({ ...product, quantity: 1 });
        }
        
        // Save to localStorage
        this.saveCart();
        
        // Update UI
        this.updateCartCount();
        this.showNotification(`Added ${product.name} to cart!`);
    }

    /**
     * Remove item from cart
     */
    removeItem(productId) {
        this.items = this.items.filter(item => item.id !== productId);
        this.saveCart();
        this.updateCartCount();
        this.renderCart();
    }

    /**
     * Update item quantity
     */
    updateQuantity(productId, quantity) {
        const item = this.items.find(item => item.id === productId);
        if (item) {
            item.quantity = Math.max(1, quantity);
            this.saveCart();
            this.updateCartCount();
            this.renderCart();
        }
    }

    /**
     * Get total number of items
     */
    getCount() {
        return this.items.reduce((count, item) => count + item.quantity, 0);
    }

    /**
     * Get cart subtotal
     */
    getSubtotal() {
        return this.items.reduce((total, item) => total + (item.price * item.quantity), 0);
    }

    /**
     * Get cart total (with shipping)
     */
    getTotal() {
        return this.getSubtotal() + 5.00; // €5 flat shipping
    }

    /**
     * Save cart to localStorage
     */
    saveCart() {
        localStorage.setItem('odditorium-cart', JSON.stringify(this.items));
    }

    /**
     * Update cart counter in navigation
     */
    updateCartCount() {
        const counters = document.querySelectorAll('.cart-count');
        const count = this.getCount();
        counters.forEach(counter => {
            counter.textContent = count;
        });
    }

    /**
     * Render cart items on cart page
     */
    renderCart() {
        const cartItems = document.getElementById('cart-items');
        const cartSummary = document.getElementById('cart-summary');
        
        if (!cartItems) return; // Not on cart page
        
        // Empty cart state
        if (this.items.length === 0) {
            cartItems.innerHTML = `
                <div class="empty-cart">
                    <h2>Your cart is empty</h2>
                    <p>Go find some weird stuff to fill it up!</p>
                    <a href="products.html" class="chunky-button">Browse Collection</a>
                </div>
            `;
            cartSummary.style.display = 'none';
            return;
        }
        
        // Render cart items
        cartItems.innerHTML = this.items.map(item => `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}" class="cart-item-image">
                <div class="cart-item-details">
                    <h3>${item.name}</h3>
                    <p class="cart-item-artist">by ${item.artist}</p>
                    <p class="cart-item-price">€${item.price.toFixed(2)}</p>
                </div>
                <div class="cart-item-controls">
                    <div class="quantity-control">
                        <button class="quantity-btn" data-action="decrease" data-id="${item.id}">-</button>
                        <span class="quantity-display">${item.quantity}</span>
                        <button class="quantity-btn" data-action="increase" data-id="${item.id}">+</button>
                    </div>
                    <button class="remove-btn" data-id="${item.id}">Remove</button>
                </div>
            </div>
        `).join('');
        
        // Show summary
        cartSummary.style.display = 'block';
        document.getElementById('cart-subtotal').textContent = `€${this.getSubtotal().toFixed(2)}`;
        document.getElementById('cart-total').textContent = `€${this.getTotal().toFixed(2)}`;
        
        // Attach event listeners
        this.attachCartEventListeners();
    }

    /**
     * Attach event listeners to cart buttons
     */
    attachCartEventListeners() {
        // Quantity buttons
        document.querySelectorAll('.quantity-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const productId = btn.dataset.id;
                const item = this.items.find(i => i.id === productId);
                if (!item) return;
                
                if (btn.dataset.action === 'increase') {
                    this.updateQuantity(productId, item.quantity + 1);
                } else {
                    this.updateQuantity(productId, item.quantity - 1);
                }
            });
        });
        
        // Remove buttons
        document.querySelectorAll('.remove-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                this.removeItem(btn.dataset.id);
            });
        });
    }

    /**
     * Show notification when item added
     */
    showNotification(message) {
        // Create notification element
        const notification = document.createElement('div');
        notification.textContent = message;
        notification.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            background: var(--accent);
            color: white;
            padding: 1rem 1.5rem;
            border: 2px solid var(--dark);
            border-radius: 8px;
            box-shadow: 4px 4px 0 rgba(0,0,0,0.2);
            z-index: 10000;
            font-weight: 600;
            font-family: 'DM Mono', monospace;
        `;
        
        document.body.appendChild(notification);
        
        // Remove after 2.5 seconds
        setTimeout(() => notification.remove(), 2500);
    }
}

// Create cart instance
const cart = new ShoppingCart();