import React from "react";
import RoomCard from "../Components/RoomCard";
import Navbar from "../Components/Navbar";
import PaymentForm from "../Components/PaymentForm";
import BookingSummary from "../Components/BookingSummary";
import Footer from "../Components/Footer";



function home() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <Navbar />
          <RoomCard />
        </div>
        <div className="col-md-6">
          <PaymentForm />
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <BookingSummary />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default home;
