const ages = [32, 33, 16, 40];
const result = ages.filter(checkAdult);
console.log(result)

function checkAdult(age) {
  return age >= 18;
}

const result2 = ages.filter((age) => { return age >= 18; });
console.log(result2)

// function checkAdult(age) {
//   return age >= 18;
// }