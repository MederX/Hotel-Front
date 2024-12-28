import React, { useState } from "react";
import RoomResult from "../common/RoomResult";
import RoomSearch from "../common/RoomSearch";
import 'bootstrap/dist/css/bootstrap.min.css';

const HomePage = () => {
  const [roomSearchResults, setRoomSearchResults] = useState(null); // Start as null to track "no search" state.

  // Function to handle search results
  const handleSearchResult = (results) => {
    setRoomSearchResults(results);
  };

  return (
    <div className="home">
      {/* HEADER / BANNER ROOM SECTION */}
      <section>
        <header className="header-banner position-relative d-flex justify-content-center align-items-center text-white">
          <div className="overlay position-absolute w-100 h-100 bg-dark opacity-50"></div>
          <div className="animated-texts text-center position-relative">
            <h1 className="display-4 fw-bold">
              Welcome to <span className="text-warning">HavenPlace</span>
            </h1>
            <h3 className="mt-3">Feel Haven here</h3>
          </div>
        </header>
      </section>

      {/* SEARCH/FIND AVAILABLE ROOM SECTION */}
      <section className="container my-5">
        <RoomSearch handleSearchResult={handleSearchResult} />
        
        {/* Conditionally display results or placeholder */}
        {roomSearchResults === null ? (
          <div className="no-search-placeholder text-center mt-4">
            <p className="text-muted">Please enter search criteria to view rooms.</p>
          </div>
        ) : (
          <RoomResult roomSearchResults={roomSearchResults} />
        )}

        <div className="text-center mt-4">
          <a className="btn btn-outline-primary" href="/rooms">
            View All Rooms
          </a>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="container my-5">
        <h2 className="text-center mb-5 fw-bold">
          Services at <span className="text-warning">HavenPlace Hotel</span>
        </h2>
        <div className="row g-4">
          <div className="col-md-6 col-lg-3">
            <div className="card text-center shadow">
              <img
                src="./assets/images/air-conditioner-clipart-vector-art-illustration_761413-16813.avif"
                className="card-img-top p-3"
                alt="Air Conditioning"
              />
              <div className="card-body">
                <h5 className="card-title">Air Conditioning</h5>
                <p className="card-text">
                Enjoy a cool and comfortable environment during your stay with our individually controlled in-room air conditioning.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="card text-center shadow">
              <img
                src="./assets/images/4784933.png"
                className="card-img-top p-3"
                alt="Mini Bar"
              />
              <div className="card-body">
                <h5 className="card-title">Mini Bar</h5>
                <p className="card-text">
                Indulge in a variety of beverages and snacks available in your room's mini bar, all at no extra charge.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="card text-center shadow">
              <img
                src="./assets/images/parking.png"
                className="card-img-top p-3"
                alt="Parking"
              />
              <div className="card-body">
                <h5 className="card-title">Parking</h5>
                <p className="card-text">
                For your convenience, we provide on-site parking. Please ask about valet parking options if they are offered.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="card text-center shadow">
              <img
                src="./assets/images/il_fullxfull.4877809787_sgs7.avif"
                className="card-img-top p-3"
                alt="WiFi"
              />
              <div className="card-body">
                <h5 className="card-title">WiFi</h5>
                <p className="card-text">
                Enjoy uninterrupted connectivity during your stay with free high-speed Wi-Fi available in all guest rooms and public spaces.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
