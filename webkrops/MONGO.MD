# MERN Interview Preparation - Database Handbook (SQL + MongoDB)

# 1. What is a Database?

## Easy Answer

A database is a place where data is stored, managed, and retrieved.

Examples:

* User Information
* Products
* Orders
* Messages

Example:

```text
Users Table

ID | Name
1  | Ritam
2  | John
```

Interview Answer:

> A database is an organized collection of data that allows efficient storage, retrieval, and management of information.

---

# 2. SQL vs NoSQL

| SQL               | NoSQL             |
| ----------------- | ----------------- |
| Relational        | Non-Relational    |
| Tables            | Collections       |
| Fixed Schema      | Flexible Schema   |
| MySQL, PostgreSQL | MongoDB, DynamoDB |

Interview Answer:

> SQL databases store data in tables with predefined schemas, while NoSQL databases store data in flexible formats such as documents.

---

# 3. What is SQL?

## Easy Answer

SQL stands for Structured Query Language.

Used to:

* Insert Data
* Update Data
* Delete Data
* Fetch Data

Example:

```sql
SELECT * FROM users;
```

Interview Answer:

> SQL is a language used to communicate with relational databases.

---

# 4. What is MongoDB?

## Easy Answer

MongoDB is a NoSQL database.

Data is stored as documents.

Example:

```json
{
  "name": "Ritam",
  "age": 21
}
```

Interview Answer:

> MongoDB is a document-oriented NoSQL database that stores data in BSON format.

---

# 5. Table vs Collection

| SQL    | MongoDB    |
| ------ | ---------- |
| Table  | Collection |
| Row    | Document   |
| Column | Field      |

Example:

SQL:

```text
Users Table
```

MongoDB:

```text
Users Collection
```

---

# 6. Row vs Document

SQL:

```text
ID | Name
1  | Ritam
```

MongoDB:

```json
{
  "_id": 1,
  "name": "Ritam"
}
```

---

# 7. What is BSON?

## Easy Answer

BSON stands for Binary JSON.

MongoDB stores data internally in BSON format.

Interview Answer:

> BSON is a binary representation of JSON that supports additional data types and faster processing.

---

# 8. What is Normalization?

## Easy Answer

Normalization is the process of organizing data to reduce duplication.

Benefits:

* Less redundancy
* Better consistency

Example:

Instead of storing the same user information repeatedly, create separate tables.

Interview Answer:

> Normalization is a database design technique used to reduce data redundancy and improve data integrity.

---

# 9. First Normal Form (1NF)

Rules:

* No repeating groups
* Each column contains a single value

Wrong:

```text
ID | Skills
1  | Java, Python
```

Correct:

```text
ID | Skill
1  | Java
1  | Python
```

---

# 10. Second Normal Form (2NF)

Rules:

* Must satisfy 1NF
* Remove partial dependency

Interview Answer:

> 2NF removes dependencies on only part of a composite primary key.

---

# 11. Third Normal Form (3NF)

Rules:

* Must satisfy 2NF
* Remove transitive dependency

Interview Answer:

> 3NF removes columns that do not directly depend on the primary key.

---

# 12. What is a Primary Key?

## Easy Answer

A primary key uniquely identifies each record.

Example:

```sql
CREATE TABLE users (
 id INT PRIMARY KEY
);
```

Interview Answer:

> A primary key uniquely identifies every row in a table and cannot contain NULL values.

---

# 13. What is a Foreign Key?

## Easy Answer

A foreign key creates a relationship between two tables.

Example:

```sql
Orders.user_id
```

points to

```sql
Users.id
```

Interview Answer:

> A foreign key links one table to another using a referenced primary key.

---

# 14. What is a Unique Key?

## Easy Answer

A unique key prevents duplicate values.

Example:

```sql
email VARCHAR(100) UNIQUE
```

---

# 15. What is Indexing?

## Easy Answer

Indexing makes searching faster.

Without Index:

```text
Search every row
```

With Index:

```text
Jump directly to data
```

Example:

```sql
CREATE INDEX idx_name
ON users(name);
```

Interview Answer:

> Indexing improves query performance by reducing the number of records scanned.

---

# 16. What is ACID?

ACID Properties:

