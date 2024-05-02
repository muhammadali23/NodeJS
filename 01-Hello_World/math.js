function add(a, b) {
  console.log(a + b);
}
function sub(a, b) {
  console.log(a - b);
}
// add(3, 4);
module.exports = {
  addfun: add,
  subfun: sub,
};
