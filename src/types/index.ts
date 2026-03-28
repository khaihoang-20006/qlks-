// src/types/index.ts

// Enums for hotel management system
export enum RoomType {
    SINGLE = 'single',
    DOUBLE = 'double',
    SUITE = 'suite',
}

export enum BookingStatus {
    PENDING = 'pending',
    CONFIRMED = 'confirmed',
    CANCELLED = 'cancelled',
}

// Interfaces for hotel management system
export interface Hotel {
    id: number;
    name: string;
    location: string;
    rooms: Room[];
}

export interface Room {
    id: number;
    type: RoomType;
    price: number;
    isAvailable: boolean;
}

export interface Guest {
    id: number;
    name: string;
    email: string;
    phone: string;
}

export interface Booking {
    id: number;
    guestId: number;
    roomId: number;
    startDate: string;
    endDate: string;
    status: BookingStatus;
}