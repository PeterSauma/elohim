window.addEventListener('load', function () {
let subtotalAmount = document.querySelector('.subtotalAmount')
let discountAmount = document.querySelector('.discountAmount')
let totalAmount = document.querySelector('.totalAmount')

    if (sessionStorage.discount == 'MEGAOFERTA') {
   
        let subtotal = subtotalAmount.textContent;
    
        discountAmount.innerHTML = (subtotal * 0.15).toFixed(2)
        let discount = (subtotal * 0.15).toFixed(2)

        totalAmount.innerHTML = (subtotal - discount).toFixed(2)

}
})