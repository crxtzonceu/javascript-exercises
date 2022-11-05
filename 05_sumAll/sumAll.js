const sumAll = (x, y) => {
  let sum = 0
  const min = Math.min(x, y)
  const max = Math.max(x, y)
  if(typeof x == 'number' && typeof y == 'number'){
    if(x >= 0 && y >= 0){
      for(let i = min; i <= max; i++){
        sum += i
      }
      return sum
    } else {
      return 'ERROR'
    }
  } else {
    return 'ERROR'
  }
}
// const sumAll = (x, y) => x > 0 && y > 0 ? Array(Math.max(x, y)).fill(1).map((a, b) => a + b).reduce((i, j) => i + j) : "ERROR"
// I didnt finish this one, still need one more test to pass though

// Do not edit below this line
module.exports = sumAll;