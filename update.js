const getData = require('./mongodb.js');

const updateData = async ()=>{
    let db = await getData();
    const data = await db.update(
        {name:'nord ce 2'},{$set:{name:'nord ce 2 pro' ,price:30000}}
    )
    if(data.acknowledged){
        console.log('data updated successfully');
        
    }
    
}

updateData();