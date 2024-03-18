let w;

function startWorker(){
    if(typeof Worker !== "undefined"){


        // if w worker is not already defined
        if(typeof w == "undefined"){

            //creating a worker called w
            w = new Worker("worker.js");
        }

        // listening for worker event / message

        w.onmessage = function(event){
            document.getElementById("demo").innerHTML = event.data;
        }
    }
    else{
        alert("Your browser does not support web worker!!");
    }
}

function stopWorker(){
    if(typeof Worker !== "undefined"){
        w.terminate();
        w = undefined;
    }
    else{
        alert("Your browser does not support web worker!!");
    }
}
