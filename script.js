// BOM Practice


// topic 1
// window.lenght/height
// window.open/close

const width = document.getElementById('width');
const height = document.getElementById('height');

// show window object property

width.innerHTML = "window inner width is : " + window.innerWidth;
height.innerHTML = "window inner height is : " + window.innerHeight;

var myWindow;

function openWindow(){
    myWindow = window.open("https://www.youtube.com/watch?v=rePN-VFo1Eo&list=PLHiZ4m8vCp9OkrURufHpGUUTBjJhO9Ghy");
}

function closeWindow(){
    myWindow.close();
}


// topic 2
// screen.width /height /availWidth /availHeight /colorDepth /pixelDepth


// topic 3
// window.href /hostname / pathname /protocol

const href = document.getElementById("href");
const hostname = document.getElementById("hostname");
const pathname = document.getElementById("pathname");
const protocol = document.getElementById("protocol");

href.innerHTML = "Window href :" + window.location.href;
hostname.innerHTML = "Window hostname :" + window.location.hostname;
pathname.innerHTML = "Window pathname :" + window.location.pathname;
protocol.innerHTML = "Window protocol :" + window.location.protocol;

//topic 4
// window.history.back /forward


function goForward(){

    window.history.forward();
}

function goBack(){
    
    window.history.back();
}
