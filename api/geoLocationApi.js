const demo = document.getElementById('demo');
function getLocation(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition, showError);
        // navigator.geolocation.watchPosition(showPosition, showError); //this is for continuous position
    }
    else{
        demo.innerHTML("Geo Location is not available in your browser!!!");
    }
}

function showPosition(position){
    demo.innerHTML = 
    "Latitude: " + 
    position.coords.latitude +
    "<br/> Longitude: " +
    position.coords.longitude;
}

function showError(error){
   switch (error.code){
    case error.PERMISSION_DENIED:
        demo.innerHTML = "Denied Location";
        break;
    case error.POSITION_UNAVAILABLE:
        demo.innerHTML = "unavailable";
        break;
    case error.TIMEOUT:
        demo.innerHTML = "Timeout";
        break;
    case error.UNKNOWN_ERROR:
        demo.innerHTML = "Error";
        break;
   }
}