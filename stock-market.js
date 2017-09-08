var min = require('./min');
var max = require('./max');

function stockMarket(arr) {

  var maxProfit = 0;

  for (var i = 0; i < arr.length-1; i++) {
    // only look forward in time after you purchase stock
    var arrReduced = arr.slice(i);
    
    var currVal = arrReduced[0];
    var maxCurr = max(arrReduced);
    var tempMaxProfit = maxCurr-currVal;
    
    // if can make more profit at this time, replace max
    if (tempMaxProfit > maxProfit) {
      maxProfit = tempMaxProfit;
    }
  
  }

  // if you make no profit today, return -1
  if (maxProfit === 0) {
    return -1;
  } else {
    return maxProfit;
  }
  
}

// var maxGainsToday = stockMarket([45, 24, 35, 31, 40, 38, 11]);
var maxGainsToday = stockMarket([10, 9, 8, 7, 6, 5]);
console.log(`The max gains for today could have been ${maxGainsToday}`);
