import {
    assertEquals,
    assertThrows,
} from "https://deno.land/std@0.180.0/testing/asserts.ts";

import MyQueue from "../src/queue.ts";

Deno.test(function stackIsEmpty() {
    const queue = new MyQueue();
    assertEquals(queue.isEmpty(), true);
});

Deno.test(function stackIsNotEmpty() {
    const queue = new MyQueue();
    queue.push(0);
    assertEquals(queue.isEmpty(), false);
});

Deno.test(function stackPop() {
    const queue = new MyQueue();
    queue.push(0);
    assertEquals(queue.pop(), 0);
});

Deno.test(function stackPopThrows() {
    const queue = new MyQueue();
    assertThrows(() => queue.pop(), EvalError, "Queue is empty");
});

[0, "0", false, {}].forEach((item) => {
    Deno.test(`${typeof item}Queue`, () => {
        const queue = new MyQueue<typeof item>();
        queue.push(item);
        assertEquals(queue.pop(), item);
    });
});

Deno.test(`multipleTypesQueue`, () => {
    const queue = new MyQueue();
    const items = [0, "0", false, {}];
    items.forEach((item) => {
        queue.push(item);
    });
    let i = 0;
    while (!queue.isEmpty()) {
        assertEquals(queue.pop(), items[i]);
        i++;
    }
});
