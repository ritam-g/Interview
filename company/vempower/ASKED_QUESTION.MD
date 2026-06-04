# JavaScript Interview Questions

---

# Question 1: Hoisting with `var`

## Question

```js
var x = 1;

function foo() {
  console.log(x);

  var x = 2;

  console.log(x);
}

foo();
```

## Answer

```js
undefined
2
```

## Explanation

JavaScript hoists variable declarations to the top of their scope.

Before execution:

```js
function foo() {
  var x;

  console.log(x);

  x = 2;

  console.log(x);
}
```

The declaration is moved to the top but the assignment remains in place.

First console:

```js
console.log(x);
```

prints:

```js
undefined
```

because `x` exists but has not been assigned a value yet.

After:

```js
x = 2;
```

the second console prints:

```js
2
```

### Concept Tested

* Hoisting
* Function Scope
* `var`

---

# Question 2: Type Coercion

## Question

```js
console.log(1 + '2' + '2');

console.log(1 + +'2' + '2');

console.log('A' - 'B' + '2');
```

## Answer

```js
122
32
NaN2
```

## Explanation

### First Statement

```js
1 + '2'
```

becomes:

```js
'12'
```

Then:

```js
'12' + '2'
```

becomes:

```js
'122'
```

---

### Second Statement

Unary plus converts a string into a number.

```js
+'2'
```

becomes:

```js
2
```

Now:

```js
1 + 2 = 3
```

Then:

```js
3 + '2'
```

becomes:

```js
'32'
```

---

### Third Statement

```js
'A' - 'B'
```

tries numeric subtraction.

Strings cannot be converted into valid numbers.

Result:

```js
NaN
```

Then:

```js
NaN + '2'
```

becomes:

```js
'NaN2'
```

### Concept Tested

* Type Coercion
* Unary Plus
* NaN
* String Concatenation

---

# Question 3: Closure and Event Loop

## Question

```js
for (var i = 0; i < 3; i++) {
  setTimeout(function() {
    console.log(i);
  }, 0);
}
```

## Answer

```js
3
3
3
```

## Explanation

`setTimeout()` is asynchronous.

The loop finishes before callbacks execute.

Because `var` is function-scoped, only one variable `i` exists.

Loop execution:

```js
i = 0
i = 1
i = 2
i = 3
```

After the loop finishes:

```js
i === 3
```

All callbacks access the same variable.

Therefore:

```js
3
3
3
```

If we use `let`:

```js
for (let i = 0; i < 3; i++)
```

Output becomes:

```js
0
1
2
```

because `let` creates a new binding for every iteration.

### Concept Tested

* Closure
* Event Loop
* `var` vs `let`
* Asynchronous JavaScript

---

# Question 4: this Keyword

## Question

```js
const obj = {
  name: 'Alice',

  greet: function() {
    console.log(this.name);
  },

  greetArrow: () => {
    console.log(this.name);
  }
};

obj.greet();

obj.greetArrow();
```

## Answer

```js
Alice
undefined
```

## Explanation

### Normal Function

```js
obj.greet();
```

The object before the dot becomes `this`.

```js
this === obj
```

Therefore:

```js
Alice
```

is printed.

---

### Arrow Function

Arrow functions do not create their own `this`.

They inherit `this` from the surrounding scope.

In most environments:

```js
this.name
```

is undefined.

Therefore:

```js
undefined
```

is printed.

### Concept Tested

* `this`
* Arrow Functions
* Lexical Scope

---

# Question 5: filter() and map()

## Question

```js
const arr = [1, 2, 3, 4, 5];

console.log(
  arr.filter(x => x % 2 === 0)
     .map(x => x * 3)
);
```

## Answer

```js
[6, 12]
```

## Explanation

### filter()

Keeps only even numbers.

```js
[2, 4]
```

---

### map()

Multiplies every value by 3.

```js
2 * 3 = 6
4 * 3 = 12
```

Result:

```js
[6, 12]
```

### Concept Tested

* Array Methods
* Chaining
* Functional Programming

# Question 6: Array Destructuring with Default Values

## Question

```js
const [a = 5, b = 7] = [1];

console.log(a, b);
```

## Answer

```js
1 7
```

## Explanation

Array destructuring assigns values based on position.

```js
[a, b] = [1]
```

means:

```js
a = 1
b = undefined
```

Since `b` is undefined, the default value is used.

```js
b = 7
```

Final values:

```js
a = 1
b = 7
```

### Concept Tested

* Array Destructuring
* Default Parameters
* Undefined Values

---

# Question 7: Rest and Spread Operator

## Question

```js
function sum(...args) {
  return args.reduce((acc, val) => acc + val, 0);
}

console.log(sum(1, 2, 3));

console.log(sum(...[4, 5, 6]));
```

## Answer

```js
6
15
```

## Explanation

### Rest Operator

```js
...args
```

collects all arguments into an array.

```js
sum(1,2,3)

args = [1,2,3]
```

