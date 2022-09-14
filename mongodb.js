const {MongoClient} = require('mongodb');
const url = "mongodb://localhost:27017";
const database = 'E-commerce';
const client = new MongoClient(url);

async function getData(){
    let result = await client.connect();
    let db = result.db(database);
    return db.collection('products');
    // let res = await collection.find({}).toArray();
    // console.log(res);
    

}
module.exports = getData;