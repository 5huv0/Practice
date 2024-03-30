let a = [1, 3, 4, 56, 6, 7];

let result = a.reduce((previousValue, currentValue, currentIndex, arr) => {
    let sum = previousValue + currentValue;
    return sum ;
}, 0);

console.log(result);