// index.ts - TypeScript interfaces

export interface Room {
  id: number;
  type: string;
  price: number;
  availability: boolean;
}
export interface Booking {
  roomId: number;
  userId: number;
  startDate: string;
  endDate: string;
}