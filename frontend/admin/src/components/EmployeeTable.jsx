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
            <td className="text-center">{index + 1}</td>
            <td className="flex justify-center items-center">
              <img
                src={employee.image || 'https://placehold.co/400'}
                alt="Profile"
                className="w-10 h-10 rounded-full object-cover"
              />
            </td>
            <td className="text-center">{employee.name}</td>
            <td className="text-center">{employee.email}</td>
            <td className="text-center">{employee.designation}</td>
            <td className="text-center">{employee.gender}</td>
            <td className="text-center">{employee.course}</td>
            <td className="text-center">{new Date(employee.createdAt).toLocaleDateString()}</td>
            <td className="text-center">
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
