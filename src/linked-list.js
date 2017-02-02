const Node = require('./node');

class LinkedList {
    constructor()
    {           
     this.length=0;
    }

    append(data)
    {
    var node = new Node(data);

    if (this.length) 
    {
        this.tail.next = node;
        node.prev = this.tail;
        this.tail = node;
    } 
    else
    {
        this._head = node;
        this._tail = node;
    }

    this.length++;

    return node;
    }
    
    head() 
    {
    
    }

    tail()
    {
    
    }

    at(index) 
    {
   
    }

    insertAt(index, data) 
    {
    
    }

    isEmpty()
    {
    
    }

    clear()
    {
     
    }

    deleteAt(index) 
    {
   
    }

    reverse() 
    {
    
    }

    indexOf(data)
    {
            
        
    }
}

module.exports = LinkedList;
