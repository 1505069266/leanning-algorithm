function Set(){
    let items = {}
    
    this.has = function(value){
        return items.hasOwnProperty(value)
    }

    this.add = function(value){
        if(!this.has(value)){
            items[value] = value;
            return true
        }else{
            return false
        }
    }

    this.remove = function(value){
        if(this.has(value)){
            delete items[value]
            return true
        }else{
            return false
        }
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
    
    this.sizeLegacy = function(){
        let count = 0;
        for(let item in items){
            if(items.hasOwnProperty(item)){
                ++count
            }
        }
        return count
    }

    this.values = function(){
        return Object.keys(items)
    }
}

let set = new Set()

set.add('name')
set.add('age')
set.print()
console.log(set.size());
console.log(set.values());

console.log(set.has('name'));


function Set(){
    let items = {}
    
    this.has = function(value){
        return items.hasOwnProperty(value)
    }

    this.add = function(value){
        if(!this.has(value)){
            items[value] = value;
            return true
        }else{
            return false
        }
    }

    this.remove = function(value){
        if(this.has(value)){
            delete items[value]
            return true
        }else{
            return false
        }
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
    
    this.sizeLegacy = function(){
        let count = 0;
        for(let item in items){
            if(items.hasOwnProperty(item)){
                ++count
            }
        }
        return count
    }

    this.values = function(){
        return Object.keys(items)
    }

    //并集
    this.union = function(otherSet){
        let unionSet = new Set()
    
        let values = this.values()
        
        for(let i = 0; i < values.length; i++){
            unionSet.add(values[i])
        }

        values = otherSet.values()
        for(let i = 0; i < values.length; i++){
            unionSet.add(values[i])
        }

        return unionSet
    }

    //交集
    this.insersection = function(otherSet){
        let insersectionSet = new Set()

        let values = this.values();
        for(let i = 0; i < values.length; i++){
            if(otherSet.has(values[i])){
                insersectionSet.add(values[i])
            }
        }
        return insersectionSet
    }

    //差集
    this.differece = function(otherSet){
        let differeceSet = new Set()

        let values = this.values()
        for(let i = 0; i < values.length; i++){
            if(!otherSet.has(values[i])){
                differeceSet.add(values[i])
            }
        }
        return differeceSet
    }

    //子集
    this.subset = function(otherSet){
        if(this.size() > otherSet.size()){
            return false
        }else{
            var values = this.values()
            for(let i =0; i < values.length; i++){
                if(!otherSet.has(values[i])){
                    return false
                }
            }
            return true
        }
    }
}

let setA = new Set()
setA.add(1)
setA.add(2)
setA.add(5)
let setB = new Set()
setB.add(5)
setB.add(55)
setB.add(57)
setB.add(58)

let AB = setA.union(setB)
console.log(AB.values());
console.log(setA.insersection(setB).values());
console.log(setA.differece(setB).values());
