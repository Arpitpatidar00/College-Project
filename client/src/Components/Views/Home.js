import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Search from "../Views/Search.js";
import Slider from "../Views/Sliderimg/Slider.js";
import "./Screen.css";
import { useAuth } from "../../Context/AuthContext.js";
const Home = () => {
  const [places, setPlaces] = useState([]);

  const { userData } = useAuth();

  console.log(userData);

  useEffect(() => {
    axios
      .get("/api/places")
      .then((response) => setPlaces(response.data))
      .catch((error) => console.error("Error fetching places:", error));
  }, []);

  return (
    <div id="maindiv">
      <div>
        <Slider />
      </div>

      {/* Search Container */}
      <div className="search-container">
        {/* Render the Search component */}
        <Search />
      </div>

      {/* About Text */}
      <div className="abouttext">
        <p>KNOW ABOUT SOME PLACES BEFORE YOUR TRAVEL</p>
      </div>

      {/* Featured Places */}
      <div className="featuredtext">
        <h3>FEATURED PLACES</h3>
      </div>

      {/* Card Container */}
      <div className="card-container">
        {places.map((place, index) => (
          <Link to={`/places/${place._id}`} key={index} className="card-link">
            <div className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 card">
              <a href="#!" data-twe-ripple-init data-twe-ripple-color="light">
                <img
                  className="rounded-t-lg card-image"
                  src={place.image}
                  alt=""
                />
              </a>
              <div className="p-6 card-content">
                <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50 card-title">
                  {place.title}
                </h5>
                <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200 card-description">
                  {place.description}
                </p>
                <button
                  type="button"
                  className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                  data-twe-ripple-init
                  data-twe-ripple-color="light"
                >
                  Button
                </button>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
