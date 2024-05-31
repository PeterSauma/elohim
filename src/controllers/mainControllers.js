// Requires
const db = require ('../database/models');
const Op = db.Sequelize.Op;
const shuffle = require ('../modules/shuffleArray')
const fs = require ('fs');
const path = require ('path');

// controller DB

const controller = {
    //index.ejs
    index : async(req, res)=>{
            let article = ["article01", "article02", "article03", "article04"];
            let searchedProducts = await db.Product.findAll({ where : {section:'lo mas buscado'}});
            let phones = await db.Product.findAll({ where : {category:'phones'}});
            let tablets = await db.Product.findAll({ where : {category:'tablets'}}); 
            let laptops = await db.Product.findAll({ where : {category:'laptops'}}); 
            let ropa = await db.Product.findAll({ where : {category:'ropa'}});
            let detergentes = await db.Product.findAll({ where : {category:'detergentes'}});
            let pisos = await db.Product.findAll({ where : {category:'pisos'}});
            let cosmetica = await db.Product.findAll({ where : {category:'cosmetica'}});
            let autos = await db.Product.findAll({ where : {category:'autos'}});
            return   res.render(path.join(__dirname,'../views/index'), {article: article, 
                                                                        searchedProducts: shuffle(searchedProducts), phones: shuffle(phones), tablets :shuffle(tablets), laptops: shuffle(laptops), 
                                                                        ropa: shuffle(ropa), 
                                                                        detergentes: shuffle(detergentes), 
                                                                        pisos: shuffle(pisos), 
                                                                        cosmetica: shuffle(cosmetica), 
                                                                        autos: shuffle(autos)})
    },
    //lista de lo más buscado
    searchedProducts: (req,res) =>{
        db.Product.findAll({where:{section:'lo mas buscado'}})
            .then((products) => {
                return res.render('listProducts', { products: products });
            })
        .catch(error => res.send(error));
    },
    //lista de phones
    phones: (req,res) =>{
        db.Product.findAll({where:{category:'phones'}})
            .then((products) => {
                return res.render('listProducts', { products: products });
            })
        .catch(error => res.send(error));
    },
    //lista de tablets
    tablets: (req,res) =>{
        db.Product.findAll({where:{category:'tablets'}})
            .then((products) => {
                return res.render('listProducts', { products: products });
            })
        .catch(error => res.send(error));
    },
    //lista de laptops
    laptops: (req,res) =>{
        db.Product.findAll({where:{category:'laptops'}})
            .then((products) => {
                return res.render('listProducts', { products: products });
            })
        .catch(error => res.send(error));
    },
    //lista de ropa
    ropa: (req,res) =>{
        db.Product.findAll({where:{category:'ropa'}})
            .then((products) => {
                return res.render('listProducts', { products: products });
            })
        .catch(error => res.send(error));
    },
    //lista de detergentes
    detergentes: (req,res) =>{
        db.Product.findAll({where:{category:'detergentes'}})
            .then((products) => {
                return res.render('listProducts', { products: products });
            })
        .catch(error => res.send(error));
    },
    //lista de pisos
    pisos: (req,res) =>{
        db.Product.findAll({where:{category:'pisos'}})
            .then((products) => {
                return res.render('listProducts', { products: products });
            })
        .catch(error => res.send(error));
    },
    //lista de cosmetica
    cosmetica: (req,res) =>{
        db.Product.findAll({where:{category:'cosmetica'}})
            .then((products) => {
                return res.render('listProducts', { products: products });
            })
        .catch(error => res.send(error));
    },
    //lista de autos
    autos: (req,res) =>{
        db.Product.findAll({where:{category:'autos'}})
            .then((products) => {
                return res.render('listProducts', { products: products });
            })
        .catch(error => res.send(error));
    },

    
    //formulario de busqueda
    search: (req,res) =>{
        //capturo el string que busca el usuaria que viaja por la url
        const search2 = req.query.search2
        const search1 = req.query.search1

        if (search1) {
            db.Product.findAll({where:{name: {[Op.like]:'%'+search1+'%'}}})
            .then((products) => {
                return res.render('listProducts', { products: products });
            })
        .catch(error => res.send(error));
        } else if (search2) {
            db.Product.findAll({where:{name: {[Op.like]:'%'+search2+'%'}}})
            .then((products) => {
                return res.render('listProducts', { products: products });
            })
        .catch(error => res.send(error));
        }


        
    },
    //contacto servicio tecnico
    contact: (req, res) => {
        res.render('serviceContact');
    }
}


module.exports = controller;