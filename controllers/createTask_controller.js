const ToDO=require('../models/todoList');
module.exports.create=function(req,res){
    ToDO.create({
        taskName:req.body.taskName,
        category:req.body.category,
        dueDate:req.body.dueDate
    },function(err,newToDo){
        if(err){
            console.log("Error in creating a ToDo");
            return;
        }
        console.log('*****',newToDo);
        return res.redirect('/');
    });
    // console.log(req.body.taskName);
    // console.log(req.body.category);
    // console.log(req.body.dueDate);
    // return res.redirect('/');
};