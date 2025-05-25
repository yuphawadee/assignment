export type User = {
  firstName: string;
  lastName: string;
  age: number;
  gender: 'male' | 'female';
  hair: { color: string; type: string };
  address: { postalCode: string };
  company: { department: string };
};

export type DepartmentSummary = {
  male: number;
  female: number;
  ageRange: string;
  hair: Record<string, number>;
  addressUser: Record<string, string>;
};
