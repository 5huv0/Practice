// let array = [1, 2, 3, 4, 5, 6, 7];

// let result = array.find(function(currentValue, currentIndex, arr) // currentValue hocche iterated value such as : prothome 1 , 2, 3 eivabe jabe sob gula value te 
// {
//     return currentValue > 6;
//     // return currentIndex;
//     // return arr;
// });

// console.log(result);


class Student{
        constructor(name, age){
            this.name = name;
            this.age = age;
        }


    test(){
        console.log("hi");
    }

    examplefunction(){
        let array = [1, 2, 3, 4];
        array.find(function(){
            this.test();
        },this);
}
}

let student = new Student("shuvo", 23);

student.examplefunction();


