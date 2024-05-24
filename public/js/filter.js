window.addEventListener('load', function(){

    const btn = document.querySelector(".btn-filter")
    const filterMenu = document.querySelector(".filter-menu")
    const arrowLeft = document.querySelector('.arrow-left')

    // filter menu - click on button
    btn.addEventListener("click", () => {
        filterMenu.classList.add('display-block')
        filterMenu.classList.toggle('active')
    })

    arrowLeft.addEventListener('click', () => {
        filterMenu.classList.remove('display-block')
        filterMenu.classList.toggle('active')
    })

    
    // Function Filter

    var checkbox = document.querySelectorAll(".form-check-input.brand");
    var checkboxPrice = document.querySelectorAll(".form-check-input.price");
    var checkboxDiscount = document.querySelectorAll(".form-check-input.discount");
    var cards = document.querySelectorAll(".cards")
    let cardsFilterByBrand = []
        
    let arrayFilter, arrayNoFilter
    
    // ver que funcione y reducir el array sin repeticiones

// capturar el evento de captura cambios en los checkbox de brand
    for(i = 0; i < checkbox.length; i++) {

        checkbox[i].addEventListener('change', function() {
            let arr1 = []
            let arr2 = [] 
            for(i = 0; i < checkbox.length; i++) {
            if (checkbox[i].checked) { 
                let combineValueCategory = checkbox[i].value + "-" + checkbox[i].dataset.category
               
                arr1.push(combineValueCategory)
                arrayFilter = Array.from(new Set(arr1))            
            } else {
                let combineValueCategoryNo = checkbox[i].value + "-" + checkbox[i].dataset.category
                arr2.push(combineValueCategoryNo)
                arrayNoFilter = Array.from(new Set(arr2))
                // el 9 corresponde al numero de filtros seteados. De agregar o reducir la cantidad, se debe modificar este numero
                if (arrayNoFilter.length == 9) {
                    arrayFilter = []
                }   
            }
            } 
            console.log(arrayFilter)
            cardsFilterByBrand = []
            filterBrand()           
            for(i = 0; i < checkboxPrice.length; i++) {
                if (checkboxPrice[i].checked) {
                    filterPrice(cardsFilterByBrand)
                }
            }        
            
        })
     
    }

    

// capturar el evento de captura cambios en los checkbox de price

let newArrayFilterPrice
let arrayFilterPrice, arrayNoFilterPrice
for(i = 0; i < checkboxPrice.length; i++) {

    checkboxPrice[i].addEventListener('change', function() {
        console.log('Entro al filter')
        let arr3 = []
        let arr4 = [] 
        for(i = 0; i < checkboxPrice.length; i++) {
        if (checkboxPrice[i].checked) {            
            arr3.push(checkboxPrice[i].value)
            arrayFilterPrice = Array.from(new Set(arr3))            
        } else {
            arr4.push(checkboxPrice[i].value)
            arrayNoFilterPrice = Array.from(new Set(arr4))
            // el 14 corresponde al numero de filtros seteados. De agregar o reducir la cantidad, se debe modificar este numero
            if (arrayNoFilterPrice.length == 3) {
                arrayFilterPrice = []   
            }   
        }
        } 

            newArrayFilterPrice = arrayFilterPrice.join()
            
           
       
            if (cardsFilterByBrand.length != 0) {
                console.log(cardsFilterByBrand)
                filterPrice(cardsFilterByBrand)
            } else {
                console.log('chau')
                filterPrice(cards)
            } 
         
    })
 
}

// capturar el evento de captura cambios en los checkbox de discount

// let newArrayFilterDiscount
// let arrayFilterDiscount, arrayNoFilterDiscount
// for(i = 0; i < checkboxDiscount.length; i++) {

//     checkboxDiscount[i].addEventListener('change', function() {
//         let arr3 = []
//         let arr4 = [] 
//         for(i = 0; i < checkboxDiscount.length; i++) {
//         if (checkboxDiscount[i].checked) {            
//             arr3.push(checkboxDiscount[i].value)
//             arrayFilterDiscount = Array.from(new Set(arr3))            
//         } else {
//             arr4.push(checkboxDiscount[i].value)
//             arrayNoFilterDiscount = Array.from(new Set(arr4))
//             // el 14 corresponde al numero de filtros seteados. De agregar o reducir la cantidad, se debe modificar este numero
//             if (arrayNoFilterDiscount.length == 5) {
//                 arrayFilterDiscount = []   
//             }   
//         }
//         } 

//             newArrayFilterDiscount = arrayFilterDiscount.join();
          
//             if (cardsFilterByBrand.length != 0) {
//                 filterDiscount(cardsFilterByBrand)
//             } else {
//                 filterDiscount(cards)
//             } 
         
//     })
 
// }


    const filterBrand = () => {
        
        for(i = 0; i < cards.length; i++) {
            if (arrayFilter.length != 0) {
            // tengo que ver que si id-brand esta contenido en arrayFilter arrayFilter.indexOf(cards[i].dataset.brand) !== 0 . Si esta contenido entonces cards[i].style.display ="none"
            if (arrayFilter.indexOf(cards[i].dataset.category) != -1){
                cardsFilterByBrand.push(cards[i])              
                cards[i].style.display = "block"
            } else {
                cards[i].style.display = "none"
            }
        } else {
            cards[i].style.display = "block"
        }
    }
        return cardsFilterByBrand
    }


// Funcion para filtrar precios
    const filterPrice = (arrayCards) => {
       console.log()
        for(i = 0; i < arrayCards.length; i++) {
            if (arrayFilterPrice.length != 0) {                              
                // revisar condiciones y precios
                
                switch (newArrayFilterPrice) {
                    case "1":
                    arrayCards[i].dataset.price < 100000 ? arrayCards[i].style.display = "block" : arrayCards[i].style.display = "none";
                    break;
                    case "2":
                       100000 < arrayCards[i].dataset.price && arrayCards[i].dataset.price < 200000 ? arrayCards[i].style.display = "block" : arrayCards[i].style.display = "none";
                       break;
                    case "3":
                        arrayCards[i].dataset.price >= 200000 ? arrayCards[i].style.display = "block" : arrayCards[i].style.display = "none";
                    break;
                  }
        }
    }
    }

// Funcion para filtrar descuento
    // const filterDiscount = (arrayCards) => {
    //     for(i = 0; i < arrayCards.length; i++) {
    //         if (arrayFilterDiscount.length != 0) {                              
    //             // revisar condiciones y precios
                
    //             switch (newArrayFilterDiscount) {
    //                 case "1":
    //                 arrayCards[i].dataset.discount >= 10 ? arrayCards[i].style.display = "block" : arrayCards[i].style.display = "none";
    //                 break;
    //                 case "2":
    //                    arrayCards[i].dataset.discount >= 20 ? arrayCards[i].style.display = "block" : arrayCards[i].style.display = "none";
    //                    break;
    //                 case "3":
    //                     arrayCards[i].dataset.discount >= 30 ? arrayCards[i].style.display = "block" : arrayCards[i].style.display = "none";
    //                 break;
    //                 case "4":
    //                     arrayCards[i].dataset.discount >= 40 ? arrayCards[i].style.display = "block" : arrayCards[i].style.display = "none";
    //                 break;
    //                 case "5":
    //                     arrayCards[i].dataset.discount >= 50 ? arrayCards[i].style.display = "block" : arrayCards[i].style.display = "none";
    //                 break;
    //               }
    //     }
    // }
    // }


    // button to clean ckecked brand

    var buttonToClean = document.querySelector(".clean.brand") 

    buttonToClean.addEventListener('click', () => {
        for(var i=0;i<checkbox.length;i++) {
            checkbox[i].checked = false;
            console.log(arrayFilter)
            arrayFilter = []
            cardsFilterByBrand = []
            filterBrand()
            
            if (newArrayFilterPrice) {
                
                console.log(newArrayFilterPrice)
                filterPrice(cards)
            }
        }
        
    })

    // button to clean ckecked price

    var buttonToCleanPrice = document.querySelector(".clean.price") 

    buttonToCleanPrice.addEventListener('click', () => {
      
        if (!arrayFilter) {
        arrayFilter = []
       }  

        for(var i=0;i<checkboxPrice.length;i++) {
        checkboxPrice[i].checked = false;
        arrayFilterPrice = []
        filterPrice(cards)
        console.log(arrayFilter)
       if (arrayFilter) {
           console.log('entre')
        filterBrand()
       }
        }
        
    })



   

} )