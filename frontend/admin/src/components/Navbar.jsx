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
    <div className="fixed top-0 left-0 w-full bg-blue-700 text-white p-4 flex justify-between items-center shadow-lg">
      <h1 className="text-2xl font-bold">Employee Management</h1>
      <div className="flex space-x-4 items-center">
        <input
          type="text"
          placeholder="Search by name"
          value={searchQuery}
          onChange={handleSearchChange}
          className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-400 text-gray-700"
        />
        <button
          onClick={onAddEmployee}
          className="bg-green-500 hover:bg-green-600 text-white font-semibold px-4 py-2 rounded-lg shadow transition-colors"
        >
          Create Employee
        </button>
        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-2 rounded-lg shadow transition-colors"
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Navbar;
