# User Department Grouping API

This project fetches user data from [dummyjson.com](https://dummyjson.com/users), transforms the JSON by grouping users by department, and exposes the result through an HTTP API.

## Tech Stack

-  TypeScript
-  Node.js
-  Express
-  Vitest

---

## Features

- Fetches users from `https://dummyjson.com/users`
- Transforms the data by grouping users by `department`
- Provides an HTTP endpoint to retrieve the transformed result
- Includes basic unit tests

---

## How to Run

### 1. Install dependencies
```bash
npm install
```
### 2. Run the server
```bush
npx nodemon src/server.ts
```
### 3.Run test
```bush
npx vitest
```

## Example Transformed Output

```json
{
"Engineering": {
    "male": 2,
    "female": 2,
    "ageRange": "26-40",
    "hair": {
      "Brown": 1,
      "White": 1,
      "Red": 1,
      "Gray": 1
    },
    "addressUser": {
      "EmilyJohnson": "29112",
      "AlexanderJones": "86684",
      "NoahHernandez": "73696",
      "MadisonCollins": "62091"
    }
  }
}
