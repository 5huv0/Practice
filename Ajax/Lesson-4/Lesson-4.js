const demo = document.getElementById("demo");

function loadData(){
    // creating a new request 
    const xhr = new XMLHttpRequest();

    // what to do after response arrives
    xhr.onload = function(){
        demo.innerHTML = this.responseText;

        console.log(this.getAllResponseHeaders());
        console.log(this.getResponseHeader("etag")); //single header information

    }

    // prepare request methods - get,post,put,options,patch,delete
    xhr.open("GET" , "./data/data.txt");

    //send request 
    xhr.send();

}