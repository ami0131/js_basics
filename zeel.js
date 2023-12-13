function loan(salary, ndsh, inpersontype, dept,id){
    if(
        salary > 2000000 &&
        ndsh=="tuldug"&&
        (inpersontype=="inperson"|| inpersontype=="cred")&&
        dept<1000000 &&
        (id=="passport"|| id=="identification card")
    ){
        console.log("yes");
    }else console.log("no");
}
let answer = loan(2000001, "tuldug","inperson",500000,"passport");