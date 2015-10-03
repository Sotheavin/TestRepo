function renderTime(){
	var currentTime = new Date();
	var d = getDayName(currentTime.getDay());
	var m = getMonthName(currentTime.getMonth());
	var y = currentTime.getFullYear();
	//var diem = "AM";
	var h = currentTime.getHours();
	var mi = currentTime.getMinutes();
	var s = currentTime.getSeconds();

	alert
	if(h ==0){
		h=12;
	}else if(h >12){
		h =h -12;
		//diem ="PM";
	}

	if(h<10){
		h = "0" +h;
	}
	if(mi<10){
		mi = "0" +mi;
	}
	if(s<10){
		s = "0" +s;
	}

	var myClock= document.getElementById("clock");
	var time = h + ":" + mi + ":" + s +" " ;//+ diem;
	//var date = d + "/" + m + "/" + y + " " ;
	//myClock.textContent = date + time;

	myClock.textContent = time;
	
	setTimeout('renderTime()',1000);
}

function getMonthName(monthNumber){
	var monthNames = ["January","February","March","April","May","June","July","August","September","October","November","December"];
	return monthNames[monthNumber];
}

function getDayName(dayNumber){
	var dayNames = ["Monday","Tuesday","Wednesday","Thursday","Friday","Satursday","Sunday"];
	return dayNames[dayNumber];
}