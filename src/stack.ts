class MyStack<T> {
    private items: T[] = [];

    isEmpty(): boolean {
        return this.items.length === 0;
    }

    push(item: T): void {
        this.items.push(item);
    }

    pop(): T | undefined {
        if (this.isEmpty()) {
            throw new EvalError("Stack is empty");
        }
        return this.items.pop();
    }
}

export default MyStack;
