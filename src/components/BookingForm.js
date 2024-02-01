// BookingForm.js

import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const BookingForm = () => {
  const { movieName } = useParams();
  const [showDetails, setShowDetails] = useState(null);
  const navigate = useNavigate();
  console.log(showDetails);
  const [formData, setFormData] = useState({
    movieName: "",
    status: "",
    rating: "",
    genres: [],
  });

  useEffect(() => {
    // Retrieve show details from local storage
    const storedShowDetails =
      JSON.parse(localStorage.getItem("showDetails")) || {};
    setShowDetails(storedShowDetails);

    // Set form data
    setFormData({
      movieName: storedShowDetails.name || "",
      status: storedShowDetails.status || "",
      rating: storedShowDetails.rating?.average || "N/A",
      genres: storedShowDetails.genres || [],
    });
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle the form submission, e.g., send data to the server
    console.log("Form Data:", formData);
  };

  const onBook = () => {
    alert("Thank You For Book");
    navigate("/");
  };

  return (
    <div className="booking-form">
      <h1>MOVIE NAME: {movieName}</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="movieName">Movie Name:</label>
        <input
          type="text"
          id="movieName"
          name="movieName"
          value={formData.movieName}
          readOnly
        />

        <label htmlFor="status">Status:</label>
        <input
          type="text"
          id="status"
          name="status"
          value={formData.status}
          onChange={handleChange}
          required
        />

        <label htmlFor="rating">Rating:</label>
        <input
          type="text"
          id="rating"
          name="rating"
          value={formData.rating}
          onChange={handleChange}
          required
        />

        {/* Add other input fields as needed */}

        <button type="submit" onClick={onBook}>
          Confirm Booking
        </button>
      </form>
    </div>
  );
};

export default BookingForm;
