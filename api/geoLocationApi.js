const demo = document.getElementById('demo');
function getLocation(){
    if(navigator.geolocation){

    }
    else{
        demo.innerHTML = "Geo Location is not available in your browser!!!"
    }
}