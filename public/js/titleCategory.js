window.addEventListener("DOMContentLoaded", function(){
    
  let hrefCategory = document.location.href
  let titleCategory = document.querySelector('.col-12 h2')
  if(hrefCategory == "http://localhost:3000/ropa"){
    titleCategory.innerHTML = "Ropa"
    }
    else if (hrefCategory == "http://localhost:3000/detergentes"){
    titleCategory.innerHTML = "Detergentes"
    } 
    else if (hrefCategory == "http://localhost:3000/pisos"){
      titleCategory.innerHTML = "Pisos"
    }
    else if (hrefCategory == "http://localhost:3000/cosmetica"){
      titleCategory.innerHTML = "Cosmetica"
    }
    else if (hrefCategory == "http://localhost:3000/autos"){
      titleCategory.innerHTML = "Autos"
    }
  })



