window.addEventListener('load', function(evt){
	evt.preventDefault();

	var interval;
	
	var durationFromDD;

	var duration;

	document.getElementById('pingButt').addEventListener('click', function(){
		durationFromDD = $('#list option:selected').text();
		duration = convertTime(durationFromDD);
		interval = setInterval(pingPage, duration);
	});

	document.getElementById('stopPing').addEventListener('click', function(){
		clearInterval(interval);
	});
	
	
});

function pingPage(){
	var linkID = document.getElementById('linkID');
	var link = linkID.value;
	window.open(link, "myPage");
}

function convertTime(time){
	var msTime;
	switch(time){
		case "5 seconds": msTime = 5000; break;
		case "10 seconds": msTime = 10000; break;
		case "1 minute": msTime = 60000; break;
		case "5 minutes": msTime = 300000; break;
		case "10 minutes": msTime = 600000; break; 
	}


	return msTime;
}