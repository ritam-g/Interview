# JavaScript Tricky Questions & Type Conversion Cheat Sheet

## JavaScript Type Conversion (Must Know)

### String → Number

```js
Number("123") // 123
+"123"        // 123
parseInt("123") // 123
```

```js
Number("abc") // NaN
+"abc"        // NaN
```

---

### Number → String

```js
String(123) // "123"
123 + ""    // "123"
```

---

### Boolean Conversion

#### Falsy Values (Only 8)

```js
false
0
-0
0n
""
null
undefined
NaN
```

Everything else is truthy.

```js
Boolean("hello") // true
Boolean([])      // true
Boolean({})      // true
```

---

### Equality Operators

#### Loose Equality (==)

JavaScript performs type conversion.

```js
5 == "5" // true
```

#### Strict Equality (===)

No type conversion.

```js
5 === "5" // false
```

---

### String + Number

```js
1 + "2" // "12"
```

Number becomes string.

---

### String - Number

```js
"10" - 5 // 5
```

String becomes number.

---

## Interview Rule

### If + sees a string

```js
1 + "2" // "12"
```

String concatenation happens.

### If -, *, / sees a string

```js
"10" - 2 // 8
"10" * 2 // 20
"10" / 2 // 5
```

String converts to number.

---

# Tricky Questions

## Q1

```js
console.log("5" + 2);
```

Output:

```js
"52"
```

Explanation:

String is present, so concatenation happens.

---

## Q2

```js
console.log("5" - 2);
```

Output:

```js
3
```

Explanation:

Minus converts string to number.

---

## Q3

```js
console.log(true + true);
```

Output:

```js
2
```

Explanation:

```js
true = 1
```

So:

```js
1 + 1 = 2
```

---

## Q4

```js
console.log(true + false);
```

Output:

```js
1
```

Explanation:

```js
1 + 0 = 1
```

---

## Q5

```js
console.log([] + []);
```

Output:

```js
""
```

Explanation:

```js
String([]) = ""
```

So:

```js
"" + "" = ""
```

---

## Q6

```js
console.log([] + {});
```

Output:

```js
"[object Object]"
```

Explanation:

```js
[] -> ""
{} -> "[object Object]"
```

Result:

```js
"" + "[object Object]"
```

---

## Q7

```js
console.log({} + []);
```

Output (usually):

```js
0
```

Explanation:

```js
+[] = 0
```

JavaScript may treat `{}` as an empty block.

---

## Q8

```js
console.log(null == undefined);
```

Output:

```js
true
```

Explanation:

Special JavaScript rule.

---

## Q9

```js
console.log(null === undefined);
```

Output:

```js
false
```

Explanation:

Different data types.

---

## Q10

```js
console.log([] == false);
```

Output:

```js
true
```

Explanation:

```js
[] -> ""
"" -> 0
false -> 0

0 == 0
```

---

## Q11

```js
console.log("0" == false);
```

Output:

```js
true
```

Explanation:

```js
"0" -> 0
false -> 0
```

---

## Q12

```js
console.log(Boolean([]));
```

Output:

```js
true
```

Explanation:

Empty array is truthy.

---

## Q13

```js
console.log(Boolean({}));
```

Output:

```js
true
```

Explanation:

Empty object is truthy.

---

## Q14

```js
console.log([] == ![]);
```

Output:

```js
true
```

Explanation:

```js
![] = false
```

Then:

```js
[] == false
```

Which becomes:

```js
0 == 0
```

Result:

```js
true
```

---

## Q15

```js
console.log(NaN == NaN);
```

Output:

```js
false
```

Explanation:

NaN is never equal to anything, even itself.

---

## Q16

```js
console.log(typeof NaN);
```

Output:

```js
"number"
```

Explanation:

Famous JavaScript interview question.

---

## Q17

```js
console.log(typeof null);
```

Output:

```js
"object"
```

Explanation:

Historical JavaScript bug.

---

## Q18

```js
console.log(1 < 2 < 3);
```

Output:

```js
true
```

Explanation:

```js
1 < 2
```

becomes:

```js
true < 3
```

Then:

```js
1 < 3
```

Result:

```js
true
```

---

## Q19

```js
console.log(3 > 2 > 1);
```

Output:

```js
false
```

Explanation:

```js
3 > 2
```

becomes:

```js
true > 1
```

Then:

```js
1 > 1
```

Result:

```js
false
```

---

## Q20

```js
console.log([] + 1);
```

Output:

```js
"1"
```

Explanation:

```js
[] -> ""
```

Then:

```js
"" + 1
```

Result:

```js
"1"
```

---

# Frequently Asked Interview Questions

1. Difference between == and ===
2. Explain type coercion.
3. Why is `typeof null` equal to `"object"`?
4. Why is `NaN !== NaN`?
5. Explain truthy and falsy values.
6. Difference between null and undefined.
7. What is the output of `[] == false`?
8. What is the output of `[] == ![]`?
9. Explain implicit vs explicit conversion.
10. Why does `"5" + 2` differ from `"5" - 2`?

---

# Quick Revision

```js
true  -> 1
false -> 0

[]    -> ""
{}    -> "[object Object]"

null == undefined // true
null === undefined // false

NaN == NaN // false

Boolean([]) // true
Boolean({}) // true

typeof null // object
typeof NaN // number
```

Master these and you'll solve 80% of JavaScript output-based interview questions.
