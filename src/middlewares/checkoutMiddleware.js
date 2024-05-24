checkoutMiddleware = function (req, res, next) {
    if (!req.session.usuario) {
       return res.render('logIn.ejs', {message: 'Debes loguearte para ingresar al Carrito de Compra'});
    }
    next();
}

module.exports = checkoutMiddleware