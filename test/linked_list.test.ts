import {
    assertEquals,
    assertThrows,
} from "https://deno.land/std@0.180.0/testing/asserts.ts";

import MyLinkedList from "../src/linked_list.ts";

Deno.test(function listIsEmpty() {
    const list = new MyLinkedList<number>();
    assertEquals(list.isEmpty(), true);
});

Deno.test(function appendData() {
    const list = new MyLinkedList();
    list.append(0);
    assertEquals(list.isEmpty(), false);
    assertEquals(list.length, 1);

    list.append(1);
    assertEquals(list.isEmpty(), false);
    assertEquals(list.length, 2);

    list.append(2);
    assertEquals(list.isEmpty(), false);
    assertEquals(list.length, 3);

    assertEquals(list.asArray, [0, 1, 2]);
});

Deno.test(function insertData() {
    const list = new MyLinkedList();
    list.append(0);
    list.append(2);

    list.insert(1, 1);
    assertEquals(list.length, 3);
    assertEquals(list.asArray, [0, 1, 2]);
});

Deno.test(function removeLastItem() {
    const list = new MyLinkedList();
    list.append(0);
    list.append(1);
    list.append(2);

    const value = list.remove();
    assertEquals(value, 2);
    assertEquals(list.length, 2);

    assertEquals(list.asArray, [0, 1]);
});

Deno.test(function removeIndexedItem() {
    const list = new MyLinkedList();
    list.append(0);
    list.append(1);
    list.append(2);

    assertThrows(() => list.remove(3), RangeError, "Index out of bounds");
    assertThrows(() => list.remove(-1), RangeError, "Index out of bounds");

    const value = list.remove(1);
    assertEquals(value, 1);
    assertEquals(list.length, 2);

    assertEquals(list.asArray, [0, 2]);
});

Deno.test(function getValueAtIndex() {
    const list = new MyLinkedList();
    list.append(0);
    list.append(1);
    list.append(2);

    assertThrows(() => list.at(3), RangeError, "Index out of bounds");
    assertThrows(() => list.at(-1), RangeError, "Index out of bounds");

    const value = list.at(1);
    assertEquals(value, 1);
    assertEquals(list.length, 3);

    assertEquals(list.asArray, [0, 1, 2]);
});
