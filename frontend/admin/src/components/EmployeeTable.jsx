function EmployeeTable({ employees, onEdit, onDelete }) {
    return (
      <table className="w-full mt-20 bg-white shadow-md rounded">
        <thead>
          <tr>
            <th>Serial</th>
            <th>Image</th>
            <th>Name</th>
            <th>Email</th>
            <th>Designation</th>
            <th>Gender</th>
            <th>Course</th>
            <th>Created At</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee, index) => (
            <tr key={employee._id}>
              <td>{index + 1}</td>
              <td><img src={employee.image || 'default.jpg'} alt="Profile" className="w-10 h-10" /></td>
              <td>{employee.name}</td>
              <td>{employee.email}</td>
              <td>{employee.designation}</td>
              <td>{employee.gender}</td>
              <td>{employee.course}</td>
              <td>{new Date(employee.createdAt).toLocaleDateString()}</td>
              <td>
                <button onClick={() => onEdit(employee)} className="bg-yellow-500 text-white px-2 py-1 rounded">Edit</button>
                <button onClick={() => onDelete(employee._id)} className="bg-red-500 text-white px-2 py-1 rounded ml-2">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
  
  export default EmployeeTable;
  