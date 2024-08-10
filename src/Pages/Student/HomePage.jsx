import { useState } from 'react';
import { SDetails } from "../../components/Student/SDetails";
import { SNavbar } from "../../components/Student/SNavbar";
import { SProfile } from "../../components/Student/SProfile";

// Mock student data
const studentData = {
  regNo: '513121106703',
  name: 'John Doe',
  year: 'III year',
  department: 'ECE',
  dob: '07/08/2004',
  roomNo: '14',
  billStatus: 'Paid',
  admissionDate: '23/12/2023'
};

function HomePage() {
  const [student] = useState(studentData); // Use state to manage student data, remove setStudent

  return (
    <>
      <div className="bg-primary flex h-auto justify-center lg:h-[100vh]">
        <div className="bg-white lg:h-[90vh] h-auto lg:w-[70vw] w-[88vw] border rounded mt-10 mb-10">
          <SNavbar />
          <div className="flex flex-col lg:flex-row justify-center items-center">
            <div className="lg:h-[74vh] h-auto lg:-ml-20 lg:mb-0 w-full lg:w-1/2">
              <SProfile student={student} /> {/* Pass student data to SProfile */}
            </div>
            <hr className="bg-black h-[2px] w-[80vw] m-10 lg:w-[1px] lg:h-96" />
            <div className="w-full lg:w-1/2">
              <SDetails student={student} /> {/* Pass student data to SDetails */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
