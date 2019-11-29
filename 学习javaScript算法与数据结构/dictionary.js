function Dictionary(){
  let items = {}

  this.has = function(key){
    return key in items
  }

  this.set = function(key, value){
    items[key] = value
  }

  this.remove = function(key){
    if(this.has(key)){
      delete items[key]
      return true
    }else{
      return false
    }
  }

  this.get = function(key){
    return this.has(key)?items[key]:undefined
  }

  this.values = function(){
    let values = []
    for(let i in items){
      if(this.has(i)){
        values.push(items[k])
      }
    }
    return values
  }

  this.clear = function(){
    items = {}
  }

  this.print = function(){
      console.log(items);
  }

  this.size = function(){
      return Object.keys(items).length
  }

  this.getItems = function(){
    return items
  }

}

let dictionary = new Dictionary()

dictionary.set('朱晓乐','1505069266@qq.com')
dictionary.set('朱晓飞','1305348581@qq.com')
console.log(dictionary.has('朱晓乐'));
console.log(dictionary.size());