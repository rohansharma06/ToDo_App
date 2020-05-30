const ToDo=require('../models/todoList');
//---- deleting delected task
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

//---- deleting all task
module.exports.all=function(req,res){
    ToDo.find({},function(err,list){
        for(let i of list){
            ToDo.findByIdAndDelete(i._id,function(err){
                if(err){
                    console.log("Error in deleting a task");
                    return;
                }
                // console.log(req.query);
                // return res.redirect('/');
            });
        }
    });
    return res.redirect('/');
}
