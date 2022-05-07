const MongoClient = require("mongodb");

let database = null;

async function startDatabase() {
    //const mongo = new MongoMemoryServer();
    //const mongoDBURL = await mongo.getConnectionString();
    const connection = await MongoClient.connect("mongodb://dbadmin:secret@127.0.0.1:27017/BudgetData", async (err) => {
        if (err) throw err;
        console.log("conncted to db")
    }
    );
    database = connection.db();
}

async function getDatabase() {
    if (!database) await startDatabase();
    return database;
}

module.exports = { getDatabase };
