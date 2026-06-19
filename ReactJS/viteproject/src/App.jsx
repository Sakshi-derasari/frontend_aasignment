import { useState, useEffect } from "react";

function App() {
  const [student, setStudent] = useState({
    name: "",
    email: "",
    contact: ""
  });

  const [students, setStudents] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  // Load from localStorage
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("students")) || [];
    setStudents(data);
  }, []);

  // Handle input change
  const handleChange = (e) => {
    setStudent({
      ...student,
      [e.target.name]: e.target.value
    });
  };

  // Add / Update student
  const handleSubmit = (e) => {
    e.preventDefault();

    let updatedStudents = [...students];

    if (editIndex === null) {
      updatedStudents.push(student);
    } else {
      updatedStudents[editIndex] = student;
      setEditIndex(null);
    }

    setStudents(updatedStudents);
    localStorage.setItem("students", JSON.stringify(updatedStudents));

    // Reset form
    setStudent({
      name: "",
      email: "",
      contact: ""
    });
  };

  // Delete student
  const handleDelete = (index) => {
    const updatedStudents = students.filter((_, i) => i !== index);
    setStudents(updatedStudents);
    localStorage.setItem("students", JSON.stringify(updatedStudents));
  };

  // Edit student
  const handleEdit = (index) => {
    setStudent(students[index]);
    setEditIndex(index);
  };

  return (
    <div className="container mt-5">
      <div className="card shadow">
        <div className="card-header bg-primary text-white text-center">
          <h3>Student Registration</h3>
        </div>

        <div className="card-body">
          <form onSubmit={handleSubmit}>
            
            {/* Name */}
            <div className="mb-3">
              <label className="form-label">Student Name</label>
              <input
                type="text"
                className="form-control"
                name="name"
                value={student.name}
                onChange={handleChange}
                required
              />
            </div>

            {/* Email */}
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                name="email"
                value={student.email}
                onChange={handleChange}
                required
              />
            </div>

            {/* Contact */}
            <div className="mb-3">
              <label className="form-label">Contact</label>
              <input
                type="tel"
                className="form-control"
                name="contact"
                value={student.contact}
                onChange={handleChange}
                required
              />
            </div>

            <div className="text-center">
              <button type="submit" className="btn btn-success px-4">
                {editIndex === null ? "Add Student" : "Update Student"}
              </button>
            </div>

          </form>
        </div>
      </div>

      {/* Table */}
      <div className="card mt-4 shadow">
        <div className="card-header bg-dark text-white text-center">
          <h4>Student List</h4>
        </div>

        <div className="card-body">
          <table className="table table-bordered text-center">
            <thead className="table-light">
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Contact</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {students.length === 0 ? (
                <tr>
                  <td colSpan="5">No Data Found</td>
                </tr>
              ) : (
                students.map((s, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{s.name}</td>
                    <td>{s.email}</td>
                    <td>{s.contact}</td>
                    <td>
                      <button
                        className="btn btn-warning btn-sm me-2"
                        onClick={() => handleEdit(index)}
                      >
                        Edit
                      </button>

                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => handleDelete(index)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>

          </table>
        </div>
      </div>
    </div>
  );
}

export default App;