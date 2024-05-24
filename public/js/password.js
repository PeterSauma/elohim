window.addEventListener('load', function(){

/*  
************************ Validaciones patrones predesibles ***************************

    Bibliografía Seguridad de claves https://www.xataka.com/seguridad/estas-50-contrasenas-comunes-internet-qwerty-a-dragon-pasando-password-123456-estudio


************************ Validaciones fortaleza de contraseña ************************

    Biblografía Formulas de expresiones regulares
    /^ "algo" $/   ----> Inicio y fin de una expresín regular
    (?="algo")     ----> Valida que "algo" se encuntra en cualquier parte de la cadena de string (si no se agrega, se valida que "algo" esté al comienzo de la cadena de string)
    (.*"algo")     ----> . valida que estoy esperando que exista cualquier caracter de "algo" ("a", "l", "g" o la "o"). En cuanto * valida que puedo encontrar los n caracteres 1, muchas o ninguna vez. 
    (?=(.*[0-9]))  ----> Validar un número en el rango de [0-9]
    (?=.*[\!@#$%^&¬*()\\[\]{}\-_+=´`~|:"'¿?<>,;./Ç]) ----> Validar que se encuentre un caracter de la lista entre []
    (?=(.*[A-Z]))  ----> Validar una letra mayúscula en el rango de [A-Z]
    (?=(.*[a-z]))  ----> Validar una letra minúscula en el rango de [a-z]
    (?=(.*)).{XX,YY} ----> Validar que haya cualquier caracter "(?=(.*))" un mínimo de XX cantidad y un máximo de YY (si solo dejo {XX,} indico que no hay máximo solo mínimo)
    
    BIBLIOGRAFÍA ÚTIL: https://www.youtube.com/watch?v=s1HUWsSe-ZU&t=1248s
    
    Tabla fortaleza de claves  https://simbiosisdigital.com.ar/wp-content/uploads/2021/07/tabla-.png
       
    
    
************************                Indice                ************************

 Indice:
    
    A: Expresiones regulares útiles 
        0: Biblografía Formulas de expresiones regulares
        1: Columna 1
        2: Columna 2
        3: Columna 3
        4: Columna 4 y 5

    B: Add Event Listener

    C: Imputs y alertas para trabajar
        1: Imputs
        2: Alertas
                    1 Estructura de alertas
                    2 Captura de alertas
                    3 Creacion de alertas

    D: Validaciones datos personales  

    E: Validaciones patrones predesibles
        0: Bibliografía Seguridad de claves
        1: Numericas
                    1 Secuencias numéricas incremental
                    2 Secuencias numéricas decremental
                    3 Secuencias numéricas de teclado en cascada
                    4 Secuencias numéricas de teclado en escalera
                    5 Secuencias numéricas repetidas
        2: Alfabeticas
                    1 Secuencias alfabéticas de teclado incremental
                    2 Secuencias alfabéticas de teclado decremental
                    3 Secuencias alfabéticas de teclado en cascada
                    4 Secuencias alfabéticas de teclado en escalera
                    5 Alfabeto incremental
                    6 Alfabeto decremental
                    7 Secuencias alfabéticas repetidas
        3: Strings
                    1 Palabras comúnes

    
    F: Validaciones fortaleza de contraseña
        0: Tabla fortaleza de claves
        1: Individuales
                    1 Validación números
                    2 Validación letras minúsculas
                    3 Validación letras mayúsculas
                    4 Validación caracteres especiales
        2: Dobles
                    1 Validación números y minúsculas
                    2 Validación números y mayúsculas
                    3 Validación números y caracteres
                    4 Validación minúsculas y mayúsculas
                    5 Validación minúsculas y caracteres
                    6 Validación mayúsculas y caracteres
        3: Triples
                    1 Validación números, minúsculas y mayúsculas
                    2 Validación números, minúsculas, caracteres 
                    3 Validación números mayúsculas y caracteres 
                    4 Validación minúsculas, mayúsculas y caracteres
        4: Completa
                    1 Validación números, minúsculas, mayúsculas y caracteres


    G: preventDefault
        0: Declaración de variables
        1: Submit datos personales
        2: Submit patrones predesibles
        3: Submit fortaleza de contraseña

*/
    

/************************ Expresiones regulares útiles ************************/

        //A-1 Columna 1    
        let regNum_0_10 = /^(?=.*[0-9])(?=(.*)).{0,10}$/
        let regLow_0_10 = /^(?=.*[a-z])(?=(.*)).{0,10}$/
        let regUpp_0_10 = /^(?=.*[A-Z])(?=(.*)).{0,10}$/
        let regSpecial_0_10 = /^(?=.*[\!ºª☺☻♥♦♣♠•◘○◙♂♀♪♫☼►◄↕‼¶§▬↨↑↓→←∟↔▲▼!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~⌂ÇéâüäàåçêëèïîìÄÅÉæÆôöòûùÿÖÜø£ØƒáíóúñÑªº¿®¬½¼¡«»░▒▓│┤ÁÂÀ©╣║╗╝¢¥┐└┴┬├─┼ãÃ╚╔╩╦╠═╬¤ðÐÊËÈıÍÎÏ┘┌█▄¦Ì▀ÓßÔÒõÕµþÞÚÛÙýÝ¯´­±‗¾§÷¸°¨·¹³²■\@#$%&¬*()\\[\]{}\-_+=`~|:"'¿?<>,;./Ç])(?=(.*)).{0,10}$/
        let regNum_11_15 = /^(?=.*[0-9])(?=(.*)).{11,15}$/
        let regLow_11_15 = /^(?=.*[a-z])(?=(.*)).{11,15}$/
        let regUpp_11_15 = /^(?=.*[A-Z])(?=(.*)).{11,15}$/
        let regSpecial_11_15 = /^(?=.*[\!ºª☺☻♥♦♣♠•◘○◙♂♀♪♫☼►◄↕‼¶§▬↨↑↓→←∟↔▲▼!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~⌂ÇéâüäàåçêëèïîìÄÅÉæÆôöòûùÿÖÜø£ØƒáíóúñÑªº¿®¬½¼¡«»░▒▓│┤ÁÂÀ©╣║╗╝¢¥┐└┴┬├─┼ãÃ╚╔╩╦╠═╬¤ðÐÊËÈıÍÎÏ┘┌█▄¦Ì▀ÓßÔÒõÕµþÞÚÛÙýÝ¯´­±‗¾§÷¸°¨·¹³²■\@#$%&¬*()\\[\]{}\-_+=`~|:"'¿?<>,;./Ç])(?=(.*)).{11,15}$/
        let regNum_16_18 = /^(?=.*[0-9])(?=(.*)).{16,18}$/
        let regLow_16_18 = /^(?=.*[a-z])(?=(.*)).{16,18}$/
        let regUpp_16_18 = /^(?=.*[A-Z])(?=(.*)).{16,18}$/
        let regSpecial_16_18 = /^(?=.*[\!ºª☺☻♥♦♣♠•◘○◙♂♀♪♫☼►◄↕‼¶§▬↨↑↓→←∟↔▲▼!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~⌂ÇéâüäàåçêëèïîìÄÅÉæÆôöòûùÿÖÜø£ØƒáíóúñÑªº¿®¬½¼¡«»░▒▓│┤ÁÂÀ©╣║╗╝¢¥┐└┴┬├─┼ãÃ╚╔╩╦╠═╬¤ðÐÊËÈıÍÎÏ┘┌█▄¦Ì▀ÓßÔÒõÕµþÞÚÛÙýÝ¯´­±‗¾§÷¸°¨·¹³²■\@#$%&¬*()\\[\]{}\-_+=`~|:"'¿?<>,;./Ç])(?=(.*)).{16,18}$/
        let regNum_19 = /^(?=.*[0-9])(?=(.*)).{19,}$/
        let regLow_19 = /^(?=.*[a-z])(?=(.*)).{19,}$/
        let regUpp_19 = /^(?=.*[A-Z])(?=(.*)).{19,}$/
        let regSpecial_19 = /^(?=.*[\!ºª☺☻♥♦♣♠•◘○◙♂♀♪♫☼►◄↕‼¶§▬↨↑↓→←∟↔▲▼!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~⌂ÇéâüäàåçêëèïîìÄÅÉæÆôöòûùÿÖÜø£ØƒáíóúñÑªº¿®¬½¼¡«»░▒▓│┤ÁÂÀ©╣║╗╝¢¥┐└┴┬├─┼ãÃ╚╔╩╦╠═╬¤ðÐÊËÈıÍÎÏ┘┌█▄¦Ì▀ÓßÔÒõÕµþÞÚÛÙýÝ¯´­±‗¾§÷¸°¨·¹³²■\@#$%&¬*()\\[\]{}\-_+=`~|:"'¿?<>,;./Ç])(?=(.*)).{19,}$/
       
        //A-2 Columna 2
        let regNum_0_7 = /^(?=.*[0-9])(?=(.*)).{0,7}$/
        let regLow_0_7 = /^(?=.*[a-z])(?=(.*)).{0,7}$/
        let regUpp_0_7 = /^(?=.*[A-Z])(?=(.*)).{0,7}$/
        let regSpecial_0_7 = /^(?=.*[\!ºª☺☻♥♦♣♠•◘○◙♂♀♪♫☼►◄↕‼¶§▬↨↑↓→←∟↔▲▼!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~⌂ÇéâüäàåçêëèïîìÄÅÉæÆôöòûùÿÖÜø£ØƒáíóúñÑªº¿®¬½¼¡«»░▒▓│┤ÁÂÀ©╣║╗╝¢¥┐└┴┬├─┼ãÃ╚╔╩╦╠═╬¤ðÐÊËÈıÍÎÏ┘┌█▄¦Ì▀ÓßÔÒõÕµþÞÚÛÙýÝ¯´­±‗¾§÷¸°¨·¹³²■\@#$%&¬*()\\[\]{}\-_+=`~|:"'¿?<>,;./Ç])(?=(.*)).{0,7}$/
        let regNum_8_10 = /^(?=.*[0-9])(?=(.*)).{8,10}$/
        let regLow_8_10 = /^(?=.*[a-z])(?=(.*)).{8,10}$/
        let regUpp_8_10 = /^(?=.*[A-Z])(?=(.*)).{8,10}$/
        let regSpecial_8_10 = /^(?=.*[\!ºª☺☻♥♦♣♠•◘○◙♂♀♪♫☼►◄↕‼¶§▬↨↑↓→←∟↔▲▼!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~⌂ÇéâüäàåçêëèïîìÄÅÉæÆôöòûùÿÖÜø£ØƒáíóúñÑªº¿®¬½¼¡«»░▒▓│┤ÁÂÀ©╣║╗╝¢¥┐└┴┬├─┼ãÃ╚╔╩╦╠═╬¤ðÐÊËÈıÍÎÏ┘┌█▄¦Ì▀ÓßÔÒõÕµþÞÚÛÙýÝ¯´­±‗¾§÷¸°¨·¹³²■\@#$%&¬*()\\[\]{}\-_+=`~|:"'¿?<>,;./Ç])(?=(.*)).{8,10}$/
        let regNum_11_13 = /^(?=.*[0-9])(?=(.*)).{11,13}$/
        let regLow_11_13 = /^(?=.*[a-z])(?=(.*)).{11,13}$/
        let regUpp_11_13 = /^(?=.*[A-Z])(?=(.*)).{11,13}$/
        let regSpecial_11_13 = /^(?=.*[\!ºª☺☻♥♦♣♠•◘○◙♂♀♪♫☼►◄↕‼¶§▬↨↑↓→←∟↔▲▼!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~⌂ÇéâüäàåçêëèïîìÄÅÉæÆôöòûùÿÖÜø£ØƒáíóúñÑªº¿®¬½¼¡«»░▒▓│┤ÁÂÀ©╣║╗╝¢¥┐└┴┬├─┼ãÃ╚╔╩╦╠═╬¤ðÐÊËÈıÍÎÏ┘┌█▄¦Ì▀ÓßÔÒõÕµþÞÚÛÙýÝ¯´­±‗¾§÷¸°¨·¹³²■\@#$%&¬*()\\[\]{}\-_+=`~|:"'¿?<>,;./Ç])(?=(.*)).{11,13}$/
        let regNum_14_17 = /^(?=.*[0-9])(?=(.*)).{14,17}$/
        let regLow_14_17 = /^(?=.*[a-z])(?=(.*)).{14,17}$/
        let regUpp_14_17 = /^(?=.*[A-Z])(?=(.*)).{14,17}$/
        let regSpecial_14_17 = /^(?=.*[\!ºª☺☻♥♦♣♠•◘○◙♂♀♪♫☼►◄↕‼¶§▬↨↑↓→←∟↔▲▼!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~⌂ÇéâüäàåçêëèïîìÄÅÉæÆôöòûùÿÖÜø£ØƒáíóúñÑªº¿®¬½¼¡«»░▒▓│┤ÁÂÀ©╣║╗╝¢¥┐└┴┬├─┼ãÃ╚╔╩╦╠═╬¤ðÐÊËÈıÍÎÏ┘┌█▄¦Ì▀ÓßÔÒõÕµþÞÚÛÙýÝ¯´­±‗¾§÷¸°¨·¹³²■\@#$%&¬*()\\[\]{}\-_+=`~|:"'¿?<>,;./Ç])(?=(.*)).{14,17}$/
        let regNum_18 = /^(?=.*[0-9])(?=(.*)).{18,}$/
        let regLow_18 = /^(?=.*[a-z])(?=(.*)).{18,}$/
        let regUpp_18 = /^(?=.*[A-Z])(?=(.*)).{18,}$/
        let regSpecial_18 = /^(?=.*[\!ºª☺☻♥♦♣♠•◘○◙♂♀♪♫☼►◄↕‼¶§▬↨↑↓→←∟↔▲▼!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~⌂ÇéâüäàåçêëèïîìÄÅÉæÆôöòûùÿÖÜø£ØƒáíóúñÑªº¿®¬½¼¡«»░▒▓│┤ÁÂÀ©╣║╗╝¢¥┐└┴┬├─┼ãÃ╚╔╩╦╠═╬¤ðÐÊËÈıÍÎÏ┘┌█▄¦Ì▀ÓßÔÒõÕµþÞÚÛÙýÝ¯´­±‗¾§÷¸°¨·¹³²■\@#$%&¬*()\\[\]{}\-_+=`~|:"'¿?<>,;./Ç])(?=(.*)).{18,}$/
       
        //A-3 Columna 3
        let regNum_0_6 = /^(?=.*[0-9])(?=(.*)).{0,6}$/
        let regLow_0_6 = /^(?=.*[a-z])(?=(.*)).{0,6}$/
        let regUpp_0_6 = /^(?=.*[A-Z])(?=(.*)).{0,6}$/
        let regSpecial_0_6 = /^(?=.*[\!ºª☺☻♥♦♣♠•◘○◙♂♀♪♫☼►◄↕‼¶§▬↨↑↓→←∟↔▲▼!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~⌂ÇéâüäàåçêëèïîìÄÅÉæÆôöòûùÿÖÜø£ØƒáíóúñÑªº¿®¬½¼¡«»░▒▓│┤ÁÂÀ©╣║╗╝¢¥┐└┴┬├─┼ãÃ╚╔╩╦╠═╬¤ðÐÊËÈıÍÎÏ┘┌█▄¦Ì▀ÓßÔÒõÕµþÞÚÛÙýÝ¯´­±‗¾§÷¸°¨·¹³²■\@#$%&¬*()\\[\]{}\-_+=`~|:"'¿?<>,;./Ç])(?=(.*)).{0,6}$/
        let regNum_7_9 = /^(?=.*[0-9])(?=(.*)).{7,9}$/
        let regLow_7_9 = /^(?=.*[a-z])(?=(.*)).{7,9}$/
        let regUpp_7_9 = /^(?=.*[A-Z])(?=(.*)).{7,9}$/
        let regSpecial_7_9 = /^(?=.*[\!ºª☺☻♥♦♣♠•◘○◙♂♀♪♫☼►◄↕‼¶§▬↨↑↓→←∟↔▲▼!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~⌂ÇéâüäàåçêëèïîìÄÅÉæÆôöòûùÿÖÜø£ØƒáíóúñÑªº¿®¬½¼¡«»░▒▓│┤ÁÂÀ©╣║╗╝¢¥┐└┴┬├─┼ãÃ╚╔╩╦╠═╬¤ðÐÊËÈıÍÎÏ┘┌█▄¦Ì▀ÓßÔÒõÕµþÞÚÛÙýÝ¯´­±‗¾§÷¸°¨·¹³²■\@#$%&¬*()\\[\]{}\-_+=`~|:"'¿?<>,;./Ç])(?=(.*)).{7,9}$/
        let regNum_10_11 = /^(?=.*[0-9])(?=(.*)).{10,11}$/
        let regLow_10_11 = /^(?=.*[a-z])(?=(.*)).{10,11}$/
        let regUpp_10_11 = /^(?=.*[A-Z])(?=(.*)).{10,11}$/
        let regSpecial_10_11 = /^(?=.*[\!ºª☺☻♥♦♣♠•◘○◙♂♀♪♫☼►◄↕‼¶§▬↨↑↓→←∟↔▲▼!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~⌂ÇéâüäàåçêëèïîìÄÅÉæÆôöòûùÿÖÜø£ØƒáíóúñÑªº¿®¬½¼¡«»░▒▓│┤ÁÂÀ©╣║╗╝¢¥┐└┴┬├─┼ãÃ╚╔╩╦╠═╬¤ðÐÊËÈıÍÎÏ┘┌█▄¦Ì▀ÓßÔÒõÕµþÞÚÛÙýÝ¯´­±‗¾§÷¸°¨·¹³²■\@#$%&¬*()\\[\]{}\-_+=`~|:"'¿?<>,;./Ç])(?=(.*)).{10,11}$/
        let regNum_12_14 = /^(?=.*[0-9])(?=(.*)).{12,14}$/
        let regLow_12_14 = /^(?=.*[a-z])(?=(.*)).{12,14}$/
        let regUpp_12_14 = /^(?=.*[A-Z])(?=(.*)).{12,14}$/
        let regSpecial_12_14 = /^(?=.*[\!ºª☺☻♥♦♣♠•◘○◙♂♀♪♫☼►◄↕‼¶§▬↨↑↓→←∟↔▲▼!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~⌂ÇéâüäàåçêëèïîìÄÅÉæÆôöòûùÿÖÜø£ØƒáíóúñÑªº¿®¬½¼¡«»░▒▓│┤ÁÂÀ©╣║╗╝¢¥┐└┴┬├─┼ãÃ╚╔╩╦╠═╬¤ðÐÊËÈıÍÎÏ┘┌█▄¦Ì▀ÓßÔÒõÕµþÞÚÛÙýÝ¯´­±‗¾§÷¸°¨·¹³²■\@#$%&¬*()\\[\]{}\-_+=`~|:"'¿?<>,;./Ç])(?=(.*)).{12,14}$/
        let regNum_15 = /^(?=.*[0-9])(?=(.*)).{15,}$/
        let regLow_15 = /^(?=.*[a-z])(?=(.*)).{15,}$/
        let regUpp_15 = /^(?=.*[A-Z])(?=(.*)).{15,}$/
        let regSpecial_15 = /^(?=.*[\!ºª☺☻♥♦♣♠•◘○◙♂♀♪♫☼►◄↕‼¶§▬↨↑↓→←∟↔▲▼!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~⌂ÇéâüäàåçêëèïîìÄÅÉæÆôöòûùÿÖÜø£ØƒáíóúñÑªº¿®¬½¼¡«»░▒▓│┤ÁÂÀ©╣║╗╝¢¥┐└┴┬├─┼ãÃ╚╔╩╦╠═╬¤ðÐÊËÈıÍÎÏ┘┌█▄¦Ì▀ÓßÔÒõÕµþÞÚÛÙýÝ¯´­±‗¾§÷¸°¨·¹³²■\@#$%&¬*()\\[\]{}\-_+=`~|:"'¿?<>,;./Ç])(?=(.*)).{15,}$/
       
        //A-4 Columna 4 y 5
        let regNum_0_5 = /^(?=.*[0-9])(?=(.*)).{0,5}$/
        let regLow_0_5 = /^(?=.*[a-z])(?=(.*)).{0,5}$/
        let regUpp_0_5 = /^(?=.*[A-Z])(?=(.*)).{0,5}$/
        let regSpecial_0_5 = /^(?=.*[\!ºª☺☻♥♦♣♠•◘○◙♂♀♪♫☼►◄↕‼¶§▬↨↑↓→←∟↔▲▼!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~⌂ÇéâüäàåçêëèïîìÄÅÉæÆôöòûùÿÖÜø£ØƒáíóúñÑªº¿®¬½¼¡«»░▒▓│┤ÁÂÀ©╣║╗╝¢¥┐└┴┬├─┼ãÃ╚╔╩╦╠═╬¤ðÐÊËÈıÍÎÏ┘┌█▄¦Ì▀ÓßÔÒõÕµþÞÚÛÙýÝ¯´­±‗¾§÷¸°¨·¹³²■\@#$%&¬*()\\[\]{}\-_+=`~|:"'¿?<>,;./Ç])(?=(.*)).{0,5}$/
        let regNum_6_8 = /^(?=.*[0-9])(?=(.*)).{6,8}$/
        let regLow_6_8 = /^(?=.*[a-z])(?=(.*)).{6,8}$/
        let regUpp_6_8 = /^(?=.*[A-Z])(?=(.*)).{6,8}$/
        let regSpecial_6_8 = /^(?=.*[\!ºª☺☻♥♦♣♠•◘○◙♂♀♪♫☼►◄↕‼¶§▬↨↑↓→←∟↔▲▼!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~⌂ÇéâüäàåçêëèïîìÄÅÉæÆôöòûùÿÖÜø£ØƒáíóúñÑªº¿®¬½¼¡«»░▒▓│┤ÁÂÀ©╣║╗╝¢¥┐└┴┬├─┼ãÃ╚╔╩╦╠═╬¤ðÐÊËÈıÍÎÏ┘┌█▄¦Ì▀ÓßÔÒõÕµþÞÚÛÙýÝ¯´­±‗¾§÷¸°¨·¹³²■\@#$%&¬*()\\[\]{}\-_+=`~|:"'¿?<>,;./Ç])(?=(.*)).{6,8}$/
        let regNum_9_10 = /^(?=.*[0-9])(?=(.*)).{9,10}$/
        let regLow_9_10 = /^(?=.*[a-z])(?=(.*)).{9,10}$/
        let regUpp_9_10 = /^(?=.*[A-Z])(?=(.*)).{9,10}$/
        let regSpecial_9_10 = /^(?=.*[\!ºª☺☻♥♦♣♠•◘○◙♂♀♪♫☼►◄↕‼¶§▬↨↑↓→←∟↔▲▼!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~⌂ÇéâüäàåçêëèïîìÄÅÉæÆôöòûùÿÖÜø£ØƒáíóúñÑªº¿®¬½¼¡«»░▒▓│┤ÁÂÀ©╣║╗╝¢¥┐└┴┬├─┼ãÃ╚╔╩╦╠═╬¤ðÐÊËÈıÍÎÏ┘┌█▄¦Ì▀ÓßÔÒõÕµþÞÚÛÙýÝ¯´­±‗¾§÷¸°¨·¹³²■\@#$%&¬*()\\[\]{}\-_+=`~|:"'¿?<>,;./Ç])(?=(.*)).{9,10}$/
        let regNum_11_12 = /^(?=.*[0-9])(?=(.*)).{11,12}$/
        let regLow_11_12 = /^(?=.*[a-z])(?=(.*)).{11,12}$/
        let regUpp_11_12 = /^(?=.*[A-Z])(?=(.*)).{11,12}$/
        let regSpecial_11_12 = /^(?=.*[\!ºª☺☻♥♦♣♠•◘○◙♂♀♪♫☼►◄↕‼¶§▬↨↑↓→←∟↔▲▼!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~⌂ÇéâüäàåçêëèïîìÄÅÉæÆôöòûùÿÖÜø£ØƒáíóúñÑªº¿®¬½¼¡«»░▒▓│┤ÁÂÀ©╣║╗╝¢¥┐└┴┬├─┼ãÃ╚╔╩╦╠═╬¤ðÐÊËÈıÍÎÏ┘┌█▄¦Ì▀ÓßÔÒõÕµþÞÚÛÙýÝ¯´­±‗¾§÷¸°¨·¹³²■\@#$%&¬*()\\[\]{}\-_+=`~|:"'¿?<>,;./Ç])(?=(.*)).{11,12}$/
        let regNum_13 = /^(?=.*[0-9])(?=(.*)).{13,}$/
        let regLow_13 = /^(?=.*[a-z])(?=(.*)).{13,}$/
        let regUpp_13 = /^(?=.*[A-Z])(?=(.*)).{13,}$/
        let regSpecial_13 = /^(?=.*[\!ºª☺☻♥♦♣♠•◘○◙♂♀♪♫☼►◄↕‼¶§▬↨↑↓→←∟↔▲▼!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~⌂ÇéâüäàåçêëèïîìÄÅÉæÆôöòûùÿÖÜø£ØƒáíóúñÑªº¿®¬½¼¡«»░▒▓│┤ÁÂÀ©╣║╗╝¢¥┐└┴┬├─┼ãÃ╚╔╩╦╠═╬¤ðÐÊËÈıÍÎÏ┘┌█▄¦Ì▀ÓßÔÒõÕµþÞÚÛÙýÝ¯´­±‗¾§÷¸°¨·¹³²■\@#$%&¬*()\\[\]{}\-_+=`~|:"'¿?<>,;./Ç])(?=(.*)).{13,}$/
        
    
       


/************************ Add Event Listener ************************/
    //Capturo el formulario de Registro completo
    let formRegister = document.querySelector('#registro')

    //Trabajo las validaciones con el evento keyup
    formRegister.passwordRg.addEventListener('keyup', function(){
        

/************************ Imputs y alertas para trabajar ************************/           
        
        //C-1 Imputs
        
        let name =formRegister.nameRg.value
        let lastName=formRegister.lastNameRg.value
        let email =formRegister.emailRg.value   
        let pass =formRegister.passwordRg.value
        console.log(pass)

        //C-2.1 Estructura de alertas
        /***** VER COMETARIOS FINALES  ******/
       
        //C-2.2 Captura de alertas  
        let passwordRgErr = document.querySelector('#passwordRgErr') 
        let cartelWarning = document.querySelector ('#cartelWarning')

        //C-2.3 Creacion de alertas
/*rojo*/    let nameWarningAlert = '<a class="linckPassword" href="https://www.xataka.com/seguridad/estas-50-contrasenas-comunes-internet-qwerty-a-dragon-pasando-password-123456-estudio" target="_blank"><p class="nameWarning" id="nameWarning">Escribir tu nombre es muy predesible <sup>(?)</sup></p></a>'
/*rojo*/    let lastNameWarningAlert = '<a class="linckPassword" href="https://www.xataka.com/seguridad/estas-50-contrasenas-comunes-internet-qwerty-a-dragon-pasando-password-123456-estudio" target="_blank"><p class="lastNameWarning" id="lastNameWarning">Escribir tu apellido es muy predesible <sup>(?)</sup></p></a>'
/*rojo*/    let emailWarningAlert = '<a class="linckPassword" href="https://www.xataka.com/seguridad/estas-50-contrasenas-comunes-internet-qwerty-a-dragon-pasando-password-123456-estudio" target="_blank"><p class="emailWarning" id="emailWarning">Escribir tu email es muy predesible <sup>(?)</sup></p></a>'
/*rojo*/    let patronAlert = '<a class="linckPassword" href="https://www.xataka.com/seguridad/estas-50-contrasenas-comunes-internet-qwerty-a-dragon-pasando-password-123456-estudio" target="_blank"><p class="patronWarning"> Escribir una secuencia alfanumérica es muy predesible <sup>(?)</sup></p></a>'
/*rojo*/    let wordAlert = '<a class="linckPassword" href="https://www.xataka.com/seguridad/estas-50-contrasenas-comunes-internet-qwerty-a-dragon-pasando-password-123456-estudio" target="_blank"><p class="patronWarning"> Escribir palabras típicas como "password" o "mono" etc. es muy predecible <sup>(?)</sup></p></a>'
/*violeta*/ let passVeryWeackAlert = '<a class="linckPassword" href="https://simbiosisdigital.com.ar/wp-content/uploads/2021/07/tabla-.png" target="_blank"><p class="passVeryWeack" id="passVeryWeack">La contraseña es muy débil <sup>(?)</sup></p></a>'
/*rojo*/    let passWeackAlert = '<a class="linckPassword" href="https://simbiosisdigital.com.ar/wp-content/uploads/2021/07/tabla-.png" target="_blank"><p class="passWeack" id="passWeack">La contraseña es débil <sup>(?)</sup></p></a>'
/*mostaza*/ let passMediumAlert = '<a class="linckPassword" href="https://simbiosisdigital.com.ar/wp-content/uploads/2021/07/tabla-.png" target="_blank"><p class="passMedium" id="passMedium">La contraseña es media <sup>(?)</sup></p></a>'
/*amarillo*/let passStrongAlert = '<a class="linckPassword" href="https://simbiosisdigital.com.ar/wp-content/uploads/2021/07/tabla-.png" target="_blank"><p class="passStrong" id="passStrong">La contraseña es fuerte <sup>(?)</sup></p></a>'
/*verde*/   let passVeryStrongAlert = '<a class="linckPassword" href="https://simbiosisdigital.com.ar/wp-content/uploads/2021/07/tabla-.png" target="_blank"><p class="passVeryStrong" id="passVeryStrong">La contraseña es muy fuerte <sup>(?)</sup></p></a>'
          
        

        
/************************ Validaciones datos personales ************************/

        /*let nameValidation = pass.includes(name)
        let lastNameValidation = pass.includes(lastName)
        let emailValidation = pass.include(email)

        if(nameValidation){
            console.log('Tu nombre no debe estar en la contraseña')
        }else if (lastNameValidation){
            console.log('Tu apellido no debe estar en la contraseña')
        }else if(emailValidation){
            console.log('Tu apellido no debe estar en la contraseña')
        }
        else{
            console.log('ok')
        }

        */

/************************ Validaciones patrones predesibles ************************/
        if (
            //E-1.1 Secuencias numéricas incremental
            pass.includes('012')   ||
            pass.includes('123')   ||
            pass.includes('234')   ||
            pass.includes('345')   ||
            pass.includes('456')   ||
            pass.includes('567')   ||
            pass.includes('678')   ||
            pass.includes('789')   ||
            pass.includes('890')   ||

            //E-1.2 Secuencias numéricas decremental
            pass.includes('210')   ||
            pass.includes('321')   ||
            pass.includes('432')   ||
            pass.includes('543')   ||
            pass.includes('654')   ||
            pass.includes('765')   ||
            pass.includes('876')   ||
            pass.includes('987')   ||
            pass.includes('098')   ||

            //E-1.3 Secuencias numéricas de teclado en cascada
            pass.includes('7845')   ||
            pass.includes('4512')   ||
            pass.includes('8956')   ||
            pass.includes('5623')   ||
            pass.includes('7946')   ||
            pass.includes('4613')   ||

            pass.includes('8754')   ||
            pass.includes('5421')   ||
            pass.includes('9865')   ||
            pass.includes('6532')   ||
            pass.includes('9764')   ||
            pass.includes('6431')   ||
            
        
            //E-1.4 Secuencias numéricas de teclado en escalera
            pass.includes('5487')   ||
            pass.includes('2154')   ||
            pass.includes('6598')   ||
            pass.includes('3265')   ||
            pass.includes('6497')   ||
            pass.includes('3164')   ||

            pass.includes('4578')   ||
            pass.includes('1245')   ||
            pass.includes('5689')   ||
            pass.includes('2356')   ||
            pass.includes('4697')   ||
            pass.includes('1346')   ||
            

            //E-1.5 Secuencias numéricas repetidas
            pass.includes('000')   ||
            pass.includes('111')   ||
            pass.includes('222')   ||
            pass.includes('333')   ||
            pass.includes('444')   ||
            pass.includes('555')   ||
            pass.includes('666')   ||
            pass.includes('777')   ||
            pass.includes('888')   ||
            pass.includes('999')   ||

            //E-2.1 Secuencias alfabéticas de teclado incremental
            pass.includes('qwe')   ||
            pass.includes('wer')   ||
            pass.includes('ert')   ||
            pass.includes('rty')   ||
            pass.includes('tyu')   ||
            pass.includes('yui')   ||
            pass.includes('uio')   ||
            pass.includes('iop')   ||

            pass.includes('asd')   ||
            pass.includes('sdf')   ||
            pass.includes('fgh')   ||
            pass.includes('ghj')   ||
            pass.includes('hjk')   ||
            pass.includes('jkl')   ||
            pass.includes('klñ')   ||

            pass.includes('zxc')   ||
            pass.includes('xcv')   ||
            pass.includes('cvb')   ||
            pass.includes('vbn')   ||
            pass.includes('bnm')   ||

            //E-2.2 Secuencias alfabéticas de teclado decremental
            pass.includes('ewq')   ||
            pass.includes('rew')   ||
            pass.includes('tre')   ||
            pass.includes('ytr')   ||
            pass.includes('uyt')   ||
            pass.includes('iuy')   ||
            pass.includes('oiu')   ||
            pass.includes('poi')   ||

            pass.includes('dsa')   ||
            pass.includes('fds')   ||
            pass.includes('gfd')   ||
            pass.includes('hgf')   ||
            pass.includes('jhg')   ||
            pass.includes('kjh')   ||
            pass.includes('lkj')   ||
            pass.includes('ñlk')   ||

            pass.includes('cxz')   ||
            pass.includes('vcx')   ||
            pass.includes('bvc')   ||
            pass.includes('nbv')   ||
            pass.includes('mnb')   ||

            //E-2.3 Secuencias alfabéticas de teclado en cascada
            pass.includes('qwas')   ||
            pass.includes('aszx')   ||
            pass.includes('zxwe')   ||
            pass.includes('wesd')   ||
            pass.includes('sdxc')   ||
            pass.includes('xcer')   ||
            pass.includes('erdf')   ||
            pass.includes('dfcv')   ||
            pass.includes('cvrt')   ||
            pass.includes('rtfg')   ||
            pass.includes('fgvb')   ||
            pass.includes('vbty')   ||
            pass.includes('tygh')   ||
            pass.includes('ghbn')   ||
            pass.includes('bnyu')   ||
            pass.includes('yuhj')   ||
            pass.includes('hjnm')   ||
            pass.includes('nmui')   ||
            pass.includes('uijk')   ||
            pass.includes('jkm,')   ||
            pass.includes('m,io')   ||
            pass.includes('iokl')   ||
            pass.includes('klop')   ||
            pass.includes('oplñ')   ||
        
            pass.includes('qaz')   ||
            pass.includes('wsx')   ||
            pass.includes('edc')   ||
            pass.includes('rfv')   ||
            pass.includes('tgb')   ||
            pass.includes('yhn')   ||
            pass.includes('ujm')   ||
            pass.includes('ik,')   ||
            pass.includes('ol.')   ||
            pass.includes('pñ-')   ||

            //E-2.4 Secuencias alfabéticas de teclado en escalera
            pass.includes('sawq')   ||
            pass.includes('xzsa')   ||
            pass.includes('ewxz')   ||
            pass.includes('dsew')   ||
            pass.includes('cxds')   ||
            pass.includes('recx')   ||
            pass.includes('fdre')   ||
            pass.includes('vcfd')   ||
            pass.includes('trvc')   ||
            pass.includes('gftr')   ||
            pass.includes('bvgf')   ||
            pass.includes('ytbv')   ||
            pass.includes('hgyt')   ||
            pass.includes('nbhg')   ||
            pass.includes('uynb')   ||
            pass.includes('jhuy')   ||
            pass.includes('mnjh')   ||
            pass.includes('iumn')   ||
            pass.includes('kjiu')   ||
            pass.includes(',mkj')   ||
            pass.includes('oi,m')   ||
            pass.includes('lkoi')   ||
            pass.includes('polk')   ||
            pass.includes('ñlpo')   ||
        
            pass.includes('zaq')   ||
            pass.includes('xsw')   ||
            pass.includes('cde')   ||
            pass.includes('vfr')   ||
            pass.includes('bgt')   ||
            pass.includes('nhy')   ||
            pass.includes('mju')   ||
            pass.includes(',ki')   ||
            pass.includes('.lo')   ||
            pass.includes('-ñp')   ||
            


            //E-2.5 Alfabeto incremental
            pass.includes('abc')   ||
            pass.includes('bcd')   ||
            pass.includes('cde')   ||
            pass.includes('def')   ||
            pass.includes('efg')   ||
            //pass.includes('fgh')   || se repite arriba
            pass.includes('ghi')   ||
            pass.includes('hij')   ||
            pass.includes('ijk')   ||
            pass.includes('klm')   ||
            pass.includes('lmn')   ||
            pass.includes('mnñ')   ||
            pass.includes('nño')   ||
            pass.includes('ñop')   ||
            pass.includes('opq')   ||
            pass.includes('pqr')   ||
            pass.includes('qrs')   ||
            pass.includes('rst')   ||
            pass.includes('stu')   ||
            pass.includes('tuv')   ||
            pass.includes('uvw')   ||
            pass.includes('vwx')   ||
            pass.includes('wxy')   ||
            pass.includes('xyz')   ||

            pass.includes('mno')   ||
            pass.includes('nop')   ||

            //E-2.6 Alfabeto decremental
            pass.includes('cba')   ||
            pass.includes('dcb')   ||
            pass.includes('ede')   ||
            pass.includes('fed')   ||
            pass.includes('gfe')   ||
            //pass.includes('hgf')   || se repite arriba
            pass.includes('ihg')   ||
            pass.includes('jih')   ||
            pass.includes('kji')   ||
            pass.includes('mlk')   ||
            pass.includes('nml')   ||
            pass.includes('ñnm')   ||
            pass.includes('oñn')   ||
            pass.includes('poñ')   ||
            pass.includes('qpo')   ||
            pass.includes('rqp')   ||
            pass.includes('srq')   ||
            pass.includes('tsr')   ||
            pass.includes('uts')   ||
            pass.includes('vut')   ||
            pass.includes('wvu')   ||
            pass.includes('xwv')   ||
            pass.includes('yxw')   ||
            pass.includes('zyx')   ||
            
            pass.includes('onm')   ||
            pass.includes('pon')   ||

            //E-2.7 Secuencias alfabéticas repetidas
            pass.includes('aaa')   ||
            pass.includes('bbb')   ||
            pass.includes('ccc')   ||
            pass.includes('ddd')   ||
            pass.includes('eee')   ||
            pass.includes('fff')   ||
            pass.includes('ggg')   ||
            pass.includes('hhh')   ||
            pass.includes('iii')   ||
            pass.includes('jjj')   ||
            pass.includes('kkk')   ||
            pass.includes('lll')   ||
            pass.includes('mmm')   ||
            pass.includes('nnn')   ||
            pass.includes('ooo')   ||
            pass.includes('ppp')   ||
            pass.includes('qqq')   ||
            pass.includes('rrr')   ||
            pass.includes('sss')   ||
            pass.includes('ttt')   ||
            pass.includes('uuu')   ||
            pass.includes('vvv')   ||
            pass.includes('www')   ||
            pass.includes('xxx')   ||
            pass.includes('yyy')   ||
            pass.includes('zzz')
            )
        {
            cartelWarning.innerHTML = patronAlert
            passwordRgErr.innerText = ''
            console.log('un patrón alfanumérico es muy predecible') 
            
        }else 

        if(
            //E-3.1 Palabras comúnes
            pass.includes('JERE CASTILLO') ||
            pass.includes('AGUSTIN ARGILLA') ||
            pass.includes('APRUEBENOS EL PROYECTO!!!') ||
            pass.includes('A LA GRANDE LE PUSE CUCA') ||
            pass.includes('shadow') ||
            pass.includes('master') ||
            pass.includes('michael') ||
            pass.includes('mustang') ||
            pass.includes('pusy') ||
            pass.includes('superman') ||
            pass.includes('fackyou') ||
            pass.includes('jordan') ||
            pass.includes('jennifer') ||
            pass.includes('killer') ||
            pass.includes('trustno') ||
            pass.includes('hunter') ||
            pass.includes('harley') ||
            pass.includes('buster') ||
            pass.includes('andrew') ||
            pass.includes('batman') ||
            pass.includes('soccer') ||
            pass.includes('tigger') ||
            pass.includes('charlie') ||
            pass.includes('robert') ||
            pass.includes('contraseña') ||
            pass.includes('hola') ||
            pass.includes('nose') ||
            pass.includes('mono') ||
            pass.includes('futbol') ||
            pass.includes('ironman') ||
            pass.includes('capitan') ||
            pass.includes('america') ||
            pass.includes('password')   ||
            pass.includes('1q2w3e4r5t')   ||
            pass.includes('iloveyou')   ||
            pass.includes('1q2w3e')
        )
        {
            cartelWarning.innerHTML = wordAlert
            passwordRgErr.innerText = ''
            console.log('Escribir palabras típicas como "password" o "mono" etc. es muy predecible') 
        }else     
/************************ Validaciones fortaleza de contraseña ************************/
        //F-1.1 Validación números
        if ( regNum_0_10.test(pass) && 
            !regLow_0_10.test(pass) && 
            !regUpp_0_10.test(pass) && 
            !regSpecial_0_10.test(pass) ) {
                cartelWarning.innerHTML = passVeryWeackAlert
                passwordRgErr.innerText = ''
                console.log('Contraseña tiene números de 0 a 10') 
        }else 
        if ( regNum_11_15.test(pass) && 
            !regLow_11_15.test(pass) && 
            !regUpp_11_15.test(pass) && 
            !regSpecial_11_15.test(pass) ) {
                cartelWarning.innerHTML = passWeackAlert
                passwordRgErr.innerText = ''
                console.log('Contraseña tiene números de 11 y 15')
        }else
        if ( regNum_16_18.test(pass) && 
            !regLow_16_18.test(pass) && 
            !regUpp_16_18.test(pass) && 
            !regSpecial_16_18.test(pass) ) {
                cartelWarning.innerHTML = passMediumAlert
                passwordRgErr.innerText = ''
                console.log('Contraseña tiene números de 16 y 18')
        }else
        if ( regNum_19.test(pass) && 
            !regLow_19.test(pass) && 
            !regUpp_19.test(pass) && 
            !regSpecial_19.test(pass) ) {
                cartelWarning.innerHTML = passMediumAlert
                passwordRgErr.innerText = ''
                console.log('Contraseña tiene números de 19 al infinito y mas allá!')
        }else

        //F-1.2 Validación letras minúsculas
        if ( !regNum_0_7.test(pass) && 
            regLow_0_7.test(pass) && 
            !regUpp_0_7.test(pass) && 
            !regSpecial_0_7.test(pass) ) {
                cartelWarning.innerHTML = passVeryWeackAlert
                passwordRgErr.innerText = ''
                console.log('Contraseña tiene minúsculas de 0 a 7')
        }else
        if ( !regNum_8_10.test(pass) && 
            regLow_8_10.test(pass) && 
            !regUpp_8_10.test(pass) && 
            !regSpecial_8_10.test(pass) ) {
                cartelWarning.innerHTML = passWeackAlert
                passwordRgErr.innerText = ''
                console.log('Contraseña tiene minúsculas de 8 a 10')
        }else
        if ( !regNum_11_13.test(pass) && 
            regLow_11_13.test(pass) && 
            !regUpp_11_13.test(pass) && 
            !regSpecial_11_13.test(pass) ) {
                cartelWarning.innerHTML = passMediumAlert
                passwordRgErr.innerText = ''
                console.log('Contraseña tiene minúsculas de 11 a 13')
        }else
        if ( !regNum_14_17.test(pass) && 
            regLow_14_17.test(pass) && 
            !regUpp_14_17.test(pass) && 
            !regSpecial_14_17.test(pass) ) {
                cartelWarning.innerHTML = passStrongAlert
                passwordRgErr.innerText = ''
                console.log('Contraseña tiene minúsculas de 14 a 17')
        }else
        if ( !regNum_18.test(pass) && 
            regLow_18.test(pass) && 
            !regUpp_18.test(pass) && 
            !regSpecial_18.test(pass) ) {
                cartelWarning.innerHTML = passVeryStrongAlert
                passwordRgErr.innerText = ''
                console.log('Contraseña tiene minúsculas de 18 al infinito y mas allá!')
        }else

        //F-1.3 Validación letras mayúsculas
        if ( !regNum_0_7.test(pass) && 
            !regLow_0_7.test(pass) && 
            regUpp_0_7.test(pass) && 
            !regSpecial_0_7.test(pass) ) {
                cartelWarning.innerHTML = passVeryWeackAlert
                passwordRgErr.innerText = ''
                console.log('Contraseña tiene mayúsculas de 0 a 7')
        }else
        if ( !regNum_8_10.test(pass) && 
            !regLow_8_10.test(pass) && 
            regUpp_8_10.test(pass) && 
            !regSpecial_8_10.test(pass) ) {
                cartelWarning.innerHTML = passWeackAlert
                passwordRgErr.innerText = ''
                console.log('Contraseña tiene mayúsculas de 8 a 10')
        }else
        if ( !regNum_11_13.test(pass) && 
            !regLow_11_13.test(pass) && 
            regUpp_11_13.test(pass) && 
            !regSpecial_11_13.test(pass) ) {
                cartelWarning.innerHTML = passMediumAlert
                passwordRgErr.innerText = ''
                console.log('Contraseña tiene mayúsculas de 11 a 13')
        }else
        if ( !regNum_14_17.test(pass) && 
            !regLow_14_17.test(pass) && 
            regUpp_14_17.test(pass) && 
            !regSpecial_14_17.test(pass) ) {
                cartelWarning.innerHTML = passStrongAlert
                passwordRgErr.innerText = ''
                console.log('Contraseña tiene mayúsculas de 14 a 17')
        }else
        if ( !regNum_18.test(pass) && 
            !regLow_18.test(pass) && 
            regUpp_18.test(pass) && 
            !regSpecial_18.test(pass) ) {
                cartelWarning.innerHTML = passVeryStrongAlert
                passwordRgErr.innerText = ''
                console.log('Contraseña tiene mayúsculas de 18 al infinito y mas allá!')
        }else

         //F-1.4 Validación caracteres especiales
         if ( !regNum_0_7.test(pass) && 
            !regLow_0_7.test(pass) && 
            !regUpp_0_7.test(pass) && 
            regSpecial_0_7.test(pass) ) {
                cartelWarning.innerHTML = passVeryWeackAlert
                passwordRgErr.innerText = ''
                console.log('Contraseña tiene caracteres de 0 a 7')
        }else
        if ( !regNum_8_10.test(pass) && 
            !regLow_8_10.test(pass) && 
            !regUpp_8_10.test(pass) && 
            regSpecial_8_10.test(pass) ) {
                cartelWarning.innerHTML = passWeackAlert
                passwordRgErr.innerText = ''
                console.log('Contraseña tiene caracteres de 8 a 10')
        }else
        if ( !regNum_11_13.test(pass) && 
            !regLow_11_13.test(pass) && 
            !regUpp_11_13.test(pass) && 
            regSpecial_11_13.test(pass) ) {
                cartelWarning.innerHTML = passMediumAlert
                passwordRgErr.innerText = ''
                console.log('Contraseña tiene caracteres de 11 a 13')
        }else
        if ( !regNum_14_17.test(pass) && 
            !regLow_14_17.test(pass) && 
            !regUpp_14_17.test(pass) && 
            regSpecial_14_17.test(pass) ) {
                cartelWarning.innerHTML = passStrongAlert
                passwordRgErr.innerText = ''
                console.log('Contraseña tiene caracteres de 14 a 17')
        }else
        if ( !regNum_18.test(pass) && 
            !regLow_18.test(pass) && 
            !regUpp_18.test(pass) && 
            regSpecial_18.test(pass) ) {
                cartelWarning.innerHTML = passVeryStrongAlert
                passwordRgErr.innerText = ''
                console.log('Contraseña tiene caracteres de 18 al infinito y mas allá!')
        }else

        //F-2.1 Validación números y minúsculas
        if ( regNum_0_6.test(pass) && 
            regLow_0_6.test(pass) && 
            !regUpp_0_6.test(pass) && 
            !regSpecial_0_6.test(pass) ) {
                cartelWarning.innerHTML = passVeryWeackAlert
                passwordRgErr.innerText = ''
                console.log('Contraseña tiene números y minúsculas de 0 a 6')
        }else
        if ( regNum_7_9.test(pass) && 
            regLow_7_9.test(pass) && 
            !regUpp_7_9.test(pass) && 
            !regSpecial_7_9.test(pass) ) {
                cartelWarning.innerHTML = passWeackAlert
                passwordRgErr.innerText = ''
                console.log('Contraseña tiene números y minúsculas de 7 a 9')
        }else
        if ( regNum_10_11.test(pass) && 
            regLow_10_11.test(pass) && 
            !regUpp_10_11.test(pass) && 
            !regSpecial_10_11.test(pass) ) {
                cartelWarning.innerHTML = passMediumAlert
                passwordRgErr.innerText = ''
                console.log('Contraseña tiene números y minúsculas de 10 a 11')
        }else
        if ( regNum_12_14.test(pass) && 
            regLow_12_14.test(pass) && 
            !regUpp_12_14.test(pass) && 
            !regSpecial_12_14.test(pass) ) {
                cartelWarning.innerHTML = passStrongAlert
                passwordRgErr.innerText = ''
                console.log('Contraseña tiene números y minúsculas de 12 a 14')
        }else
        if ( regNum_15.test(pass) && 
            regLow_15.test(pass) && 
            !regUpp_15.test(pass) && 
            !regSpecial_15.test(pass) ) {
                cartelWarning.innerHTML = passVeryStrongAlert
                passwordRgErr.innerText = ''
                console.log('Contraseña tiene números y minúsculas de 15 al infinito y mas allá')
        }else

        //F-2.2 Validación números y mayúsculas
        if ( regNum_0_6.test(pass) && 
            !regLow_0_6.test(pass) && 
            regUpp_0_6.test(pass) && 
            !regSpecial_0_6.test(pass) ) {
                cartelWarning.innerHTML = passVeryWeackAlert
                passwordRgErr.innerText = ''
                console.log('Contraseña tiene números y mayúsculas de 0 a 6')
        }else
        if ( regNum_7_9.test(pass) && 
            !regLow_7_9.test(pass) && 
            regUpp_7_9.test(pass) && 
            !regSpecial_7_9.test(pass) ) {
                cartelWarning.innerHTML = passWeackAlert
                passwordRgErr.innerText = ''
                console.log('Contraseña tiene números y mayúsculas de 7 a 9')
        }else
        if ( regNum_10_11.test(pass) && 
            !regLow_10_11.test(pass) && 
            regUpp_10_11.test(pass) && 
            !regSpecial_10_11.test(pass) ) {
                cartelWarning.innerHTML = passMediumAlert
                passwordRgErr.innerText = ''
                console.log('Contraseña tiene números y mayúsculas de 10 a 11')
        }else
        if ( regNum_12_14.test(pass) && 
            !regLow_12_14.test(pass) && 
            regUpp_12_14.test(pass) && 
            !regSpecial_12_14.test(pass) ) {
                cartelWarning.innerHTML = passStrongAlert
                passwordRgErr.innerText = ''
                console.log('Contraseña tiene números y mayúsculas de 12 a 14')
        }else
        if ( regNum_15.test(pass) && 
            !regLow_15.test(pass) && 
            regUpp_15.test(pass) && 
            !regSpecial_15.test(pass) ) {
                cartelWarning.innerHTML = passVeryStrongAlert
                passwordRgErr.innerText = ''
                console.log('Contraseña tiene números y mayúsculas de 15 al infinito y mas allá')
        }else
        
        //F-2.3 Validación números y caracteres
        if ( regNum_0_6.test(pass) && 
            !regLow_0_6.test(pass) && 
            !regUpp_0_6.test(pass) && 
            regSpecial_0_6.test(pass) ) {
                cartelWarning.innerHTML = passVeryWeackAlert
                passwordRgErr.innerText = ''
                console.log('Contraseña tiene números y caracteres de 0 a 6')
        }else
        if ( regNum_7_9.test(pass) && 
            !regLow_7_9.test(pass) && 
            !regUpp_7_9.test(pass) && 
            regSpecial_7_9.test(pass) ) {
                cartelWarning.innerHTML = passWeackAlert
                passwordRgErr.innerText = ''
                console.log('Contraseña tiene números y caracteres de 7 a 9')
        }else
        if ( regNum_10_11.test(pass) && 
            !regLow_10_11.test(pass) && 
            !regUpp_10_11.test(pass) && 
            regSpecial_10_11.test(pass) ) {
                cartelWarning.innerHTML = passMediumAlert
                passwordRgErr.innerText = ''
                console.log('Contraseña tiene números y caracteres de 10 a 11')
        }else
        if ( regNum_12_14.test(pass) && 
            !regLow_12_14.test(pass) && 
            !regUpp_12_14.test(pass) && 
            regSpecial_12_14.test(pass) ) {
                cartelWarning.innerHTML = passStrongAlert
                passwordRgErr.innerText = ''
                console.log('Contraseña tiene números y caracteres de 12 a 14')
        }else
        if ( regNum_15.test(pass) && 
            !regLow_15.test(pass) && 
            !regUpp_15.test(pass) && 
            regSpecial_15.test(pass) ) {
                cartelWarning.innerHTML = passVeryStrongAlert
                passwordRgErr.innerText = ''
                console.log('Contraseña tiene números y caracteres de 15 al infinito y mas allá')
        }else
        
        //F-2.4 Validación minúsculas y mayúsculas
        if ( !regNum_0_6.test(pass) && 
            regLow_0_6.test(pass) && 
            regUpp_0_6.test(pass) && 
            !regSpecial_0_6.test(pass) ) {
                cartelWarning.innerHTML = passVeryWeackAlert
                passwordRgErr.innerText = ''
                console.log('Contraseña tiene minúsculas y mayúsculas de 0 a 6')
        }else
        if ( !regNum_7_9.test(pass) && 
            regLow_7_9.test(pass) && 
            regUpp_7_9.test(pass) && 
            !regSpecial_7_9.test(pass) ) {
                cartelWarning.innerHTML = passWeackAlert
                passwordRgErr.innerText = ''
                console.log('Contraseña tiene minúsculas y mayúsculas de 7 a 9')
        }else
        if ( !regNum_10_11.test(pass) && 
            regLow_10_11.test(pass) && 
            regUpp_10_11.test(pass) && 
            !regSpecial_10_11.test(pass) ) {
                cartelWarning.innerHTML = passMediumAlert
                passwordRgErr.innerText = ''
                console.log('Contraseña tiene minúsculas y mayúsculas de 10 a 11')
        }else
        if ( !regNum_12_14.test(pass) && 
            regLow_12_14.test(pass) && 
            regUpp_12_14.test(pass) && 
            !regSpecial_12_14.test(pass) ) {
                cartelWarning.innerHTML = passStrongAlert
                passwordRgErr.innerText = ''
                console.log('Contraseña tiene minúsculas y mayúsculas de 12 a 14')
        }else
        if ( !regNum_15.test(pass) && 
            regLow_15.test(pass) && 
            regUpp_15.test(pass) && 
            !regSpecial_15.test(pass) ) {
                cartelWarning.innerHTML = passVeryStrongAlert
                passwordRgErr.innerText = ''
                console.log('Contraseña tiene minúsculas y mayúsculas de 15 al infinito y mas allá')
        }else

        //F-2.5 Validación minúsculas y caracteres
        if ( !regNum_0_6.test(pass) && 
            regLow_0_6.test(pass) && 
            !regUpp_0_6.test(pass) && 
            regSpecial_0_6.test(pass) ) {
                cartelWarning.innerHTML = passVeryWeackAlert
                passwordRgErr.innerText = ''
                console.log('Contraseña tiene minúsculas y caracteres de 0 a 6')
        }else
        if ( !regNum_7_9.test(pass) && 
            regLow_7_9.test(pass) && 
            !regUpp_7_9.test(pass) && 
            regSpecial_7_9.test(pass) ) {
                cartelWarning.innerHTML = passWeackAlert
                passwordRgErr.innerText = ''
                console.log('Contraseña tiene minúsculas y caracteres de 7 a 9')
        }else
        if ( !regNum_10_11.test(pass) && 
            regLow_10_11.test(pass) && 
            !regUpp_10_11.test(pass) && 
            regSpecial_10_11.test(pass) ) {
                cartelWarning.innerHTML = passMediumAlert
                passwordRgErr.innerText = ''
                console.log('Contraseña tiene minúsculas y caracteres de 10 a 11')
        }else
        if ( !regNum_12_14.test(pass) && 
            regLow_12_14.test(pass) && 
            !regUpp_12_14.test(pass) && 
            regSpecial_12_14.test(pass) ) {
                cartelWarning.innerHTML = passStrongAlert
                passwordRgErr.innerText = ''
                console.log('Contraseña tiene minúsculas y caracteres de 12 a 14')
        }else
        if ( !regNum_15.test(pass) && 
            regLow_15.test(pass) && 
            !regUpp_15.test(pass) && 
            regSpecial_15.test(pass) ) {
                cartelWarning.innerHTML = passVeryStrongAlert
                passwordRgErr.innerText = ''
                console.log('Contraseña tiene minúsculas y caracteres de 15 al infinito y mas allá')
        }else

        //F-2.6 Validación mayúsculas y caracteres
        if ( !regNum_0_6.test(pass) && 
            !regLow_0_6.test(pass) && 
            regUpp_0_6.test(pass) && 
            regSpecial_0_6.test(pass) ) {
                cartelWarning.innerHTML = passVeryWeackAlert
                passwordRgErr.innerText = ''
                console.log('Contraseña tiene mayúsculas y caracteres de 0 a 6')
        }else
        if ( !regNum_7_9.test(pass) && 
            !regLow_7_9.test(pass) && 
            regUpp_7_9.test(pass) && 
            regSpecial_7_9.test(pass) ) {
                cartelWarning.innerHTML = passWeackAlert
                passwordRgErr.innerText = ''
                console.log('Contraseña tiene mayúsculas y caracteres de 7 a 9')
        }else
        if ( !regNum_10_11.test(pass) && 
            !regLow_10_11.test(pass) && 
            regUpp_10_11.test(pass) && 
            regSpecial_10_11.test(pass) ) {
                cartelWarning.innerHTML = passMediumAlert
                passwordRgErr.innerText = ''
                console.log('Contraseña tiene mayúsculas y caracteres de 10 a 11')
        }else
        if ( !regNum_12_14.test(pass) && 
            !regLow_12_14.test(pass) && 
            regUpp_12_14.test(pass) && 
            regSpecial_12_14.test(pass) ) {
                cartelWarning.innerHTML = passStrongAlert
                passwordRgErr.innerText = ''
                console.log('Contraseña tiene mayúsculas y caracteres de 12 a 14')
        }else
        if ( !regNum_15.test(pass) && 
            !regLow_15.test(pass) && 
            regUpp_15.test(pass) && 
            regSpecial_15.test(pass) ) {
                cartelWarning.innerHTML = passVeryStrongAlert
                passwordRgErr.innerText = ''
                console.log('Contraseña tiene mayúsculas y caracteres de 15 al infinito y mas allá')
        }else

        //F-3.1 Validación números, minúsculas y mayúsculas
        if ( regNum_0_5.test(pass) && 
            regLow_0_5.test(pass) && 
            regUpp_0_5.test(pass) && 
            !regSpecial_0_5.test(pass) ) {
                cartelWarning.innerHTML = passVeryWeackAlert
                passwordRgErr.innerText = ''
                console.log('Contraseña tiene números, minúsculas y mayúsculas de 0 a 5')
        }else
        if (regNum_6_8.test(pass) && 
            regLow_6_8.test(pass) && 
            regUpp_6_8.test(pass) && 
            !regSpecial_6_8.test(pass) ) {
                cartelWarning.innerHTML = passWeackAlert
                passwordRgErr.innerText = ''
                console.log('Contraseña tiene números, minúsculas y mayúsculas de 6 a 8')
        }else
        if ( regNum_9_10.test(pass) && 
            regLow_9_10.test(pass) && 
            regUpp_9_10.test(pass) && 
            !regSpecial_9_10.test(pass) ) {
                cartelWarning.innerHTML = passMediumAlert
                passwordRgErr.innerText = ''
                console.log('Contraseña tiene números, minúsculas y mayúsculas de 9 a 10')
        }else
        if ( regNum_11_12.test(pass) && 
            regLow_11_12.test(pass) && 
            regUpp_11_12.test(pass) && 
            !regSpecial_11_12.test(pass) ) {
                cartelWarning.innerHTML = passStrongAlert
                passwordRgErr.innerText = ''
                console.log('Contraseña tiene números, minúsculas y mayúsculas de 11 a 12')
        }else
        if ( regNum_13.test(pass) && 
            regLow_13.test(pass) && 
            regUpp_13.test(pass) && 
            !regSpecial_13.test(pass) ) {
                cartelWarning.innerHTML = passVeryStrongAlert
                passwordRgErr.innerText = ''
                console.log('Contraseña tiene números, minúsculas y mayúsculas de 13 al infinito y mas alla! ')
        }else
       
        //F-3.2 Validación números, minúsculas, caracteres
        if ( regNum_0_5.test(pass) && 
            regLow_0_5.test(pass) && 
            !regUpp_0_5.test(pass) && 
            regSpecial_0_5.test(pass) ) {
                cartelWarning.innerHTML = passVeryWeackAlert
                passwordRgErr.innerText = ''
                console.log('Contraseña tiene números, minúsculas, caracteres de 0 a 5')
        }else
        if (regNum_6_8.test(pass) && 
            regLow_6_8.test(pass) && 
            !regUpp_6_8.test(pass) && 
            regSpecial_6_8.test(pass) ) {
                cartelWarning.innerHTML = passWeackAlert
                passwordRgErr.innerText = ''
                console.log('Contraseña tiene números, minúsculas, caracteres de 6 a 8')
        }else
        if ( regNum_9_10.test(pass) && 
            regLow_9_10.test(pass) && 
            !regUpp_9_10.test(pass) && 
            regSpecial_9_10.test(pass) ) {
                cartelWarning.innerHTML = passMediumAlert
                passwordRgErr.innerText = ''
                console.log('Contraseña tiene números, minúsculas, caracteres de 9 a 10')
        }else
        if ( regNum_11_12.test(pass) && 
            regLow_11_12.test(pass) && 
            !regUpp_11_12.test(pass) && 
            regSpecial_11_12.test(pass) ) {
                cartelWarning.innerHTML = passStrongAlert
                passwordRgErr.innerText = ''
                console.log('Contraseña tiene números, minúsculas, caracteres de 11 a 12')
        }else
        if ( regNum_13.test(pass) && 
            regLow_13.test(pass) && 
            !regUpp_13.test(pass) && 
            regSpecial_13.test(pass) ) {
                cartelWarning.innerHTML = passVeryStrongAlert
                passwordRgErr.innerText = ''
                console.log('Contraseña tiene números, minúsculas, caracteres de 13 al infinito y mas alla! ')
        }else

        //F-3.3 Validación números mayúsculas y caracteres
        if ( regNum_0_5.test(pass) && 
            !regLow_0_5.test(pass) && 
            regUpp_0_5.test(pass) && 
            regSpecial_0_5.test(pass) ) {
                cartelWarning.innerHTML = passVeryWeackAlert
                passwordRgErr.innerText = ''
                console.log('Contraseña tiene números mayusculas y caracteres de 0 a 5')
        }else
        if (regNum_6_8.test(pass) && 
            !regLow_6_8.test(pass) && 
            regUpp_6_8.test(pass) && 
            regSpecial_6_8.test(pass) ) {
                cartelWarning.innerHTML = passWeackAlert
                passwordRgErr.innerText = ''
                console.log('Contraseña tiene números mayusculas y caracteres de 6 a 8')
        }else
        if ( regNum_9_10.test(pass) && 
            !regLow_9_10.test(pass) && 
            regUpp_9_10.test(pass) && 
            regSpecial_9_10.test(pass) ) {
                cartelWarning.innerHTML = passMediumAlert
                passwordRgErr.innerText = ''
                console.log('Contraseña tiene números mayusculas y caracteres de 9 a 10')
        }else
        if ( regNum_11_12.test(pass) && 
            !regLow_11_12.test(pass) && 
            regUpp_11_12.test(pass) && 
            regSpecial_11_12.test(pass) ) {
                cartelWarning.innerHTML = passStrongAlert
                passwordRgErr.innerText = ''
                console.log('Contraseña tiene números mayusculas y caracteres de 11 a 12')
        }else
        if ( regNum_13.test(pass) && 
            !regLow_13.test(pass) && 
            regUpp_13.test(pass) && 
            regSpecial_13.test(pass) ) {
                cartelWarning.innerHTML = passVeryStrongAlert
                passwordRgErr.innerText = ''
                console.log('Contraseña tiene números mayusculas y caracteres de 13 al infinito y mas alla! ')
        }else

        //F-3.4 Validación minúsculas, mayúsculas y caracteres
        if ( !regNum_0_5.test(pass) && 
            regLow_0_5.test(pass) && 
            regUpp_0_5.test(pass) && 
            regSpecial_0_5.test(pass) ) {
                cartelWarning.innerHTML = passVeryWeackAlert
                passwordRgErr.innerText = ''
                console.log('Contraseña tiene minúsculas, mayusculas y caracteres de 0 a 5')
        }else
        if (!regNum_6_8.test(pass) && 
            regLow_6_8.test(pass) && 
            regUpp_6_8.test(pass) && 
            regSpecial_6_8.test(pass) ) {
                cartelWarning.innerHTML = passWeackAlert
                passwordRgErr.innerText = ''
                console.log('Contraseña tiene minúsculas, mayusculas y caracteres de 6 a 8')
        }else
        if ( !regNum_9_10.test(pass) && 
            regLow_9_10.test(pass) && 
            regUpp_9_10.test(pass) && 
            regSpecial_9_10.test(pass) ) {
                cartelWarning.innerHTML = passMediumAlert
                passwordRgErr.innerText = ''
                console.log('Contraseña tiene minúsculas, mayusculas y caracteres de 9 a 10')
        }else
        if ( !regNum_11_12.test(pass) && 
            regLow_11_12.test(pass) && 
            regUpp_11_12.test(pass) && 
            regSpecial_11_12.test(pass) ) {
                cartelWarning.innerHTML = passStrongAlert
                passwordRgErr.innerText = ''
                console.log('Contraseña tiene minúsculas, mayusculas y caracteres de 11 a 12')
        }else
        if ( !regNum_13.test(pass) && 
            regLow_13.test(pass) && 
            regUpp_13.test(pass) && 
            regSpecial_13.test(pass) ) {
                cartelWarning.innerHTML = passVeryStrongAlert
                passwordRgErr.innerText = ''
                console.log('Contraseña tiene minúsculas, mayusculas y caracteres de 13 al infinito y mas alla! ')
        }else

        //F-4.1 Validación números, minúsculas, mayúsculas y caracteres
        if ( regNum_0_5.test(pass) && 
            regLow_0_5.test(pass) && 
            regUpp_0_5.test(pass) && 
            regSpecial_0_5.test(pass) ) {
                cartelWarning.innerHTML = passVeryWeackAlert
                passwordRgErr.innerText = ''
                console.log('Contraseña tiene todo de 0 a 5')
        }else
        if (regNum_6_8.test(pass) && 
            regLow_6_8.test(pass) && 
            regUpp_6_8.test(pass) && 
            regSpecial_6_8.test(pass) ) {
                cartelWarning.innerHTML = passWeackAlert
                passwordRgErr.innerText = ''
                console.log('Contraseña tiene todo de 6 a 8')
        }else
        if ( regNum_9_10.test(pass) && 
            regLow_9_10.test(pass) && 
            regUpp_9_10.test(pass) && 
            regSpecial_9_10.test(pass) ) {
                cartelWarning.innerHTML = passMediumAlert
                passwordRgErr.innerText = ''
                console.log('Contraseña tiene todo de 9 a 10')
        }else
        if ( regNum_11_12.test(pass) && 
            regLow_11_12.test(pass) && 
            regUpp_11_12.test(pass) && 
            regSpecial_11_12.test(pass) ) {
                cartelWarning.innerHTML = passStrongAlert
                passwordRgErr.innerText = ''
                console.log('Contraseña tiene todo de 11 a 12')
        }else
        if ( regNum_13.test(pass) && 
            regLow_13.test(pass) && 
            regUpp_13.test(pass) && 
            regSpecial_13.test(pass) ) {
                cartelWarning.innerHTML = passVeryStrongAlert
                passwordRgErr.innerText = ''
                console.log('Contraseña tiene todo de 13 al infinito y mas alla! ')
        }
        
        else{
            console.log('hay otra cosa')
            cartelWarning.innerHTML = '' 
        } 
        
     });

    /************************ preventDefault ************************/
    formRegister.addEventListener('submit', function(event){
        //G-0 Declaracion de variables   
        
        let name =formRegister.nameRg.value
        let lastName=formRegister.lastNameRg.value
        let email =formRegister.emailRg.value   
        let pass =formRegister.passwordRg.value
        console.log(pass)
        
        
        /*
        let nameValidation = pass.includes(name)
        let lastNameValidation = pass.includes(lastName)
        let emailValidation = pass.include(email)
        */


        //G-1 Submit datos personales
/*
        if(nameValidation){
            console.log('Tu nombre no debe estar en la contraseña')
        }else if (lastNameValidation){
            console.log('Tu apellido no debe estar en la contraseña')
        }else if(emailValidation){
            console.log('Tu apellido no debe estar en la contraseña')
        }
        else{
            console.log('ok')
        }
*/
        //G-2 Submit patrones predesibles
        if (pass.includes('012')|| pass.includes('123')|| pass.includes('234')|| pass.includes('345')|| pass.includes('456')|| pass.includes('567')|| pass.includes('678')|| pass.includes('789')|| pass.includes('890')|| pass.includes('210')|| pass.includes('321')|| pass.includes('432')|| pass.includes('543')|| pass.includes('654')|| pass.includes('765')|| pass.includes('876')|| pass.includes('987')|| pass.includes('098')|| pass.includes('7845')|| pass.includes('4512')|| pass.includes('8956')|| pass.includes('5623')|| pass.includes('7946')|| pass.includes('4613')  || pass.includes('8754')  || pass.includes('5421')  || pass.includes('9865')  || pass.includes('6532')  || pass.includes('9764')  || pass.includes('6431')  || pass.includes('5487')  || pass.includes('2154')  || pass.includes('6598')  || pass.includes('3265')  || pass.includes('6497')  || pass.includes('3164')  || pass.includes('4578')  || pass.includes('1245')  || pass.includes('5689')  || pass.includes('2356')  || pass.includes('4697')  || pass.includes('1346')  || pass.includes('000')  || pass.includes('111')  || pass.includes('222')  || pass.includes('333')  || pass.includes('444')  || pass.includes('555')  || pass.includes('666')  || pass.includes('777')  || pass.includes('888')  || pass.includes('999')  || pass.includes('qwe')  || pass.includes('wer')  || pass.includes('ert')  || pass.includes('rty')  || pass.includes('tyu')  || pass.includes('yui')  || pass.includes('uio')  || pass.includes('iop')  || pass.includes('asd')  || pass.includes('sdf')  || pass.includes('fgh')  || pass.includes('ghj')  || pass.includes('hjk')  || pass.includes('jkl')  || pass.includes('klñ')  || pass.includes('zxc')  || pass.includes('xcv')  || pass.includes('cvb')  || pass.includes('vbn')  || pass.includes('bnm')  || pass.includes('ewq')  || pass.includes('rew')  || pass.includes('tre')  || pass.includes('ytr')  || pass.includes('uyt')  || pass.includes('iuy')  || pass.includes('oiu')  || pass.includes('poi')  || pass.includes('dsa')  || pass.includes('fds')  || pass.includes('gfd')  || pass.includes('hgf')  || pass.includes('jhg')  || pass.includes('kjh')  || pass.includes('lkj')  || pass.includes('ñlk')  || pass.includes('cxz')  || pass.includes('vcx')  || pass.includes('bvc')  || pass.includes('nbv')  || pass.includes('mnb')  || pass.includes('qwas')  || 
            pass.includes('aszx')  || pass.includes('zxwe')  || pass.includes('wesd')  || pass.includes('sdxc')  || pass.includes('xcer')  || pass.includes('erdf')  || pass.includes('dfcv')  || pass.includes('cvrt')  || pass.includes('rtfg')  || pass.includes('fgvb')  || pass.includes('vbty')  || pass.includes('tygh')  || pass.includes('ghbn')  || pass.includes('bnyu')  || pass.includes('yuhj')  || pass.includes('hjnm')  || pass.includes('nmui')  || pass.includes('uijk')  || pass.includes('jkm,')  || pass.includes('m,io')  || pass.includes('iokl')  || pass.includes('klop')  || pass.includes('oplñ')  || pass.includes('qaz')  || pass.includes('wsx')  || pass.includes('edc')  || pass.includes('rfv')  || pass.includes('tgb')  || pass.includes('yhn')  || pass.includes('ujm')  || pass.includes('ik,')  || pass.includes('ol.')  || pass.includes('pñ-')  || pass.includes('sawq')  || pass.includes('xzsa')  || pass.includes('ewxz')  || pass.includes('dsew')  || pass.includes('cxds')  || pass.includes('recx')  || pass.includes('fdre')  || pass.includes('vcfd')  || pass.includes('trvc')  || pass.includes('gftr')  || pass.includes('bvgf')  || pass.includes('ytbv')  || pass.includes('hgyt')  || pass.includes('nbhg')  || pass.includes('uynb')  || pass.includes('jhuy')  || pass.includes('mnjh')  || pass.includes('iumn')  || pass.includes('kjiu')  || pass.includes(',mkj')  || pass.includes('oi,m')  || pass.includes('lkoi')  || pass.includes('polk')  || pass.includes('ñlpo')  || pass.includes('zaq')  || pass.includes('xsw')  || pass.includes('cde')  || pass.includes('vfr')  || pass.includes('bgt')  || pass.includes('nhy')  || pass.includes('mju')  || pass.includes(',ki')  || pass.includes('.lo')  || pass.includes('-ñp')  || pass.includes('abc')  || pass.includes('bcd')  || pass.includes('cde')  || pass.includes('def')  || pass.includes('efg')  || pass.includes('ghi')  || pass.includes('hij')  || pass.includes('ijk')  || pass.includes('klm')  || pass.includes('lmn')  || pass.includes('mnñ')  || pass.includes('nño')  || pass.includes('ñop')  || pass.includes('opq')  || pass.includes('pqr')  || pass.includes('qrs')  || pass.includes('rst')  || 
            pass.includes('stu')  || pass.includes('tuv')  || pass.includes('uvw')  || pass.includes('vwx')  || pass.includes('wxy')  || pass.includes('xyz')  || pass.includes('mno')  || pass.includes('nop')  || pass.includes('cba')  || pass.includes('dcb')  || pass.includes('ede')  || pass.includes('fed')  || pass.includes('gfe')  || pass.includes('ihg')  || pass.includes('jih')  || pass.includes('kji')  || pass.includes('mlk')  || pass.includes('nml')  || pass.includes('ñnm')  || pass.includes('oñn')  || pass.includes('poñ')  || pass.includes('qpo')  || pass.includes('rqp')  || pass.includes('srq')  || pass.includes('tsr')  || pass.includes('uts')  || pass.includes('vut')  || pass.includes('wvu')  || pass.includes('xwv')  || pass.includes('yxw')  || pass.includes('zyx')  || pass.includes('onm')  || pass.includes('pon')  || pass.includes('aaa')  || pass.includes('bbb')  || pass.includes('ccc')  || pass.includes('ddd')  || pass.includes('eee')  || pass.includes('fff')  || pass.includes('ggg')  || pass.includes('hhh')  || pass.includes('iii')  || pass.includes('jjj')  || pass.includes('kkk')  || pass.includes('lll')  || pass.includes('mmm')  || pass.includes('nnn')  || pass.includes('ooo')   ||   pass.includes('ppp') ||       pass.includes('qqq') ||       pass.includes('rrr') ||       pass.includes('sss') ||       pass.includes('ttt') ||       pass.includes('uuu') ||       pass.includes('vvv') ||       pass.includes('www') ||       pass.includes('xxx')||      pass.includes('yyy')||      pass.includes('zzz'))
        {
            event.preventDefault()
            alert('Tu contraseña tiene un patrón alfanumérico es muy predecible!') 
        }else 
        //G-3 Submit fortaleza de contraseña
        if ( regNum_0_10.test(pass) && !regLow_0_10.test(pass) && !regUpp_0_10.test(pass) && !regSpecial_0_10.test(pass) ) {
            event.preventDefault()
            alert('Tu contraseña tiene números de 0 a 10') 
        }else if ( regNum_11_15.test(pass) && !regLow_11_15.test(pass) && !regUpp_11_15.test(pass) && !regSpecial_11_15.test(pass) ) {
            event.preventDefault()
            alert('Tu contraseña tiene números de 11 y 15')
        }else if ( regNum_16_18.test(pass) && !regLow_16_18.test(pass) && !regUpp_16_18.test(pass) && !regSpecial_16_18.test(pass) ) {
            event.preventDefault()
            alert('Tu contraseña tiene números de 16 y 18')
        }else if ( regNum_19.test(pass) && !regLow_19.test(pass) && !regUpp_19.test(pass) && !regSpecial_19.test(pass) ) {
            event.preventDefault()
            alert('Tu contraseña tiene sólo 19 números o más')
        }else if ( !regNum_0_7.test(pass) && regLow_0_7.test(pass) && !regUpp_0_7.test(pass) && !regSpecial_0_7.test(pass) ) {
            event.preventDefault()
            alert('Tu contraseña tiene minúsculas de 0 a 7')
        }else if ( !regNum_8_10.test(pass) && regLow_8_10.test(pass) && !regUpp_8_10.test(pass) && !regSpecial_8_10.test(pass) ) {
            event.preventDefault()
            alert('Tu contraseña tiene minúsculas de 8 a 10')
        }else if ( !regNum_11_13.test(pass) && regLow_11_13.test(pass) && !regUpp_11_13.test(pass) && !regSpecial_11_13.test(pass) ) {
            event.preventDefault()
            alert('Tu contraseña tiene minúsculas de 11 a 13')
        }else if ( !regNum_0_7.test(pass) && !regLow_0_7.test(pass) && regUpp_0_7.test(pass) && !regSpecial_0_7.test(pass) ) {
            event.preventDefault()
            alert('Tu contraseña tiene mayúsculas de 0 a 7')
        }else if ( !regNum_8_10.test(pass) && !regLow_8_10.test(pass) && regUpp_8_10.test(pass) && !regSpecial_8_10.test(pass) ) {
            event.preventDefault()
            alert('Tu contraseña tiene mayúsculas de 8 a 10')
        }else if ( !regNum_11_13.test(pass) && !regLow_11_13.test(pass) && regUpp_11_13.test(pass) && !regSpecial_11_13.test(pass) ) {
            event.preventDefault()
            alert('Tu contraseña tiene mayúsculas de 11 a 13')
        }else if ( !regNum_0_7.test(pass) && !regLow_0_7.test(pass) && !regUpp_0_7.test(pass) && regSpecial_0_7.test(pass) ) {
            event.preventDefault()
            alert('Tu contraseña tiene caracteres de 0 a 7')
        }else if ( !regNum_8_10.test(pass) && !regLow_8_10.test(pass) && !regUpp_8_10.test(pass) && regSpecial_8_10.test(pass) ) {
            event.preventDefault()
            alert('Tu contraseña tiene caracteres de 8 a 10')
        }else if ( !regNum_11_13.test(pass) && !regLow_11_13.test(pass) && !regUpp_11_13.test(pass) && regSpecial_11_13.test(pass) ) {
            event.preventDefault()
            alert('Tu contraseña tiene caracteres de 11 a 13')
        }else if ( regNum_0_6.test(pass) && regLow_0_6.test(pass) && !regUpp_0_6.test(pass) && !regSpecial_0_6.test(pass) ) {
            event.preventDefault()
            alert('Tu contraseña tiene números y minúsculas de 0 a 6')
        }else if ( regNum_7_9.test(pass) && regLow_7_9.test(pass) && !regUpp_7_9.test(pass) && !regSpecial_7_9.test(pass) ) {
            event.preventDefault()
            alert('Tu contraseña tiene números y minúsculas de 7 a 9')
        }else if ( regNum_10_11.test(pass) && regLow_10_11.test(pass) && !regUpp_10_11.test(pass) && !regSpecial_10_11.test(pass) ) {
            event.preventDefault()
            alert('Tu contraseña tiene números y minúsculas de 10 a 11')
        }else if ( regNum_0_6.test(pass) && !regLow_0_6.test(pass) && regUpp_0_6.test(pass) && !regSpecial_0_6.test(pass) ) {
            event.preventDefault()
            alert('Tu contraseña tiene números y mayúsculas de 0 a 6')
        }else if ( regNum_7_9.test(pass) && !regLow_7_9.test(pass) && regUpp_7_9.test(pass) && !regSpecial_7_9.test(pass) ) {
            event.preventDefault()
            alert('Tu contraseña tiene números y mayúsculas de 7 a 9')
        }else if ( regNum_10_11.test(pass) && !regLow_10_11.test(pass) && regUpp_10_11.test(pass) && !regSpecial_10_11.test(pass) ) {
            event.preventDefault()
            alert('Tu contraseña tiene números y mayúsculas de 10 a 11')
        }else if ( regNum_0_6.test(pass) && !regLow_0_6.test(pass) && !regUpp_0_6.test(pass) && regSpecial_0_6.test(pass) ) {
            event.preventDefault()
            alert('Tu contraseña tiene números y caracteres de 0 a 6')
        }else if ( regNum_7_9.test(pass) && !regLow_7_9.test(pass) && !regUpp_7_9.test(pass) && regSpecial_7_9.test(pass) ) {
            event.preventDefault()
            alert('Tu contraseña tiene números y caracteres de 7 a 9')
        }else if ( regNum_10_11.test(pass) && !regLow_10_11.test(pass) && !regUpp_10_11.test(pass) && regSpecial_10_11.test(pass) ) {
            event.preventDefault()
            alert('Tu contraseña tiene números y caracteres de 10 a 11')
        }else if ( !regNum_0_6.test(pass) && regLow_0_6.test(pass) && regUpp_0_6.test(pass) && !regSpecial_0_6.test(pass) ) {
            event.preventDefault()
            alert('Tu contraseña tiene minúsculas y mayúsculas de 0 a 6')
        }else if ( !regNum_7_9.test(pass) && regLow_7_9.test(pass) && regUpp_7_9.test(pass) && !regSpecial_7_9.test(pass) ) {
            event.preventDefault()
            alert('Tu contraseña tiene minúsculas y mayúsculas de 7 a 9')
        }else if ( !regNum_10_11.test(pass) && regLow_10_11.test(pass) && regUpp_10_11.test(pass) && !regSpecial_10_11.test(pass) ) {
            event.preventDefault()
            alert('Tu contraseña tiene minúsculas y mayúsculas de 10 a 11')
        }else if ( !regNum_0_6.test(pass) && regLow_0_6.test(pass) && !regUpp_0_6.test(pass) && regSpecial_0_6.test(pass) ) {
            event.preventDefault()
            alert('Tu contraseña tiene minúsculas y caracteres de 0 a 6')
        }else if ( !regNum_7_9.test(pass) && regLow_7_9.test(pass) && !regUpp_7_9.test(pass) && regSpecial_7_9.test(pass) ) {
            event.preventDefault()
            alert('Tu contraseña tiene minúsculas y caracteres de 7 a 9')
        }else if ( !regNum_10_11.test(pass) && regLow_10_11.test(pass) && !regUpp_10_11.test(pass) && regSpecial_10_11.test(pass) ) {
            event.preventDefault()
            alert('Tu contraseña tiene minúsculas y caracteres de 10 a 11')
        }else if ( !regNum_0_6.test(pass) && !regLow_0_6.test(pass) && regUpp_0_6.test(pass) && regSpecial_0_6.test(pass) ) {
            event.preventDefault()
            alert('Tu contraseña tiene mayúsculas y caracteres de 0 a 6')
        }else if ( !regNum_7_9.test(pass) && !regLow_7_9.test(pass) && regUpp_7_9.test(pass) && regSpecial_7_9.test(pass) ) {
            event.preventDefault()
            alert('Tu contraseña tiene mayúsculas y caracteres de 7 a 9')
        }else if ( !regNum_10_11.test(pass) && !regLow_10_11.test(pass) && regUpp_10_11.test(pass) && regSpecial_10_11.test(pass) ) {
            event.preventDefault()
            alert('Tu contraseña tiene mayúsculas y caracteres de 10 a 11')
        }else if ( regNum_0_5.test(pass) && regLow_0_5.test(pass) && regUpp_0_5.test(pass) && !regSpecial_0_5.test(pass) ) {
            event.preventDefault()
            alert('Tu contraseña tiene números, minúsculas y mayúsculas de 0 a 5')
        }else if (regNum_6_8.test(pass) && regLow_6_8.test(pass) && regUpp_6_8.test(pass) && !regSpecial_6_8.test(pass) ) {
            event.preventDefault()
            alert('Tu contraseña tiene números, minúsculas y mayúsculas de 6 a 8')
        }else if ( regNum_9_10.test(pass) && regLow_9_10.test(pass) && regUpp_9_10.test(pass) && !regSpecial_9_10.test(pass) ) {
            event.preventDefault()
            alert('Tu contraseña tiene números, minúsculas y mayúsculas de 9 a 10')
        }else if ( regNum_0_5.test(pass) && regLow_0_5.test(pass) && !regUpp_0_5.test(pass) && regSpecial_0_5.test(pass) ) {
            event.preventDefault()
            alert('Tu contraseña tiene números, minúsculas, caracteres de 0 a 5')
        }else if (regNum_6_8.test(pass) && regLow_6_8.test(pass) && !regUpp_6_8.test(pass) && regSpecial_6_8.test(pass) ) {
            event.preventDefault()
            alert('Tu contraseña tiene números, minúsculas, caracteres de 6 a 8')
        }else if ( regNum_9_10.test(pass) && regLow_9_10.test(pass) && !regUpp_9_10.test(pass) && regSpecial_9_10.test(pass) ) {
            event.preventDefault()
            alert('Tu contraseña tiene números, minúsculas, caracteres de 9 a 10')
        }else if ( regNum_0_5.test(pass) && !regLow_0_5.test(pass) && regUpp_0_5.test(pass) && regSpecial_0_5.test(pass) ) {
            event.preventDefault()
            alert('Tu contraseña tiene números mayusculas y caracteres de 0 a 5')
        }else if (regNum_6_8.test(pass) && !regLow_6_8.test(pass) && regUpp_6_8.test(pass) && regSpecial_6_8.test(pass) ) {
            event.preventDefault()
            alert('Tu contraseña tiene números mayusculas y caracteres de 6 a 8')
        }else if ( regNum_9_10.test(pass) && !regLow_9_10.test(pass) && regUpp_9_10.test(pass) && regSpecial_9_10.test(pass) ) {
            event.preventDefault()
            alert('Tu contraseña tiene números mayusculas y caracteres de 9 a 10')
        }else if ( !regNum_0_5.test(pass) && regLow_0_5.test(pass) && regUpp_0_5.test(pass) && regSpecial_0_5.test(pass) ) {
            event.preventDefault()
            alert('Tu contraseña tiene minúsculas, mayusculas y caracteres de 0 a 5')
        }else if (!regNum_6_8.test(pass) && regLow_6_8.test(pass) && regUpp_6_8.test(pass) && regSpecial_6_8.test(pass) ) {
            event.preventDefault()
            alert('Tu contraseña tiene minúsculas, mayusculas y caracteres de 6 a 8')
        }else if ( !regNum_9_10.test(pass) && regLow_9_10.test(pass) && regUpp_9_10.test(pass) && regSpecial_9_10.test(pass) ) {
            event.preventDefault()
            alert('Tu contraseña tiene minúsculas, mayusculas y caracteres de 9 a 10')
        }else if ( regNum_0_5.test(pass) && regLow_0_5.test(pass) && regUpp_0_5.test(pass) && regSpecial_0_5.test(pass) ) {
            event.preventDefault()
            alert('Tu contraseña tiene todo de 0 a 5')
        }else if (regNum_6_8.test(pass) && regLow_6_8.test(pass) && regUpp_6_8.test(pass) && regSpecial_6_8.test(pass) ) {
            event.preventDefault()
            alert('Tu contraseña tiene todo de 6 a 8')
        }else if ( regNum_9_10.test(pass) && regLow_9_10.test(pass) && regUpp_9_10.test(pass) && regSpecial_9_10.test(pass) ) {
            event.preventDefault()
            alert('Tu contraseña tiene todo de 9 a 10')
        }

    

    })

})



/*
       ***** COMETARIOS FINALES ******
       
Esta es la estructura HTML declarada en la seccion " //C-2.3 Creacion de variables ""


>>>>>>  nameWarningAlert

            <a class="linckPassword" href="https://www.xataka.com/seguridad/estas-50-contrasenas-comunes-internet-qwerty-a-dragon-pasando-password-123456-estudio" target="_blank"> 
                <p class="nameWarning" id="nameWarning">
                    Escribir tu nombre es muy predesible <sup>(?)</sup>
                </p>
            </a>
        

>>>>>>  lastNameWarningAlert
       
            <a class="linckPassword" href="https://www.xataka.com/seguridad/estas-50-contrasenas-comunes-internet-qwerty-a-dragon-pasando-password-123456-estudio" target="_blank"> 
                <p class="lastNameWarning" id="lastNameWarning">
                    Escribir tu apellido es muy predesible <sup>(?)</sup>
                </p>
            </a>


>>>>>>  emailWarningAlert
       
            <a class="linckPassword" href="https://www.xataka.com/seguridad/estas-50-contrasenas-comunes-internet-qwerty-a-dragon-pasando-password-123456-estudio" target="_blank"> 
                <p class="emailWarning" id="emailWarning">
                    Escribir tu email es muy predesible <sup>(?)</sup>
                </p>
            </a>


>>>>>> patronAlert

            <a class="linckPassword" href="https://www.xataka.com/seguridad/estas-50-contrasenas-comunes-internet-qwerty-a-dragon-pasando-password-123456-estudio" target="_blank"> 
                <p class="patronWarning">
                     Escribir una secuencia alfanumérica es muy predesible <sup>(?)</sup>
                </p>
            </a>

>>>>>> wordAlert

            <a class="linckPassword" href="https://www.xataka.com/seguridad/estas-50-contrasenas-comunes-internet-qwerty-a-dragon-pasando-password-123456-estudio" target="_blank"> 
                <p class="patronWarning">
                    Escribir palabras típicas como "password" o "mono" etc. es muy predecible <sup>(?)</sup>
                </p>
            </a>

     

>>>>>> passVeryWeackAlert
       
            <a class="linckPassword" href="https://simbiosisdigital.com.ar/wp-content/uploads/2021/07/tabla-.png" target="_blank"> 
                <p class="passVeryWeack" id="passVeryWeack">
                    La contraseña es muy débil <sup>(?)</sup>
                </p>
            </a>


>>>>>> passWeackAlert

            <a class="linckPassword" href="https://simbiosisdigital.com.ar/wp-content/uploads/2021/07/tabla-.png" target="_blank"> 
                <p class="passWeack" id="passWeack">
                    La contraseña es débil <sup>(?)</sup>
                </p>
            </a>
        

>>>>>> passMediumAlert
       
            <a class="linckPassword" href="https://simbiosisdigital.com.ar/wp-content/uploads/2021/07/tabla-.png" target="_blank"> 
                <p class="passMedium" id="passMedium">
                    La contraseña es media <sup>(?)</sup>
                </p>
            </a>


>>>>>> passStrongAlert

            <a class="linckPassword" href="https://simbiosisdigital.com.ar/wp-content/uploads/2021/07/tabla-.png" target="_blank"> 
                <p class="passStrong" id="passStrong">
                    La contraseña es fuerte <sup>(?)</sup>
                </p>
            </a>




>>>>>> passVeryStrongAlert
       
            <a class="linckPassword" href="https://simbiosisdigital.com.ar/wp-content/uploads/2021/07/tabla-.png" target="_blank"> 
                <p class="passVeryStrong" id="passVeryStrong">
                    La contraseña es muy fuerte <sup>(?)</sup>
                </p>
            </a>


*/
       