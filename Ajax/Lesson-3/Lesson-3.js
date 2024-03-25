const demo = document.getElementById("demo");

function loadData(){
    // creating a new request 
    const xhr = new XMLHttpRequest();

    // what to do after response arrives
    xhr.onload = function(){

        console.log("Request done");
        demo.innerHTML = xhr.responseText;
    }

    // prepare request methods - get,post,put,options,patch,delete
    xhr.open("GET" , "./data/data.txt" , false); 
    // Here true and false means synchronous and asynchronous

    //send request 
    xhr.send();
    console.log("hi");
}