// let zeel ={
//     salary:200000,
//     socialInsurance:500,
//     passport:false,
//     person:true,
//     dept:1000000
// }
//     if(salary>=2000000 && socialInsurance>0 && (passport|| identitycard) && (person|| itgemjl) && dept>1000000)
//     {
//     console.log('yes');
//     }else console.log('no');
    

function loan(salary, ndsh, passport, id, person, cred, dept) {​​​​​​​​
if (
salary>2000000&&
ndsh=="yes"&&
 (passport=="yes"||id=="yes") &&
 (person=="yes"||cred=="yes") &&
dept<1000000
 ) {​​​​​​​​
console.log("You are allowed to lend money");
 }​​​​​​​​ else {​​​​​​​​
console.log("Sorry, You are not allowed to lend money");
 }​​​​​​​​
}​​​​​​​​
 console.log ;loan(2300000, "yes", "yes", "no", "no", "yes", 500000);
