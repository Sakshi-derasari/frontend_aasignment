import React, { useState, useEffect } from "react";
import axios from "axios";

const API = "http://localhost:3001/employees";

function EmployeeCRUD() {
  const [employees, setEmployees] = useState([]);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const [editId, setEditId] = useState(null);

  // READ
  const fetchEmployees = async () => {
    const res = await axios.get(API);
    setEmployees(res.data);
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  // Handle input
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // CREATE & UPDATE
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (editId) {
      await axios.put(`${API}/${editId}`, form);
      setEditId(null);
    } else {
      await axios.post(API, form);
    }

    setForm({ name: "", email: "", phone: "", address: "" });
    fetchEmployees();
  };

  // EDIT
  const handleEdit = (emp) => {
    setForm(emp);
    setEditId(emp.id);
  };

  // DELETE
  const handleDelete = async (id) => {
    await axios.delete(`${API}/${id}`);
    fetchEmployees();
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Employee CRUD (JSON Server)</h2>

      <form onSubmit={handleSubmit}>
        <input name="name" value={form.name} onChange={handleChange} placeholder="Name" required />
        <br />

        <input name="email" value={form.email} onChange={handleChange} placeholder="Email" required />
        <br />

        <input name="phone" value={form.phone} onChange={handleChange} placeholder="Phone" required />
        <br />

        <input name="address" value={form.address} onChange={handleChange} placeholder="Address" required />
        <br />

        <button type="submit">
          {editId ? "Update" : "Add"}
        </button>
      </form>

      <hr />

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Address</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {employees.map((emp) => (
            <tr key={emp.id}>
              <td>{emp.name}</td>
              <td>{emp.email}</td>
              <td>{emp.phone}</td>
              <td>{emp.address}</td>
              <td>
                <button onClick={() => handleEdit(emp)}>Edit</button>
                <button onClick={() => handleDelete(emp.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EmployeeCRUD;