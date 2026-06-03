# MERN Interview Preparation - React Handbook

# 1. What is React?

## Easy Answer

React is a JavaScript library used to build user interfaces.

It helps us create reusable components and update the UI efficiently.

Examples:

* Social media feeds
* Dashboards
* E-commerce websites

Example:

```jsx
function App() {
  return <h1>Hello World</h1>;
}
```

---

# 2. What are Components?

## Easy Answer

Components are reusable pieces of UI.

Think of them like LEGO blocks.

Examples:

* Navbar
* Sidebar
* Product Card
* Footer

Example:

```jsx
function Navbar() {
  return <h1>Navbar</h1>;
}
```

---

# 3. What are Props?

## Easy Answer

Props are used to pass data from parent component to child component.

Example:

```jsx
function Child(props) {
  return <h1>{props.name}</h1>;
}

function App() {
  return <Child name="Ritam" />;
}
```

Output:

```jsx
Ritam
```

Interview Answer:

> Props are read-only values used to pass data from parent to child components.

---

# 4. What is State?

## Easy Answer

State stores data that can change over time. state is a object with this we can store data .

Example:

```jsx
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      {count}
    </button>
  );
}
```

---

# 5. Difference Between Props and State

| Props              | State                    |
| ------------------ | ------------------------ |
| Passed from Parent | Managed inside component |
| Read-only          | Can change               |
| External Data      | Internal Data            |

Interview Answer:

> Props are used to receive data, while state is used to manage changing data inside a component.

---

# 6. What is a Hook?

## Easy Answer

Hooks allow functional components to use React features such as state and lifecycle methods.

Example:

```jsx
const [count, setCount] = useState(0);
```

Common Hooks:

* useState
* useEffect
* useMemo
* useCallback
* useReducer
* useContext

---

# 7. What is useState?

## Easy Answer

useState is used to create and update state.

Example:

```jsx
const [count, setCount] = useState(0);
```

Practice Question:

What happens?

```jsx
setCount(count + 1);
```

Answer:

Count increases by 1.

---

# 8. What is useEffect?

## Easy Answer

useEffect is used for side effects.

Examples:

* API Calls
* Timers
* Event Listeners

Example:

```jsx
useEffect(() => {
  console.log("Component Mounted");
}, []);
```

Interview Answer:

> useEffect runs after rendering and is commonly used for API calls, subscriptions, and side effects.

---

# 9. What is useMemo?

## Easy Answer

useMemo caches a calculated value.

It prevents expensive calculations from running again unnecessarily.

Example:

```jsx
const total = useMemo(() => {
  return expensiveCalculation();
}, [data]);
```

Use Case:

* Large Lists
* Heavy Calculations

---

# 10. What is useCallback?

## Easy Answer

useCallback caches a function.

Example:

```jsx
const handleClick = useCallback(() => {
  console.log("Clicked");
}, []);
```

Use Case:

Prevent unnecessary re-renders.

---

# 11. Difference Between useMemo and useCallback

| useMemo       | useCallback      |
| ------------- | ---------------- |
| Caches Value  | Caches Function  |
| Returns Value | Returns Function |

Interview Answer:

> useMemo memorizes the result of a calculation, while useCallback memorizes a function.

---

# 12. What is a Custom Hook?

## Easy Answer

A custom hook is a reusable function that uses React hooks.

Example:

```jsx
function useCounter() {
  const [count, setCount] = useState(0);

  return {
    count,
    setCount
  };
}
```

---

# 13. What is Prop Drilling?

## Easy Answer

Passing props through many components unnecessarily.

Example:

```jsx
App
 |
 A
 |
 B
 |
 C
```

Passing data from App to C through A and B.

Problem:

Hard to maintain.

Solution:

* Context API
* Redux

---

# 14. What is Context API?

## Easy Answer

Context API allows sharing data globally without prop drilling.

Example:

```jsx
const UserContext = createContext();
```

Use Cases:

* Theme
* User Data
* Language

Interview Answer:

> Context API helps share data between components without manually passing props through every level.

---

# 15. What is Redux?

## Easy Answer

Redux is a state management library.

It stores global data in one central store.

Example:

```jsx
Store
 |
 Components
```

Use Cases:

* Authentication
* Cart Data
* Global Settings

---

# 16. Redux Workflow

Flow:

```text
Component
   ↓
Dispatch Action
   ↓
Reducer
   ↓
Store Updated
   ↓
UI Re-render
```

Interview Answer:

> Redux follows a unidirectional data flow where actions are dispatched, reducers update the state, and the store provides updated data to components.

---

# 17. Context API vs Redux

| Context API      | Redux            |
| ---------------- | ---------------- |
| Small Apps       | Large Apps       |
| Built into React | External Library |
| Less Boilerplate | More Features    |

Interview Answer:

> Context API is suitable for small global state management, while Redux is better for complex applications with large amounts of shared state.

---

# 18. What is Virtual DOM?

## Easy Answer

Virtual DOM is a lightweight copy of the real DOM.

React updates the Virtual DOM first and then updates only the changed parts in the real DOM.

Benefits:

* Faster UI Updates
* Better Performance

Interview Answer:

> Virtual DOM improves performance by minimizing direct DOM manipulations.

---

# 19. Functional vs Class Components

| Functional      | Class             |
| --------------- | ----------------- |
| Hooks           | Lifecycle Methods |
| Less Code       | More Boilerplate  |
| Modern Approach | Older Approach    |

Interview Answer:

> Functional components are preferred because they are simpler and support hooks.

---

# 20. Controlled vs Uncontrolled Components

Controlled:

```jsx
<input
  value={name}
  onChange={(e) => setName(e.target.value)}
/>
```

Uncontrolled:

```jsx
<input ref={inputRef} />
```

Interview Answer:

> Controlled components are managed by React state, while uncontrolled components manage their own state using the DOM.

---

# 21. What is React.memo?

## Easy Answer

React.memo prevents unnecessary re-rendering of components.

Example:

```jsx
export default React.memo(UserCard);
```

Use Case:

Large applications with many components.

---

# 22. React vs Next.js

| React          | Next.js            |
| -------------- | ------------------ |
| UI Library     | React Framework    |
| CSR            | SSR + CSR          |
| Manual Routing | File-based Routing |

Interview Answer:

> React is a library for building UIs, while Next.js is a framework built on React that provides routing, SSR, SSG, and backend capabilities.

---

# Practice Questions

1. What is React?
2. What are Components?
3. What are Props?
4. Difference between Props and State?
5. What is useState?
6. What is useEffect?
7. What is useMemo?
8. What is useCallback?
9. Difference between useMemo and useCallback?
10. What is Prop Drilling?
11. What is Context API?
12. What is Redux?
13. Explain Redux Workflow.
14. Context API vs Redux.
15. What is Virtual DOM?
16. Functional vs Class Components.
17. Controlled vs Uncontrolled Components.
18. What is React.memo?
19. React vs Next.js.
20. What are Custom Hooks?

These are among the most repeated React interview questions from the interview experiences you shared.
