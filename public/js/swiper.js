window.addEventListener('DOMContentLoaded', function() {
    const mediaQuery = window.matchMedia('(min-width: 361px)');
    console.log(mediaQuery)
    
    const changeSize = function (x){
        if(x.matches){
            var swiper = new Swiper(".mySwiper", {
                        slidesPerView: 2,
                        spaceBetween: 30,
                        loop: true,
                        freeMode: true,
                        pagination: {
                        el: ".swiper-pagination",
                        clickable: true,
                        },
                      });
        
        } else {
            var swiper = new Swiper(".mySwiper", {
                slidesPerView: 1,
                spaceBetween: 0,
                loop: true,
                freeMode: true,
                pagination: {
                el: ".swiper-pagination",
                clickable: true,
                },
              });
        }
        return swiper
    }

        
    mediaQuery.addListener(changeSize)
    changeSize(mediaQuery)
    



})


