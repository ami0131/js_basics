function ss(a,b,c,d){
    sum=sum=0
    if(a>80){
        sum=sum+a;
    }
    if(b>80){
        sum=sum+b;
    }
    if(c>80){
        sum=sum+c;
    }
    if(d>80){
        sum=sum+d
    }return sum
}
let a = ss(85, 75, 96, 60);
console.log(a);