import React, { useState } from 'react';
import axios from 'axios';

function SendMail() {
  const [email, setEmail] = useState('');

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/sendmail', { email });
      alert(response.data.message);
    } catch (error) {
      console.error(error);
      alert('Error during sending email');
    }
  };

  return (
    <div>
      <h2>Send Verification Mail</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Send Mail</button>
      </form>
    </div>
  );
}

export default SendMail;
