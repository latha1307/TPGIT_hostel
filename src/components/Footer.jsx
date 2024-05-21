import { TiLocationArrowOutline } from "react-icons/ti";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <>
      <hr className="h-3 bg-primary border-0" />
      <div className="bg-gray-800 text-white px-10 py-8 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
        <div className="space-y-5 w-full">
          <h4 className="font-semibold">Warden,</h4>
          <div className="flex flex-row items-start space-x-2">
            <TiLocationArrowOutline className="w-6 h-6" />
            <div>
              <p>TPGIT Hostels</p>
              <p>Thanthai Periyar Government Institute of Technology</p>
              <p>Bagayam</p>
              <p>Vellore - 632513</p>
            </div>
          </div>
        </div>
        <div className="space-y-5">
          <h4 className="font-semibold">Contact</h4>
          <div className="flex flex-row items-start space-x-2">
            <IoCallOutline className="w-6 h-6 mt-1" />
            <div>
              <p>0422-4304888</p>
              <p>0422-2572177</p>
            </div>
          </div>
          <div className="flex flex-row items-start space-x-2">
            <MdOutlineEmail className="w-6 h-6 mt-1" />
            <div>
              <p>warden.gh@tpgit.ac.in</p>
              <p>warden.lh@tpgit.ac.in</p>
            </div>
          </div>
        </div>
        <div className=" w-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.4282893257637!2d79.11790747454529!3d12.880158916877521!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bad394400000001%3A0xf7139af5b9890941!2sThanthai%20Periyar%20Government%20Institute%20of%20Technology-Vellore!5e0!3m2!1sen!2sin!4v1716014627854!5m2!1sen!2sin"
            width="100%"
            height="250"
            style={{ border: 0, borderRadius: 10 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="lg:w-full w-[80%]"
          ></iframe>
        </div>
        <div className="space-y-5">
          <h4 className="font-semibold">Quick Links</h4>
          <ul className="space-y-2 ml-4">
            <Link to={'/home'}>Home</Link>
            <li><Link to={'/about'}>About</Link></li>
            <li>Fees</li>
            <li><Link to={'/home'}>Login</Link></li>
          </ul>
        </div>
        <div className="space-y-5">
          <h4 className="font-semibold">Developers</h4>
          <ul className="space-y-2 ml-4">
            <li>Lathadevi B</li>
            <li>Bhavani R</li>
            <li>Jana K</li>
            <li>Agarsha S</li>
            <li>Iniya G</li>
          </ul>
        </div>
      </div>
      <footer className="w-full text-center text-sm text-gray-400 tracking-wider bg-gray-700 py-2">
        <Typography color="blue-gray" className="font-normal">
          Copyright &copy; 2024 TPGIT
        </Typography>
      </footer>
    </>
  );
};

