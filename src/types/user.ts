export interface User {
  _id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: 'user' | 'admin';
  token?: string;
  createdAt: string;
  updatedAt: string;
}
