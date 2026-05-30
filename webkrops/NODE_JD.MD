# MERN Interview Preparation - Node.js & Express Handbook

# 1. What is Node.js?

## Easy Answer

Node.js is an open-source, server-side **runtime environment** that allows developers to run JavaScript code outside of a web browser. It is built on Google Chrome's V8 engine and uses a **single-threaded, event-driven** architecture, which makes it highly efficient for building fast and scalable network applications.

Before Node.js:

* JavaScript only ran in browsers.

After Node.js:

* JavaScript can run on servers.

Example:

```js
console.log("Running on Node.js");
```

Interview Answer:

> Node.js is a JavaScript runtime built on Chrome's V8 engine that allows developers to build server-side applications using JavaScript.

---

# 2. Why Do We Use Node.js?

## Easy Answer

Node.js helps us:

* Build APIs
* Handle multiple users
* Create backend applications
* Build real-time applications

Examples:

* Chat Apps
* Streaming Apps
* APIs
* Dashboards

---

# 3. Is Node.js Single Threaded?

## Easy Answer

Yes.

Node.js uses a single main thread for JavaScript execution.

However, it can handle many requests using:

* Event Loop
* Worker Threads
* Thread Pool

Interview Answer:

> Node.js executes JavaScript on a single thread but uses the event loop and thread pool to handle asynchronous operations efficiently.

---

# 4. What is Event Loop in Node.js?

## Easy Answer

The Event Loop helps Node.js handle asynchronous tasks.

Example:

```js
console.log("Start");

setTimeout(() => {
  console.log("Timer");
}, 0);

console.log("End");
```

Output:

```js
Start
End
Timer
```

Explanation:

1. Code enters Call Stack.
2. Timer goes to Web APIs.
3. Callback enters Queue.
4. Event Loop pushes callback into Call Stack.

Interview Answer:

> The Event Loop continuously checks the call stack and callback queue, allowing Node.js to execute asynchronous operations without blocking the main thread.

---

# 5. What is a Thread Pool?

## Easy Answer

Some heavy operations cannot be handled by the event loop alone.

Node.js uses libuv's thread pool for:

* File System Operations
* Cryptography
* DNS Lookups
* Compression

Interview Answer:

> The thread pool is managed by libuv and is used for CPU-intensive or blocking operations.

---

# 6. What are Worker Threads?

## Easy Answer

Worker Threads allow us to run CPU-intensive tasks in separate threads.

Example:

```js
const { Worker } = require("worker_threads");
```

Use Cases:

* Image Processing
* Video Processing
* Data Analysis

---

# 7. What is Express.js?

## Easy Answer

Express.js is a Node.js framework used to build APIs and web servers.

Example:

```js
const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello");
});
```

Interview Answer:

> Express.js is a lightweight framework built on Node.js that simplifies server and API development.

---

# 8. What is Middleware?

## Easy Answer

Middleware is a function that runs between receiving a request and sending a response.

Example:

```js
app.use((req, res, next) => {
  console.log("Middleware");
  next();
});
```

Uses:

* Authentication
* Logging
* Validation
* Error Handling

Interview Answer:

> Middleware functions process requests before they reach route handlers.

---

# 9. What is REST API?

## Easy Answer

REST API is a way for applications to communicate using HTTP methods.

Methods:

* GET
* POST
* PUT
* PATCH
* DELETE

Example:

```http
GET /users
```

Interview Answer:

> REST APIs follow REST principles and use HTTP methods to perform CRUD operations.

---

# 10. Difference Between PUT and PATCH

PUT:

Updates entire resource.

PATCH:

Updates specific fields.

Example:

```json
PUT
{
  "name":"Ritam",
  "age":21
}
```

```json
PATCH
{
  "age":22
}
```

---

# 11. What is Authentication?

## Easy Answer

Authentication verifies who the user is.

Examples:

* Login
* OTP
* JWT

Interview Answer:

> Authentication is the process of verifying a user's identity.

---

# 12. What is Authorization?

## Easy Answer

Authorization decides what a user can access.

Example:

* Admin can delete users.
* User cannot delete users.

Interview Answer:

> Authorization determines permissions after authentication.

---

# 13. Authentication vs Authorization

| Authentication | Authorization    |
| -------------- | ---------------- |
| Who are you?   | What can you do? |
| Login          | Permissions      |
| First Step     | Second Step      |

---

# 14. What is JWT?

## Easy Answer

JWT stands for JSON Web Token.

Used for authentication.

Flow:

```text
Login
 ↓
Server creates JWT
 ↓
Client stores token
 ↓
Client sends token
 ↓
Server verifies token
```

Example:

```js
jwt.sign(payload, secret);
```

Interview Answer:

> JWT is a secure token used to authenticate users without storing session data on the server.

---

# 15. What is CORS?

## Easy Answer

CORS stands for Cross-Origin Resource Sharing.

It controls which domains can access your API.

Example:

Frontend:

```text
localhost:3000
```

Backend:

```text
localhost:5000
```

Different origins.

Need:

```js
app.use(cors());
```

Interview Answer:

> CORS is a browser security mechanism that controls cross-origin requests.

---

# 16. Error Handling in Express

Example:

```js
app.use((err, req, res, next) => {
  res.status(500).json({
    message: err.message
  });
});
```

Interview Answer:

> Centralized error handling improves maintainability and consistency in APIs.

---

# 17. What is Async/Await in Node.js?

## Easy Answer

Used to handle asynchronous operations in a cleaner way.

Example:

```js
async function getUser() {
  const user = await User.findById(id);

  return user;
}
```

Benefits:

* Readable code
* Easier debugging
* Better error handling

---

# 18. Fetch vs Axios

| Fetch               | Axios            |
| ------------------- | ---------------- |
| Built-in            | External Package |
| Manual JSON Parsing | Automatic        |
| Less Features       | More Features    |

Interview Answer:

> Axios provides interceptors, automatic JSON parsing, and better error handling compared to Fetch.

---

# Practice Questions

1. What is Node.js?
2. Why do we use Node.js?
3. Is Node.js single-threaded?
4. Explain Event Loop.
5. What is a Thread Pool?
6. What are Worker Threads?
7. What is Express.js?
8. What is Middleware?
9. What is REST API?
10. PUT vs PATCH?
11. Authentication vs Authorization?
12. What is JWT?
13. What is CORS?
14. How do you handle errors in Express?
15. Fetch vs Axios?

These are among the most repeated Node.js interview questions from the interview experiences you shared.
