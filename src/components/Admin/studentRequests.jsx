import { useEffect, useState } from "react";
import axios from "axios";
import { FaFilePdf } from "react-icons/fa";

export const StudentRequests = () => {
  const [students, setStudents] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [studentsPerPage] = useState(5);

  useEffect(() => {
    axios
      .get("http://localhost:8081/api/student-requests")
      .then((response) => {
        if (Array.isArray(response.data)) {
          setStudents(response.data);
        } else {
          console.error("Expected an array but got:", response.data);
        }
      })
      .catch((error) =>
        console.error("Error fetching student requests:", error)
      );
  }, []);

  const indexOfLastStudent = currentPage * studentsPerPage;
  const indexOfFirstStudent = indexOfLastStudent - studentsPerPage;
  const currentStudents = students.slice(
    indexOfFirstStudent,
    indexOfLastStudent
  );

  const handleApprove = (studentId) => {
    axios
      .post("http://localhost:8081/api/student-requests/approve", {
        roll_no: studentId,
      })
      .then((response) => {
        console.log(response.data);
        setStudents(
          students.filter((student) => student.roll_no !== studentId)
        );
      })
      .catch((error) => console.error("Error approving student:", error));
  };

  const handleReject = (studentId) => {
    axios
      .post("http://localhost:8081/api/student-requests/reject", {
        roll_no: studentId,
      })
      .then((response) => {
        console.log(response.data);
        setStudents(
          students.filter((student) => student.roll_no !== studentId)
        );
      })
      .catch((error) => console.error("Error rejecting student:", error));
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo(0, 0);
  };

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(students.length / studentsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="bg-white p-6">
      <table className="min-w-full bg-white">
        <thead className="bg-gray-800 text-white">
          <tr>
            <th className="py-2">Student Name</th>
            <th className="py-2">Register Number</th>
            <th className="py-2">Course</th>
            <th className="py-2">Year</th>
            <th className="py-2">DOB</th>
            <th className="py-2">Gender</th>
            <th className="py-2">Photo</th>
            <th className="py-2">Fees Receipt</th>
            <th className="py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentStudents.length > 0 ? (
            currentStudents.map((student) => (
              <tr
                key={student.roll_no}
                className="bg-gray-100 text-center border-b border-gray-200"
              >
                <td className="py-2">{student.student_name}</td>
                <td className="py-2">{student.roll_no}</td>
                <td className="py-2">{student.course}</td>
                <td className="py-2">{student.year}</td>
                <td className="py-2">{student.DOB}</td>
                <td className="py-2">{student.gender}</td>
                <td className="py-2">
                  <img
                    src={`data:image/jpeg;base64,${student.student_photo}`}
                    alt="Student"
                    className="h-16 w-16 object-cover rounded-full"
                  />
                </td>
                <td className="py-2">
                  <a
                    href={`data:application/pdf;base64,${student.fees_receipt}`}
                    download={`fees_receipt_${student.roll_no}.pdf`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaFilePdf className="text-red-500 hover:text-red-700 transition duration-300 ease-in-out" />
                  </a>
                </td>
                <td className="py-2">
                  <button
                    onClick={() => handleApprove(student.roll_no)}
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out"
                  >
                    Approve
                  </button>
                  <button
                    onClick={() => handleReject(student.roll_no)}
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-2 transition duration-300 ease-in-out"
                  >
                    Reject
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="9" className="py-2">
                No student requests found.
              </td>
            </tr>
          )}
        </tbody>
      </table>

      <div className="flex justify-center mt-4">
        <nav>
          <ul className="inline-flex -space-x-px">
            {pageNumbers.map((number) => (
              <li key={number}>
                <button
                  onClick={() => handlePageChange(number)}
                  className={`py-2 px-3 leading-tight ${
                    currentPage === number
                      ? "bg-blue-500 text-white"
                      : "bg-white text-blue-500"
                  } border border-gray-300 hover:bg-blue-700 hover:text-white transition duration-300 ease-in-out`}
                >
                  {number}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};
