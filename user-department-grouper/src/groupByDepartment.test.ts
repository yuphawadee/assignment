import { describe, it, expect } from 'vitest';
import { groupByDepartment } from './groupByDepartment';
import { User } from './type';

const mockUsers: User[] = [
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

describe('groupByDepartment', () => {
  const result = groupByDepartment(mockUsers);

  it('should group users by department', () => {
    expect(result).toHaveProperty('Engineering');
    expect(result).toHaveProperty('Support');
  });

  it('should count gender correctly', () => {
    expect(result.Engineering.male).toBe(1);
    expect(result.Engineering.female).toBe(1);
    expect(result.Support.male).toBe(2);
    expect(result.Support.female).toBe(0);
  });

  it('should calculate age range correctly', () => {
    expect(result.Engineering.ageRange).toBe('25-30');
    expect(result.Support.ageRange).toBe('30-40');
  });

  it('should summarize hair color correctly', () => {
    expect(result.Engineering.hair).toEqual({
      Black: 1,
      Blonde: 1,
    });
    expect(result.Support.hair).toEqual({
      Black: 1,
      Gray: 1,
    });
  });

  it('should map addressUser correctly', () => {
    expect(result.Engineering.addressUser).toEqual({
      JohnDoe: '12345',
      JaneSmith: '67890',
    });
    expect(result.Support.addressUser).toEqual({
      MikeBrown: '11111',
      EmilyJohnson: '29112',
    });
  });

  it('should not include "ages" field', () => {
    expect((result.Engineering as any).ages).toBeUndefined();
  });
  
});
