# JavaScript Interview Notes (Easy English)

## 1. What is a Promise?

A Promise is an object that represents the result of an asynchronous operation.

### States of a Promise

* Pending
* Fulfilled (Resolved)
* Rejected

### Example

```js
const promise = new Promise((resolve, reject) => {
  let success = true;

  if (success) {
    resolve("Data fetched");
  } else {
    reject("Error");
  }
});

promise
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
```

---

## 2. Difference Between `==` and `===`

| `==`                    | `===`                     |
| ----------------------- | ------------------------- |
| Checks value only       | Checks value and datatype |
| Type conversion happens | No type conversion        |

### Example

```js
console.log(5 == "5"); // true
console.log(5 === "5"); // false
```

---

## 3. Type Coercion vs Type Conversion

### Type Coercion

JavaScript automatically converts data types.

```js
console.log("5" + 2);
```

Output:

```js
"52"
```

### Type Conversion

We manually convert data types.

```js
console.log(Number("5") + 2);
```

Output:

```js
7
```

---

## 4. Difference Between `var`, `let`, and `const`

| var            | let          | const           |
| -------------- | ------------ | --------------- |
| Can reassign   | Can reassign | Cannot reassign |
| Function scope | Block scope  | Block scope     |
| Hoisted        | Hoisted      | Hoisted         |

### Example

```js
let age = 20;
age = 25;

const PI = 3.14;
// PI = 10; ❌ Error
```

---

## 5. What are `async` and `await`?

### async

Makes a function return a Promise.

### await

Waits for a Promise to finish.

### Example

```js
async function getData() {
  const data = await Promise.resolve("Hello");
  console.log(data);
}

getData();
```

---

## 6. Is JavaScript Single Threaded?

Yes.

JavaScript has only one Call Stack.

### Then how does async work?

Using:

* Web APIs
* Callback Queue
* Event Loop

### Example

```js
console.log("A");

setTimeout(() => {
  console.log("B");
}, 0);

console.log("C");
```

Output:

```txt
A
C
B
```

---

## 7. Difference Between `for` and `forEach`

### for Loop

```js
for (let i = 0; i < 5; i++) {
  console.log(i);
}
```

### forEach Loop

```js
[1, 2, 3].forEach((num) => {
  console.log(num);
});
```

### Why is `for` more powerful?

* Supports `break`
* Supports `continue`
* Usually faster

```js
for (let i = 0; i < 10; i++) {
  if (i === 5) break;
}
```

---

## 8. Difference Between `for...in` and `for...of`

### for...in

Used for Object Keys.

```js
const obj = {
  name: "Ritam",
  age: 20,
};

for (let key in obj) {
  console.log(key);
}
```

Output:

```txt
name
age
```

### for...of

Used for Array Values.

```js
const arr = [1, 2, 3];

for (let value of arr) {
  console.log(value);
}
```

Output:

```txt
1
2
3
```

---

## 9. package.json vs package-lock.json

### package.json

Contains:

* Project information
* Dependencies
* Scripts

### package-lock.json

Stores exact dependency versions.

Example:

```json
"express": "^4.18.0"
```

package-lock:

```json
"express": "4.18.2"
```

---

## 10. What is Middleware?

Middleware runs between request and response.

### Example

```js
app.use((req, res, next) => {
  console.log("Request received");
  next();
});
```

### Uses

* Authentication
* Logging
* Validation

---

## 11. React Hooks

Hooks allow Functional Components to use React features.

### Common Hooks

* useState
* useEffect
* useRef

### Example

```js
const [count, setCount] = useState(0);
```

---

## 12. Functional Component vs Class Component

### Functional Component

```jsx
function App() {
  return <h1>Hello</h1>;
}
```

### Class Component

```jsx
class App extends React.Component {
  render() {
    return <h1>Hello</h1>;
  }
}
```

Functional Components are preferred today.

---

## 13. What is try...catch?

Used for Error Handling.

```js
try {
  console.log(a);
} catch (err) {
  console.log("Error");
}
```

---

## 14. What is Prototype?

Every object can inherit properties and methods from another object.

