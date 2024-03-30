const user = {
    name : "majumder",
    age : 20,
    hobby : "singing"
};

const {name} = user; // eikhane name nam e variable er moddhei store hoise jodi variable change korte chai tahole method 2 use korbo

const { name : title } = user; // eikhane title er vetor store hoise 

console.log(name);

console.log(title);



//------------------------------------------------------------------------------------------------

const user2 = {
    name : "dhri",
    age : 20,
    hobby : "singing",
    education : {
        degree : "BSC",
        dept : "EEE",
        level : 3
    }
};

const {education : {level : any} } = user2;

console.log(any);