var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;

var expenseSchema = new Schema({
    expensType: String,
    expenseDate: Date,
    store:String,
    amount:Number,
    Comments:String,
});
var Expense = mongoose.model('Expense', expenseSchema );
module.exports = Expense;