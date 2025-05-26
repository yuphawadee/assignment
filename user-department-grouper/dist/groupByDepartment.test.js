"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const groupByDepartment_1 = require("./groupByDepartment");
const mockUsers = [
    {
        gender: 'male',
        age: 30,
        hair: { color: 'Black' },
        firstName: 'John',
        lastName: 'Doe',
        address: { postalCode: '12345' },
        company: { department: 'Engineering' }
    },
    {
        gender: 'female',
        age: 25,
        hair: { color: 'Blonde' },
        firstName: 'Jane',
        lastName: 'Smith',
        address: { postalCode: '67890' },
        company: { department: 'Engineering' }
    },
    {
        gender: 'male',
        age: 40,
        hair: { color: 'Black' },
        firstName: 'Mike',
        lastName: 'Brown',
        address: { postalCode: '11111' },
        company: { department: 'Support' }
    },
    {
        gender: 'male',
        age: 30,
        hair: { color: 'Gray' },
        firstName: 'Emily',
        lastName: 'Johnson',
        address: { postalCode: '29112' },
        company: { department: 'Support' }
    },
];
(0, vitest_1.describe)('groupByDepartment', () => {
    const result = (0, groupByDepartment_1.groupByDepartment)(mockUsers);
    (0, vitest_1.it)('should group users by department', () => {
        (0, vitest_1.expect)(result).toHaveProperty('Engineering');
        (0, vitest_1.expect)(result).toHaveProperty('Support');
    });
    (0, vitest_1.it)('should count gender correctly', () => {
        (0, vitest_1.expect)(result.Engineering.male).toBe(1);
        (0, vitest_1.expect)(result.Engineering.female).toBe(1);
        (0, vitest_1.expect)(result.Support.male).toBe(2);
        (0, vitest_1.expect)(result.Support.female).toBe(0);
    });
    (0, vitest_1.it)('should calculate age range correctly', () => {
        (0, vitest_1.expect)(result.Engineering.ageRange).toBe('25-30');
        (0, vitest_1.expect)(result.Support.ageRange).toBe('30-40');
    });
    (0, vitest_1.it)('should summarize hair color correctly', () => {
        (0, vitest_1.expect)(result.Engineering.hair).toEqual({
            Black: 1,
            Blonde: 1,
        });
        (0, vitest_1.expect)(result.Support.hair).toEqual({
            Black: 1,
            Gray: 1,
        });
    });
    (0, vitest_1.it)('should map addressUser correctly', () => {
        (0, vitest_1.expect)(result.Engineering.addressUser).toEqual({
            JohnDoe: '12345',
            JaneSmith: '67890',
        });
        (0, vitest_1.expect)(result.Support.addressUser).toEqual({
            MikeBrown: '11111',
            EmilyJohnson: '29112',
        });
    });
    (0, vitest_1.it)('should not include "ages" field', () => {
        (0, vitest_1.expect)(result.Engineering.ages).toBeUndefined();
    });
});
