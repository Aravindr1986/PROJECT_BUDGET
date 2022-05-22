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
 *     200:
 *      description: Sucess response
 * 
 */
  
router.post('/', async (req, res) => {
    req.body.expenseDate=new Date(req.body.expenseDate) ;
    response = await services.insertExpense(req.body)
    res.send(response);
  });
  
/**
 * @swagger
 * /totals:
 *  get:
 *    description: Retrieve total amount for an expense categories between the given start and end dates
 *    responses:
 *     200:
 *      description: total amount for an expense categories between the given start and end dates
 * 
 */
  
router.get('/totals', async (req, res) => {  
  response = await services.getTotals(new Date(req.body.startDate),new Date(req.body.endDate),req.body.expensType)
  res.send(response);
});

  module.exports = router;