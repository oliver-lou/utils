// --------------类型和枚举----------------------------

export type BinaryTreeType = {
  value: any
  left: null | BinaryTreeType
  right: null | BinaryTreeType
}

export enum Compare {
  LESS_THAN = -1,
  BIGGER_THAN = 1,
  EQUALS = 0,
}

export type ICompareFunction<T> = (a: T, b: T) => number
export type IEqualsFunction<T> = (a: T, b: T) => boolean

export type numberOrString = number | string

// -----------------属性和常量-------------------------
export const INF = Number.MAX_SAFE_INTEGER

// ----------------函数和类-----------------------------

/**
 * @author oliver lou
 * @Date 2023-05-25 00:06:45
 * @description 基础版-判断一个数是否是质数（或称素数）
 * @param {number} num
 * @return {*}
 */
// export function isPrime(num: number): boolean {
//   for (let i = 2; i < num; i++) {
//     if (num % i == 0) {
//       return false
//     }
//   }

//   return true
// }

/**
 * @author oliver lou
 * @Date 2023-05-25 15:02:00
 * @description 优化版-判断一个数是否是质数（或称素数）
 * @param {number} num
 * @return {*}
 */
export function isPrime(num: number): boolean {
  // TODO: 还需要判断num必须为正整数
  let loopMax = Math.sqrt(num)
  if (num <= 1) {
    return false
  } else {
    for (let i = 2; i <= loopMax; i++) {
      if (num % i == 0) {
        return false
      }
    }
    return true
  }
}

/**
 * @author oliver lou
 * @Date 2023-05-24 01:12:02
 * @description 默认的比较函数
 * @param {T} a
 * @param {T} b
 * @return {*}
 */
export function defaultCompare<T>(a: T, b: T): number {
  if (a === b) {
    return Compare.EQUALS
  }
  return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN
}

/**
 * @author oliver lou
 * @Date 2023-06-04 01:06:17
 * @description 栈的类
 * @return {*}
 */
export class Stack<T> {
  #count: number
  #items: object
  constructor() {
    this.#count = 0
    this.#items = {}
  }

  /**
   * 向栈中添加一个元素
   * @parameter element 需要添加的元素
   * @return void
   */
  push(element: T): void {
    this.#items[this.#count] = element
    this.#count++
  }

  size(): number {
    return this.#count
  }

  peek() {
    // 我感觉其实不用判断是否为空
    return this.#items[this.#count - 1]
  }

  isEmpty() {
    return this.#count === 0
  }

  /**
   * 删除栈中最上层的元素，并返回这个元素
   * 返回 T
   */
  pop(): T {
    if (this.isEmpty()) {
      return undefined
    } else {
      this.#count--
      const result = this.#items[this.#count]
      delete this.#items[this.#count]
      return result
    }
  }

  /**
   * 清空栈中的所有元素
   * 返回 void
   */
  clear() {
    this.#items = {}
    this.#count = 0
  }

  /**
   * 将栈中的所有元素取出，并转化为字符串
   * 返回一个字符串
   */
  toString() {
    if (this.isEmpty()) {
      return ''
    } else {
      let objString = `${this.#items[0]}`
      for (let i = 1; i < this.#count; i++) {
        objString = `${objString},${this.#items[i]}`
      }
      return objString
    }
  }

  /**
   * 显示栈的所有元素
   * 返回一个对象
   */
  all(): object {
    return this.#items
  }
}

/**
 * @author oliver lou
 * @Date 2023-05-24 00:13:02
 * @description 队列的类
 * @return {*}
 */
export class Queue<T> {
  #count: number
  #lowestCount: number
  #items: object
  constructor() {
    this.#count = 0
    this.#lowestCount = 0
    this.#items = {}
  }

  /**
   * 向队列尾部添加一个（或多个）新的元素
   * 返回 void
   */
  enqueue(params: Array<T> | T) {
    if (Array.isArray(params)) {
      params.forEach((item) => {
        this.#items[this.#count] = item
        this.#count++
      })
    } else {
      this.#items[this.#count] = params
      this.#count++
    }
  }

  isEmpty() {
    return this.#count - this.#lowestCount === 0
  }

  // isEmpty() {
  //   return this.size() === 0
  // }

  dequeue() {
    if (this.isEmpty()) {
      return undefined
    } else {
      const result = this.#items[this.#lowestCount]
      delete this.#items[this.#lowestCount]
      this.#lowestCount++
      return result
    }
  }

  peek() {
    // 我感觉其实不用判断是否为空
    return this.#items[this.#lowestCount]
  }

  size() {
    return this.#count - this.#lowestCount
  }

