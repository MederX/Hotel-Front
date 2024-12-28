import React, { useState } from 'react';
import ApiService from '../../service/ApiService'; // Assuming your service is in a file called ApiService.js
import 'bootstrap/dist/css/bootstrap.min.css';

const FindBookingPage = () => {
    const [confirmationCode, setConfirmationCode] = useState(''); // State variable for confirmation code
    const [bookingDetails, setBookingDetails] = useState(null); // State variable for booking details
    const [error, setError] = useState(null); // Track any errors
    const [loading, setLoading] = useState(false); // Track loading state
    const [success, setSuccessMessage] = useState(null); // Track success messages

    const handleSearch = async () => {
        if (!confirmationCode.trim()) {
            setError("Please enter a booking confirmation code");
            setTimeout(() => setError(''), 5000);
            return;
        }

        setLoading(true); // Start loading
        try {
            // Call API to get booking details
            const response = await ApiService.getBookingByConfirmationCode(confirmationCode);
            setBookingDetails(response.booking);
            setError(null); // Clear error if successful
            setSuccessMessage("Booking details found successfully.");
            setTimeout(() => setSuccessMessage(''), 5000);
        } catch (error) {
            setError(error.response?.data?.message || error.message);
            setTimeout(() => setError(''), 5000);
        } finally {
            setLoading(false); // Stop loading
        }
    };

    return (
        <div className="container my-5">
            <div className="row justify-content-center">
                <div className="col-lg-8 col-md-10 col-sm-12">
                    <div className="card shadow-sm p-4">
                        <h2 className="text-center mb-4">Find Your Booking</h2>

                        {/* Error and Success Messages */}
                        {error && <div className="alert alert-danger">{error}</div>}
                        {success && <div className="alert alert-success">{success}</div>}

                        {/* Search Section */}
                        <div className="mb-4">
                            <div className="input-group">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter your booking confirmation code"
                                    value={confirmationCode}
                                    onChange={(e) => setConfirmationCode(e.target.value)}
                                />
                                <button
                                    className="btn btn-primary"
                                    onClick={handleSearch}
                                    disabled={loading}
                                >
                                    {loading ? (
                                        <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                    ) : (
                                        'Find'
                                    )}
                                </button>
                            </div>
                        </div>

                        {/* Booking Details Section */}
                        {bookingDetails && (
                            <div>
                                <h3 className="mb-4">Booking Details</h3>
                                <ul className="list-group">
                                    <li className="list-group-item">Confirmation Code: <strong>{bookingDetails.bookingConfirmationCode}</strong></li>
                                    <li className="list-group-item">Check-in Date: <strong>{bookingDetails.checkInDate}</strong></li>
                                    <li className="list-group-item">Check-out Date: <strong>{bookingDetails.checkOutDate}</strong></li>
                                    <li className="list-group-item">Num Of Adults: <strong>{bookingDetails.numOfAdults}</strong></li>
                                    <li className="list-group-item">Num Of Children: <strong>{bookingDetails.numOfChildren}</strong></li>
                                    <li className="list-group-item">Guest Email: <strong>{bookingDetails.guestEmail}</strong></li>
                                </ul>

                                <hr />

                                <h3 className="mb-4">Booker Details</h3>
                                <ul className="list-group">
                                    <li className="list-group-item">Name: <strong>{bookingDetails.user.name}</strong></li>
                                    <li className="list-group-item">Email: <strong>{bookingDetails.user.email}</strong></li>
                                    <li className="list-group-item">Phone Number: <strong>{bookingDetails.user.phoneNumber}</strong></li>
                                </ul>

                                <hr />

                                <h3 className="mb-4">Room Details</h3>
                                <ul className="list-group">
                                    <li className="list-group-item">Room Type: <strong>{bookingDetails.room.roomType}</strong></li>
                                    <li className="list-group-item">Room Price: <strong>${bookingDetails.room.roomPrice}</strong></li>
                                    <li className="list-group-item">Room Description: <strong>{bookingDetails.room.roomDescription}</strong></li>
                                </ul>
                                <div className="text-center mt-3">
                                    <img src={bookingDetails.room.roomPhotoUrl} alt="Room" className="img-fluid rounded" style={{ maxHeight: '300px', objectFit: 'cover' }} />
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FindBookingPage;
