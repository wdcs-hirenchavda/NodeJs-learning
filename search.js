const express = require('express');
require('./config')
const app = express();
const Product = require('./product');

app.use(express.json());

// app.post('/create',async(req,res)=>{
//     let data = new Product(req.body);
//     data = await data.save();
//     console.log(data);
//     res.send(data);
    
// })

app.get('/search/:key',async(req,res)=>{
    let data = await Product.find({
        "$or":[
            {"name":{$regex:req.params.key}},
            {"brand":{$regex:req.params.key}},
            {"category":{$regex:req.params.key}},
        ]
    });

    res.send(data);

});

app.listen(5000);