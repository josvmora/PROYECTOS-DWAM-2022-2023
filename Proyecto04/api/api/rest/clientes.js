var express = require('express');
var router = express.Router();

const { Sequelize, Op } = require('sequelize');
const Cliente = require('../models').customers;

router.get('/findAll/json', function(req, res, next) {  

    Cliente.findAll({  
        attributes: {  } ,
        
    })  
    .then(clientes => {  
        res.json(clientes);  
    })  
    .catch(error => res.status(400).send(error)) 
  
  });

router.get('/findById/:id/json', function(req, res, next) {  

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
  
  });

module.exports = router;