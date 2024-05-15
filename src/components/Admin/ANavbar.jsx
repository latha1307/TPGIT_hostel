
import { useState } from 'react';
import logo from '../../assets/TPGIT_logo_created.png';
import { FaXmark, FaBars } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from "framer-motion";
import PropTypes from 'prop-types';


export function ANavbar()  {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }


    const navItems = [
        {link: "Home", path: "/admin-home"},
        {link: "Mess Bill", path: "#"},
        {link: "Expenditure", path: "#"},
    ];

    return (
        <>
            <nav className=' bg-white md:px-14 p-3 max-w-screen-2x1 fixed m-auto top-0 right-0 left-0'>
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
                        <button className="flex lg:flex bg-red-600  transition-all duration-300 rounded-full text-white hover:bg-red-700 px-6 py-3">
                                Log out
                        </button>
                    </div>
                    
                </div>
            </nav>
            {/* Mobile responsive */}
            <div className={`space-y-6 px-5 pt-5 pb-5   bg-orange-300 font-semibold  ${isMenuOpen ? "block fixed top-24 right-0 left-0": "hidden"}`}>
            {
                navItems.map(({link, path}) => (
                    <FlyoutBottom key={link} href={path} ><span className='hover:text-secondary '>{link}</span></FlyoutBottom>
                ))
            }
                <div className='flex justify-around items-center'> {/* Align items at the center */}
                  
                  <button className="flex lg:flex bg-red-600  transition-all duration-300 rounded-3xl text-white hover:bg-red-700 px-6 py-3 my-2">
                      Log out
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
            className="absolute -bottom-2 -left-2 -right-2 h-1 origin-left scale-x-0 rounded-full bg-yellow-600 border-sm transition-transform duration-300 ease-out"
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




  


  




// Inside the FlyoutBottom component definition
FlyoutBottom.propTypes = {
    children: PropTypes.node.isRequired, // The content of the link
    href: PropTypes.string.isRequired, // The URL path the link should navigate to
 // The content to be displayed in the flyout (optional)
};

