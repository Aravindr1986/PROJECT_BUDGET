var express = require('express'),
    router = express.Router();
const services=require('./services')

router.get('/', async (req, res) => {
    response = await services.getExpense()
    res.send(response);
  });
  
router.post('/', async (req, res) => {
    response = await services.insertExpense(req.body)
    res.send(response);
  });

  module.exports = router;