# MERN Interview Preparation - JavaScript Handbook

# 1. What is JavaScript?

JavaScript is a high-level, interpreted programming language used to make web pages interactive.

Examples:

* Button click
* Form validation
* API calls
* Dynamic content updates

Example:

```js
console.log("Hello World");
```

---

# 2. Difference Between var, let, and const

| Feature        | var      | let   | const |
| -------------- | -------- | ----- | ----- |
| Scope          | Function | Block | Block |
| Re-declaration | Yes      | No    | No    |
| Re-assignment  | Yes      | Yes   | No    |
| Hoisted        | Yes      | Yes   | Yes   |
| TDZ            | No       | Yes   | Yes   |

Example:

```js
var a = 10;
let b = 20;
const c = 30;
```

Interview Answer:

* Use let when value changes.
* Use const when value should not change.
* Avoid var in modern JavaScript.

Practice Question:

```js
{
  var a = 10;
  let b = 20;
}
		
console.log(a);
console.log(b);
```

Answer:

```js
10
ReferenceError
```

---

# 3. Why Can We Modify Objects and Arrays Declared with const?

Wrong:

```js
const arr = [1,2,3];
arr = [4,5,6];
```

Correct:

```js
const arr = [1,2,3];
arr.push(4);
```

Explanation:

const prevents changing the reference, not the contents."Yes. `const` prevents re-assignment, not mutation. You cannot use the equals sign (`=`) to assign a completely new array, but you can still insert, delete, or modify the elements inside the existing array."

`const` stops you from replacing the whole array with a new one, but it allows you to change the items inside it

Practice:		

```js
const user = {
  name: "Ritam"
};

user.name = "John";

console.log(user.name);
```

Output:

```js
John
```

---

# 4. Scope

Types:

1. Global Scope
2. Function Scope
3. Block Scope

Example:

```js
let a = 10;

function test() {
  let b = 20;
}

{
  let c = 30;
}
```

Interview Question:

Which variable is accessible everywhere?

Answer:

Global variable.

---

# 5. Hoisting

Hoisting means JavaScript moves declarations to the top before execution.Hoisting means JavaScript moves all variable and function declarations to the top of the code before running it.

Example:

```js
console.log(a);

var a = 10;
```

Output:

```js
undefined
```

Because JS internally does:

```js
var a;

console.log(a);

a = 10;
```

Practice:

```js
console.log(a);

let a = 10;
```

Output:

```js
ReferenceError
```

---

# 6. Temporal Dead Zone (TDZ)

TDZ is the time between variable declaration and initialization.
Temporal Dead Zone is the time between the creation of a `let` or `const` variable and its initialization. During this period, accessing the variable causes a ReferenceError	

Example:

```js
console.log(a);

let a = 10;
```

Output:

```js
ReferenceError
```

Explanation:

Variable exists but cannot be accessed before initialization.

---

# 7. Closure

Definition:

A closure is a function that remembers variables from its outer scope even after the outer function has finished execution.

Example:

```js
function outer() {
  let count = 0;

  return function inner() {
    count++;
    console.log(count);
  };
}

const fn = outer();

fn();
fn();
```

Output:

```js
1
2
```

Uses:

* Data hiding
* Counters
* React hooks

Practice Question:

What will be printed?

```js
function test() {
  let name = "Ritam";

  return function() {
    console.log(name);
  }
}

const fn = test();

fn();
```

Answer:

```js
Ritam
```

---

# 8. Lexical Scope

Inner functions can access variables from outer functions.

Example:

```js
function outer() {
  let a = 10;

  function inner() {
    console.log(a);
  }

  inner();
}
```

Output:

```js
10
```

---

# 9. Callback Function

A function passed into another function.

Example:

```js
function greet(name) {
  console.log(name);
}

function process(callback) {
  callback("Ritam");
}

process(greet);
```

Output:

```js
Ritam
```

---

# 10. Promise

A Promise represents a future value.


Promise is a built-in JavaScript class that helps handle asynchronous operations. It represents a future value and can be in three states: pending, fulfilled, or rejected. We commonly use Promises for API calls and handle the result using `.then()` and `.catch()`			

Example:

```js
const promise = new Promise((resolve, reject) => {
  resolve("Success");
});

promise.then(console.log);
```

Output:

```js
Success
```

---

# 11. Promise to Async Await

Promise:

```js
fetch(url)
  .then(res => res.json())
  .then(data => console.log(data));
```

Async Await:

```js
async function getData() {
  const res = await fetch(url);
  const data = await res.json();

  console.log(data);
}
```

Benefits:

* Cleaner code
* Easier error handling

---

# 12. Event Loop

JavaScript is single-threaded.

Event Loop helps execute asynchronous tasks.

Example:

```js
console.log("Start");

setTimeout(() => {
  console.log("Timeout");
}, 0);

console.log("End");
```

Output:

```js
Start
End
Timeout
```

Explanation:

setTimeout goes to Web APIs → Callback Queue → Event Loop → Call Stack.

Interview Tip:

Event Loop is one of the most frequently asked questions.

---

# 13. Higher Order Function

A function that:

* Accepts another function
  OR
* Returns another function

Example:

```js
function calculate(a, b, operation) {
  return operation(a, b);
}

calculate(2, 3, (x, y) => x + y);
```

Output:

```js
5
```

Examples:

* map
* filter
* reduce

---

# 14. First Class Functions

Functions can:

* Be assigned to variables
* Passed as arguments
* Returned from functions

Example:

```js
const greet = function() {
  console.log("Hello");
};
```

---

# 15. map vs filter vs reduce

map()

Returns transformed array.

```js
[1,2,3].map(num => num * 2);

Output:
[2,4,6]
```

filter()

Returns matching elements.

```js
[1,2,3,4].filter(num => num % 2 === 0);

Output:
[2,4]
```

reduce()

Returns single value.

```js
[1,2,3,4].reduce((acc, cur) => acc + cur, 0);

Output:
10
```

---

# Practice Questions

1. Explain closure with code.
2. Difference between let and var.
3. Explain TDZ.
4. What is Event Loop?
5. Difference between Promise and Async Await.
6. Difference between map, filter, reduce.
7. Why can arrays declared with const be modified?
8. What is Lexical Scope?
9. What is Hoisting?
10. What is Higher Order Function?

These are among the most repeated JavaScript interview questions from the interview experiences you shared.
