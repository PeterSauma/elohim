const express = require ('express');
const router = express.Router();
const path = require("path");
const multer = require("multer");
const adminMiddleware = require('../middlewares/adminMiddleware')
const checkoutMiddleware = require('../middlewares/checkoutMiddleware')

const productControllers = require ('../controllers/productControllers')

//requerir express validator
const { body } = require('express-validator')

const storage = multer.diskStorage({ 
    destination: function (req, file, cb) { 
       cb(null, path.resolve(__dirname, '../../public/images/products')); 
    }, 
    filename: function (req, file, cb) { 
       cb(null, `${Date.now()}_img_${path.extname(file.originalname)}`);  } 
  })

const uploadFile = multer({ storage: storage });

// Validaciones de Creacion y Edición de Producto

const validationsNewProduct = [
   body('name').notEmpty().withMessage('Tienes que ingresar el nombre del producto')
   .isLength({ min: 5 }).withMessage('El nombre del articulo debe tener al menos 5 caracteres.'),
   body('description').isLength({ min: 20 }).withMessage('Deberá tener al menos 20 caracteres'),
   body('price').notEmpty().withMessage('Debes ingresar un precio')
   .isFloat({ min:1}).withMessage('el precio no puede ser 0'),
   body('discount').notEmpty().withMessage('Si no aplica descuento, escribir 0')
   .isInt({ min:0, max: 95}).withMessage('El descuento debe ser un número entre 0 y 95'),
   body('category').isIn(['phones', 'tablets', 'laptops']).withMessage('Por favor, seleccionar una de las opciones'),
   body('brand').isIn(["Iphone","Apple","Samsung", "Motorola", "Huawei", "OnePlus", "Xiaomi"]).withMessage('Por favor, seleccionar una de las opciones'),
   body('section').isIn(["lo mas buscado", "celulares", "laptops", "tablets"]).withMessage('Por favor, seleccionar una de las opciones'),
   body('images').custom((value, {req})=>{
       let file = req.file
       let acceptedExtensions = ['.jpg','.jpeg', '.png', '.gif']
       if(!file){
           throw new Error ('Tienes que subir una imagen')
       }

       else{

           let fileExtension = path.extname(file.originalname);
           if (!acceptedExtensions.includes(fileExtension)){
    
               throw new Error (`Las extensiones de archivo permitidas son  ${acceptedExtensions.join(' , ')}`);
           }
       }
       return true
   })
]

// La única diferencia con la validación de New Product es que la validación custom de la imagen en la de Edit no incluye sí la imagen fue subida ya que en ese caso se utilizaría la imagen vieja

const validationsEditProduct = [
    body('name').notEmpty().withMessage('Tienes que ingresar el nombre del producto')
    .isLength({ min: 5 }).withMessage('El nombre del articulo debe tener al menos 5 caracteres.'),
    body('description').isLength({ min: 20 }).withMessage('Deberá tener al menos 20 caracteres'),
    body('price').notEmpty().withMessage('Debes ingresar un precio')
    .isFloat({ min:1}).withMessage('el precio no puede ser 0'),
    body('discount').notEmpty().withMessage('Si no aplica descuento, escribir 0')
    .isInt({ min:0, max: 95}).withMessage('El descuento debe ser un número entre 0 y 95'),
    body('category').isIn(['phones', 'tablets', 'laptops']).withMessage('Por favor, seleccionar una de las opciones'),
    body('brand').isIn(["Iphone","Apple","Samsung", "Motorola", "Huawei", "OnePlus", "Xiaomi"]).withMessage('Por favor, seleccionar una de las opciones'),
    body('section').isIn(["lo mas buscado", "celulares", "laptops", "tablets"]).withMessage('Por favor, seleccionar una de las opciones'),
    body('images').custom((value, {req})=>{
        let file = req.file
        let acceptedExtensions = ['.jpg','.jpeg', '.png', '.gif']
        if(file){
            let fileExtension = path.extname(file.originalname);
            if (!acceptedExtensions.includes(fileExtension)){
     
                throw new Error (`Las extensiones de archivo permitidas son  ${acceptedExtensions.join(' , ')}`);
            }
        }
        return true
    })
 ]
// routes

//List products
router.get("/", productControllers.listProducts);
//Prpduct Cart
router.get("/productCart", checkoutMiddleware, productControllers.cart );
//Product Detail
router.get("/productDetail/:id", productControllers.productDetail);


// Create a new product
router.get('/create', adminMiddleware,  productControllers.newProduct)
router.post('/store', adminMiddleware, uploadFile.single("images"), validationsNewProduct, productControllers.store)

//Delete products
router.delete("/delete/:id", adminMiddleware, productControllers.delete)


// Edit products
router.get("/edit/:id", adminMiddleware, productControllers.editView)
router.put("/edit/:id", adminMiddleware, uploadFile.single("images"), validationsEditProduct, productControllers.editProduct)

//Checkout 
router.get("/checkout", productControllers.checkout);


module.exports = router;

