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
        if (next.data <= this._data) {
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

    getLeft(): Node | undefined {
        return this.left;
    }

    getRight(): Node | undefined {
        return this.right;
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

    get data(): number {
        return this._data;
    }
}

class BinTree {
    private _root: Node | undefined;
    private countElements = 0;

    constructor(root?: number) {
        this._root = root ? new Node(root) : undefined;
    }

    get root() {
        return { ...this._root };
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

    prefixedGoThrough() {
        if (!this._root) {
            throw new EvalError("Tree is empty");
        }
        this._root.prefixedGoThrough(0);
    }

    infixedGoThrough() {
        if (!this._root) {
            throw new EvalError("Tree is empty");
        }
        this._root.infixedGoThrough(0);
    }

    posfixedGoThrough() {
        if (!this._root) {
            throw new EvalError("Tree is empty");
        }
        this._root.posfixedGoThrough(0);
    }
}

const binTree = new BinTree();
for (let i = 0; i < 10; i++) {
    binTree.add(Math.random() * 10);
}
console.log("Prefixed go through:");
binTree.prefixedGoThrough();

console.log("Infixed go through:");
binTree.infixedGoThrough();

console.log("Posfixed go through:");
binTree.posfixedGoThrough();
