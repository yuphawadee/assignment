# User Department Grouping API

This project fetches user data from [dummyjson.com](https://dummyjson.com/users), transforms the JSON by grouping users by department, and exposes the result through an HTTP API.

## 🧰 Tech Stack

- ✅ TypeScript
- ✅ Node.js
- ✅ Express
- ✅ Vitest

---

## 📦 Features

- Fetches users from `https://dummyjson.com/users`
- Transforms the data by grouping users by `department`
- Provides an HTTP endpoint to retrieve the transformed result
- Includes basic unit tests
- Focused on performance and modular design

---

## 🔁 Example Transformed Output

```json
{
  "Marketing": [
    { "id": 1, "firstName": "John", "department": "Marketing", ... },
    ...
  ],
  "Engineering": [
    { "id": 7, "firstName": "Alice", "department": "Engineering", ... },
    ...
  ]
}
