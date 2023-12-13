function findnumber( a,){
    let c =parseInt(a/100);
    let b =parsenInt((a/10)%10);
    let  d =parsenInt a % 10;
    return c+b+d;
}
let beeb = findnumber(123)
console.log(beeb)