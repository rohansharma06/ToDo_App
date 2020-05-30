const ToDO=require('../models/todoList');
module.exports.create=function(req,res){
    // console.log(typeof(req.body.dueDate));
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
};