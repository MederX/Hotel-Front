import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import ApiService from '../../service/ApiService';

function Navbar() {
    const isAuthenticated = ApiService.isAuthenticated();
    const isAdmin = ApiService.isAdmin();
    const isUser = ApiService.isUser();
    const navigate = useNavigate();

    const handleLogout = () => {
        const isLogout = window.confirm('Are you sure you want to logout this user?');
        if (isLogout) {
            ApiService.logout();
            navigate('/home');
        }
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                {/* Logo Section */}
                <NavLink to="/home" className="navbar-brand d-flex align-items-center text-primary">
                    <span className="fs-3 fw-white text-white">HavenPlace Hotel</span>
                </NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <NavLink to="/home" className="nav-link" activeClassName="active">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/rooms" className="nav-link" activeClassName="active">Rooms</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/find-booking" className="nav-link" activeClassName="active">Find my Booking</NavLink>
                        </li>

                        {isUser && (
                            <li className="nav-item">
                                <NavLink to="/profile" className="nav-link" activeClassName="active">Profile</NavLink>
                            </li>
                        )}

                        {isAdmin && (
                            <li className="nav-item">
                                <NavLink to="/admin" className="nav-link" activeClassName="active">Admin</NavLink>
                            </li>
                        )}

                        {!isAuthenticated && (
                            <>
                                <li className="nav-item">
                                    <NavLink to="/login" className="nav-link" activeClassName="active">Login</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/register" className="nav-link" activeClassName="active">Register</NavLink>
                                </li>
                            </>
                        )}

                        {isAuthenticated && (
                            <li className="nav-item">
                                <button className="nav-link btn btn-link" onClick={handleLogout}>Logout</button>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
