function Stack(){
  let items = []
  this.push = function(element){
    items.push(element)
  }
  this.pop = function(){
    return items.pop()
  }

  this.peek = function(){
    return items[items.length-1]
  }

  this.isEmpty = function(){
    return items.length==0
  }

  this.size = function(){
    return items.length
  }

  this.clear = function(){
    items = []
  }

  this.print = function(){
    console.log(items);
  }
}

let arr = new Stack()


/**
 * 
 * @param {传入一个十进制的数} decNumber 
 * @param {需要被转换的进制  2-16} base 
 * @return {返回一个十进制被转化成指定进制的数}
 */

function divideBy(decNumber,base){
  let remStack = new Stack(),rem,binaryString = '',digits="0123456789ABCDEF";
  while(decNumber > 0){
    rem = Math.floor(decNumber % base);
    remStack.push(rem)
    decNumber = Math.floor(decNumber / base)
  }

  while(!remStack.isEmpty()){
    binaryString += digits[remStack.pop()]
  }
  return binaryString
}

console.log(divideBy(2222,9));