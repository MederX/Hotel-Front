import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ApiService from '../../service/ApiService'; // Assuming your service is in a file called ApiService.js
import 'bootstrap/dist/css/bootstrap.min.css';

const EditBookingPage = () => {
    const navigate = useNavigate();
    const { bookingCode } = useParams();
    const [bookingDetails, setBookingDetails] = useState(null); // State variable for booking details
    const [error, setError] = useState(null); // Track any errors
    const [success, setSuccessMessage] = useState(null); // Track success messages

    useEffect(() => {
        const fetchBookingDetails = async () => {
            try {
                const response = await ApiService.getBookingByConfirmationCode(bookingCode);
                setBookingDetails(response.booking);
            } catch (error) {
                setError(error.message);
            }
        };

        fetchBookingDetails();
    }, [bookingCode]);

    const acheiveBooking = async (bookingId) => {
        if (!window.confirm('Are you sure you want to Achieve this booking?')) {
            return; // Do nothing if the user cancels
        }

        try {
            const response = await ApiService.cancelBooking(bookingId);
            if (response.statusCode === 200) {
                setSuccessMessage("The booking was successfully achieved.");
                setTimeout(() => {
                    setSuccessMessage('');
                    navigate('/admin/manage-bookings');
                }, 3000);
            }
        } catch (error) {
            setError(error.response?.data?.message || error.message);
            setTimeout(() => setError(''), 5000);
        }
    };

    return (
        <div className="container my-5">
            <div className="row justify-content-center">
                <div className="col-lg-8 col-md-10 col-sm-12">
                    <div className="card shadow-sm p-4">
                        <h2 className="text-center mb-4">Booking Detail</h2>

                        {/* Error and Success Messages */}
                        {error && <div className="alert alert-danger">{error}</div>}
                        {success && <div className="alert alert-success">{success}</div>}

                        {bookingDetails && (
                            <div>
                                <div className="mb-4">
                                    <h3>Booking Details</h3>
                                    <ul className="list-group">
                                        <li className="list-group-item">Confirmation Code: <strong>{bookingDetails.bookingConfirmationCode}</strong></li>
                                        <li className="list-group-item">Check-in Date: <strong>{bookingDetails.checkInDate}</strong></li>
                                        <li className="list-group-item">Check-out Date: <strong>{bookingDetails.checkOutDate}</strong></li>
                                        <li className="list-group-item">Num Of Adults: <strong>{bookingDetails.numOfAdults}</strong></li>
                                        <li className="list-group-item">Num Of Children: <strong>{bookingDetails.numOfChildren}</strong></li>
                                        <li className="list-group-item">Guest Email: <strong>{bookingDetails.guestEmail}</strong></li>
                                    </ul>
                                </div>

                                <hr />

                                <div className="mb-4">
                                    <h3>Booker Details</h3>
                                    <ul className="list-group">
                                        <li className="list-group-item">Name: <strong>{bookingDetails.user.name}</strong></li>
                                        <li className="list-group-item">Email: <strong>{bookingDetails.user.email}</strong></li>
                                        <li className="list-group-item">Phone Number: <strong>{bookingDetails.user.phoneNumber}</strong></li>
                                    </ul>
                                </div>

                                <hr />

                                <div className="mb-4">
                                    <h3>Room Details</h3>
                                    <ul className="list-group">
                                        <li className="list-group-item">Room Type: <strong>{bookingDetails.room.roomType}</strong></li>
                                        <li className="list-group-item">Room Price: <strong>${bookingDetails.room.roomPrice}</strong></li>
                                        <li className="list-group-item">Room Description: <strong>{bookingDetails.room.roomDescription}</strong></li>
                                    </ul>
                                    <div className="text-center mt-3">
                                        <img src={bookingDetails.room.roomPhotoUrl} alt="Room" className="img-fluid rounded" style={{ maxHeight: '300px', objectFit: 'cover' }} />
                                    </div>
                                </div>

                                <hr />

                                <div className="text-center">
                                    <button
                                        className="btn btn-danger btn-lg"
                                        onClick={() => acheiveBooking(bookingDetails.id)}
                                    >
                                        Delete Booking
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditBookingPage;
