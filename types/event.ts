export interface EventItem {
  id: number;
  title: string;
  date: string; // ISO date string
  imageUrl: string;
  description?: string;
  location?: string;
  time?: string;
}
