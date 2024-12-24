// scripts.js

// Update Price Range Value Display
document.addEventListener('DOMContentLoaded', function () {
    const priceRange = document.getElementById('price');
    const priceValue = document.getElementById('price-value');

    if (priceRange && priceValue) {
        priceValue.textContent = priceRange.value;

        priceRange.addEventListener('input', function () {
            priceValue.textContent = this.value;
        });
    }

    // Contact Form Validation and Submission
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            // Simple validation
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();

            if (name === '' || email === '' || message === '') {
                alert('Please fill in all required fields.');
                return;
            }

            // Placeholder for form submission (e.g., via AJAX)
            alert('Your message has been sent successfully!');
            contactForm.reset();
        });
    }

    // Product Filtering Functionality (Placeholder)
    const filterForm = document.getElementById('filter-form');
    if (filterForm) {
        filterForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const category = document.getElementById('category').value;
            const price = document.getElementById('price').value;

            // Placeholder: Implement actual filtering logic
            alert(`Filtering products by Category: ${category || 'All'} and Price: Up to $${price}`);
        });
    }
});
