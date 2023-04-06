import {
    assertEquals,
    assertThrows,
} from "https://deno.land/std@0.180.0/testing/asserts.ts";

import MyStack from "../src/stack.ts";

Deno.test(function stackIsEmpty() {
    const stack = new MyStack();
    assertEquals(stack.isEmpty(), true);
});

Deno.test(function stackIsNotEmpty() {
    const stack = new MyStack();
    stack.push(0);
    assertEquals(stack.isEmpty(), false);
});

Deno.test(function stackPop() {
    const stack = new MyStack();
    stack.push(0);
    assertEquals(stack.pop(), 0);
});

Deno.test(function stackPopThrows() {
    const stack = new MyStack();
    assertThrows(() => stack.pop(), EvalError, "Stack is empty");
});

[0, "0", false, {}].forEach((item) => {
    Deno.test(`${typeof item}Stack`, () => {
        const stack = new MyStack<typeof item>();
        stack.push(item);
        assertEquals(stack.pop(), item);
    });
});

Deno.test(`multipleTypesStack`, () => {
    const stack = new MyStack();
    const items = [0, "0", false, {}];
    items.forEach((item) => {
        stack.push(item);
    });
    let i = items.length - 1;
    while (!stack.isEmpty()) {
        assertEquals(stack.pop(), items[i]);
        i--;
    }
});
