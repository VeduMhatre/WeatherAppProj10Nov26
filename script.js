function getweather(event){

	event.preventDefault();	

	let latitude = document.getElementById("latitude");
	let longitude = document.getElementById("longitude");
	let msg = document.getElementById("msg");

	if(latitude.value === "" || longitude.value === ""){
		alert("Latitude & Longitude should not be Empty");
		msg.textContent = "";
		latitude.focus();
		return;
	}

	let url = "https://weatherapplication10nov26.onrender.com/get-weather?latitude=" + latitude.value + "&longitude=" + longitude.value;
	
	fetch(url)
	.then(res => res.json())
	.then(data => {
		if(data.status === "success"){
			let ans = "Temperature " + data["temperature"] + " °C";
			msg.innerHTML=ans;
		}
		else{
			let eans = data["errmsg"];
			msg.textContent = eans;
		}
	})
	.catch(err => {
		msg.textContent = "Error Connecting to server";
	});
}