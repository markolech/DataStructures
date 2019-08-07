class Node {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }
  push(val) {
    let newNode = new Node(val)
    if (!this.head) {
      this.head = newNode
      this.tail = this.head
    } else {
      this.tail.next = newNode
      this.tail = newNode
    }
    this.length++
    return this
  }
  pop() {
    if (!this.head) return undefined
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
  shift() {
    if (!this.head) return undefined
    let removedNode = this.head
    this.head = removedNode.next
    this.length--
    if (this.length === 0) {
      this.head = null
      this.tail = null
    }
    return removedNode
  }
  unshift(val) {
    let newNode = new Node(val)
    if (!this.head) {
      this.head = newNode
      this.tail = newNode
    } else {
      newNode.next = this.head
      this.head = newNode
    }
    this.length++
    return this
  }
  get(index) {
    if (index < 0 || index >= this.length) return null
    let counter = 0
    let current = this.head
    while (counter !== index) {
      current = current.next
      counter++
    }
    return current
  }
  set(index, val) {
    let foundNode = this.get(index)
    if (foundNode) {
      foundNode.val = val
      return true
    }
    return false
  }
  //Insert method without temp variable solution
  insert(index, val) {
    if (index < 0 || index > this.length) {
      return false
    }
    if (index === this.length) {
      this.push(val)
      return true
    }
    if (index === 0) {
      this.unshift(val)
      return true
    }
    let newNode = new Node(val)
    let previousNode = this.get(index - 1)
    newNode.next = previousNode.next
    previousNode.next = newNode
    this.length++
    return true
  }
  //Insert method with temp variable solution
  insert2(index, val) {
    if (index < 0 || index > this.length) return false
    if (index === this.length) {
      this.push(val)
      return true
    }
    if (index === 0) {
      this.unshift(val)
      return true
    }
    let insertNode = new Node(val)
    let previousNode = this.get(index - 1)
    let afterNode = previousNode.next
    previousNode.next = insertNode
    insertNode.next = afterNode
    this.length++
    return true
  }
  remove(index) {
    if (index < 0 || index >= this.length) return undefined
    if (index === this.length - 1) return this.pop()
    if (index === 0) return this.shift()
    let previousNode = this.get(index - 1)
    let removed = previousNode.next
    previousNode.next = removed.next
    this.length--
    return removed
  }
}

let list = new SinglyLinkedList()
list.push("Hello")
list.push("this")
list.push("is")
list.push("cool")
