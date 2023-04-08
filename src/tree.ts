class Node {
    private _data: number;
    private left: Node | undefined;
    private right: Node | undefined;

    constructor(data: number, left?: Node, right?: Node) {
        this._data = data;
        this.left = left;
        this.right = right;
    }

    setNext(next: Node) {
        if (next._data <= this._data) {
            if (this.left) {
                this.left.setNext(next);
                return;
            } else {
                this.left = next;
                return;
            }
        } else {
            if (this.right) {
                this.right.setNext(next);
                return;
            } else {
                this.right = next;
                return;
            }
        }
    }

    getData(): number {
        return this._data;
    }

    getLeft(): Node | undefined {
        if (!this.left) {
            return undefined;
        }
        return new Node(
            this.left.getData(),
            this.left.getLeft(),
            this.left.getRight()
        );
    }

    getRight(): Node | undefined {
        if (!this.right) {
            return undefined;
        }
        return new Node(
            this.right.getData(),
            this.right.getLeft(),
            this.right.getRight()
        );
    }

    prefixedGoThrough(level = 0) {
        console.log("  ".repeat(level) + "|__" + this._data.toFixed(2));
        if (this.left) {
            this.left.prefixedGoThrough(level + 1);
        }
        if (this.right) {
            this.right.prefixedGoThrough(level + 1);
        }
    }

    infixedGoThrough(level = 0) {
        if (this.left) {
            this.left.infixedGoThrough(level + 1);
        }
        console.log("  ".repeat(level) + "|__" + this._data.toFixed(2));
        if (this.right) {
            this.right.infixedGoThrough(level + 1);
        }
    }

    posfixedGoThrough(level = 0) {
        if (this.left) {
            this.left.posfixedGoThrough(level + 1);
        }
        if (this.right) {
            this.right.posfixedGoThrough(level + 1);
        }
        console.log("  ".repeat(level) + "|__" + this._data.toFixed(2));
    }
}

export default class BinTree {
    private _root: Node | undefined;
    private countElements = 0;

    constructor(root?: number) {
        this._root = root ? new Node(root) : undefined;
    }

    getRoot(): Node | undefined {
        if (!this._root) {
            return undefined;
        }
        return new Node(
            this._root.getData(),
            this._root.getLeft(),
            this._root.getRight()
        );
    }

    isEmpty(): boolean {
        return this.countElements === 0 && !this._root;
    }

    getCountElements() {
        return this.countElements;
    }

    add(data: number) {
        if (!this._root) {
            this._root = new Node(data);
            this.countElements++;
            return;
        }

        this._root.setNext(new Node(data));
        this.countElements++;
        return;
    }

    contains(data: number): boolean {
        if (this.isEmpty()) {
            return false;
        }

        let current = this._root;
        while (current) {
            if (current.getData() === data) {
                return true;
            } else if (current.getData() > data) {
                current = current.getLeft();
            } else {
                current = current.getRight();
            }
        }

        return false;
    }

    prefixedGoThrough() {
        if (this.isEmpty()) {
            throw new EvalError("Tree is empty");
        }
        this._root?.prefixedGoThrough(0);
    }

    infixedGoThrough() {
        if (this.isEmpty()) {
            throw new EvalError("Tree is empty");
        }
        this._root?.infixedGoThrough(0);
    }

    posfixedGoThrough() {
        if (this.isEmpty()) {
            throw new EvalError("Tree is empty");
        }
        this._root?.posfixedGoThrough(0);
    }
}
