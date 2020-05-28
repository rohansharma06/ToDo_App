//----require the library
const mongoose=require('mongoose');

//----connect to the db
mongoose.connect('mongodb://localhost/toDo_App_db');

//---acquire the connection (to check if it is successfull)
const db=mongoose.connection;

//error
db.on('error',console.error.bind(console,'error connectiong to db'));

//if server up and running
db.once('open',function(){
    console.log("Sucessfully connected to the database.");
});