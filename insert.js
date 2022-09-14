const getData = require('./mongodb.js');

const insertData = async ()=>{
    let db = await getData();
    const data = await db.insert([
        {name:'nord ce 2', brand:'oneplus',price:25000,category:'mobile'},
        {name:'nord', brand:'oneplus',price:20000,category:'mobile'},
    ])
    if(data.acknowledged){
        console.log('data inserted successfully');
        
    }
}

insertData();