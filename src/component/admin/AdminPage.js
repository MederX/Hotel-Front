import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ApiService from '../../service/ApiService';
import 'bootstrap/dist/css/bootstrap.min.css';

const AdminPage = () => {
    const [adminName, setAdminName] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const fetchAdminName = async () => {
            try {
                const response = await ApiService.getUserProfile();
                setAdminName(response.user.name);
            } catch (error) {
                console.error('Error fetching admin details:', error.message);
            }
        };

        fetchAdminName();
    }, []);

    return (
        <div className="container-fluid bg-light vh-100 d-flex flex-column align-items-center justify-content-center">
            <div 
                className="card shadow-lg p-5" 
                style={{ width: '100%', maxWidth: '600px', height: '400px' }}
            >
                <h1 className="text-center mb-4">Welcome, <span className="text-primary">{adminName}</span></h1>
                <div className="d-grid gap-4">
                    <button
                        className="btn btn-primary btn-lg"
                        onClick={() => navigate('/admin/manage-rooms')}
                    >
                        Manage Rooms
                    </button>
                    <button
                        className="btn btn-secondary btn-lg"
                        onClick={() => navigate('/admin/manage-bookings')}
                    >
                        Manage Bookings
                    </button>
                </div>
            </div>
        </div>
    );
}

export default AdminPage;
