var numbers = [1, 2, 3, 4];

var a = [...numbers]; // here if i change numbers a will not change it will remain [1,2,3,4]

var b = [...numbers , 6, 7, 8, 9];

console.log(numbers);
console.log(a);
console.log(b);