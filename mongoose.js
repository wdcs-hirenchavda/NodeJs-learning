const mongoose = require('mongoose');

const main =async ()=>{
    await mongoose.connect('mongodb://localhost:27017/E-commerce');
    const ProductShema = new mongoose.Schema({
        name:String,
        brand:String,
        price:Number,
        category:String,
    });
    const ProductModel = mongoose.model('products',ProductShema);
    let data = await ProductModel({name:'oneplus-9R', brand:'oneplus', price:1000, category:'mobile'});
    await data.save();
    console.log(data);
    
}
main();