function Queue(){
    let items = []
    
    this.enqueue = function(elements){
            items.push(elements)

        
    }

    this.dequeue = function(){
        return items.shift()
    }

    this.front = function(){
        return items[0]
    }

    this.size = function(){
        return items.length
    }

    this.print = function(){
        console.log(items);
    }

    this.isEmpty = function(){
        return items.length==0
    }
}

/**
 * @method 击鼓传花小游戏
 * @param {传入一个数组,即所有玩游戏的小伙伴} nameList 
 * @param {*} num 
 */
function hotPotato(nameList, num){
    let queue = new Queue()

    for(let i=0;i < nameList.length; i++){
        queue.enqueue(nameList[i])
    }

    let eliminated = ''

    while(queue.size() > 1){
        for(let i =0; i<num;i++){
            queue.enqueue(queue.dequeue())
        }

        eliminated = queue.dequeue()
        console.log(eliminated + "在击鼓传花中被淘汰!");
    }

    return queue.dequeue()
}

let names = ['璇璇','乐乐','飞飞','春春']
let winner = hotPotato(names,Math.ceil(Math.random()*10))
console.log('胜利者' + winner);