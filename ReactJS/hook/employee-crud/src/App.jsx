import React, { useState, useEffect } from "react";
import axios from "axios";

const API = "http://localhost:3001/employees";

function App() {
  const [employees, setEmployees] = useState([]);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const [editId, setEditId] = useState(null);

  // 📥 FETCH DATA (READ)
  const fetchEmployees = async () => {
    try {
      const res = await axios.get(API);
      setEmployees(res.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  // ✍️ HANDLE INPUT
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // ➕ CREATE & ✏️ UPDATE
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (editId) {
        await axios.put(`${API}/${editId}`, form);
        setEditId(null);
      } else {
        await axios.post(API, form);
      }

      setForm({ name: "", email: "", phone: "", address: "" });
      fetchEmployees();
    } catch (error) {
      console.error("Error saving data:", error);
    }
  };

  // ✏️ EDIT
  const handleEdit = (emp) => {
    setForm(emp);
    setEditId(emp.id);
  };

  // ❌ DELETE
  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API}/${id}`);
      fetchEmployees();
    } catch (error) {
      console.error("Error deleting data:", error);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Employee CRUD (App.jsx)</h2>

      {/* FORM */}
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Employee Name"
          required
        />
        <br />

        <input
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email"
          required
        />
        <br />

        <input
          name="phone"
          value={form.phone}
          onChange={handleChange}
          placeholder="Phone"
          required
        />
        <br />

        <input
          name="address"
          value={form.address}
          onChange={handleChange}
          placeholder="Address"
          required
        />
        <br />

        <button type="submit">
          {editId ? "Update Employee" : "Add Employee"}
        </button>
      </form>

      <hr />

      {/* TABLE */}
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

export default App;