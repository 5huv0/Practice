// select dom element 

const width = document.getElementById('width');
const height = document.getElementById('height');

// show window object property

width.innerHTML = "window inner width is : " + window.innerWidth;
height.innerHTML = "window inner height is : " + window.innerHeight;

let myWindow;

function openWindow(){
    myWindow = window.open("https://www.youtube.com/watch?v=rePN-VFo1Eo&list=PLHiZ4m8vCp9OkrURufHpGUUTBjJhO9Ghy");
}

function closeWindow(){
    myWindow.close();
}