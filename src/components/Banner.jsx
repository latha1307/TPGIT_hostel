import { useState } from 'react';
import logo from '../assets/TPGIT_logo_created.png';
import { FaXmark, FaBars } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from "framer-motion";
import PropTypes from 'prop-types';


export function Banner()  {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }


    const navItems = [
        {link: "Home", path: "/home"},
        {link: "About", path: "/about"},
        {link: "Fees", path: "#"},
        {link: "Contact", path: "#"},
    ];

    return (
        <>
            <nav className=' bg-white md:px-14 p-3 max-w-screen-2x1 sticky lg:border-b mx-auto top-0 right-0 left-0'>
                <div className='text-lg container mx-auto flex justify-between items-center '>
                    <div className='flex items-center justify-between space-x-5'>
                        <a href="/" className='text-2xl  flex items-center space-x-3 text-primary'>
                            <img src={logo} alt="" className='inline-block w-44'/> 
                        </a>
                        <ul className='md:flex space-x-12 hidden font-semibold'>
                            {navItems.map(({link, path}) => (
                                <FlyoutBottom key={link} href={path} ><span className='hover:text-secondary '>{link}</span></FlyoutBottom>
                            ))}
                        </ul>
                        

                    </div>
                    <div className="md:hidden ">
                            <button onClick={toggleMenu} className="text-black focus:outline-none focus:text-gray-900">
                                {isMenuOpen ? <FaXmark className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
                            </button>
                        </div>
                    <div className='space-x-12 hidden md:flex items-center font-semibold'>
                        <div className="flex lg:flex bg-secondary  transition-all duration-300 rounded-3xl text-white hover:bg-blue-900 px-6 py-3">
                            <FlyoutLogin href="#" FlyoutContent={RegisterContent}>
                                Registration
                            </FlyoutLogin>
                        </div>
                        <button className="flex lg:flex bg-secondary  transition-all duration-300 rounded-3xl text-white hover:bg-blue-900 px-6 py-3">
                            <FlyoutLogin href="#" FlyoutContent={LoginContent}>
                                Login
                            </FlyoutLogin>
                        </button>
                    </div>
                    
                </div>
            </nav>
            {/* Mobile responsive */}
            <div className={`space-y-6 px-6 pt-5 pb-5 mt-2 bg-blue-400 font-semibold  ${isMenuOpen ? "block sticky top-24 right-0 left-0": "hidden"}`}>
            {
                navItems.map(({link, path}) => (
                    <FlyoutBottom key={link} href={path} ><span className='hover:text-gray-200 '>{link}</span></FlyoutBottom>
                ))
            }
                <div className='flex justify-around items-center'> {/* Align items at the center */}
                  <div className="flex lg:flex bg-secondary  transition-all duration-300 rounded-3xl text-white hover:bg-blue-900 px-6 py-3 my-2">
                    <FlyoutLogin href="#" FlyoutContent={RegisterContent}>
                      Registration
                    </FlyoutLogin>
                  </div>
                  <button className="flex lg:flex bg-secondary  transition-all duration-300 rounded-3xl text-white hover:bg-blue-900 px-6 py-3 my-2">
                    <FlyoutLogin href="#" FlyoutContent={LoginContent}>
                      Login
                    </FlyoutLogin>
                  </button>
                </div>
            
            
            </div>

        </>
    )
}

const FlyoutBottom = ({ children, href }) => {
    const [open, setOpen] = useState(false);
  
    const showFlyout = open;
  
    return (
      <div
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        className="relative"
      >
        <Link to={href} className="relative ">
          {children}
          <span
            style={{
              transform: showFlyout ? "scaleX(1)" : "scaleX(0)",
            }}
            className="absolute -bottom-2 -left-2 -right-2 h-1 origin-left scale-x-0 rounded-full bg-yellow-400 border-sm transition-transform duration-300 ease-out"
          />
        </Link>
        <AnimatePresence>
          {showFlyout && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 15 }}
              style={{ translateX: "-50%" }}
              transition={{ duration: 1, ease: "easeOut" }}
            
            >
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
};