  clear() {
    this.#items = {}
    this.#count = 0
    this.#lowestCount = 0
  }

  toString() {
    if (this.isEmpty()) {
      return ''
    } else {
      let objString = `${this.#items[this.#lowestCount]}`
      for (let i = this.#lowestCount + 1; i < this.#count; i++) {
        objString = `${objString},${this.#items[i]}`
      }
      return objString
    }
  }
}

export class LinkedListNode<T> {
  constructor(public value: T, public next?: LinkedListNode<T>) {}
}

export class BinaryTreeNode<T> {
  constructor(
    public value: T,
    public left?: BinaryTreeNode<T>,
    public right?: BinaryTreeNode<T>
  ) {}
}

export class DoublyNode<T> extends LinkedListNode<T> {
  constructor(
    public element: T,
    public next?: DoublyNode<T>,
    public prev?: DoublyNode<T>
  ) {
    super(element, next)
  }
}

export function defaultEquals<T>(a: T, b: T): boolean {
  return a === b
}

/**
 * @author oliver lou
 * @Date 2023-05-24 00:31:06
 * @description 链表类
 * @return {*}
 */
export class LinkedList<T> {
  #count = 0
  #head: LinkedListNode<T> | undefined

  constructor(protected equalsFn: IEqualsFunction<T> = defaultEquals) {}

  /**
   * 向链表尾部添加一个新的元素
   * 返回 void
   */
  push(element: T) {
    const node = new LinkedListNode(element)
    let current: LinkedListNode<T> | undefined

    if (this.#head === null || this.#head === undefined) {
      // catches null && undefined
      this.#head = node
    } else {
      current = this.#head

      while (current.next !== null && current.next !== undefined) {
        current = current.next
      }

      current.next = node
    }
    this.#count++
  }

  /**
   * 获取链表某个位置的元素
   */
  getElementAt(index: number) {
    if (index >= 0 && index <= this.#count) {
      let node = this.#head
      for (let i = 0; i < index && node !== null && node !== undefined; i++) {
        node = node.next
      }
      return node
    }
    return undefined
  }

  /**
   * 在任意位置插入元素
   */
  insert(element: T, index: number) {
    if (index >= 0 && index <= this.#count) {
      const node = new LinkedListNode(element)

      if (index === 0) {
        const current = this.#head
        node.next = current
        this.#head = node
      } else {
        const previous = this.getElementAt(index - 1)
        node.next = previous.next
        previous.next = node
      }
      this.#count++
      return true
    }
    return false
  }

  removeAt(index: number) {
    if (index >= 0 && index < this.#count) {
      let current = this.#head

      if (index === 0) {
        this.#head = current.next
      } else {
        const previous = this.getElementAt(index - 1)
        current = previous.next
        previous.next = current.next
      }
      this.#count--
      return current.value
    }
    return undefined
  }

  remove(element: T) {
    const index = this.indexOf(element)
    return this.removeAt(index)
  }

  indexOf(element: T) {
    let current = this.#head

    for (
      let i = 0;
      i < this.size() && current !== null && current !== undefined;
      i++
    ) {
      if (this.equalsFn(element, current.value)) {
        return i
      }
      current = current.next
    }

    return -1
  }

  isEmpty() {
    return this.size() === 0
  }

  size() {
    return this.#count
  }

  getHead() {
    return this.#head
  }

  clear() {
    this.#head = undefined
    this.#count = 0
  }

  toString() {
    if (this.#head == null) {
      return ''
    }
    let objString = `${this.#head.value}`
    let current = this.#head.next
    for (let i = 1; i < this.size() && current != null; i++) {
      objString = `${objString},${current.value}`
      current = current.next
    }
    return objString
  }

  /**
   * 循环遍历链表
   */
  traversal(callback: (value: T, index: number) => void) {
    let temp = this.#head
    // 用于计数
    let i = 0
    while (true) {
      if (temp !== null && temp !== undefined) {
        callback(temp.value, i)
      } else {
        break
      }
      temp = temp.next
      i = i + 1
    }
  }
}

/**
 * @author oliver lou
 * @Date 2023-05-24 01:10:27
 * @description 有序链表
 * @return {*}
 */
export class SortedLinkedList<T> extends LinkedList<T> {
  #head: LinkedListNode<T> | undefined
  constructor(
    protected equalsFn: IEqualsFunction<T> = defaultEquals,
    protected compareFn: ICompareFunction<T> = defaultCompare
  ) {
    super(equalsFn)
  }

  push(element: T) {
    if (this.isEmpty()) {
      super.push(element)
    } else {
      const index = this.getIndexNextSortedElement(element)
      super.insert(element, index)
    }
  }

