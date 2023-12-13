function digits(a) {
  let  ab=((a %100) - (a %10)) / 10;
  return ab;
}
let ner = digits(423);
console.log(ner);
