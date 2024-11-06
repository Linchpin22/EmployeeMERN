function Navbar({ onAddEmployee }) {
    return (
      <div className="fixed top-0 left-0 w-full bg-blue-600 text-white p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Employee Management</h1>
        <button onClick={onAddEmployee} className="bg-green-500 px-4 py-2 rounded">Create Employee</button>
      </div>
    );
  }
  
  export default Navbar;
  