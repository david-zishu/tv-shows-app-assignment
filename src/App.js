import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import SinglePage from "./pages/SinglePage";

import BookingForm from "./components/BookingForm";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/singleshow/:id" element={<SinglePage />} />
          <Route path="/book-ticket/:movieName" element={<BookingForm />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
