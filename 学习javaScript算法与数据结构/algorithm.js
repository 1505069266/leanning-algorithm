//递归
//递归是一种解决问题的方法，它解决问题的各个小部分，直到解决最初的大问题。通常涉及函数调用自身。
// var recursiveFunction = function(someParam){
//   recursiveFunction(someParam);
//  };

//  var recursiveFunction1 = function(someParam){
//   recursiveFunction2(someParam);
//  };
//  var recursiveFunction2 = function(someParam){
//   recursiveFunction1(someParam);
//  }; 

// var i = 0;
// function recursiveFn () {
//  i++;
//  recursiveFn();
// }
// try {
//  recursiveFn();
// } catch (ex) {
//  console.log('i = ' + i + ' error: ' + ex);
// } 


function fibonacci(num) {
  if (num === 1 || num === 2) {
    return 1;
  }
  return fibonacci(num - 1) + fibonacci(num - 2);
}

console.log(fibonacci(10));


function fib(num) {
  var n1 = 1,
    n2 = 1,
    n = 1;
  for (var i = 3; i <= num; i++) {
    n = n1 + n2;
    n1 = n2;
    n2 = n;
  }
  return n;
}

console.log(fib(10));


function MinCoinChange(coins) {
  var coins = coins; //{1}
  var cache = {}; //{2}
  this.makeChange = function (amount) {
    var me = this;
    if (!amount) { //{3}
      return [];
    }
    if (cache[amount]) { //{4}
      return cache[amount];
    }
    var min = [],
      newMin, newAmount;
    for (var i = 0; i < coins.length; i++) { //{5}
      var coin = coins[i];
      newAmount = amount - coin; //{6}
      if (newAmount >= 0) {
        newMin = me.makeChange(newAmount); //{7}
      }
      if (
        newAmount >= 0 && //{8}
        (newMin.length < min.length - 1 || !min.length) //{9}
        &&
        (newMin.length || !newAmount) //{10}
      ) {
        min = [coin].concat(newMin); //{11}
        console.log('new Min ' + min + ' for ' + amount);
      }
    }
    return (cache[amount] = min); //{12}
  };
}

function MinCoinChange1(coins) {
  var coins = coins; //{1}
  this.makeChange = function (amount) {
    var change = [],
      total = 0;
    for (var i = coins.length; i >= 0; i--) { //{2}
      var coin = coins[i];
      while (total + coin <= amount) { //{3}
        change.push(coin); //{4}
        total += coin; //{5}
      }
    }
    return change;
  };
}

let m = new MinCoinChange1([5, 11, 20, 50, 100])
console.log(m.makeChange(88));