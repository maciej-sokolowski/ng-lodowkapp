export interface Activity {
  id: string;
  userId: string | 'FRIDGE';
  date: Date;
  message: string;
  priority: number;
}
