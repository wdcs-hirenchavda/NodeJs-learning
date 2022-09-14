const getData = require('./mongodb.js');

const deleteData = async ()=>{
    let db = await getData();
    const data = await db.deleteMany(
        {name:'nord'}
    )
    if(data.acknowledged){
        console.log('data deleted successfully');
        
    }
    
}

deleteData();