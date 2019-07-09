export interface Activity {
  id: string;
  userId: string; //optional
  date: Date;
  message: string;
  priority: number;
}
