import React, { useState } from 'react';
import axios from 'axios';

const ChangePassword = ({ email }) => {
    const [form, setForm] = useState({
        password1: '',
        password2: ''
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(`http://localhost:3000/changepassword/${email}`, form);
            alert(res.data.message);
        } catch (error) {
            console.error("Error during password change:", error);
            alert('Password change failed');
        }
    };

    return (
        <div className="container mt-5">
            <h2>Change Password</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>New Password</label>
                    <input
                        type="password"
                        className="form-control"
                        name="password1"
                        value={form.password1}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Confirm New Password</label>
                    <input
                        type="password"
                        className="form-control"
                        name="password2"
                        value={form.password2}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary mt-3">Change Password</button>
            </form>
        </div>
    );
};

export default ChangePassword;
