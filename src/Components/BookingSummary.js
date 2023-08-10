// import React from "react";

// const BookingSummary = () => {
//   return (
//     <div className="booking-summary">
//       <div className="booking-title">Booking Summary</div>
//       <div className="booking-item">
//         <div className="booking-info">
//           <span>Room Type: Deluxe Plus Twin</span>
//           <span className="booking-price">1,690,000 VND</span>
//         </div>
//       </div>
//       <div className="booking-item">
//         <div className="booking-info">
//           <span>Check-in: August 15, 2023</span>
//         </div>
//       </div>
//       <div className="booking-item">
//         <div className="booking-info">
//           <span>Check-out: August 20, 2023</span>
//         </div>
//       </div>
//       <div className="booking-item">
//         <div className="booking-info">
//           <span>Total Price:</span>
//           <span className="booking-price">1,690,000 VND</span>
//         </div>
//       </div>
//       {/*  */}
//       <div className="booking-item">
//         <div className="booking-info">
//           <span>Room Type: Deluxe Plus Twin</span>
//           <span className="booking-price">1,690,000 VND</span>
//         </div>
//       </div>
//       <div className="booking-item">
//         <div className="booking-info">
//           <span>Check-in: August 15, 2023</span>
//         </div>
//       </div>
//       <div className="booking-item">
//         <div className="booking-info">
//           <span>Check-out: August 20, 2023</span>
//         </div>
//       </div>
//       <div className="booking-item">
//         <div className="booking-info">
//           <span>Total Price:</span>
//           <span className="booking-price">1,690,000 VND</span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BookingSummary;




import React from "react";
import { useBooking } from "../Components/BookingContext"; // Import useBooking hook

const BookingSummary = () => {
  const { bookingData } = useBooking(); // Get booking data from context

  return (
    <div className="booking-summary">
      <div className="booking-title">Booking Summary</div>
      <div className="booking-item">
        <div className="booking-info">
          <span>Room Type: {bookingData.roomType}</span>
          <span className="booking-price">{bookingData.totalPrice}</span>
        </div>
      </div>
      <div className="booking-item">
        <div className="booking-info">
          <span>Check-in: {bookingData.checkIn}</span>
        </div>
      </div>
      <div className="booking-item">
        <div className="booking-info">
          <span>Check-out: {bookingData.checkOut}</span>
        </div>
      </div>
      {/* Render other booking information */}
    </div>
  );
};

export default BookingSummary;



