let w;

function startWorker(){
    if(typeof Worker !== "undefined"){


        // if w worker is not already defined
        if(typeof w == "undefined"){

            //creating a worker called w
            w = new Worker("worker.js");
        }
    }
    else{
        alert("Your browser does not support web worker!!");
    }
}