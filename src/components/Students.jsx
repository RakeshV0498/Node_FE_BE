import { useEffect, useState } from "react";
import { fetchStudents } from "../API";

const StudentList = () => {
  const [students, setStudents] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getStudents = async () => {
      try {
        const studentData = await fetchStudents();
        setStudents(studentData);
      } catch (err) {
        setError(err.message);
      }
    };

    getStudents();
  }, []);

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Student List</h2>
      {error ? (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      ) : (
        <table className="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Course</th>
              <th>Batch</th>
              <th>Teacher ID</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id}>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.course}</td>
                <td>{student.batch}</td>
                <td>{student.teacherId}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default StudentList;
