function modifiers(strings , ...values){
    const m = strings.reduce((prev , current) => {
        return prev + current + (values.length ? "Mr. " + values.shift() : "");
    }, "");
    return m;
}

var player1 = 'shakib';
var player2 = 'tamim';

console.log(modifiers`we have ${player1} and ${player2} in our team`);