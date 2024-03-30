const a = [2, 544, 67, 87,89 ,23, 56, 7, 9];

let result = a.filter(function(currentValue, index , arr){
    return currentValue > 49;
});

console.log(result);