import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PayCard from "./Components/PayCard"; // Import the PayCard component
import "./App.css";
import Home from "./pages/Home";
import { BookingProvider } from "./Components/BookingContext";

const App = () => {
  return (
    <BrowserRouter>
      <BookingProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/paycard" element={<PayCard />} />
        </Routes>
      </BookingProvider>
    </BrowserRouter>
  );
};

export default App;
