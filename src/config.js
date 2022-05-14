const {MongoClient} = require("mongodb");

let database = null;
const mongoDBURL= "mongodb://localhost/BudgetData"
async function startDatabase() {
    const connection = await MongoClient.connect(mongoDBURL, {useNewUrlParser: false});
    database = connection.db();
    console.log("Db connected!")
}

async function getDatabase() {
    if (!database)  startDatabase();
    return database;
}

module.exports = { getDatabase };
