var express = require('express'),
    router = express.Router();
const services=require('./services')

/**
 * @swagger
 * /:
 *  get:
 *    description: Get all expenses
 *    responses:
 *     200:
 *      description: Sucess
 * 
 */

router.get('/', async (req, res) => {
    response = await services.getExpense()
    res.send(response);
  });

  
/**
 * @swagger
 * /:
 *  post:
 *    description: Create a new expense
 *    responses:
 *     201:
 *      description: Sucess response
 * 
 */
  
router.post('/', async (req, res) => {
    response = await services.insertExpense(req.body)
    res.send(response);
  });

  module.exports = router;