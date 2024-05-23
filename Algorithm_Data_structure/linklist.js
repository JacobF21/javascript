//LinkedList similar Array
//LinkedList is a linear collection of data element
//LinkedList is a data structure only contain head and property
//Advantage: Elements can be inserted into linked lists indefinitely, first insertion and deletion
//Disadvantage: use more memory space than Array

class Node{
  constructor(value){
    this.value=value;
    this.next=null;
  }
}

class LinkedList{
  constructor(){
    this.head = null;
    this.length=0;
  }

  push(value){
    let newNode = new Node(value);
    if(this.head === null){
      this.head= newNode;
    } else{
      let currentNode = this.head;
      while(currentNode.next !== null){
        currentNode = currentNode.next;
      }
      currentNode.next=newNode;
    }
    this.length++;
  }

  pop(){
    if(!this.head){
      return null;
    } else if(this.length===1){
      let temp = this.head;
      this.head =null;
      this.length=0;
      return temp;
    } else{
      let currentNode = this.head;
      for(let i = 1;i<=this.length-2;i++){
        currentNode = currentNode.next;
      }
      let temp = currentNode.next;
      currentNode.next =null;
      this.length--;
      return temp;
    }
  }

  printAll(){
    if(this.length === 0){
      console.log("Nothing in the link list");
      return;
    }
    let currentNode = this.head;
    while (currentNode !== null){
      console.log(currentNode.value);
      currentNode=currentNode.next;
    }
  }
}



let myLinkList = new LinkedList();
myLinkList.push("Mike");
myLinkList.push("Harry");
myLinkList.push("James");
myLinkList.push("Kevin");
let popValue = myLinkList.pop();
// console.log(popValue);
myLinkList.printAll();
console.log(myLinkList.length);
