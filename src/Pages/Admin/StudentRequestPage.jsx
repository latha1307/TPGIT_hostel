import { ANavbar } from "../../components/Admin/ANavbar";
import { StudentRequests } from "../../components/Admin/studentRequests";


export const StudentRequestPage = () => {
  return (
    <>
        <div className="bg-gray-600 flex flex-col h-auto lg:h-[100vh] justify-center p-10 pt-2 pb-2">
                <div className="bg-white ">
                    <ANavbar/>
                </div>
                <div className=" mt-24 ">
                    <StudentRequests/>
                </div>
            </div>
    </>
  )
}
