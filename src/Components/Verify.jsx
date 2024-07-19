import React, { useState } from 'react';
import axios from 'axios';

function Verify() {
  const [formData, setFormData] = useState({
    email: '',
    vercode: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/verify', formData);
      alert(response.data.message);
    } catch (error) {
      console.error(error);
      alert('Error during verification');
    }
  };

  return (
    <div>
      <h2>Verify Code</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Verification Code</label>
          <input
            type="text"
            className="form-control"
            name="vercode"
            value={formData.vercode}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Verify</button>
      </form>
    </div>
  );
}

export default Verify;
