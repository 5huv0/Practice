const obj = {fname : "ok", lname : "lol" ,
age : 20 , hobby : "singing"};

console.log(obj);

const stringify = JSON.stringify(obj);

console.log(stringify);

// Upper method is obj to string

const array = ['ok' , 'lol', 'singer'];

console.log(array);

const astring = JSON.stringify(array);

console.log(astring);

// Upper method is array to string


// -----------------------------------------------------------------


// This is for storing data using json

// Storing Data
localStorage.setItem("testJSON" , stringify);

// Retriving Data

let text = localStorage.setItem("testJSON");
let Obj = JSON.parse(text);
