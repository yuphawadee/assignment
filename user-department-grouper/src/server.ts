import express from 'express';
import axios from 'axios';
import { User } from './type';
import { groupByDepartment } from './groupByDepartment';

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', async (req, res) => {
  try {
    const response = await axios.get<{ users: User[] }>('https://dummyjson.com/users');
    const users = response.data.users;

    const groupedData = groupByDepartment(users);
    res.json(groupedData);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
