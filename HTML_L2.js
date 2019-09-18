function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
	if (typeof(Storage) !== "undefined") {
		if(localStorage.getItem("Longitude") != null && localStorage.getItem("Latitude") != null) {
			document.getElementById("result").innerHTML = "Latitude: "+localStorage.getItem("Latitude")
						+" , Longitude: "+localStorage.getItem("Longitude");
			// localStorage.clear();
		}
		else {
			// Store
			localStorage.setItem("Latitude", position.coords.latitude);
			localStorage.setItem("Longitude", position.coords.longitude);
			// Retrieve
			document.getElementById("result").innerHTML = "First Visit";
		}
	} else {
		document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
	}
}

function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
}
