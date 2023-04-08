import {
    assertEquals,
    assertThrows,
} from "https://deno.land/std@0.180.0/testing/asserts.ts";

import BinTree from "../src/tree.ts";

Deno.test("Tree is empty", () => {
    const tree = new BinTree();

    assertEquals(tree.getCountElements(), 0);
    assertEquals(tree.isEmpty(), true);

    assertThrows(() => tree.posfixedGoThrough(), EvalError, "Tree is empty");
    assertThrows(() => tree.infixedGoThrough(), EvalError, "Tree is empty");
    assertThrows(() => tree.prefixedGoThrough(), EvalError, "Tree is empty");
});

Deno.test("Tree is not empty", () => {
    const tree = new BinTree();

    tree.add(5);
    tree.add(3);
    tree.add(6);

    assertEquals(tree.isEmpty(), false);
    assertEquals(tree.getCountElements(), 3);
});

Deno.test("Get root", () => {
    const tree = new BinTree();

    tree.add(5);
    tree.add(3);
    tree.add(6);

    assertEquals(tree.getRoot()?.getData(), 5);
});

Deno.test("Get left", () => {
    const tree = new BinTree();

    tree.add(5);
    tree.add(3);
    tree.add(6);

    assertEquals(tree.getRoot()?.getLeft()?.getData(), 3);
});

Deno.test("Get right", () => {
    const tree = new BinTree();

    tree.add(5);
    tree.add(3);
    tree.add(6);

    assertEquals(tree.getRoot()?.getRight()?.getData(), 6);
});

Deno.test("Contains", () => {
    const tree = new BinTree();

    tree.add(5);
    tree.add(3);
    tree.add(6);

    assertEquals(tree.contains(3), true);
    assertEquals(tree.contains(5), true);
    assertEquals(tree.contains(6), true);
    assertEquals(tree.contains(4), false);
});