Reduce:

```js
1 + 2 + 3 = 6
```

---

### Spread Operator

```js
...[4,5,6]
```

expands array elements.

```js
sum(...[4,5,6])

sum(4,5,6)
```

Result:

```js
4 + 5 + 6 = 15
```

### Concept Tested

* Rest Operator
* Spread Operator
* Reduce Method

---

# Question 8: typeof Operator

## Question

```js
console.log(typeof null);

console.log(typeof undefined);

console.log(typeof []);

console.log(typeof function(){});
```

## Answer

```js
object
undefined
object
function
```

## Explanation

### typeof null

```js
typeof null
```

returns:

```js
object
```

This is a historical bug in JavaScript.

---

### typeof undefined

```js
typeof undefined
```

returns:

```js
undefined
```

---

### typeof []

Arrays are objects internally.

```js
typeof []
```

returns:

```js
object
```

---

### typeof function(){}

Functions have a special type.

```js
typeof function(){}
```

returns:

```js
function
```

### Concept Tested

* Data Types
* typeof Operator
* JavaScript Quirks

---

# Question 9: Nullish Coalescing Operator

## Question

```js
const a = null ?? 'default';

const b = 0 ?? 'zero';

const c = '' ?? 'empty';

console.log(a, b, c);
```

## Answer

```js
default 0
```

Third value is an empty string.

## Explanation

The nullish coalescing operator checks only:

```js
null
undefined
```

---

### First Variable

```js
null ?? 'default'
```

returns:

```js
'default'
```

---

### Second Variable

```js
0 ?? 'zero'
```

returns:

```js
0
```

because `0` is not null or undefined.

---

### Third Variable

```js
'' ?? 'empty'
```

returns:

```js
''
```

because an empty string is still a valid value.

### Concept Tested

* Nullish Coalescing
* Difference Between || and ??
* Falsy Values

---

# Question 10: Promise Chaining

## Question

```js
Promise.resolve(1)

  .then(v => v + 1)

  .then(v => {
    throw new Error('oops');
  })

  .catch(e => 'caught')

  .then(v => console.log(v));
```

## Answer

```js
caught
```

## Explanation

### Step 1

Promise starts with:

```js
1
```

---

### Step 2

First then:

```js
v + 1
```

becomes:

```js
2
```

---

### Step 3

Second then throws an error.

```js
throw new Error('oops')
```

Promise becomes rejected.

---

### Step 4

The catch block handles the error.

```js
.catch(() => 'caught')
```

returns:

```js
'caught'
```

---

### Step 5

Next then receives:

```js
'caught'
```

and prints:

```js
caught
```

### Concept Tested

* Promises
* Error Handling
* Promise Chaining
* Async JavaScript
# Question 11: Object Spread Operator

## Question

```js
const a = { x: 1, y: 2 };

const b = { y: 3, z: 4 };

const c = { ...a, ...b };

console.log(c.x, c.y, c.z);
```

## Answer

```js
1 3 4
```

## Explanation

The spread operator copies properties from objects.

```js
{ ...a, ...b }
```

becomes:

```js
{
  x: 1,
  y: 2,
  y: 3,
  z: 4
}
```

When duplicate properties exist, the later value wins.

```js
y: 3
```

overwrites:

```js
y: 2
```

### Concept Tested

* Object Spread Operator
* Object Merging
* Property Overwriting

---

# Question 12: Logical Operators

## Question

```js
let x = 0;

const y = x || 5;

const z = x && 5;

console.log(y, z);
```

## Answer

```js
5 0
```

## Explanation

### OR Operator (||)

Returns the first truthy value.

```js
0 || 5
```

Since `0` is falsy:

```js
5
```

is returned.

---

### AND Operator (&&)

Returns the first falsy value.

```js
0 && 5
```

Since `0` is falsy:

```js
0
```

is returned immediately.

### Concept Tested

* Logical Operators
* Short Circuit Evaluation
* Truthy and Falsy Values

---

# Question 13: Prototype Inheritance

## Question

```js
function Animal(name) {
  this.name = name;
}

Animal.prototype.speak = function() {
  return `${this.name} makes a noise.`;
};

const dog = new Animal('Rex');

console.log(dog.speak());

console.log(dog.hasOwnProperty('speak'));
```

## Answer

```js
Rex makes a noise.
false
```

## Explanation

When:

```js
dog.speak()
```

is called, JavaScript first searches inside `dog`.

It does not find `speak`.

Then it searches inside:

```js
Animal.prototype
```

and finds the method.

---

### hasOwnProperty()

Checks only direct properties of the object.

```js
dog.hasOwnProperty('speak')
```

returns:

```js
false
```

because `speak` belongs to the prototype.

### Concept Tested

* Prototype Chain
* Inheritance
* hasOwnProperty()

---

# Question 14: Async Function

## Question

```js
async function fetchData() {
  return 42;
}

fetchData().then(v => console.log(v));

console.log('sync');
```

## Answer