```js
function Person(name) {
  this.name = name;
}

Person.prototype.sayHi = function () {
  console.log("Hi");
};

const p = new Person("Ritam");

p.sayHi();
```

---

## 15. What is reduce()?

reduce() converts an array into a single value.

### Example

```js
const arr = [1, 2, 3, 4];

const sum = arr.reduce((acc, cur) => {
  return acc + cur;
}, 0);

console.log(sum);
```

Output:

```txt
10
```

---

## 16. Create Your Own reduce()

```js
function myReduce(arr, callback, initial) {
  let acc = initial;

  for (let i = 0; i < arr.length; i++) {
    acc = callback(acc, arr[i]);
  }

  return acc;
}

const result = myReduce(
  [1, 2, 3],
  (acc, cur) => acc + cur,
  0
);

console.log(result);
```

---

## 17. Group By Function

```js
function groupBy(arr, key) {
  const result = {};

  for (let item of arr) {
    const value = item[key];

    if (!result[value]) {
      result[value] = [];
    }

    result[value].push(item);
  }

  return result;
}
```

Usage:

```js
groupBy(people, "city");
```

---

## 18. Flatten Array Without flat()

Input:

```js
[1, [2, [3, 4]], 5];
```

### Solution

```js
function flatten(arr) {
  let result = [];

  for (let item of arr) {
    if (Array.isArray(item)) {
      result.push(...flatten(item));
    } else {
      result.push(item);
    }
  }

  return result;
}

console.log(flatten([1, [2, [3, 4]], 5]));
```

Output:

```js
[1, 2, 3, 4, 5];
```

---

## 19. Check Prime Number

```js
function isPrime(num) {
  if (num < 2) return false;

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

console.log(isPrime(7));
```

Output:

```txt
true
```

---

## 20. Print Prime Numbers from 1 to N

```js
function printPrimes(n) {
  for (let i = 2; i <= n; i++) {
    let prime = true;

    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        prime = false;
        break;
      }
    }

    if (prime) {
      console.log(i);
    }
  }
}

printPrimes(10);
```

Output:

```txt
2
3
5
7
```

---

## 21. Best Time to Buy and Sell Stock

```js
function maxProfit(prices) {
  let min = prices[0];
  let profit = 0;

  for (let price of prices) {
    min = Math.min(min, price);
    profit = Math.max(profit, price - min);
  }

  return profit;
}

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
```

Output:

```txt
5
```

---

## 22. Stack vs Queue

### Stack (LIFO)

Last In First Out

```js
let stack = [];

stack.push(10);
stack.push(20);

stack.pop();
```

### Queue (FIFO)

First In First Out

```js
let queue = [];

queue.push(10);
queue.push(20);

queue.shift();
```

---

## 23. Linked List - Find Middle Node

Using Fast and Slow Pointers.

```js
let slow = head;
let fast = head;

while (fast && fast.next) {
  slow = slow.next;
  fast = fast.next.next;
}

return slow;
```

---

## 24. Tree Data Structure

A hierarchical data structure.

Example:

```txt
      A
    /   \
   B     C
  / \
 D   E
```

### Uses

* File Systems
* DOM
* Databases

---

## 25. Divide Three Numbers

```js
function divide(a, b, c) {
  return a / b / c;
}

console.log(divide(100, 5, 2));
```

Output:

```txt
10
```

---

## 26. TypeScript Version

```ts
function divide(
  a: number,
  b: number,
  c: number
): number {
  return a / b / c;
}
```

---

## 27. Prime Combination Question (Most Important)

### Input

```txt
359
```

### Output

```txt
3
5
59
359
```

### Solution

```js
function isPrime(num) {
  if (num < 2) return false;

  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

function primeCombinations(num) {
  const str = num.toString();
  let found = false;

  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j <= str.length; j++) {
      const part = Number(str.slice(i, j));

      if (isPrime(part)) {
        console.log(part);
        found = true;
      }
    }
  }

  if (!found) {
    console.log("No prime combo");
  }
}

primeCombinations(359);
```

### Time Complexity

```txt
O(n² × √m)
```

### Space Complexity

```txt
O(1)
```

> This is one of the most frequently asked JavaScript coding questions in Round 2 interviews. Practice dry running it.
