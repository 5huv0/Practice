const get = document.getElementById("get");
const send = document.getElementById("send");

get.addEventListener("click", getData);
send.addEventListener("click", sendData);

function sendRequest(method , url , data){
    const promise = new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest(); 

        xhr.onload = function(){
            if(this.status >= 400){
                reject(`There was an bug!! and the response status is ${this.status}`);
            }

            else {
                resolve(this.response);
            }
            
        }

        xhr.onerror = function(){
            reject("error");
        }


        xhr.open(method, url);

        xhr.responseType = "json";

        xhr.send(data);
    })

    return promise;
}

function getData(){

    sendRequest("GET", "https://jsonplaceholder.typicode.com/todos/1").then(responseData =>{
        console.log(responseData);
    })

    .catch((err) => {
        console.log(err);
    });
}

function sendData(){

    sendRequest("POST",
     "https://jsonplaceholder.typicode.com/posts", JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1,
      })).then(responseData =>{
        console.log(responseData);
    });
}

