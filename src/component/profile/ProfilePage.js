import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ApiService from '../../service/ApiService';

const ProfilePage = () => {
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUserProfile = async () => {
            try {
                const response = await ApiService.getUserProfile();
                const userPlusBookings = await ApiService.getUserBookings(response.user.id);
                setUser(userPlusBookings.user);
            } catch (error) {
                setError(error.response?.data?.message || error.message);
            }
        };
        fetchUserProfile();
    }, []);

    const handleLogout = () => {
        ApiService.logout();
        navigate('/home');
    };

    const handleEditProfile = () => {
        navigate('/edit-profile');
    };

    return (
        <div className="profile-page container mt-5">
            <div className="row">
                <div className="col-12 text-center mb-4">
                    {user && <h2 className="display-5">Welcome, {user.name}</h2>}
                    {error && <p className="alert alert-danger">{error}</p>}
                </div>
            </div>

            <div className="row">
                {/* Profile Details Section */}
                <div className="col-lg-6 col-md-12 mb-4">
                    <div className="card">
                        <div className="card-header bg-primary text-white">
                            <h4>My Profile Details</h4>
                        </div>
                        <div className="card-body">
                            {user && (
                                <>
                                    <p><strong>Email:</strong> {user.email}</p>
                                    <p><strong>Phone Number:</strong> {user.phoneNumber}</p>
                                </>
                            )}
                        </div>
                        <div className="card-footer text-center">
                            <button className="btn btn-warning me-2" onClick={handleEditProfile}>
                                Edit Profile
                            </button>
                            <button className="btn btn-danger" onClick={handleLogout}>
                                Logout
                            </button>
                        </div>
                    </div>
                </div>

                {/* Booking History Section */}
                <div className="col-lg-6 col-md-12">
                    <div className="card">
                        <div className="card-header bg-success text-white">
                            <h4>My Booking History</h4>
                        </div>
                        <div className="card-body">
                            {user && user.bookings.length > 0 ? (
                                <div className="row">
                                    {user.bookings.map((booking) => (
                                        <div key={booking.id} className="col-12 mb-3">
                                            <div className="card shadow-sm">
                                                <div className="row g-0">
                                                    <div className="col-md-4">
                                                        <img
                                                            src={booking.room.roomPhotoUrl}
                                                            alt="Room"
                                                            className="img-fluid rounded-start"
                                                        />
                                                    </div>
                                                    <div className="col-md-8">
                                                        <div className="card-body">
                                                            <p><strong>Booking Code:</strong> {booking.bookingConfirmationCode}</p>
                                                            <p><strong>Check-in:</strong> {booking.checkInDate}</p>
                                                            <p><strong>Check-out:</strong> {booking.checkOutDate}</p>
                                                            <p><strong>Total Guests:</strong> {booking.totalNumOfGuest}</p>
                                                            <p><strong>Room Type:</strong> {booking.room.roomType}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <p>No bookings found.</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;
