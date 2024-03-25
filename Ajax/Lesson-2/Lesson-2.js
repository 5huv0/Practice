const demo = document.getElementById("demo");
const demo2 = document.getElementById("demo2");

function loadData(callBackF){
    // creating a new request 
    const xhr = new XMLHttpRequest();

    // what to do after response arrives
    xhr.onload = function(){
        callBackF(this);
    };

    // prepare request methods - get,post,put,options,patch,delete
    xhr.open("GET" , "./data/data.txt");

    //send request 
    xhr.send();
}

function myCallBack1(xhr){
    demo.innerHTML = xhr.responseText;
}

function myCallBack2(xhr){
    demo2.innerHTML = xhr.responseText;
}