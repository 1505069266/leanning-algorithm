function HashTable(){
  let table = []

  let loseloseHashCode = function(key){
    let hash = 0;
    for(let i = 0; i < key.length; i++){
      hash += key.charCodeAt(i)
    }
    return hash % 37
  }

  this.put = function(key,value){
    let position = loseloseHashCode(key)

    console.log(position + ' - ' + key);
    table[position] = value
  }

  this.get = function(key){
    return table[loseloseHashCode(key)]
  }

  this.remove = function(key){
    table[loseloseHashCode(key)] = undefined
  }

  this.print = function(){
    for(let i = 0; i < table.length; i++){
      if(table[i] !== undefined){
        console.log(i + ": " + table[i]);
      }
    }
  }
}

let hash = new HashTable()

hash.put('朱晓乐','1505069266@qq.com')
hash.put('璇璇','1305348581@qq.com')
hash.put('张晓媛','1329888727@qq.com')


hash.print()

