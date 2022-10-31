const repeatString = function(string, num) {
  let rep = ""
  for(let i = 0;i < num;i++){
    rep += string
  }
  if(num < 0){
    return "ERROR"
  } else {
    return rep
  }
};

// Do not edit below this line
module.exports = repeatString;
