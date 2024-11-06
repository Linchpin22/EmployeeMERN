import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log('Attempting to log in with:', { email, password });
    console.log('Form submitted!');

    // Using the full API URL directly
    const apiUrl = 'http://localhost:5000/api/auth/login'; // Change this to your actual backend URL

    try {
      const res = await axios.post(apiUrl, { email, password });
      localStorage.setItem('token', res.data.token);
      navigate('/employees');
    } catch (error) {
      console.error('Error during login:', error); // Log the error for debugging
      alert('Invalid credentials'); // Alert for invalid credentials
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleLogin} className="p-8 bg-white rounded shadow-md">
        <h2 className="mb-6 text-2xl font-bold">Admin Login</h2>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 mb-4 border rounded"
          placeholder="Email"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 mb-4 border rounded"
          placeholder="Password"
          required
        />
        <button type="submit" className="w-full p-2 text-white bg-blue-500 rounded">Login</button>
      </form>
    </div>
  );
}

export default LoginPage;
