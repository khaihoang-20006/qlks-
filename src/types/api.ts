// API request/response types and DTOs for hotel management system

// Data transfer object for Hotel
interface HotelDTO {
    id: string;
    name: string;
    location: string;
    rating: number;
    availableRooms: number;
}

// API request for creating a new hotel
interface CreateHotelRequest {
    name: string;
    location: string;
    rating: number;
    availableRooms: number;
}

// API response for getting a list of hotels
interface GetHotelsResponse {
    hotels: HotelDTO[];
}

// API request for booking a room
interface BookRoomRequest {
    hotelId: string;
    customerId: string;
    roomType: string;
    numberOfNights: number;
}

// API response for booking confirmation
interface BookingConfirmationResponse {
    bookingId: string;
    hotelId: string;
    customerId: string;
    checkInDate: string;
    checkOutDate: string;
}