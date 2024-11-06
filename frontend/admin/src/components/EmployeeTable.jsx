function EmployeeTable({ employees, onEdit, onDelete }) {
  return (
    <div className="overflow-x-auto mt-20">
      <table className="min-w-full bg-white shadow-lg rounded-lg overflow-hidden">
        <thead className="bg-blue-600 text-white">
          <tr>
            <th className="px-4 py-3 text-center">Serial</th>
            <th className="px-4 py-3 text-center">Image</th>
            <th className="px-4 py-3 text-center">Name</th>
            <th className="px-4 py-3 text-center">Email</th>
            <th className="px-4 py-3 text-center">Designation</th>
            <th className="px-4 py-3 text-center">Gender</th>
            <th className="px-4 py-3 text-center">Course</th>
            <th className="px-4 py-3 text-center">Created At</th>
            <th className="px-4 py-3 text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee, index) => (
            <tr
              key={employee._id}
              className={`${
                index % 2 === 0 ? 'bg-gray-100' : 'bg-white'
              } hover:bg-gray-200 transition-colors`}
            >
              <td className="px-4 py-3 text-center font-semibold">{index + 1}</td>
              <td className="px-4 py-3 flex justify-center">
                <img
                  src={employee.image || 'https://placehold.co/400'}
                  alt="Profile"
                  className="w-10 h-10 rounded-full object-cover shadow-md"
                />
              </td>
              <td className="px-4 py-3 text-center">{employee.name}</td>
              <td className="px-4 py-3 text-center">{employee.email}</td>
              <td className="px-4 py-3 text-center">{employee.designation}</td>
              <td className="px-4 py-3 text-center">{employee.gender}</td>
              <td className="px-4 py-3 text-center">{employee.course}</td>
              <td className="px-4 py-3 text-center">
                {new Date(employee.createdAt).toLocaleDateString()}
              </td>
              <td className="px-4 py-3 text-center space-x-2">
                <button
                  onClick={() => onEdit(employee)}
                  className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-3 py-1 rounded-full shadow-md transition-colors"
                >
                  Edit
                </button>
                <button
                  onClick={() => onDelete(employee._id)}
                  className="bg-red-500 hover:bg-red-600 text-white font-semibold px-3 py-1 rounded-full shadow-md transition-colors"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EmployeeTable;
