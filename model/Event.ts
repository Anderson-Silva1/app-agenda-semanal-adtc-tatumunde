export interface Event {
  id: number;
  day: string;
  date: number;
  time: string;
  title: string;
  direction: string;
  speaker?: string;
  doorkeeper?: string;
}
