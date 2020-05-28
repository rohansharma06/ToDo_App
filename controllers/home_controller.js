const ToDo=require('../models/todoList');
module.exports.home=function(req,res){
    // return res.end('<h1>Hellow Rohan</h1>');

    //---- home define name of file in views (home.ejs)
    ToDo.find({},function(err,ToDo_Items){
        if(err){
            console.log('Error in finding DB');
            return;
        }
        return res.render('home',{
            title:"ToDo App",
            ToDo_List:ToDo_Items
        });
    });
}