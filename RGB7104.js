function less(a,b,c,d){
    if(a<b && a<c && a<d){
        return a;
    }else if (b<a&&b<c&&b<d){
        return b;
    }else if (c<a&&c<b&&c<d){
        return c;
    }else if ( d<a&&d<b&&a<c){
        return d;
    }
    
}
let a = less(1, 2, 3,7);
console.log(a);