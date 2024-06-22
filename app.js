//Declaracion de frameworks
const express = require('express'); // [GPT] Importa el módulo Express
const app = express(); // [GPT] Crea una instancia de la aplicación Express
const path = require('path'); // [GPT] Importa el módulo path para trabajar con rutas de archivos
const methodOverride = require('method-override'); // [GPT] Importa el middleware para soportar métodos HTTP como PUT y DELETE

//Requiero los paquetes para trabajar lo referido a session y cookies
const session = require('express-session'); // [GPT] Importa el módulo para manejar sesiones
const cookieParser = require('cookie-parser'); // [GPT] Importa el middleware para parsear cookies

//Requerir nuestro middleware - Aplicación
//Requiero el middleware que controla si el sitio está o no culminado
const mantenimiento = require('./src/middlewares/mantenimiento'); // [GPT] Importa el middleware para manejar el mantenimiento del sitio
//Requerir el middleware que controla si el usuario está o no Logueado
const userLoggedMiddleware = require('./src/middlewares/userLoggedMiddleware'); // [GPT] Importa el middleware para manejar el estado de sesión del usuario

//>montar rutas 
const productRoutes = require('./src/routes/productRoutes'); // [GPT] Importa las rutas para productos
const mainRoutes = require('./src/routes/mainRoutes'); // [GPT] Importa las rutas principales
const usersRoutes = require('./src/routes/usersRoutes'); // [GPT] Importa las rutas para usuarios
const apiRouter = require('./src/routes/api'); // [GPT] Importa las rutas para la API

//Declaracion de puertos
const port = 3000; // [GPT] Establece el puerto en el que correrá la aplicación

// views
// app.use(express.static(path.join(__dirname,'views'))); // [GPT] (Comentado) Configura el directorio de vistas
// public
app.use(express.static(path.join(__dirname, './public'))); // [GPT] Sirve archivos estáticos desde el directorio 'public'
// Decode Form URL Encoded Data
app.use(express.urlencoded({ extended: false })); // [GPT] Middleware para parsear solicitudes URL-encoded
// Put and Delete method
app.use(methodOverride('_method')); // [GPT] Middleware para sobrescribir métodos HTTP con el query parameter ?_method=PUT
// Para usar JSON
app.use(express.json()); // [GPT] Middleware para parsear solicitudes JSON

//EJS
app.set('view engine', 'ejs'); // [GPT] Establece el motor de plantillas EJS
app.set("views", path.join(__dirname, "src/views")); // [GPT] Establece el directorio de vistas

//Para mantener en sesion al usuario
app.use(session({
    secret: 'topSecret', // [GPT] Clave secreta para la sesión
    resave: false, // [GPT] No guarda la sesión si no ha habido cambios
    saveUninitialized: false, // [GPT] No guarda una sesión sin inicializar
}))

//Aqui coloco el Middleware para activar lo referido a las cookies
app.use(cookieParser()); // [GPT] Middleware para parsear cookies

//Middleware de aplicación que se encarga de controlar si el usuario está logueado o no
app.use(userLoggedMiddleware); // [GPT] Middleware para manejar el estado de sesión del usuario

//match
app.use('/', mainRoutes); // [GPT] Usa las rutas principales


app.use('/user', usersRoutes); // [GPT] Usa las rutas para usuarios
app.use('/product', productRoutes); // [GPT] Usa las rutas para productos
app.use('/api', apiRouter); // [GPT] Usa las rutas para la API

//404 not-found
app.use((req, res, next) => { // [GPT] Middleware para manejar errores 404
    res.status(404).render('notFound'); // [GPT] Renderiza la vista 'notFound' para errores 404
});

//montar el servidor
app.listen(port, () => { // [GPT] Inicia el servidor
    console.log(`Example app listening at http://localhost:${port}`); // [GPT] Muestra un mensaje en la consola indicando que el servidor está corriendo
    console.log(__dirname); // [GPT] Muestra el directorio actual en la consola
});
