const mongoose=require('mongoose');

//---- Defining schema structure form my toDo app =>Document

const toDoSchema=new mongoose.Schema({
    taskName:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    dueDate:{
        type:Date,
        required:true
    }
});

//---- adding document to collection
const ToDo=mongoose.model('todoList',toDoSchema);

module.exports=ToDo;