//Declaracion de frameworks
const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require ('method-override') 

//Requiero los paquetes para trabajar lo referido a session y cookies
const session = require('express-session');
const cookieParser = require('cookie-parser');

//Requerir nuestro middleware - Aplicación
//Requiero el middleware que controla si el sitio está o no culminado
const mantenimiento = require('./middlewares/mantenimiento');
//Requerir el middleware que controla si el usuario está o no Logueado
const userLoggedMiddleware = require('./middlewares/userLoggedMiddleware');

//>montar rutas 
const productRoutes = require ('./routes/productRoutes');
const mainRoutes = require ('./routes/mainRoutes');
const usersRoutes = require ('./routes/usersRoutes');
const apiRouter = require ('./routes/api');

//Declaracion de puertos
const port = 3000;

// views
// app.use(express.static(path.join(__dirname,'views')));
// public
app.use(express.static(path.join(__dirname,'../public')));
// Decode Form URL Encoded Data
app.use(express.urlencoded({extended: false}));
// Put and Delete method
app.use(methodOverride ('_method'));
// Para usar JSON
app.use(express.json())

//EJS
app.set('view engine', 'ejs');
app.set("views", path.join(__dirname, "views"));

//Para mantener en sesion al usuario
app.use(session({
    secret : 'topSecret',
    resave: false,
    saveUninitialized: false,
}))

//Aqui coloco el Middleware para activar lo referido a las cookies
app.use(cookieParser());

//Middleware de aplicación que se encarga de controlar si el usuario está logueado o no
app.use(userLoggedMiddleware);


//match
app.use('/',mainRoutes);
app.use('/user',usersRoutes);
app.use('/product', productRoutes);
app.use('/api', apiRouter);

//404 not-found
app.use((req, res, next) => {
    res.status(404).render('notFound');
});

//montar el servidor                                                                                                                                                                                                                                                                                                                             
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
    console.log(__dirname);
});
