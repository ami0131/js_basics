// function doSomething(input) {
//     return input * input;
// }
// let result=doSomething(15);

// console.log(result);



function calculate(num1, num2, operation){
    let answer;
    if(operation =="+"){
        answer =num1 +num2;
    }else if (operation =="-"){
        answer =num1 -num2;
    }else if (operation =="*"){
        answer =num1*num2;
    }else if (operation =="/"){
        answer=num1/num2;
    }
    return answer 
}
let answer= calculate(10, 20,"*");
console.log("answer", answer);
