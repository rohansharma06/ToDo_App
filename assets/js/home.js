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