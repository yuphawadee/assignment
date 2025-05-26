"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const axios_1 = __importDefault(require("axios"));
const groupByDepartment_1 = require("./groupByDepartment");
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
app.get('/', async (req, res) => {
    try {
        const response = await axios_1.default.get('https://dummyjson.com/users');
        const users = response.data.users;
        const groupedData = (0, groupByDepartment_1.groupByDepartment)(users);
        res.json(groupedData);
    }
    catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});
app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`);
});
