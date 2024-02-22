const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const port = 3000;
const productRoutes = require('./routes/productRoutes');


const dburl = "mongodb+srv://zakariasahib85:zakariasahib85@cluster0.dgzvsyw.mongodb.net/?retryWrites=true&w=majority"


mongoose.connect(dburl,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then((dbo)=>{
    console.log("DB connected")
},(err)=>{
    console.log("error")
});

app.use(express.json())

app.use('/api', productRoutes);

app.listen(port, () => {
   console.log(`Server is running on http://localhost:${port}`);

});