  insert(element: T, index: number = 0) {
    if (this.isEmpty()) {
      return super.insert(element, 0)
    }
    index = this.getIndexNextSortedElement(element)
    return super.insert(element, index)
  }

  private getIndexNextSortedElement(element: T) {
    let current = this.#head
    let i = 0

    for (; i < this.size() && current; i++) {
      const comp = this.compareFn(element, current.value)
      if (comp === Compare.LESS_THAN) {
        return i
      }
      current = current.next
    }

    return i
  }
}

/**
 * @author oliver lou
 * @Date 2023-05-24 01:34:30
 * @description 自定义Set类，包含交集、并集、差集
 * @return {*}
 */
export class CustomSet<T> {
  private items: any

  constructor() {
    this.items = {}
  }

  add(element: T) {
    if (!this.has(element)) {
      this.items[element] = element
      return true
    }
    return false
  }

  delete(element: T) {
    if (this.has(element)) {
      delete this.items[element]
      return true
    }
    return false
  }

  has(element: T) {
    // return this.items.hasOwnProperty(element);
    return Object.prototype.hasOwnProperty.call(this.items, element)
  }

  values(): T[] {
    return Object.values(this.items)
  }

  union(otherCustomSet: CustomSet<T>) {
    const unionCustomSet = new CustomSet<T>()

    this.values().forEach((value) => unionCustomSet.add(value))
    otherCustomSet.values().forEach((value) => unionCustomSet.add(value))

    return unionCustomSet
  }

  intersection(otherCustomSet: CustomSet<T>) {
    const intersectionCustomSet = new CustomSet<T>()

    const values = this.values()
    const otherValues = otherCustomSet.values()

    let biggerCustomSet = values
    let smallerCustomSet = otherValues

    if (otherValues.length - values.length > 0) {
      biggerCustomSet = otherValues
      smallerCustomSet = values
    }

    smallerCustomSet.forEach((value) => {
      if (biggerCustomSet.includes(value)) {
        intersectionCustomSet.add(value)
      }
    })

    return intersectionCustomSet
  }

  difference(otherCustomSet: CustomSet<T>) {
    const differenceCustomSet = new CustomSet<T>()

    this.values().forEach((value) => {
      if (!otherCustomSet.has(value)) {
        differenceCustomSet.add(value)
      }
    })

    return differenceCustomSet
  }

  isSubsetOf(otherCustomSet: CustomSet<T>) {
    if (this.size() > otherCustomSet.size()) {
      return false
    }

    let isSubset = true
    this.values().every((value) => {
      if (!otherCustomSet.has(value)) {
        isSubset = false
        return false
      }
      return true
    })

    return isSubset
  }

  isEmpty() {
    return this.size() === 0
  }

  size() {
    return Object.keys(this.items).length
  }

  clear() {
    this.items = {}
  }

  toString() {
    if (this.isEmpty()) {
      return ''
    }
    const values = this.values()
    let objString = `${values[0]}`
    for (let i = 1; i < values.length; i++) {
      objString = `${objString},${values[i].toString()}`
    }
    return objString
  }
}

/**
 * @author oliver lou
 * @Date 2023-05-30 00:06:04
 * @description 数据结构-图
 * @return {*}
 */
export class Graph {
  // 存储图中所有顶点的名字
  private vertices: (string | number)[] = []
  // key的类型为字符串或数字，value的类型为字符串数组或数字数组
  // 使用定点的名字作为键，邻接顶点列表作为值
  private adjList: Map<string | number, (string | number)[]>

  constructor(private isDirected = false) {
    this.isDirected = isDirected
    this.vertices = []
    this.adjList = new Map()
  }

  addVertex(v: string | number) {
    if (!this.vertices.includes(v)) {
      this.vertices.push(v)
      this.adjList.set(v, []) // initialize adjacency list with array as well;
    }
  }

  addEdge(a: string | number, b: string | number) {
    if (!this.adjList.get(a)) {
      this.addVertex(a)
    }
    if (!this.adjList.get(b)) {
      this.addVertex(b)
    }

    this.adjList.get(a).push(b)

    if (!this.isDirected) {
      this.adjList.get(b).push(a)
    }
    // adjList.get(w).push(v); //commented to run the improved DFS with topological sorting
  }

  getVertices() {
    return this.vertices
  }

  getAdjList() {
    return this.adjList
  }

  toString() {
    let s = ''
    for (let i = 0; i < this.vertices.length; i++) {
      s += this.vertices[i] + ' -> '
      const neighbors = this.adjList.get(this.vertices[i])
      for (let j = 0; j < neighbors.length; j++) {
        s += neighbors[j] + ' '
      }
      s += '\n'
    }
    return s
  }
}

