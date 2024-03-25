const get = document.getElementById("get");
const send = document.getElementById("send");

function getData(){
 const xhr = new XMLHttpRequest();

 xhr.onload = function(){
    console.log(this.responseText);
 }

 xhr.open("GET" , "https://jsonplaceholder.typicode.com/todos/1");

 xhr.send();
}

function sendData(){

}