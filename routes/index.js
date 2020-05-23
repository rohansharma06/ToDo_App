const express=require('express');
const router=express.Router(); //---- express router use to fetch the controller
const homeController=require('../controllers/home_controller');  //---- fetching homeContoller

console.log("router loded");

router.get('/',homeController.home);

module.exports=router;
