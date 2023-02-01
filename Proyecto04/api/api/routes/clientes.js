var express = require('express');
var router = express.Router();

const { Sequelize, Op } = require('sequelize');
const Cliente = require('../models').customers;  

router.get('/findAll/json', function(req, res, next) {  

	
    Cliente.findAll({  
        attributes: {  }  
    })  
    .then(clientes => {  
        res.json(clientes);  
    })  
    .catch(error => res.status(400).send(error)) 
  
  });
  
  

router.get('/findAll/view', function(req, res, next) {  

  
    Cliente.findAll({  
        attributes: {  }  
    })  
    .then(clientes => {  
        res.render('clientes', { title: 'clientes', arrClientes: clientes });  
    })  
    .catch(error => res.status(400).send(error)) 
  
  });

router.get('/findAllByRate/json', function(req, res, next){

    let lower = parseFloat(req.query.lower);
    let higher = parseFloat(req.query.higher);

    Cliente.findAll({
        attributes: {  } , 
        where: { 
          creditLimit: { 
            [Op.between]: [lower, higher]
          }
        }
      })  
      .then(clientes => {  
        res.json(clientes);  
      })  
      .catch(error => res.status(400).send(error)) 
});

router.get('/findAllById/:id/json', function(req, res, next){

    let customerNumber = parseInt(req.params.id);

    Cliente.findAll({  
        attributes: {  } ,
        where: { 
          [Op.and]: [
            {customerNumber: customerNumber}
          ]
        }
    })  
    .then(clientes => {  
        res.json(clientes);  
    })  
    .catch(error => res.status(400).send(error)) 

})
module.exports = router;