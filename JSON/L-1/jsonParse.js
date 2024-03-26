const json1 = '{ "name" : "shuvo", "hobby" : "photography", "aim" : "nothing"}';

console.log(json1); // This one id json formate

const myObj1 = JSON.parse(json1); // parse is making object or whatever in json formate. json to obj

console.log(myObj1); // This is not json this is now a valid object


// --------------------------------------------------------------



const json = '{"name" : "shuvo", "birth" : "09-06-99" , "hobby" : "gaming" , "aim" : "sleeping"}';

console.log(json);

const myObj = JSON.parse(json, function(key, value){
    if(key === "birth"){
        return new Date(value);
    }
    return value;
});

console.log(myObj);