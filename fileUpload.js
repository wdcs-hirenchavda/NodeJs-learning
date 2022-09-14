const express = require('express');
const multer = require('multer');
const app = express();

const upload = multer({
    storage:multer.diskStorage({
        destination:function(req,file,cb){
            cb(null,"uploads")
        },
        filename:function(req,file,cb){
            cb(null,file.fieldname+"-"+Date.now()+".jpg");
        }

    })
}).single("file_upload");

app.post('/upload', upload, (req, res) =>{
    res.send("file upload successfully")
    // console.log(req.body);
    
    
})

app.listen(5000);