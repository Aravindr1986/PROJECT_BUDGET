const {getDatabase} = require('./config');

const collectionName = 'Budget';

async function insertExpense(expenseItem) {
  const database = await getDatabase();
  const insertedExpense = await database.collection(collectionName).insertOne(expenseItem);
  return insertedExpense;
}

async function getExpense() {
   const database = await getDatabase();
  return await database.collection(collectionName).find({}).toArray();
}
//{date: { $gte: startDate, $lt: endDate } },
async function getTotals(startDate, endDate, expensType) {
  const database = await getDatabase();
  return await database.collection(collectionName).aggregate([{
    $match : { $and : [ {expensType:{$eq: expensType}}] },
  },{
    $group : {
        _id : null,
        total : {
            $sum : "$amount"
        }
    }
  }]);
}

module.exports = {
  insertExpense,
  getExpense,
  getTotals
};