export interface Activity {
  id: string;
  userId: string | 'FRIDGE';
  date: number | Date;
  message: string;
  messageColor: string;
}
