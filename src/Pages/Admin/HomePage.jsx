import { AAccesses } from "../../components/Admin/AAccesses";
import { ANavbar } from "../../components/Admin/ANavbar";

function HomePage () {
    return (
        <>
            <div className="bg-gray-600 flex flex-col h-[100vh] justify-center p-10 pt-2 pb-2">
                <div className="bg-white ">
                    <ANavbar/>
                </div>
                <div className=" mt-24 ">
                    <AAccesses/>
                </div>
          </div>
      
        </>
    )
}

export default HomePage;