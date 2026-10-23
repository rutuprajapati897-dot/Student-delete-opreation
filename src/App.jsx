
import { useState } from "react";

function App() {
  const [students, setStudents] = useState([
    { id: 1, name: "Aarav Patel" },
    { id: 2, name: "Diya Shah" },
    { id: 3, name: "Krish Modi" }
  ]);

  const [name, setName] = useState("");

  function addStudent() {
    if (!name.trim()) return;

    setStudents([
      ...students,
      { id: Date.now(), name: name.trim() }
    ]);
    setName("");
  }

  function deleteStudent(id) {
    setStudents(students.filter((s) => s.id !== id));
  }

  return (
    <div className="min-h-screen bg-gray-950 text-white p-6">
      <div className="max-w-xl mx-auto">
        <h1 className="text-4xl font-bold text-purple-400 text-center">
          Student Hub
        </h1>
        <p className="text-gray-400 text-center mt-2 mb-8">
          Student Management System
        </p>

        <div className="flex gap-2 mb-6">
          <input
            className="flex-1 min-w-0 bg-gray-800 border border-gray-700 rounded-lg p-3 outline-none focus:border-purple-500"
            placeholder="Enter student name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button
            onClick={addStudent}
            className="bg-green-600 hover:bg-green-700 px-4 rounded-lg font-bold"
          >
            + Add
          </button>
        </div>

        <div className="bg-gray-900 border border-gray-800 rounded-xl p-5">
          <h2 className="text-xl font-bold text-purple-300 mb-4">
            Students ({students.length})
          </h2>

          {students.map((s, index) => (
            <div
              key={s.id}
              className="flex items-center justify-between gap-3 bg-gray-800 p-3 rounded-lg mb-3"
            >
              <span className="break-all">
                <b className="text-purple-400">{index + 1}.</b>{" "}
                {s.name}
              </span>

              <button
                onClick={() => deleteStudent(s.id)}
                className="bg-red-600 hover:bg-red-700 px-3 py-2 rounded-lg"
              >
                Delete
              </button>
            </div>
          ))}

          {students.length === 0 && (
            <p className="text-gray-400 text-center">
              No students available!
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