const FlyoutLogin = ({ children, href, FlyoutContent }) => {
    const [open, setOpen] = useState(false);
  
    const showFlyout = FlyoutContent && open;
  
    return (
      <div
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        className="relative"
      >
        <a href={href} className="relative ">
          {children}
          
        </a>
        <AnimatePresence>
          {showFlyout && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 15 }}
              style={{ translateX: "-50%" }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="absolute left-1/2 top-12 bg-white text-black"
            >
              <div className="absolute -top-6 left-0 right-0 h-6 bg-transparent" />
              <div className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-white" />
              <FlyoutContent />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };

const FlyoutLink = ({ children, href, FlyoutContent }) => {
    const [open, setOpen] = useState(false);
  
    const showFlyout = FlyoutContent && open;
  
    return (
      <div
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        className="relative"
      >
        <a href={href} className="relative ">
          {children}
          <span
            style={{
              transform: showFlyout ? "scaleX(1)" : "scaleX(0)",
            }}
            className="absolute -bottom-2 -left-2 -right-2 h-1 origin-left scale-x-0 rounded-full bg-yellow-400 border-sm transition-transform duration-300 ease-out"
          />
        </a>
        <AnimatePresence>
          {showFlyout && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 15 }}
              style={{ translateX: "-50%" }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="absolute left-1/2 top-12 bg-white text-black"
            >
              <div className="absolute -top-6 left-0 right-0 h-6 bg-transparent" />
              <div className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-white" />
              <FlyoutContent />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };
  
const RegisterContent = () => {
    const registeritems = [
        {link: "New Student Registration", path: "/new-student-register"},
        {link: "Existing Student Registration", path: "/existing-student-register"}
    ]
    return (
      <div className="lg:w-80 w-60 m-auto bg-white p-5 md:left-5 bottom-3 shadow-xl">
        <div className=" space-y-8">
            {
                registeritems.map(({link,path}) => (
                    <FlyoutBottom key={link} href={path} className="block text-1xl ml-4">{link}</FlyoutBottom>
            ))
            }
        </div>
        
      </div>
    );
};

const LoginContent = () => {
    const registeritems = [
        {link: "Admin Login", path: "/admin-login"},
        {link: "Student Login", path: "/student-login"}
    ]
    return (
      <div className="w-44 m-auto bg-white p-5 bottom-3 shadow-xl">
        <div className=" space-y-8">
            {
                registeritems.map(({link,path}) => (
                   <FlyoutBottom key={link} href={path} className="block text-1xl border-b">{link}</FlyoutBottom>
            ))
            }
        </div>
        
      </div>
    );
};

  




// Inside the FlyoutBottom component definition
FlyoutBottom.propTypes = {
    children: PropTypes.node.isRequired, // The content of the link
    href: PropTypes.string.isRequired, // The URL path the link should navigate to
 // The content to be displayed in the flyout (optional)
};

FlyoutLink.propTypes = {
    children: PropTypes.node.isRequired, // The content of the link
    href: PropTypes.string.isRequired, // The URL path the link should navigate to
    FlyoutContent: PropTypes.func, // The content to be displayed in the flyout (optional)
};

FlyoutLogin.propTypes = {
    children: PropTypes.node.isRequired, // The content of the link
    href: PropTypes.string.isRequired, // The URL path the link should navigate to
    FlyoutContent: PropTypes.func, // The content to be displayed in the flyout (optional)
};
// import logo from '../assets/logo.png';
// import { GrLanguage } from "react-icons/gr";

// const Navbar = () => {
//     const navItems = [
//         {link: "Overview", path: "home"},
//         {link: "Feature", path: "feature"},
//         {link: "About", path: "about"},
//         {link: "Pricing", path: "pricing"},
//     ];

//     return (
//         <nav className="bg-gray-800">
//             <div className='container mx-auto flex justify-between items-center'>
//                 <a href="/" className='flex items-center space-x-3 text-primary'>
//                     <img src={logo} alt="" width="50" height="50" className='inline-block'/> 
//                     <span className="text-white font-semibold text-lg">LEARN</span>
//                 </a>
                
//                 <ul className='flex space-x-8'>
//                     {navItems.map(({link, path}) => (
//                         <li key={link}>
//                             <a href={path} className='text-gray-300 hover:text-white'>{link}</a>
//                         </li>
//                     ))}
//                 </ul>

//                 <div className='space-x-8 hidden md:flex items-center'>
//                     <a href="/" className='flex items-center text-gray-300 hover:text-white'>
//                         <GrLanguage className='mr-2'/>
//                         <span>Language</span>
//                     </a>
//                     <button className='bg-indigo-600 py-2 px-4 rounded text-white hover:bg-indigo-700'>Sign up</button>
//                 </div>
//             </div>
//         </nav>
//     );
// };

// export default Navbar;


//import tnLogo from '../assets/TN_logo.png'
///import tpgitLogo from '../assets/tpgit_logo.png'
// import tpgitLogo from '../assets/TPGIT_logo_created.png'

// export const Banner = () => {
//   return (
//     <>
//       <div className='flex justify-between'>
//           <div>
//             <img src={tpgitLogo} alt="" />
//           </div>
//           <nav>
//             <div className='flex '>
//               <ul>
//                 <li>Home</li>
//                 <li>About</li>
//                 <li>Registration</li>
//                 <li>Login</li>
//               </ul>
//             </div>
//           </nav>
//       </div>
//     </>


  // <>
   //     <div className='h-auto  flex justify-between bg-primary'>
  //         <div className='text-center lg:text-left mb-2 lg:mb-0'>
    //             <img src={tnLogo} alt="" className='w-20 ml-2' />
    //         </div>
   //         <div className='text-center' >
   //           <h1 className="font-bold lg:text-4xl text-lg text-white mb-1 tracking-widest " >Thanthai Periar Government Institute of Technology - Vellore 632513</h1>
   //           <p className='text-white text-md lg:text-2xl mb-2'>(Affiliated to Anna University - Chennai 600001)</p>
   //           <p className='font-bold text-white tracking-widest text-md'>HOSTEL BILL MANAGEMENT SYSTEM</p>
   //         </div>
   //         <div className='text-center lg:text-right'>
   //             <img src={tpgitLogo} alt="" className='w-24 '/>
   //         </div>
   //     </div>
   // </>
//   )
//