function setCookie(cname, cvalue, exdays) {
	var d = new Date();
	//getTime() converts GMT time to millisecond
	//setTime() get milliseconds and give GMT time
	d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
	//toUTCstring() display UTC date and time as string(converts a Date object to a string)
	var expires = "expires="+d.toUTCString();
	document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/;";
}
function getCookie(cname) {
	var name = cname + "=";
	var decodedCookie = decodeURIComponent(document.cookie);
	var ca = decodedCookie.split(';');
	for(var i = 0; i < ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0) == ' ') {
			c = c.substring(1);
		}
		if(c.indexOf(name) == 0) {
			return c.substring(name.length, c.length);
		}
	}
	return "";
}
function checkCookie() {
	var username = getCookie("username");
	if(username != "" ) {
		alert("Welcome again " + username);
	} else {
		username = prompt("Please enter your name:", "");
		if(username !="" && username !=null) {
			setCookie("username", username, 30);
		}
	}
}
