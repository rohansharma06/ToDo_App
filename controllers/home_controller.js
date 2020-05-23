module.exports.home=function(req,res){
    // return res.end('<h1>Hellow Rohan</h1>');

    //---- home define name of file in views (home.ejs)
    return res.render('home',{
        title:"ToDo App"
    });
}