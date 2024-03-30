var array = [1, 2, 3, 4 , 56,[100, 500, 7], 6 ,57];

var [,,,,,[,a,],b] = array; // blank before comma means skipping values

console.log(a , b);



//-------------------------------------------------------------------

// sawaping using destructure


let x = 57;
let y = 89;

[y ,x] = [x, y];

console.log(x, y);