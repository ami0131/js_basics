function ditenumber(a) {
  let ar = a % 10;
  let er = (a - ar) / 10;
  return ar * er;
}
let arr = ditenumber(27);
console.log(arr);
