window.addEventListener('load', function(){
    
    //Declaración de variables
    //Pass Register
    let eyeRg = document.querySelector ('#eyeRg')
    let passwordRg = document.querySelector('#passwordRg')
    //Confirm Pass Register
    let eyeConfRg = document.querySelector ('#eyeConfRg')
    let passConfRg = document.querySelector('#passConfRg')
    //Pass LogIn
    let eyeLogIn = document.querySelector ('#eyeLogIn')
    let passwordLogIn = document.querySelector('#passwordLogIn')
    

    //Eventos onClick
    //Pass Register
    eyeRg.addEventListener('click', function(){
        if(passwordRg.type == "password"){
            
            passwordRg.type = "text"
            eyeRg.style.opacity = 0.8
        }else{
            passwordRg.type = "password"
            eyeRg.style.opacity = 0.5
        }
    })
    //Confirm Pass Register
    eyeConfRg.addEventListener('click', function(){
        if(passConfRg.type == "password"){
            
            passConfRg.type = "text"
            eyeConfRg.style.opacity = 0.8
        }else{
            passConfRg.type = "password"
            eyeConfRg.style.opacity = 0.5
        }
    })
    //Confirm Pass Register
    eyeLogIn.addEventListener('click', function(){
        if(passwordLogIn.type == "password"){
            
            passwordLogIn.type = "text"
            eyeLogIn.style.opacity = 0.8
        }else{
            passwordLogIn.type = "password"
            eyeLogIn.style.opacity = 0.5
        }
    })
})


