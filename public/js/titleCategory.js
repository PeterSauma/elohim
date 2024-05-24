window.addEventListener("DOMContentLoaded", function(){
    
  

  let hrefCategory = document.location.href
  let titleCategory = document.querySelector('.col-12 h2')
  if(hrefCategory == "http://localhost:3000/phones"){
  
    titleCategory.innerHTML = "Celulares"
  }
  else if(hrefCategory == "http://localhost:3000/tablets"){
    titleCategory.innerHTML = "Tablets"
  }
  else if (hrefCategory == "http://localhost:3000/laptops"){
    titleCategory.innerHTML = "Laptops"
  }

    })



