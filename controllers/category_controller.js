const ToDo=require('../models/todoList');
module.exports.go=function(req,res){

    var displayCategoryData=req.query.category; //---- fetch which category to display
    console.log(displayCategoryData);
    //---- if category=all
    if(displayCategoryData==='all'){
        return res.redirect('/');
    }
    //---- for remaining category (ToDo_Items will store data of the selected category)
    else{
        ToDo.find({category:displayCategoryData},function(err,ToDo_Items){
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
}
