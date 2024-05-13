import { TiLocationArrowOutline } from "react-icons/ti";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { Typography } from "@material-tailwind/react";

 


export const Footer = () => {
  return (
    <>
        <hr className=" h-3 mt-10 bg-primary border-0 "/>
        <div className="bg-gray-800 text-white px-10 py-8 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 ">
            <div className="space-y-5 w-56">
                <h4>Warden,</h4>
                <div className=" flex flex-row items-start space-x-2">
                    <TiLocationArrowOutline className="size-10"/> 
                    <div>
                    <p>TPGIT Hostels</p>
                    <p>Thanthai Periyar Government Institute of Technology</p>
                    <p> Bagayam </p>
                    <p>Vellore - 632513</p>
                    </div>
                </div>
                
            </div>
            <div className="space-y-5">
                <h4 >Contact</h4>
                <div className=" flex flex-row items-start space-x-2">
                    <IoCallOutline className="mt-2"/> 
                    <div>
                        <p>0422-4304888</p>
                        <p>0422-2572177</p>
                        
                    </div>
                </div>
                <div className=" flex flex-row items-start space-x-2">
                    <MdOutlineEmail  className="mt-2"/>
                    <div>
                        <p>warden.gh@tpgit.ac.in</p>
                        <p>warden.lh@psgtech.ac.in</p>
                    </div>
                </div>
            </div>
            <div className="space-y-5">
                <h4>Quick Links</h4>
                <div className="ml-6 space-y-4">
                    <ul className="space-y-2">
                        <li>Home</li>
                        <li>About</li>
                        <li>Register</li>
                        <li>Login</li>
                    </ul>
                </div>
            </div>
            <div className="space-y-5">
                <h4 >Register</h4>
                <div className="ml-6 space-y-4">
                    <ul className="space-y-2">
                        <li>New Student Registration</li>
                        <li>Existing Student Registration</li>
                    </ul>
                </div>
            </div>
            <div className="space-y-5">
                <h4 > Login</h4>
                <div className="ml-6 space-y-4">
                    <ul className="space-y-2">
                        <li>Admin Login</li>
                        <li>Student Login</li>
                    </ul>
                </div>
            </div>
        </div>
        <footer className=" w-full text-center text-sm text-gray-400 tracking-wider bg-gray-700 py-2  md:justify-between">
            <Typography color="blue-gray" className="font-normal">
                Copyright &copy; 2024 TPGIT
            </Typography>
      
    </footer>
 
    </>
  )
}

