class queue{
    constructor(){
        this.items = [] 
    }
    enqueue(ele){
        this.items.push(ele)
        return true
    }
    dequeue(){
        if (this.items.length == 0) return "queue is empty"
        return this.items.shift()
    }
    front(){
        if (this.items.length == 0) return "queue is empty"
        return this.items[0]
    }
    size(){
        return this.items.length
    }
    print(){
        console.log(this.items.join(" "));
        
    }
}

let q = new queue()
q.enqueue(10)
q.enqueue(20)
q.enqueue(30)
console.log(q);
q.dequeue()
console.log(q);
q.front()
console.log(q,"front");
q.size()
console.log(q);
q.print()
console.log(q);
