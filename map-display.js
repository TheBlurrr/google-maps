let map;

	function initMap(){
		var options = {
			zoom:10,
			center:{lat:33.935714, lng:-118.026133}
		}
		var map = new
		google.maps.Map(document.getElementById('map'), options);
	}