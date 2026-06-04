# JavaScript Interview Questions - Rules & Concepts

---

# Question 1: Hoisting with var

```js
var x = 1;

function foo() {
  console.log(x);
  var x = 2;
  console.log(x);
}

foo();
```

## Output

```js
undefined
2
```

## Rule

### Hoisting

JavaScript moves variable declarations to the top of their scope before execution.

```js
function foo() {
  var x;
  console.log(x);
  x = 2;
  console.log(x);
}
```

Only the declaration is hoisted, not the value assignment.

### Interview Concept

- var is hoisted
- initialized with undefined
- function scope

---

# Question 2: Type Coercion

```js
console.log(1 + '2' + '2');
console.log(1 + +'2' + '2');
console.log('A' - 'B' + '2');
```

## Output

```js
122
32
NaN2
```

## Rules

### String Concatenation

```js
1 + '2'
```

becomes

```js
'12'
```

because one operand is a string.

---

### Unary Plus Operator

```js
+'2'
```

converts string to number.

```js
Number('2')
```

---

### Invalid Arithmetic

```js
'A' - 'B'
```

becomes

```js
NaN
```

because subtraction requires numbers.

### Interview Concept

- Type coercion
- String concatenation
- Unary +
- NaN

---

# Question 3: Closure + Event Loop

```js
for (var i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 0);
}
```

## Output

```js
3
3
3
```

## Rules

### var is Function Scoped

Only one variable exists.

```js
i = 0
i = 1
i = 2
i = 3
```

After loop finishes:

```js
i = 3
```

All callbacks access same variable.

---

### Event Loop

setTimeout callback executes after loop completes.

### Interview Concept

- Closure
- Event Loop
- var vs let

---

# Question 4: this Keyword

```js
obj.greet();
obj.greetArrow();
```

## Output

```js
Alice
undefined
```

## Rules

### Normal Function

```js
this = object calling function
```

```js
obj.greet()
```

therefore

```js
this === obj
```

---

### Arrow Function

Arrow functions do not create their own this.

They inherit it from outer scope.

### Interview Concept

- this binding
- lexical this
- arrow functions

---

# Question 5: Filter and Map

```js
arr.filter(x => x % 2 === 0)
   .map(x => x * 3)
```

## Output

```js
[6,12]
```

## Rules

### filter()

Returns elements matching condition.

```js
[2,4]
```

### map()

Transforms each element.

```js
[6,12]
```

### Interview Concept

Array chaining

---

# Question 6: Destructuring Defaults

```js
const [a = 5, b = 7] = [1];
```

## Output

```js
1 7
```

## Rule

Default value works only when value is undefined.

```js
a = 1
b = undefined
```

therefore

```js
b = 7
```

### Interview Concept

Array destructuring

---

# Question 7: Rest and Spread

```js
function sum(...args)
```

## Rule

### Rest Operator

Collects values into array.

```js
sum(1,2,3)

args = [1,2,3]
```

---

### Spread Operator

Expands array into individual values.

```js
sum(...[4,5,6])

sum(4,5,6)
```

### Interview Concept

Rest vs Spread

---

# Question 8: typeof

```js
typeof null
typeof []
typeof function(){}
```

## Output

```js
object
object
function
```

## Rules

### typeof null

Historical JavaScript bug.

### Array

Arrays are special objects.

### Function

Functions have special type.

### Interview Concept

Data types

---

# Question 9: Nullish Coalescing

```js
a = null ?? 'default'
```

## Rule

Only checks:

```js
null
undefined
```

Does NOT check:

```js
0
''
false
```

### Difference

```js
0 || 5
```

returns

```js
5
```

but

```js
0 ?? 5
```

returns

```js
0
```

### Interview Concept

|| vs ??

---

# Question 10: Promise Chaining

```js
Promise.resolve(1)
```

## Rule

Each then returns value to next then.

```js
1 → 2
```

Error thrown:

```js
throw new Error()
```

moves control to catch.

### Interview Concept

- Promise chain
- Error propagation

---

# Question 11: Object Spread

```js
const c = { ...a, ...b };
```

## Rule

Later properties overwrite earlier properties.

```js
y:2
```

replaced by

```js
y:3
```

### Interview Concept

Object merging

---

# Question 12: Logical Operators

```js
0 || 5
```

returns first truthy value.

```js
5
```

---

```js
0 && 5
```

returns first falsy value.

```js
0
```

### Interview Concept

Short Circuit Evaluation

---

# Question 13: Prototype Chain

```js
Animal.prototype.speak
```

## Rule

Objects first search:

1. Own properties
2. Prototype

### Why False?

```js
dog.hasOwnProperty('speak')
```

returns false because method exists in prototype.

### Interview Concept

Prototype Inheritance

---

# Question 14: Async Function

```js
async function fetchData()
```

## Rule

Always returns Promise.

```js
return 42
```

becomes

```js
Promise.resolve(42)
```

### Interview Concept

Async/Await

---

# Question 15: flat and flatMap

```js
flat()
```

removes one nesting level.

---

```js
flatMap()
```

performs

```js
map()
```

then

```js
flat()
```

### Interview Concept

Array Flattening

---

# Question 16: Optional Chaining

```js
user.profile?.address?.city
```

## Rule

Stops evaluation if value is null or undefined.

Prevents:

```js
Cannot read property of null
```

### Interview Concept

Safe property access

---

# Question 17: Generator Function

```js
function* gen()
```

## Rule

yield pauses execution.

```js
yield 1
```

pause

```js
yield 2
```

pause

### Interview Concept

Iterators and Generators

---

# Question 18: Symbol

```js
Symbol('foo')
```

## Rule

Every Symbol is unique.

```js
Symbol('foo') !== Symbol('foo')
```

### Interview Concept

Unique object keys

---

# Question 19: Computed Properties

```js
{
  [key]: value
}
```

## Rule

Expression inside [] becomes property name.

```js
key = 'name'
```

becomes

```js
{
  name:'Alice'
}
```

### Interview Concept

Dynamic Object Keys

---

# Question 20: Private Fields

```js
#count
```

## Rule

Private fields are accessible only inside class.

```js
this.#count
```

works

```js
c.#count
```

throws error

### Interview Concept

Class Encapsulation

---

# Most Important Interview Rules

1. Hoisting
2. Scope (var, let, const)
3. Closure
4. Event Loop
5. this keyword
6. Prototype Chain
7. Promise & Async/Await
8. Type Coercion
9. Destructuring
10. Spread & Rest
11. Optional Chaining
12. Nullish Coalescing
13. Generator Functions
14. Symbol
15. Private Class Fields
16. Short Circuit Evaluation