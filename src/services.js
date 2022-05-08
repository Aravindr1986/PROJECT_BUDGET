const {getDatabase} = require('./config');

const collectionName = 'Budget';

async function insertExpense(expenseItem) {
  const database = await getDatabase();
  const {insertedExpense} = await database.collection(collectionName).insertOne(expenseItem);
  return insertedExpense;
}

async function getExpense() {
  const database = await getDatabase();
  return await database.collection(collectionName).find({}).toArray();
}

module.exports = {
  insertExpense,
  getExpense,
};