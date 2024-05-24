window.addEventListener("DOMContentLoaded", function () {

    const iconoMenu = document.querySelector('.burger-menu');
    
    const menu = document.querySelector('#menu');
    const burgerClose = document.querySelector('.burger-close');
    const containerInfo = document.querySelector('.containerInfo ul')
   
    const iconoInfo = document.querySelectorAll('div.info-li i')
    const h3Info = document.querySelectorAll('div.info-li h3')

    
    
    iconoMenu.addEventListener('click', function() {
        iconoMenu.style.display = "none"
        menu.classList.toggle('active');
        document.body.classList.toggle('opacity')
    })
    
    burgerClose.addEventListener('click', function(){
        iconoMenu.style.display = "block"
        menu.classList.toggle('active')
    })
    //  containerInfo.addEventListener('click',function(){
    //     iconoInfo.forEach( (item) => {
    //         console.log(item)
    //         if(item.style.display == "block") {
    //             item.style.display = "none";
    //         } else {
    //             item.style.display = "block";
    //         }
           
    //      })         
    //     h3Info.forEach( (item) => {
    //         if(item.style.display == "none") {
    //             item.style.display= "block";
    //         } else {
    //             item.style.display = "none";
    //         }
    //       })
         
    //  })

   





  
})
