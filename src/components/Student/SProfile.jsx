import PropTypes from 'prop-types';
import StudProfile from '../../assets/studentProfileImage.png';

export const SProfile = ({ student }) => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <img src={StudProfile} alt="Student Profile" className='max-w-sm space-y-8 md:max-w-md w-full lg:w-2/3 lg:mt-0' />
      <h1 className='text-sm'>REG NO: {student.regNo}</h1>
      <button className='mt-4 bg-[#499D34] text-sm transition-all duration-300 rounded-3xl text-white hover:bg-green-700 px-6 py-3 my-2 md:max-w-sm lg:max-w-md'>Update Profile</button>
      <button className='bg-[#EF821D] text-sm transition-all duration-300 rounded-3xl text-white hover:bg-orange-600 px-3 py-3 my-2 md:max-w-sm'>Change Password</button>
    </div>
  );
};

// PropTypes validation
SProfile.propTypes = {
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
