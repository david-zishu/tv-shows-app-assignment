import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import ShowDetail from "../components/ShowDetail";
import ShowDetailPage from "../components/ShowDetailPage";

const Home = () => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    fetch("https://api.tvmaze.com/search/shows?q=all")
      .then((response) => response.json())
      .then((data) => setShows(data));
  }, []);

  return (
    <div className="homepage">
      <div className="homepage__list">
        {shows.map((item) => (
          <ShowDetailPage
            key={item?.show?.id}
            id={item?.show?.id}
            image={item?.show?.image?.medium}
            name={item?.show?.name}
            rating={item?.show?.rating?.average}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
