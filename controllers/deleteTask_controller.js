const ToDo=require('../models/todoList');
module.exports.delete=function(req,res){
    let id=req.query.id;

    ToDo.findByIdAndDelete(id,function(err){
        if(err){
            console.log("Error in deleting a task");
            return;
        }
        console.log(req.query);
        return res.redirect('back');
    });
}
