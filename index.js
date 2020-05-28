//----Require express and give port and use app
const express=require('express');
const port=8000;
const app=express();
const db=require('./config/mongoose');
//---- excessing static folder
app.use(express.static('assets'));

//---- using ejs Template
app.set('view engine','ejs');
app.set('views','./views');

//---- routing 
app.use('/',require('./routes'));



app.listen(port,function(err){
    if(err){
        console.log(`Error in running the server: ${err}`);
    }
    console.log(`Server is up and running on port: ${port}`);
});

