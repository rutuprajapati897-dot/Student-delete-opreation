
import React, { useState } from "react";

function App() {
  const [students, setStudents] = useState([
    { id: 1, name: "Rahul", email: "rahul@gmail.com" },
    { id: 2, name: "Priya", email: "priya@gmail.com" },
    { id: 3, name: "Amit", email: "amit@gmail.com" }
  ]);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  function addStudent() {
    if (!name.trim() || !email.trim()) {
      alert("Please enter all details");
      return;
    }

    const newRoll = students.length > 0
      ? Math.max(...students.map(s => s.id)) + 1
      : 1;

    const newStudent = {
      id: newRoll,
      name: name,
      email: email
    };

    setStudents([...students, newStudent]);
    setName("");
    setEmail("");
  }

  function deleteStudent(id) {
    setStudents(students.filter(s => s.id !== id));
  }

  return (
    <div>
      <h1>Student Management</h1>

      <input
        placeholder="Enter Name"
        value={name}
        onChange={e => setName(e.target.value)}
      />

      <input
        placeholder="Enter Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />

      <button onClick={addStudent}>Add Student</button>

      <h2>Student List</h2>

      <table border="1" cellPadding="8">
        <thead>
          <tr>
            <th>Roll No.</th>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {students.map(s => (
            <tr key={s.id}>
              <td>{s.id}</td>
              <td>{s.name}</td>
              <td>{s.email}</td>
              <td>
                <button onClick={() => deleteStudent(s.id)}>
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

export default App;
