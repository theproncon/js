/*
given the HEAD node of a linked list, print its elements in order
*/


class LinkedListNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    add(data) {
    const newNode = new LinkedListNode(data);
        if (this.head == null) {
           return this.head = newNode;
        } else {
           let current = this.head;
            while (current.next != null) {
                current = current.next;
            }
            current.next = newNode;            
        }
    }

    get(index) {
        if (index <0) return undefined;

        let current = this.head;
        let i=0;

        while ((current !=null && i< index)) {
            current = current.next;
            i++;
        }

        return current!=null ? current.data : undefined;
    }

    remove(index) {
        if (index <0) return undefined;

        if (index ===0) {
            const data  = this.data;
            this.head = this.next;
            return data;
        }

        let previous = null;
        let current = this.head;
        let i=0; 
        while ((current!=null) && i<index){
            previous = current;
            current = current.next;
            i++;
        }

        let data = current.data;
        previous.next = current.next;
        return data;
    }

    /*
    Iterator!! with the stucture bellow we can transverse the list as an array
    The values() method is marked with an asterisk (*) to indicate that it’s a generator method. 
    The method traverses the list, using yield to return each piece of data it encounters. 
    (Note that the Symbol.iterator method isn’t marked as a generator because it is returning an iterator from the values() generator method.)
    */
   
    *values(){
        
        let current = this.head;

        while (current !== null) {
            yield current.data;
            current = current.next;
        }
    }

    [Symbol.iterator]() {
        return this.values();
    } 

}

let ll = new LinkedList;
ll.add('a');
ll.add('b');
ll.add('c');
console.log(ll.get(1));

ll.remove(1);
console.log(ll.get(1));


const list = new LinkedList();
list.add("red");
list.add("orange");
list.add("yellow");
    
// get the second item in the list
console.log(list.get(1));       // "orange"

// print out all items
for (const color of list) {
    console.log(color);
}

// remove the second item in the list    
console.log(list.remove(1));    // "orange"
    
// get the new first item in the list
console.log(list.get(1));       // "yellow"

// convert to an array
const array1 = [...list.values()];
const array2 = [...list];
