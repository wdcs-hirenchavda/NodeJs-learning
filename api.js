const express = require('express');
const dbConnect = require('./mongodb');
const app = express();

app.use(express.json())

app.get('/',async(req,res)=>{
    let data = await dbConnect();
    data = await data.find().toArray();
    console.log(data);
    res.send(data);
    
})

app.post('/',async(req,res)=>{
    let data = await dbConnect();
    data = await data.insert(req.body);
    console.log(req.body);
    // res.send(data);
    res.send(req.body);
    if(data.acknowledged){
        console.log("data inserted successfully");
        
    }

     
})

app.put('/:name',async(req,res)=>{
    let data = await dbConnect();
    data = await data.updateOne({name:req.params.name},{$set:req.body});
    res.send(data)
    console.log(req.body);
    
    if(data.acknowledged){
        console.log("data updated successfully");
        
    }
});

app.delete('/:id',async(req,res) => {
    let data = await dbConnect();
    data = await data.deleteOne({name:req.params.id});
    res.send(data)
    console.log(req.params);
    if(data.acknowledged){
        console.log('data deleted successfully');
        
    }
    
})

app.listen(5000)