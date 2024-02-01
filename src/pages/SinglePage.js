import React, { useState, useEffect } from "react";
// import axios from "axios";
import { Link, useParams } from "react-router-dom";

const SinglePage = () => {
  const { id } = useParams();
  const [showDetails, setShowDetails] = useState(null);

  useEffect(() => {
    const fetchShowDetails = async () => {
      try {
        const response = await fetch(`https://api.tvmaze.com/shows/${id}`);
        const data = await response.json();
        setShowDetails(data);
        // Store show details in local storage
        localStorage.setItem("showDetails", JSON.stringify(data));
      } catch (error) {
        console.error("Error fetching show details:", error);
      }
    };

    fetchShowDetails();
  }, [id]);

  return (
    <>
      {showDetails && (
        <div className="singleshow">
          <img src={showDetails.image?.medium} alt={showDetails.name} />
          <div className="singleshow__info">
            <h1>{showDetails.name}</h1>
            {showDetails.genres &&
              showDetails.genres.map((genre) => (
                <span key={genre} className="singleshow__genre">
                  {genre}
                </span>
              ))}
            <p>
              <strong>Status:</strong>{" "}
              {showDetails.status && showDetails.status}
            </p>
            <p>
              <strong>Rating:</strong>{" "}
              {showDetails.rating ? showDetails.rating.average : "No rating"}
            </p>
            <p>{showDetails.summary}</p>
            <Link to={`/book-ticket/${showDetails.name}`}>
              <button>Book Ticket</button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default SinglePage;