```js
sync
42
```

## Explanation

Every async function automatically returns a Promise.

```js
return 42;
```

becomes:

```js
Promise.resolve(42);
```

---

### Execution Order

JavaScript executes synchronous code first.

```js
console.log('sync');
```

prints immediately.

Then Promise callbacks execute.

```js
42
```

prints later.

### Concept Tested

* Async Functions
* Promises
* Event Loop
* Microtasks

---

# Question 15: flat() and flatMap()

## Question

```js
const arr = [[1, 2], [3, 4], [5]];

console.log(arr.flat());

console.log(arr.flatMap(x => x.map(n => n * 2)));
```

## Answer

```js
[1, 2, 3, 4, 5]

[2, 4, 6, 8, 10]
```

## Explanation

### flat()

Removes one level of nesting.

```js
[[1,2],[3,4],[5]]
```

becomes:

```js
[1,2,3,4,5]
```

---

### flatMap()

First performs map.

```js
[
 [2,4],
 [6,8],
 [10]
]
```

Then automatically flattens.

```js
[2,4,6,8,10]
```

### Concept Tested

* Array Flattening
* flat()
* flatMap()
* Array Transformation

---

# Question 16: Optional Chaining and Nullish Coalescing

## Question

```js
const user = {
  profile: {
    address: null
  }
};

console.log(user.profile?.address?.city ?? 'Unknown');

console.log(user.settings?.theme ?? 'default');
```

## Answer

```js
Unknown

default
```

## Explanation

### Optional Chaining

```js
?.
```

safely accesses nested properties.

Without optional chaining:

```js
user.profile.address.city
```

would throw an error because:

```js
address === null
```

---

### Nullish Coalescing

```js
?? 'Unknown'
```

provides a fallback value when result is:

```js
null
undefined
```

### Concept Tested

* Optional Chaining
* Nullish Coalescing
* Safe Property Access

---

# Question 17: Generator Functions

## Question

```js
function* gen() {
  yield 1;

  yield 2;

  yield 3;
}

const g = gen();

console.log(g.next().value);

console.log(g.next().value);

console.log(g.next().done);
```

## Answer

```js
1

2

false
```

## Explanation

Generator functions pause execution at every `yield`.

---

### First Call

```js
g.next()
```

returns:

```js
{
  value: 1,
  done: false
}
```

---

### Second Call

```js
g.next()
```

returns:

```js
{
  value: 2,
  done: false
}
```

---

### Third Call

```js
g.next()
```

returns:

```js
{
  value: 3,
  done: false
}
```

Therefore:

```js
g.next().done
```

is:

```js
false
```

### Concept Tested

* Generators
* Iterators
* yield Keyword

---

# Question 18: Symbols

## Question

```js
const sym1 = Symbol('foo');

const sym2 = Symbol('foo');

console.log(sym1 === sym2);

console.log(typeof sym1);
```

## Answer

```js
false

symbol
```

## Explanation

Each Symbol is unique.

Even if descriptions match:

```js
Symbol('foo')
```

and

```js
Symbol('foo')
```

are different values.

Therefore:

```js
sym1 === sym2
```

returns:

```js
false
```

---

### typeof Symbol

```js
typeof sym1
```

returns:

```js
symbol
```

### Concept Tested

* Symbols
* Primitive Data Types
* Unique Keys

---

# Question 19: Computed Property Names

## Question

```js
const key = 'name';

const val = 'Alice';

const obj = {
  [key]: val,
  age: 30
};

console.log(Object.keys(obj).length);

console.log(obj[key]);
```

## Answer

```js
2

Alice
```

## Explanation

### Computed Property

```js
[key]
```

means:

```js
'name'
```

Therefore object becomes:

```js
{
  name: 'Alice',
  age: 30
}
```

---

### Object.keys()

Returns:

```js
['name', 'age']
```

Length:

```js
2
```

---

### Dynamic Access

```js
obj[key]
```

becomes:

```js
obj['name']
```

Result:

```js
Alice
```

### Concept Tested

* Computed Properties
* Dynamic Keys
* Object.keys()

---

# Question 20: Private Class Fields

## Question

```js
class Counter {
  #count = 0;

  increment() {
    this.#count++;
  }

  get() {
    return this.#count;
  }
}

const c = new Counter();

c.increment();

c.increment();

console.log(c.get());

console.log('#count' in c);
```

## Answer

```js
2

false
```

## Explanation

### Private Fields

Fields starting with:

```js
#count
```

are private.

Only methods inside the class can access them.

---

### Increment Calls

Initial value:

```js
0
```

After first call:

```js
1
```

After second call:

```js
2
```

Therefore:

```js
c.get()
```

returns:

```js
2
```

---

### in Operator

```js
'#count' in c
```

checks for a normal property named `#count`.

Private fields are not normal object properties.

Therefore:

```js
false
```

is returned.

### Concept Tested

* ES2022 Private Fields
* Classes
* Encapsulation
* Object Properties