/**
 * @author oliver lou
 * @Date 2023-06-20 17:02:52
 * @description 通用的柯里化的方法
 * @param {Function} fn
 * @param {array} args
 * @return {*}
 */
export function curry(fn: Function, ...args: any): any {
  return (..._args: any) => {
    return fn(...args, ..._args)
  }
}

/**
 * @author oliver lou
 * @Date 2023-06-26 23:37:55
 * @description 二叉搜索树
 * @return {*}
 */
// 存在疑问：
// 1. 如果有相同的值怎么样,有些情况需要保证顺序如何处理？
// 2. 如果存不同类型的值怎么样？
export class BinarySearchTree<T> {
  root: BinaryTreeNode<T>
  compareFn: Function
  constructor(compareFn = defaultCompare) {
    this.compareFn = compareFn
    this.root = undefined
  }
  insert(value: T) {
    // special case: first value
    if (this.root == null) {
      this.root = new BinaryTreeNode<T>(value)
    } else {
      this.insertNode(this.root, value)
    }
  }
  insertNode(node: BinaryTreeNode<T>, value: T) {
    if (this.compareFn(value, node.value) === Compare.LESS_THAN) {
      if (node.left == null) {
        node.left = new BinaryTreeNode(value)
      } else {
        this.insertNode(node.left, value)
      }
    } else if (node.right == null) {
      node.right = new BinaryTreeNode(value)
    } else {
      this.insertNode(node.right, value)
    }
  }
  getRoot() {
    return this.root
  }
  search(value: T) {
    return this.searchNode(this.root, value)
  }
  searchNode(node: BinaryTreeNode<T>, value: T) {
    if (node == null) {
      return false
    }
    if (this.compareFn(value, node.value) === Compare.LESS_THAN) {
      return this.searchNode(node.left, value)
    } else if (this.compareFn(value, node.value) === Compare.BIGGER_THAN) {
      return this.searchNode(node.right, value)
    }
    return true
  }
  // 中序遍历
  inOrderTraverse(callback: Function) {
    this.inOrderTraverseNode(this.root, callback)
  }
  inOrderTraverseNode(node: BinaryTreeNode<T>, callback: Function) {
    if (node != null) {
      this.inOrderTraverseNode(node.left, callback)
      callback(node.value)
      this.inOrderTraverseNode(node.right, callback)
    }
  }
  // 前序遍历
  preOrderTraverse(callback:Function) {
    this.preOrderTraverseNode(this.root, callback)
  }
  preOrderTraverseNode(node: BinaryTreeNode<T>, callback:Function) {
    if (node != null) {
      callback(node.value)
      this.preOrderTraverseNode(node.left, callback)
      this.preOrderTraverseNode(node.right, callback)
    }
  }
  // 后序遍历
  postOrderTraverse(callback:Function) {
    this.postOrderTraverseNode(this.root, callback)
  }
  postOrderTraverseNode(node: BinaryTreeNode<T>, callback:Function) {
    if (node != null) {
      this.postOrderTraverseNode(node.left, callback)
      this.postOrderTraverseNode(node.right, callback)
      callback(node.value)
    }
  }
  // 获取值最小的节点
  min() {
    return this.minNode(this.root)
  }
  minNode(node: BinaryTreeNode<T>) {
    let current = node
    while (current != null && current.left != null) {
      current = current.left
    }
    return current
  }
  // 获取值最大的节点
  max() {
    return this.maxNode(this.root)
  }
  maxNode(node: BinaryTreeNode<T>) {
    let current = node
    while (current != null && current.right != null) {
      current = current.right
    }
    return current
  }
  // 移除某个值
  remove(value: T) {
    this.root = this.removeNode(this.root, value)
  }
  removeNode(node: BinaryTreeNode<T>, value:T) {
    if (node == null) {
      return undefined
    }
    if (this.compareFn(value, node.value) === Compare.LESS_THAN) {
      node.left = this.removeNode(node.left, value)
      return node
    } else if (this.compareFn(value, node.value) === Compare.BIGGER_THAN) {
      node.right = this.removeNode(node.right, value)
      return node
    }
    // value is equal to node.item
    // handle 3 special conditions
    // 1 - a leaf node
    // 2 - a node with only 1 child
    // 3 - a node with 2 children
    // case 1
    if (node.left == null && node.right == null) {
      node = undefined
      return node
    }
    // case 2
    if (node.left == null) {
      node = node.right
      return node
    } else if (node.right == null) {
      node = node.left
      return node
    }
    // case 3
    const aux = this.minNode(node.right)
    node.value = aux.value
    node.right = this.removeNode(node.right, aux.value)
    return node
  }
}
