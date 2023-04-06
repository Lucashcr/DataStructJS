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

Deno.test(function multipleTypesStack() {
    const stack = new MyStack();
    assertEquals(stack.isEmpty(), true);
    stack.push(0);
    stack.push("0");
    stack.push(false);
    stack.push([]);
    stack.push({});
    assertEquals(stack.isEmpty(), false);
    assertEquals(stack.pop(), {});
    assertEquals(stack.pop(), []);
    assertEquals(stack.pop(), false);
    assertEquals(stack.pop(), "0");
    assertEquals(stack.pop(), 0);
    assertEquals(stack.isEmpty(), true);
});

Deno.test(function numberStack() {
    const stack = new MyStack<number>();
    assertEquals(stack.isEmpty(), true);
    stack.push(0);
    stack.push(1);
    stack.push(2);
    assertEquals(stack.isEmpty(), false);
    assertEquals(stack.pop(), 2);
    assertEquals(stack.pop(), 1);
    assertEquals(stack.pop(), 0);
    assertEquals(stack.isEmpty(), true);
});

Deno.test(function stringStack() {
    const stack = new MyStack<string>();
    assertEquals(stack.isEmpty(), true);
    stack.push("0");
    stack.push("1");
    stack.push("2");
    assertEquals(stack.isEmpty(), false);
    assertEquals(stack.pop(), "2");
    assertEquals(stack.pop(), "1");
    assertEquals(stack.pop(), "0");
    assertEquals(stack.isEmpty(), true);
});
