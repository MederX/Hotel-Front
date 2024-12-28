import React from 'react';
import { useNavigate } from 'react-router-dom';
import ApiService from '../../service/ApiService';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './RoomResult.css'; // Optional for additional styling

const RoomResult = ({ roomSearchResults }) => {
  const navigate = useNavigate();
  const isAdmin = ApiService.isAdmin();

  const handleCardClick = (roomId) => {
    if (isAdmin) {
      navigate(`/admin/edit-room/${roomId}`);
    } else {
      navigate(`/room-details-book/${roomId}`);
    }
  };

  return (
    <section className="container my-5">
      {roomSearchResults && roomSearchResults.length > 0 ? (
        <div className="row g-4">
          {roomSearchResults.map((room) => (
            <div
              key={room.id}
              className="col-12 col-sm-6 col-lg-4"
              onClick={() => handleCardClick(room.id)}
              style={{ cursor: 'pointer' }}
            >
              <div className="card shadow-sm h-100 d-flex flex-column room-card">
                <img
                  src={room.roomPhotoUrl}
                  className="card-img-top"
                  alt={room.roomType}
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{room.roomType}</h5>
                  <p className="card-text mb-2">
                    <strong>Price:</strong> ${room.roomPrice} / night
                  </p>
                  <p className="card-text text-muted flex-grow-1">{room.roomDescription}</p>
                  {isAdmin ? (
                    <button
                      className="btn btn-primary mt-3"
                      onClick={(e) => {
                        e.stopPropagation(); // Prevent triggering the card click
                        navigate(`/admin/edit-room/${room.id}`);
                      }}
                    >
                      Edit Room
                    </button>
                  ) : (
                    <button
                      className="btn btn-success mt-3"
                      onClick={(e) => {
                        e.stopPropagation(); // Prevent triggering the card click
                        navigate(`/room-details-book/${room.id}`);
                      }}
                    >
                      View/Book Now
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center mt-5">
          <p className="text-muted">No rooms found. Try a different search!</p>
        </div>
      )}
    </section>
  );
};

export default RoomResult;
