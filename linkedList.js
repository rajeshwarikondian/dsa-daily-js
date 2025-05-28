
class Node {
  constructor(ele, next = null) {
    this.ele = ele;
    this.next = next;
  }
}
class linkList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  //add at the last
  add(ele) {
    const newNode = new Node(ele);
    if (this.head == null) {
      this.head = newNode;
    } else {
      let curr = this.head;
      while (curr.next !== null) {
        curr = curr.next;
      }
      curr.next = newNode;
    }
    this.size++;
  }

  //add at first
  unshift(ele) {
    const newNode = new Node(ele);
    newNode.next = this.head;
    this.head = newNode;
    this.size++;
  }
  //remove from first

  shift() {
    if (this.head == null) {
      console.log("list is empty");
      return null;
    }
    const removeValue = this.head.ele;
    this.head = this.head.next;
    this.size--;
    return removeValue;
  }
  print() {
    let curr = this.head;
    let res = [];
    while (curr !== null) {
      res.push(curr.ele);
      curr = curr.next;
    }
    console.log(res);
  }
  pop() {
    if (this.size == 0) {
      console.log("linklist is empty");
      return null;
    }
    if (this.size == 1) {
      let res = this.head.ele;
      this.head = null;
      this.size--;
      return res;
    }

    let curr = this.head;
    for (let i = 1; i < this.size - 1; i++) {
      curr = curr.next;
    }
    let res = curr.next.ele;
    curr.next = null;
    this.size--;
    return res;
  }
  insert(ele, index) {
    if (index == 0 && this.size == 0) {
      this.head = new Node(ele, null);
      this.size++;
      return true;
    }
    if (index > this.size) {
      return false;
    }
    if (index == 0) {
      this.head = new Node(ele, this.head);
      this.size++;
      return true;
    }
    let curr = this.head;
    for (let i = 1; i < index; i++) {
      curr = curr.next;
    }
    curr.next = new Node(ele, curr.next);
    this.size++;
    return true;
  }
  get(index) {
    let curr = this.head;
    for (let i = 1; i < index -1; i++) {
      let res = curr.next.ele;
      return res;
    }
    
  }
  reverse(){
    if(this.size == 0){
      return "linklist is empty"
    }

    let curr = this.head;
    let prev = null;
    let next = null;

    while(curr){
      next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    this.head = prev
  }
}

const ll = new linkList();
ll.add(10);
ll.add(20);
ll.add(30);
ll.add(40);
ll.add(50)
ll.reverse()

ll.print();



///set 
// map
// weakSet
//weakMap      *study this ****