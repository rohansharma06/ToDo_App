//---- fetching curr date/year/day/month
var today=new Date();

var date=today.getDate().toString();
document.getElementById("todayDate").innerHTML=date;

var month=["Jan","Feb","Mar","Apr","May","June","July","Aug","Sep","Oct","Nov","Dec"];
var mon=today.getMonth();
document.getElementById("month").innerHTML=month[mon];

var year=today.getFullYear().toString();
document.getElementById("year").innerHTML=year;

var days=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
var day=today.getDay();
document.getElementById("currDay").innerHTML=days[day-1];

//---- set value and min property of dueDate input
let mydueDate;
if(today.getMonth()+1 >=9){
    mydueDate=today.getFullYear()+"-"+("0"+(today.getMonth()+1))+"-"+today.getDate();
}
else{
    mydueDate=today.getFullYear()+"-"+("0"+(today.getMonth()+1))+"-"+today.getDate();
}
var find=document.querySelector('input[type="date"]');
find.value=mydueDate;
find.min=mydueDate;

// ---- changing 
// function cate(category){
//     console.log(category);
//     return;
// }
// var cate=document.getElementsByClassName("listItems").id;
// console.log(cate);
