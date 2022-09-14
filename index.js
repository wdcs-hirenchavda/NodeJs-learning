// const http = require('http');
// const data = require('./data');
// http.createServer((req,res)=>{
//     res.writeHead(200,{'Content-Type': 'application/json'});
//     res.write(JSON.stringify(data));
//     res.end();
// }).listen(5000);

// console.log("Staring execution");

// setTimeout(() => {
//     console.log(" 2 second delay ");
    
// }, 2000);

// setTimeout(() => {
//     console.log('0 second delay');
    
// }, 0);

// console.log('end of the execution');


// File System Management

// 
// const fs = require('fs');
// const path = require('path');

// const dirpath = path.join(__dirname,'files');
// console.log(dirpath);

// for(let i=0; i<=4; i++) {
//     fs.writeFileSync(dirpath+`/hello ${i}.txt`, ' Hi , my name is Mr. developer');
    
// }

// fs.readdir(dirpath,(err,files)=>{
//     files.forEach((items)=>{
//         console.log(items);
        
//     })
// })


// CRUD operation on file system

// const fs = require('fs');
// const path = require('path');

// const dirPath = path.join(__dirname,'files');
// const filePath = `${dirPath}/index.txt`;

// // create a file
// fs.writeFileSync(filePath,'This is created by nodeJs');

// // Read files
// fs.readFile(filePath,'utf8',(err,item)=>{
//     console.log(item);
    
// })

// // Update files

// fs.appendFile(filePath,' using the file system',(err)=>{
//     if(!err){console.log("File is updated");
//     }
// })


// // Rename file

// fs.rename(filePath,`${dirPath}/app.txt`,(err)=>{
//     if(!err){console.log("File name is updated");
//     }
// })

// Delete file

// fs.unlinkSync(`${dirPath}/app.txt`);


// URL module

// var url = require('url');
// var adr = 'http://localhost:8080/app.htm?year=2017&month=february&day=monday';
// var q = url.parse(adr, true);

// console.log(q.host);
// console.log(q.pathname);
// console.log(q.search);

// var qdata = q.query;

// console.log(qdata);
// console.log(qdata.month);
// console.log(qdata.year);
// console.log(qdata.day);

// Express Js 

// const { application } = require('express');
// const express = require('express');
// const app = express();

// app.get('/', (req, res) => {
//     res.send(`<h1>Welcome! Mr. Developer</h1>`)
//     // res.send(`<h1>Welcome Mr. Developer- ${req.query.name}</h1>`)
// })
// app.get('/about', (req, res) => {
//     res.send('<h1>This is the home page</h1>')
// })
// app.get('/services', (req, res) => {
//     res.send('<h1>This is the Service page</h1>')
// })

// app.listen(8080);


// app.get('/', (req, res) => {
//     res.send(`<h1>Welcome! Mr. Developer</h1><a href = '/about' > Go to About</a><br/><a href = '/services' > Go to Services</a>`)
//     // res.send(`<h1>Welcome Mr. Developer- ${req.query.name}</h1>`)
// })
// app.get('/about', (req, res) => {
//     res.send(`[{
//         id:'1',
//         name: 'Hiren',
//         email:'hiren@mail.com',
//         contact:9987554968'

//     },{
//         id:'2',
//         name: 'Buttki',
//         email:'buttki@mail.com',
//         contact:'9845125648'
//     }
// ]<br/><a href = '/' > Go to Home</a>`)
// })
// app.get('/services', (req, res) => {
//     res.send(`<h1>This is the Service page</h1><br/><a href = '/' > Go to Home</a>`)
// })

// const path = require('path');
// const filepath = path.join(__dirname, 'Module');
// // console.log(filepath);

// app.set('view engine', 'ejs');


// app.get('',(req, res) => {
//     res.sendFile(`${filepath}/index.html`)
// })
// app.get('/profile',(req, res) => {
//     const user = {
//         name:'Mr. Developer',
//         email:'dev@mail.com'
//     }
//     // res.render('profile',{user});
// })
// app.get('/about',(req, res) => {
//     res.sendFile(`${filepath}/about.html`)
// })
// app.get('*',(req, res) => {
//     res.sendFile(`${filepath}/noPage.html`)
// })

// app.listen(8080);



// MongoDB 


// const {MongoClient} = require('mongodb');
// const url = "mongodb://localhost:27017";
// const database = 'E-commerce';
// const client = new MongoClient(url);

// async function getData(){
//     let result = await client.connect();
//     let db = result.db(database);
//     return db.collection('products');
//     // let res = await collection.find({}).toArray();
//     // console.log(res);
    

// }
// getData()

// const getData = require('./mongodb.js')

// const db = async ()=>{
//     let data = await getData();
//     data = await data.find().toArray();
//     // data = await data.find({name:"note 7"}).toArray();
//     console.log(data);
    
// }
// db();