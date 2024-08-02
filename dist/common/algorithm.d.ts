export declare type BinaryTreeType = {
    value: any;
    left: null | BinaryTreeType;
    right: null | BinaryTreeType;
};
export declare enum Compare {
    LESS_THAN = -1,
    BIGGER_THAN = 1,
    EQUALS = 0
}
export declare type ICompareFunction<T> = (a: T, b: T) => number;
export declare type IEqualsFunction<T> = (a: T, b: T) => boolean;
export declare type numberOrString = number | string;
export declare const INF: number;
/**
 * @author oliver lou
 * @Date 2023-05-25 00:06:45
 * @description 基础版-判断一个数是否是质数（或称素数）
 * @param {number} num
 * @return {*}
 */
/**
 * @author oliver lou
 * @Date 2023-05-25 15:02:00
 * @description 优化版-判断一个数是否是质数（或称素数）
 * @param {number} num
 * @return {*}
 */
export declare function isPrime(num: number): boolean;
/**
 * @author oliver lou
 * @Date 2023-05-24 01:12:02
 * @description 默认的比较函数
 * @param {T} a
 * @param {T} b
 * @return {*}
 */
export declare function defaultCompare<T>(a: T, b: T): number;
/**
 * @author oliver lou
 * @Date 2023-06-04 01:06:17
 * @description 栈的类
 * @return {*}
 */
export declare class Stack<T> {
    #private;
    constructor();
    /**
     * 向栈中添加一个元素
     * @parameter element 需要添加的元素
     * @return void
     */
    push(element: T): void;
    size(): number;
    peek(): any;
    isEmpty(): boolean;
    /**
     * 删除栈中最上层的元素，并返回这个元素
     * 返回 T
     */
    pop(): T;
    /**
     * 清空栈中的所有元素
     * 返回 void
     */
    clear(): void;
    /**
     * 将栈中的所有元素取出，并转化为字符串
     * 返回一个字符串
     */
    toString(): string;
    /**
     * 显示栈的所有元素
     * 返回一个对象
     */
    all(): object;
}
/**
 * @author oliver lou
 * @Date 2023-05-24 00:13:02
 * @description 队列的类
 * @return {*}
 */
export declare class Queue<T> {
    #private;
    constructor();
    /**
     * 向队列尾部添加一个（或多个）新的元素
     * 返回 void
     */
    enqueue(params: Array<T> | T): void;
    isEmpty(): boolean;
    dequeue(): any;
    peek(): any;
    size(): number;
    clear(): void;
    toString(): string;
}
export declare class LinkedListNode<T> {
    value: T;
    next?: LinkedListNode<T>;
    constructor(value: T, next?: LinkedListNode<T>);
}
export declare class BinaryTreeNode<T> {
    value: T;
    left?: BinaryTreeNode<T>;
    right?: BinaryTreeNode<T>;
    constructor(value: T, left?: BinaryTreeNode<T>, right?: BinaryTreeNode<T>);
}
export declare class DoublyNode<T> extends LinkedListNode<T> {
    element: T;
    next?: DoublyNode<T>;
    prev?: DoublyNode<T>;
    constructor(element: T, next?: DoublyNode<T>, prev?: DoublyNode<T>);
}
export declare function defaultEquals<T>(a: T, b: T): boolean;
/**
 * @author oliver lou
 * @Date 2023-05-24 00:31:06
 * @description 链表类
 * @return {*}
 */
export declare class LinkedList<T> {
    #private;
    protected equalsFn: IEqualsFunction<T>;
    constructor(equalsFn?: IEqualsFunction<T>);
    /**
     * 向链表尾部添加一个新的元素
     * 返回 void
     */
    push(element: T): void;
    /**
     * 获取链表某个位置的元素
     */
    getElementAt(index: number): LinkedListNode<T>;
    /**
     * 在任意位置插入元素
     */
    insert(element: T, index: number): boolean;
    removeAt(index: number): T;
    remove(element: T): T;
    indexOf(element: T): number;
    isEmpty(): boolean;
    size(): number;
    getHead(): LinkedListNode<T>;
    clear(): void;
    toString(): string;
    /**
     * 循环遍历链表
     */
    traversal(callback: (value: T, index: number) => void): void;
}
/**
 * @author oliver lou
 * @Date 2023-05-24 01:10:27
 * @description 有序链表
 * @return {*}
 */
export declare class SortedLinkedList<T> extends LinkedList<T> {
    #private;
    protected equalsFn: IEqualsFunction<T>;
    protected compareFn: ICompareFunction<T>;
    constructor(equalsFn?: IEqualsFunction<T>, compareFn?: ICompareFunction<T>);
    push(element: T): void;
    insert(element: T, index?: number): boolean;
    private getIndexNextSortedElement;
}
/**
 * @author oliver lou
 * @Date 2023-05-24 01:34:30
 * @description 自定义Set类，包含交集、并集、差集
 * @return {*}
 */
export declare class CustomSet<T> {
    private items;
    constructor();
    add(element: T): boolean;
    delete(element: T): boolean;
    has(element: T): any;
    values(): T[];
    union(otherCustomSet: CustomSet<T>): CustomSet<T>;
    intersection(otherCustomSet: CustomSet<T>): CustomSet<T>;
    difference(otherCustomSet: CustomSet<T>): CustomSet<T>;
    isSubsetOf(otherCustomSet: CustomSet<T>): boolean;
    isEmpty(): boolean;
    size(): number;
    clear(): void;
    toString(): string;
}
/**
 * @author oliver lou
 * @Date 2023-05-30 00:06:04
 * @description 数据结构-图
 * @return {*}
 */
export declare class Graph {
    private isDirected;
    private vertices;
    private adjList;
    constructor(isDirected?: boolean);
    addVertex(v: string | number): void;
    addEdge(a: string | number, b: string | number): void;
    getVertices(): (string | number)[];
    getAdjList(): Map<string | number, (string | number)[]>;
    toString(): string;
}
/**
 * @author oliver lou
 * @Date 2023-06-20 17:02:52
 * @description 通用的柯里化的方法
 * @param {Function} fn
 * @param {array} args
 * @return {*}
 */
export declare function curry(fn: Function, ...args: any): any;
/**
 * @author oliver lou
 * @Date 2023-06-26 23:37:55
 * @description 二叉搜索树
 * @return {*}
 */
export declare class BinarySearchTree<T> {
    root: BinaryTreeNode<T>;
    compareFn: Function;
    constructor(compareFn?: typeof defaultCompare);
    insert(value: T): void;
    insertNode(node: BinaryTreeNode<T>, value: T): void;
    getRoot(): BinaryTreeNode<T>;
    search(value: T): any;
    searchNode(node: BinaryTreeNode<T>, value: T): any;
    inOrderTraverse(callback: Function): void;
    inOrderTraverseNode(node: BinaryTreeNode<T>, callback: Function): void;
    preOrderTraverse(callback: Function): void;
    preOrderTraverseNode(node: BinaryTreeNode<T>, callback: Function): void;
    postOrderTraverse(callback: Function): void;
    postOrderTraverseNode(node: BinaryTreeNode<T>, callback: Function): void;
    min(): BinaryTreeNode<T>;
    minNode(node: BinaryTreeNode<T>): BinaryTreeNode<T>;
    max(): BinaryTreeNode<T>;
    maxNode(node: BinaryTreeNode<T>): BinaryTreeNode<T>;
    remove(value: T): void;
    removeNode(node: BinaryTreeNode<T>, value: T): BinaryTreeNode<T>;
}
