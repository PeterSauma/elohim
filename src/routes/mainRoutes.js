const express = require ('express');
const router = express.Router();
const mainControllers = require ('../controllers/mainControllers');



//routes DB
router.get("/", mainControllers.index);
router.get("/home", mainControllers.index);


router.get('/searchedProducts',mainControllers.searchedProducts)//ruta de acceso a lista de searchedProducts
router.get('/ropa',mainControllers.ropa)//ruta de acceso ruta de ropa
router.get('/detergentes',mainControllers.detergentes)//ruta de acceso ruta de detergentes
router.get('/pisos',mainControllers.pisos)//ruta de acceso ruta de pisos
router.get('/cosmetica',mainControllers.cosmetica)//ruta de acceso ruta de cosmetica
router.get('/autos',mainControllers.autos)//ruta de acceso ruta de autos


router.get('/search',mainControllers.search)//ruta de acceso a la barra de busqueda
router.get('/service', mainControllers.contact); //ruta de contacto

// exports
module.exports = router;
