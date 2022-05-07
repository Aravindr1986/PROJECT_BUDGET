const {getDatabase} = require('./config');

const collectionName = 'ads';

async function insertExpense(expenseItem) {
  const database = await getDatabase();
  const {insertedExpense} = await database.collection("Budget").insertOne(expenseItem);
  return insertedExpense;
}

async function getAds() {
  const database = await getDatabase();
  return await database.collection("Budget").find({}).toArray();
}

module.exports = {
  insertAd,
  getAds,
};