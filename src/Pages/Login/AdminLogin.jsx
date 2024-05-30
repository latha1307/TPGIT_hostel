import { ALogin } from "../../components/Admin/ALogin";
//import bgImage from '../../assets/studentlogin.jpeg'




function AdminLogin() {

    return (
        <>
            <div className="bgAdminLogin bg-cover h-[100vh] flex justify-center items-center text-white">
                <ALogin/>
            </div>
        </>
    )
}

export default AdminLogin;