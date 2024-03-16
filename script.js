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


//topic 5
//window.navigator

//topic 6
//window.alert / confirm / prompt

function Alert(){
 window.alert("dont click!!!");  
}

const Ok = document.getElementById("ok");

function Confirm(){
    let txt ;

    if(window.confirm("press a button")){
        txt = "you pressed ok!!";
    }
    else{
        txt = "you pressed cancel";
    }

    Ok.innerHTML = txt ;
}

const Cancle = document.getElementById("cancle");
function Prompt(){
    let txt;
    let person = window.prompt("Enter your name:" , "Hridi");  

    if(person === null || person === ""){
        txt = "User cancelled the prompt!!"
    }
    else{
        txt = "Hi " + person + " Are you ok?"
    }

    Cancle.innerHTML = txt;

}

//topic 7
//settimeout / setinterval


const timeout = document.getElementById("timeout");
const interval = document.getElementById("interval");

function timeOut(){
    setTimeout(function(){
        timeout.innerHTML = "you clicked timeout";
    }, 1000);
}

function Interval(){
    setInterval(function(){
        interval.innerHTML = new Date().toLocaleTimeString();
    }, 1000);
}

//topic 8
// cookies
//document.cookie


function setName(cname, cvalue, edays){
    const d = new Date();
    d.setTime(d.getTime() + edays * 24 * 60 * 60 * 1000);
    let expires = " expires = " + d.toUTCString();

    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}


function getName(cname){
    let name = cname + "=";
    let ca = document.cookie.split(";");

    for(let i =0 ; i<ca ; i++){
        let c = ca[i];

        while(c.charAt(0) === " "){
            c = c.substring(1);
        }
        if(c.indexOf(name) === 0){
            return c.substring(name.length);
        }
    }

    return "";
}