A → Atomicity

C → Consistency

I → Isolation

D → Durability

---

## Atomicity

Either all operations succeed or none.

Example:

Money Transfer

```text
Debit
Credit
```

Both must happen.

---

## Consistency

Database remains valid before and after transaction.

---

## Isolation

Multiple transactions should not interfere.

---

## Durability

Once committed, data remains saved.

Interview Answer:

> ACID properties ensure reliable and consistent database transactions.

---

# 17. What is a JOIN?

## Easy Answer

JOIN combines data from multiple tables.

Example:

Users

```text
ID | Name
1  | Ritam
```

Orders

```text
ID | UserID
1  | 1
```

JOIN combines them.

---

# 18. INNER JOIN

Returns matching records from both tables.

Example:

```sql
SELECT *
FROM users
INNER JOIN orders
ON users.id = orders.user_id;
```

---

# 19. LEFT JOIN

Returns:

* All records from left table
* Matching records from right table

Example:

```sql
SELECT *
FROM users
LEFT JOIN orders
ON users.id = orders.user_id;
```

---

# 20. RIGHT JOIN

Returns:

* All records from right table
* Matching records from left table

---

# 21. FULL JOIN

Returns:

* All records from both tables

---

# 22. Second Highest Salary

Example:

```sql
SELECT MAX(salary)
FROM employees
WHERE salary <
(
  SELECT MAX(salary)
  FROM employees
);
```

Interview Favorite Question.

---

# 23. Find Names Ending with 'A'

Length = 5

Example:

```sql
SELECT name
FROM users
WHERE name LIKE '____A';
```

---

# 24. LIMIT

Used to restrict results.

Example:

```sql
SELECT *
FROM users
LIMIT 10;
```

---

# 25. OFFSET

Used with pagination.

Example:

```sql
SELECT *
FROM users
LIMIT 10 OFFSET 20;
```

---

# 26. What is Mongoose?

## Easy Answer

Mongoose is an ODM for MongoDB.

Example:

```js
const userSchema = new mongoose.Schema({
  name: String
});
```

Interview Answer:

> Mongoose provides schema validation and simplifies working with MongoDB.

---

# 27. ORM vs ODM

| ORM       | ODM      |
| --------- | -------- |
| SQL       | NoSQL    |
| Sequelize | Mongoose |

Interview Answer:

> ORM works with relational databases while ODM works with document databases.

---

# 28. Sequelize

## Easy Answer

Sequelize is an ORM for SQL databases.

Example:

```js
User.findAll();
```

Supported:

* MySQL
* PostgreSQL
* MariaDB

---

# 29. MongoDB vs MySQL

| MongoDB             | MySQL             |
| ------------------- | ----------------- |
| NoSQL               | SQL               |
| Flexible Schema     | Fixed Schema      |
| JSON Documents      | Tables            |
| Scales Horizontally | Scales Vertically |

Interview Answer:

> MongoDB is suitable for rapidly changing data structures, while MySQL is preferred for highly relational data and complex transactions.

---

# 30. DynamoDB vs MongoDB

| DynamoDB    | MongoDB             |
| ----------- | ------------------- |
| AWS Managed | Self Hosted / Cloud |
| Key-Value   | Document Based      |
| Serverless  | Flexible Queries    |

Interview Answer:

> DynamoDB is a fully managed AWS NoSQL database, whereas MongoDB provides more flexibility for document-based applications.

---

# Practice Questions

1. What is a database?
2. SQL vs NoSQL?
3. What is MongoDB?
4. What is BSON?
5. Table vs Collection?
6. Row vs Document?
7. What is Normalization?
8. Explain 1NF, 2NF, 3NF.
9. What is a Primary Key?
10. What is a Foreign Key?
11. What is a Unique Key?
12. What is Indexing?
13. Explain ACID Properties.
14. What is JOIN?
15. Difference between INNER JOIN and LEFT JOIN?
16. Write query for second highest salary.
17. What is LIMIT?
18. What is OFFSET?
19. What is Mongoose?
20. ORM vs ODM?
21. MongoDB vs MySQL?
22. DynamoDB vs MongoDB?

These are among the most repeated Database interview questions from the interview experiences you collected.
