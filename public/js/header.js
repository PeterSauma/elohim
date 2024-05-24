window.addEventListener('load', function () {


const carritoHeader = JSON.parse(localStorage.getItem('carrito')) 

if (carritoHeader) {
  let contadorSpan = Object.keys(carritoHeader).length

  const cartIcon = () => {
        if (localStorage.carrito && localStorage.carrito != '{}') {
            document.querySelector('#cart-icon').innerHTML +=`<span class ="badge badge-danger badge-counter">${contadorSpan}</span>` 
        }
      }
    
      cartIcon()
}
  

})