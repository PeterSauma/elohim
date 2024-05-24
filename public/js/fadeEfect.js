window.addEventListener('load', () => {


   

    window.addEventListener('scroll', function(){    
    
            let h2 = document.querySelectorAll('h2');
            
    
            for(let i = 0; i < h2.length ; i++){
            
            // capturo toda la altura de la pantalla
            let altura = window.innerHeight/1         
            
            // la distancia entre la h2 y la altura de la pantalla
            let distancia = h2[i].getBoundingClientRect().top
                
            if(distancia <= altura){
    
                h2[i].classList.add('typing')
    
            }
            
            
            
            }
        
    
        
    
    
    
    
    
    
    })
    
})

