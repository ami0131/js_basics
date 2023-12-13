// let firstname = "js";
// let myAge = 22;

// console.log(firstname);
// console.log(myAge);

// let num1 = 10;
// let num2 = 10;

// let sum = num1 + num2;
// console.log(num1 + num2);
// console.log(num1 * num2);

// let x = 5;
// console.log(x*x + 3*x +2);
 
// if (x>y){
//     console.log("x is bigger");
// } else{
//     console.log("y is bigger")
// }
// data types
 
let day=3;
else if (day<2){
    console.log("monday")
}
else if (day<3){
    console.log("2dx")
}
else if (day<4){
    console.log("3dx")
}
else if (day<5){
    console.log("")
}
else if (day<6){
    console.log("monday")
}
else if (day<7){
    console.log("monday")
}
else if (day<8){
    console.log("monday")
}

let mid1 = 70;
let mid2 = 30;
let mid3 = 90;

let avg = (mid1/4 + mid2/4 + mid3) /2;
console.log(avg);

console.log(avg);
if(avg <60){
    console.log("F");
}else if(avg <70){
    console.log("D");
}else if (avg<80){
    console.log("C");
}else if(avg<90){
    console.log("B");
}else if(avg <100){
    console.log("A");
}


function findmonth(day){
   if(day >= 1 && day <=31 ){
        return"january"
    }else if(day <=59) {
        return"february"
    }else if(day <=90) {
        return"march"
    }else if(day <=121) {
        return"april"
    }else if(day <=152) {
        return"may"
    }else if(day <=183) {
        return"june"
    }else if(day <=214) {
        return"juli"
    }else if(day <=245) {
        return""
    }else if(day <=276) {
        return "august";
    }else if(day <=307) {
        return"sept"
    }else if(day <=338) {
        return"oct"
    }else if(day <=369) {
        return"november"
    }
}
console.log(findmonth(300));
