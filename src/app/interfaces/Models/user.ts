export interface User {
  id: string;
  type?: 'PARENT' | 'CHILDREN';
  name: string;
  avatar: string;
  color: string;
  pin?: string;
}
