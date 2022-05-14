const {MongoClient} = require("mongodb");

let database = null;
const mongoDBURL= "mongodb://localhost/BudgetData"
async function startDatabase() {
    const connection = await MongoClient.connect(mongoDBURL, {useNewUrlParser: false});
    database = connection.db();
    console.log("Dbconnected!")
}

async function getDatabase() {
    if (!database)  startDatabase();
    console.log(database)
    return database;
}

module.exports = { getDatabase };
