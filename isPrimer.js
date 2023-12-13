function isPrime(a) {
  for (i = 2; i < a; i = i + 1)
    if (a % i == 0) {
      return false;
    }
  return true;
}

let ar = isPrime(100);
console.log(ar);
  

let cound=0;
let array=[]
