document.addEventListener("DOMContentLoaded", function() {
    const checkboxes = document.querySelectorAll('.form-check-input.brand');
    const priceRadios = document.querySelectorAll('.form-check-input.price');
    const products = document.querySelectorAll('.grid');

    // Function to filter products based on checked checkboxes and price
    function filterProducts() {
        const checkedCheckboxes = Array.from(checkboxes).filter(checkbox => checkbox.checked);
        const checkedPrices = Array.from(priceRadios).filter(radio => radio.checked);

        products.forEach(product => {
            const productCategory = product.classList.contains('ropa') ? 'ropa' :
                                    product.classList.contains('detergentes') ? 'detergentes' :
                                    product.classList.contains('pisos') ? 'pisos' :
                                    product.classList.contains('cosmetica') ? 'cosmetica' :
                                    product.classList.contains('autos') ? 'autos' : '';
            
            const productBrand = product.querySelector('.brand-product h5').textContent.trim();
            const productPrice = parseFloat(product.dataset.price);

            let categoryMatch = true;
            let brandMatch = true;
            let priceMatch = true;

            if (checkedCheckboxes.length > 0) {
                brandMatch = checkedCheckboxes.some(checkbox => checkbox.value === productBrand);
                categoryMatch = checkedCheckboxes.some(checkbox => checkbox.dataset.category === productCategory);
            }

            if (checkedPrices.length > 0) {
                const priceRange = checkedPrices[0].value;
                if (priceRange == 1) {
                    priceMatch = productPrice <= 100000;
                } else if (priceRange == 2) {
                    priceMatch = productPrice > 100000 && productPrice <= 200000;
                } else if (priceRange == 3) {
                    priceMatch = productPrice > 200000;
                }
            }

            if (brandMatch && categoryMatch && priceMatch) {
                product.style.display = 'block';
            } else {
                product.style.display = 'none';
            }
        });
    }

    // Add event listeners to checkboxes and radio buttons
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', filterProducts);
    });

    priceRadios.forEach(radio => {
        radio.addEventListener('change', filterProducts);
    });

    // Clean filters
    document.querySelector('.clean.brand').addEventListener('click', () => {
        checkboxes.forEach(checkbox => {
            checkbox.checked = false;
        });
        filterProducts();
    });

    document.querySelector('.clean.price').addEventListener('click', () => {
        priceRadios.forEach(radio => {
            radio.checked = false;
        });
        filterProducts();
    });
});
