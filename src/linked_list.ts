class Node<T> {
    private _data: T;
    private _next: Node<T> | undefined;

    constructor(data: T) {
        this._data = data;
        this._next = undefined;
    }

    setNext(next: Node<T> | undefined) {
        this._next = next;
    }

    getNext(): Node<T> | undefined {
        return this._next;
    }

    get data(): T {
        return this._data;
    }
}

class MyLinkedList<T> {
    private head: Node<T> | undefined = undefined;
    private tail: Node<T> | undefined = undefined;
    private _length: number;

    constructor() {
        this.head = undefined;
        this.tail = undefined;
        this._length = 0;
    }

    isEmpty(): boolean {
        return this.length === 0 && !this.head && !this.tail;
    }

    get length(): number {
        return this._length;
    }

    get asArray(): T[] {
        const array: T[] = [];
        let current = this.head;
        while (current) {
            array.push(current.data);
            current = current.getNext();
        }
        return array;
    }

    private checkbounds(index: number) {
        if (index < 0 || index >= this.length) {
            throw new RangeError("Index out of bounds");
        }
    }

    private goThrough(index?: number) {
        if (this.isEmpty()) {
            throw new EvalError("List is empty");
        }

        if (index === undefined) {
            index = this.length - 1;
        }

        this.checkbounds(index);

        let current = this.head;
        for (let i = 0; i < index; i++) {
            current = current?.getNext();
        }
        return current;
    }

    append(data: T) {
        const newNode = new Node(data);
        if (this.isEmpty()) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail?.setNext(newNode);
            this.tail = newNode;
        }
        this._length++;
    }

    insert(index: number, data: T) {
        if (this.isEmpty()) {
            this.append(data);
        } else {
            this.checkbounds(index);

            const newNode = new Node(data);
            const previous = this.goThrough(index - 1);

            newNode.setNext(previous?.getNext());
            previous?.setNext(newNode);
            this._length++;
        }
    }

    remove(index?: number) {
        if (index === undefined) {
            index = this.length - 1;
        }

        this.checkbounds(index);
        const previous = this.goThrough(index - 1);

        const value = previous?.getNext()?.data;
        if (previous?.getNext() === this.tail) {
            this.tail = previous;
            this.tail?.setNext(undefined);
        } else {
            previous?.setNext(previous.getNext()?.getNext());
        }
        this._length--;
        return value;
    }

    at(index: number): T | undefined {
        const value = this.remove(index);
        if (value) {
            this.insert(index, value);
            return value;
        }
    }
}

export default MyLinkedList;
