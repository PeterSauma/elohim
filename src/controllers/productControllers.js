const fs = require ('fs');
const path = require ('path');
const db = require ('./../database/models')
const shuffle = require ('../modules/shuffleArray')
const { validationResult }= require('express-validator');


const controllers = {

    cart: async (req, res) => {
        let searchedProducts = await db.Product.findAll({ where : {section:'lo mas buscado'}});
        res.render('productCart.ejs', {searchedProducts: shuffle(searchedProducts)});
        
    },

    productDetail : (req, res) => {
        db.Product.findByPk(req.params.id)
            .then((product) => {
                return res.render('productDetail.ejs', { product: product });
            })
            .catch(error => res.send(error));
    },

    listProducts :(req, res)=> {
        db.Product.findAll()
            .then((products) => {
                return res.render('listProducts.ejs', { products: products });
            })
            .catch(error => res.send(error));
    },
   
    newProduct: (req, res) => {
        res.render('newProduct.ejs');
    },
        
    store: (req, res) => {
        const errors = validationResult(req);
        

        if(errors.errors.length > 0){

            return res.render('newProduct.ejs', {

                errors : errors.mapped(),
                oldData : req.body

            });
        } 

        db.Product.create(
            {
           name: req.body.name,
           description:req.body.description,
           price_product:  req.body.price,
           discount: req.body.discount,
           category: req.body.category,
           image_product: req.file.filename,
           section: req.body.section,
           brand: req.body.brand
       })
       .then(resultado =>{
          
           return res.redirect('/product')
       })

        
    
        },

        delete: (req, res) => {
            db.Product.destroy({
                where: { id: req.params.id }
            })
            .then(resultado => {
            return res.redirect('/product')
         })
        },

        editView: async (req, res) => {
            let productToEdit = await db.Product.findAll({where: {id: req.params.id}})
            

            res.render ('productEdit.ejs', {productToEdit: productToEdit})
        },
        
        editProduct: async (req, res) => {
            const errors = await validationResult(req);
           

            if(errors.errors.length > 0){
                let productToEdit = await db.Product.findAll({where: {id: req.params.id}})

                return res.render('productEdit.ejs', {
    
                    errors : errors.mapped(),
                    oldData : req.body,
                    productToEdit: productToEdit
    
                });
            }

            let product = await db.Product.findByPk(req.params.id)
            let oldImage = product.image_product
            let updateProduct = await db.Product.update(
                {
                    name: req.body.name,
                    description:req.body.description,
                    price_product:  req.body.price,
                    discount: req.body.discount,
                    category: req.body.category,
                    image_product: req.file ? req.file.filename : oldImage,
                    section: req.body.section,
                    brand: req.body.brand
                },
                {
                   where:{ id: req.params.id} 
                }
            )
                return res.redirect('/product')
              

        },

        checkout: async(req, res) => {
            let id
            if (req.session.usuario) {
                 id = req.session.usuario.id
            }
           let order = await db.Order.findAll(
            { include: 'orderItems' },
            {where: {userId: id}},
           )

            let lastOrder = order[order.length - 1]
           
            
            return res.render ('checkoutProduct.ejs', {lastOrder: lastOrder})
        }
}


module.exports = controllers