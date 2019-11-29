function BinarySearchTree(){
  let Node = function(key){
    this.key = key;
    this.left = null
    this.right = null
  }

  let root = null

  //向树中插入一个键
  this.insert = function(key){
    let newNode = new Node(key)
    if(root === null){
      root = newNode
    }else{
      insertNode(root,newNode)
    }
  }

  let insertNode = function(node, newNode){
    if(newNode.key < node.key){
      if(node.left===null){
        node.left = newNode
      }else{
        insertNode(node.left, newNode)
      }
    }else{
      if(node.right === null){
        node.right = newNode
      }else{
        insertNode(node.right, newNode)
      }
    }
  }

  this.inOrderTraverse = function(callback){
    inOrderTraverseNode(root, callback)
  }

  let inOrderTraverseNode = function(node, callback){
    if(node !== null){
      inOrderTraverseNode(node.left, callback)
      callback(node.key)
      inOrderTraverseNode(node.right, callback)
    }
  }


}

let tree = new BinarySearchTree()

tree.insert(5)
tree.insert(4)
tree.insert(9)
tree.insert(6)
tree.insert(61)
tree.insert(55)
tree.insert(13)
tree.insert(21)

