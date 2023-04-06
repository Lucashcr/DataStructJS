class MyQueue<T> {
    private items: T[] = [];

    isEmpty(): boolean {
        return this.items.length === 0;
    }

    push(item: T): void {
        this.items.push(item);
    }

    pop(): T | undefined {
        if (this.isEmpty()) {
            throw new EvalError("Queue is empty");
        }
        return this.items.shift();
    }
}

export default MyQueue;
