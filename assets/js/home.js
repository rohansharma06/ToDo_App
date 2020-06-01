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
    var month;
    var date;
    if(today.getMonth()+1<=9){
        month="0"+(today.getMonth()+1);
    }else{
        month=(today.getMonth()+1);
    }

    if(today.getDate()<=9){
        date="0"+today.getDate();
    }else{
        date=today.getDate();
    }
    //console.log(month);
    mydueDate=today.getFullYear()+"-"+month+"-"+date;
    console.log(mydueDate);
    var find=document.querySelector('input[type="date"]');
    find.setAttribute("value",mydueDate);
    find.setAttribute("min",mydueDate);
    //find.value=mydueDate;
    find.min=mydueDate;

// ---- Display notification on adding/deleting tast----
    const notifyContainer = document.getElementById('notify'); 

    function notification(type){ //--- type define is task deleting/Adding
        if (type === 'error') {
            notifyContainer.classList.remove('notify-success');
            notifyContainer.classList.add('notify-error');
            notifyContainer.innerText = "Task Deleted Sussecfully!";
        }else if(type==='deleteAll'){
            notifyContainer.classList.remove('notify-success');
            notifyContainer.classList.add('notify-error');
            notifyContainer.innerText = "Clearing DataBase!!";
        }else if (type === 'success') {
            notifyContainer.classList.remove('notify-error');
            notifyContainer.classList.add('notify-success');
            var check=document.getElementById("check").value; //---- to check is input field is empty
            if(check){
                notifyContainer.innerText = "Task Added successfully";
            }else{
                notifyContainer.classList.remove('notify-success');
                notifyContainer.classList.add('notify-error');
                notifyContainer.innerText = "Input Field's can't be empty!!";
            }
        }
        notifyContainer.style.display = 'block';

        setTimeout(() => {    //---- show notification only for 1 sec
            notifyContainer.style.display = 'none';
        }, 1000)
    }
