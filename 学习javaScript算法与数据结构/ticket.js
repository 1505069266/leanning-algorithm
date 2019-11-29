function Queue(){
    let items = []
    this.enqueue = function(elements){
        for(let i = 0; i < elements.length;i++){
            items.push(elements[i])
        }
    }
    this.dequeue = function(){
        items.shift()
    }
    this.front = function(){
        return items[0]
    }
    this.isEmpty = function(){
        return items.length ==0
    }
    this.size = function(){
        return items.length
    }
    this.print = function(){
        console.log(items);
    }
}

let queue = new Queue()

function PriorityQueue(){
    let items = []
    this.dequeue = function(){
        items.shift()
    }
    this.front = function(){
        return items[0]
    }
    this.isEmpty = function(){
        return items.length ==0
    }
    this.size = function(){
        return items.length
    }
    this.print = function(){
        console.log(items);
    }
    function QueueElement(element, priority){
        this.element = element
        this.priority = priority
    }

    this.enqueue = function(element, priority){
        let queueElement = new QueueElement(element, priority);

        if(this.isEmpty()){
            items.push(queueElement)
        }else{
            let added = false;
            for(let i = 0; i < items.length; i++){
                if(queueElement.priority < items[i].priority){
                    console.log("ewewe");
                    items.splice(i,0,queueElement);
                    added = true
                    break
                }
            }
            if(!added){
                items.push(queueElement)
            }
        }
    }

    
}

let newarr = new PriorityQueue()

newarr.enqueue("朱晓乐",10)
newarr.enqueue("璇璇",1)
newarr.enqueue("张晓媛",5)

newarr.print()



