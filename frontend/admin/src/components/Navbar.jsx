import { useState } from 'react';

function Navbar({ onAddEmployee, onSearch }) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleLogout = () => {
    // Clear authentication data (e.g., token from local storage)
    localStorage.removeItem('authToken'); // Example for token removal
    window.location.href = '/'; // Redirect to login page
  };

  const handleSearchChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    onSearch(query); // Pass search query to parent component
  };

  return (
    <div className="fixed top-0 left-0 w-full bg-blue-600 text-white p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">Employee Management</h1>
      <div className="flex space-x-4">
        <input
          type="text"
          placeholder="Search by name"
          value={searchQuery}
          onChange={handleSearchChange}
          className="px-3 py-1 rounded text-black"
        />
        <button onClick={onAddEmployee} className="bg-green-500 px-4 py-2 rounded">
          Create Employee
        </button>
        <button onClick={handleLogout} className="bg-red-500 px-4 py-2 rounded">
          Logout
        </button>
      </div>
    </div>
  );
}

export default Navbar;
