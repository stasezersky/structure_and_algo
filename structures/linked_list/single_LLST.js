class Node {
    constructor(val) {
        this.value = val
        this.next = null
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }
    // O1
    push(val) {
        const newNode = new Node(val)
        if (!this.head) {
            this.head = newNode
            this.tail = this.head
        } else {
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length++
        return newNode
    }
    // On
    pop() {
        if (this.length === 0) return undefined
        let current = this.head
        let newTail = current
        while (current.next) {
            newTail = current
            current = current.next
        }
        this.tail = newTail
        this.tail.next = null
        this.length--
        if (this.length === 0) {
            this.head = null
            this.tail = null
        }
        return current
    }
    // O1
    shift() {
        if (!this.head) return undefined
        let currentHead = this.head
        let newHead = currentHead.next
        this.head = newHead
        this.length--
        if (this.length === 0) {
            this.tail = null
        }
        return currentHead
    }
    // O1
    unshift(val) {
        const newNode = new Node(val)
        if (!this.head) {
            this.head = newNode
            this.tail = this.tail
        }
        newNode.next = this.head
        this.head = newNode
        this.length++
        return this
    }
    // On
    get(idx) {
        if (idx < 0 || idx >= this.length) return null
        let counter = 0
        let current = this.head
        while (counter !== idx) {
            current = current.next
            counter++
        }
        return current
    }
    // On
    set(idx, val) {
        const foundNode = this.get(idx)
        if (foundNode) {
            foundNode.value = val
            return foundNode
        }
        return false
    }
    // On
    insert(idx, val) {
        if (idx < 0 || idx >= this.length) return false
        if (idx === this.length) return !!this.push(val)
        if (idx === 0) return !!this.unshift(val)

        let newNode = new Node(val)
        let prev = this.get(idx - 1)
        let temp = prev.next
        prev.next = newNode
        newNode.next = temp
        this.length++
        return true;
    }
    // On
    remove(idx) {
        if (idx < 0 || idx >= this.length) return false
        if (idx === this.length) return this.pop()
        if (idx === 0) return this.shift(val)

        let prev = this.get(idx - 1)
        let removed = prev.next
        let temp = prev.next.next
        prev.next = temp
        this.length--
        return removed
     }
}

let list = new SinglyLinkedList()