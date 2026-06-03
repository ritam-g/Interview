### Interview Answer: How is memory managed in JavaScript?

JavaScript mainly uses **two memory areas**:

### 1. Stack Memory

Stores:

* Primitive values (`number`, `string`, `boolean`, `null`, `undefined`, `symbol`, `bigint`)
* Function execution context
* References (addresses) to objects

Example:

```js
let age = 21;
let name = "Ritam";
```

Memory:

```text
Stack
-----
age  → 21
name → "Ritam"
```

---

### 2. Heap Memory

Stores:

* Objects
* Arrays
* Functions

Example:

```js
let user = {
    name: "Ritam"
};
```

Memory:

```text
Stack                    Heap
-----                    ----------------
user  ───────────────►   { name: "Ritam" }
```

The actual object is stored in the Heap, and the variable `user` stores its reference (address) in the Stack.

---

### Example

```js
let obj1 = { value: 10 };
let obj2 = obj1;

obj2.value = 20;
```

Memory:

```text
Stack                    Heap
-----                    ----------------
obj1 ───────────────►
                       { value: 20 }
obj2 ───────────────►
```

Both variables point to the same object.

---

### Interview One-Liner

> JavaScript stores primitive values in the Stack memory. Objects, arrays, and functions are stored in the Heap memory, while their references are kept in the Stack. This is why primitives are copied by value and objects are copied by reference.
