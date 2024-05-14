import { SDetails } from "../../components/Student/SDetails";
import { SNavbar } from "../../components/Student/SNavbar";
import { SProfile } from "../../components/Student/SProfile";


function HomePage(){
  return (
    <>
      <div className="bg-primary flex h-auto justify-center lg:h-[100vh]">
        <div className="bg-white lg:h-[90vh] h-auto lg:w-[70vw] w-[88vw] border rounded mt-10 mb-10">
          <SNavbar/>
          <div className="flex flex-col lg:flex-row justify-center items-center">
            <div className="lg:h-[74vh] h-auto lg:-ml-20  lg:mb-0 bg-white w-1/2">
              <SProfile/>
            </div>
            <hr className="bg-black h-[2px] w-[80vw] m-10 lg:w-[1px] lg:h-96 "/>
            <div>
              <SDetails/>
            </div>
          </div>
        </div>
        
      </div>
    </>
  )
}

export default HomePage;
