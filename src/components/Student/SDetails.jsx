import PropTypes from 'prop-types';

export const SDetails = ({ student }) => {
  return (
    <div className="lg:p-16">
      <ul className="lg:space-y-8 space-y-6 mb-10">
        <li>Name: {student.name}</li>
        <li>Year of Study: {student.year}</li>
        <li>Department: {student.department}</li>
        <li>DOB: {student.dob}</li>
        <li>Room No: {student.roomNo}</li>
        <li>Bill Status: {student.billStatus}</li>
        <li>Admission Date: {student.admissionDate}</li>
      </ul>
    </div>
  );
};

// PropTypes validation
SDetails.propTypes = {
  student: PropTypes.shape({
    regNo: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    department: PropTypes.string.isRequired,
    dob: PropTypes.string.isRequired,
    roomNo: PropTypes.string.isRequired,
    billStatus: PropTypes.string.isRequired,
    admissionDate: PropTypes.string.isRequired
  }).isRequired
};
