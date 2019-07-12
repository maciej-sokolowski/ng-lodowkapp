export interface User {
  id: string;
  type?: 'PARENT' | 'CHILDREN'; //usunąć pytajnik
  name: string;
  avatar: string;
  color: string;
}
