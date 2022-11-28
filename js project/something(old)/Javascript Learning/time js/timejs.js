window.onload = function() { setInterval( clockread, 100); }

function clockread() {
	let time = new Date();
	let curtime = document.getElementById("clock").innerHTML;
	let hr = time.getHours();
	let min = time.getMinutes();
	let sec = time.getSeconds();
    let frame = "AM"

    switch (true) {
        case (hr == 12):
            document.getElementById('clocktext').innerHTML = "it's noon!";
            break;
        case (hr >= 13 && hr <= 16):
            document.getElementById('clocktext').innerHTML = "it's afternoon!";
            break;
        case (hr >= 17 && hr <= 21):
            document.getElementById('clocktext').innerHTML = "it's evening!";
            break;
        case (hr >= 22 && hr <= 23):
            document.getElementById('clocktext').innerHTML = "it's night!";
            break;
        case (hr == 0):
            document.getElementById('clocktext').innerHTML = "it's midnight!";
            break;
        case (hr >= 1 && hr <= 11):
            document.getElementById('clocktext').innerHTML = "it's morning!";
            break;
    }

    if (hr >= 12 && hr <= 23) 
    {
        frame = "PM"
    } else {
        frame = "AM"
    }

    if (hr >= 13 && hr <= 23) {
        hr -= 12
    }

	if (hr < 10)
    {
    	hr = "0" + hr;
    }

    if (min < 10)
    {
        min = "0" + min;
    }

    if (sec < 10)
    {
        sec = "0" + sec;
    }

	document.getElementById('clock').innerHTML = hr+':'+min+':'+sec+" "+frame;
}