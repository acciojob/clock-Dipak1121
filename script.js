//your JS code here. If required.
let para = document.getElementById("timer");
function updateTime(){
	let now = new Date();
	let date = now.toLocaleDateString();
	let time = now.toLocaleTimeString();
	para.innerText = `${date}, ${time}`;
}

setInterval(updateTime, 1000);
updateTime();