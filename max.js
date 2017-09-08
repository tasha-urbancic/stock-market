
var max = function(a, b){
  if (b > a) {
    return b;
  } else {
    return a;
  }
}

var maxArr = function(arr){
  var maxVal = arr.reduce(max, arr[0]); 
  return maxVal;
}

module.exports = maxArr;