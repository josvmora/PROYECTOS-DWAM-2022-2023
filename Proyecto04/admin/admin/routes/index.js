var express = require('express');
const axios = require('axios')
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/costumers',async function(req, res, next) {
  const URL = 'http://localhost:4444/clientes/findAll/json'
  const config = {
    proxy: {
      host: 'localhost',
      port: 4444
    }
  }
  const response = await axios.get(URL, config)
  

  //response.data.map( item => { item.url = 'http://localhost:4444/'+item.ruta.replace('public/','') } )
  res.render('clientes', { title: 'Clientes', clientes: response.data });
});

router.get('/customers/order', function(req, res, next) {
  res.render('clientes_order', { title: 'Express' });
});


module.exports = router;
