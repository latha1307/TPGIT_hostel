
  

  import g1 from "../assets/girls.jpeg";
  import girlshostel from "../assets/images.jpeg";
  import b1 from "../assets/B1.png";
  import b2 from "../assets/b2.jpeg";
  import b3 from "../assets/b3.jpeg";

import { motion } from "framer-motion"
import { fadeIn } from "./variants";

 
  import {
    FaWater,
    FaNewspaper,
    FaDumbbell,
    FaTv,
    FaBed,
    FaRunning,
    FaPhone,
    FaFirstAid,
  } from "react-icons/fa";
  
  import { BsBrowserChrome } from "react-icons/bs";
  
  export const Aboutpage = () => {
    return (
      <div className="container mx-auto mt-10  text-white px-4 py-8 ">
        <motion.h1 variants={fadeIn("down", 0.2)} initial="hidden" whileInView={"show"} viewport={{once:true, amount: 0.7}} className="text-3xl font-semibold mb-4 text-center ">
          About TPGIT Hostel
          <motion.div variants={fadeIn("up", 0.4)} initial="hidden" whileInView={"show"} viewport={{once:true, amount: 0.7}} className="flex justify-center">
              <hr className="mt-4 border-t-8 border-[#62408f] w-1/6"/>
            </motion.div>
        </motion.h1>
           {/* Boys Hostel Section */}
         <section className="mb-12 lg:m-20 m-10">
           <motion.h2  variants={fadeIn("left", 0.2)} initial="hidden" whileInView={"show"} viewport={{once:true, amount: 0.7}} className="text-2xl mb-4 font-medium">Boys Hostel
           <motion.div variants={fadeIn("right", 0.4)} initial="hidden" whileInView={"show"} viewport={{once:true, amount: 0.7}} className="flex ">
              <hr className="mt-4 border-t-8 border-[#62408f] w-1/12"/>
            </motion.div>
            </motion.h2>
           <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 text-white ">
             <motion.div variants={fadeIn("right", 0.6)} initial="hidden" whileInView={"show"} viewport={{once:true, amount: 0.7}} className="border- rounded-3xl  p-6  bg-gray-100 bg-gradient-to-b from-[#724a9e] via-[#724a9e] to-[#724a9e] ">
               <img src={b1} alt="Boys Hostel" className="mb-4  rounded-3xl" />
               <h3 className="text-lg font-semibold mb-2">B1 Hostel</h3>
              <p className="text-gray-200">
               The boys<span>&apos;</span> hostels at TPGIT are designed to provide a safe, welcoming, and conducive environment for students. Spread across three distinct buildings, these hostels cater to the accommodation needs of over 400 students. Each hostel is equipped with modern amenities, ensuring that students have access to everything they need for a productive and enjoyable college experience. From spacious rooms and common areas to high-speed internet and recreational facilities.
               </p>
             </motion.div>
             <motion.div variants={fadeIn("right", 0.4)} initial="hidden" whileInView="show" viewport={{once:true, amount: 0.7}} className="border-none rounded-3xl p-6  bg-gray-100 bg-gradient-to-b from-[#724a9e] via-[#724a9e] to-[#724a9e] ">
               <img src={b2} alt="Boys Hostel" className="mb-4 rounded-3xl" />
               <h3 className="text-lg font-semibold mb-2">B2 Hostel</h3>
               <p className="text-gray-200">
                 The B1 Hostel, the largest of the three, offers accommodation for approximately 210 students. It is known for its well-structured living spaces and serene environment that fosters a sense of community among the residents. The B2 Hostel, with a capacity of around 165 students, with an emphasis on creating a balanced lifestyle that combines study and leisure. Finally, the B3 Hostel, accommodating between 100 to 120 students, offers a more intimate setting.
               </p>
             </motion.div>
             <motion.div variants={fadeIn("right", 0.2)} initial="hidden" whileInView={"show"} viewport={{once:true, amount: 0.7}} className="border-none rounded-3xl p-6   bg-gray-100 bg-gradient-to-b from-[#724a9e] via-[#724a9e] to-[#724a9e]">
               <img src={b3} alt="Boys Hostel" className="mb-4 rounded-md" />
               <h3 className="text-lg font-semibold mb-2 text-white">B3 Hostel</h3>
               <p className="text-gray-200">
               Safety and security are top priorities in all the boys<span>&apos;</span> hostels. Each hostel is monitored round the clock by trained security personnel, and access is restricted to residents and authorized personnel only. Additionally, the hostels have strict policies and guidelines to ensure a respectful and harmonious living environment. Regular maintenance and cleanliness are upheld to provide a hygienic space conducive to both studying and relaxation.
               </p>
             </motion.div>
           </div>
         </section>
         {/* Girls Hostel Section */}
         <section className="mb-12 lg:m-20 m-10">
           <motion.h2 variants={fadeIn("right", 0.4)} initial="hidden" whileInView={"show"} viewport={{once:true, amount: 0.7}} className="text-2xl font-medium mb-4">Girls Hostel
           <motion.div variants={fadeIn("left", 0.4)} initial="hidden" whileInView={"show"} viewport={{once:true, amount: 0.7}} className="flex ">
              <hr className="mt-4 border-t-8 border-[#62408f] w-1/12"/>
            </motion.div>
            </motion.h2>
           <div className="grid md:grid-cols-12 gap-12 justify-items-center">
             <motion.div variants={fadeIn("left", 0.2)} initial="hidden" whileInView={"show"} viewport={{once:true, amount: 0.7}} className="col-span-4 justify-items-center lg:p-6 p-4 border-none text-white rounded-3xl bg-gradient-to-t from-[#724a9e] via-[#724a9e] to-[#724a9e]">
               <img
                src={g1}
                alt="Girls Hostel"
                className="mb-4  rounded-3xl  flex items-center space-x-4 mx-auto"
              />
              <h3 className="text-lg font-semibold mb-2">G1 Hostel</h3>
              <p className="text-gray-200 ">
              The girls<span>&apos;</span> hostels at TPGIT are meticulously designed to provide a nurturing and secure environment for students, facilitating their overall development and well-being. With modern amenities such as high-speed internet, spacious common areas, and recreational facilities, these hostels ensure that students have access to everything they need for a productive and enriching college experience. The hostels are not just places to stay but vibrant communities where students can thrive academically and personally, fostering friendships and creating lasting memories.
              </p>
            </motion.div>
            <motion.div variants={fadeIn("left", 0.4)} initial="hidden" whileInView={"show"} viewport={{once:true, amount: 0.7}} className="col-span-4  border-none lg:p-6 p-4 text-white rounded-3xl bg-gradient-to-t from-[#724a9e] via-[#724a9e] to-[#724a9e] ">
              <img
                src={girlshostel}
                alt="Girls Hostel"
                className="mb-4 rounded-3xl flex items-center space-x-4 mx-auto shadow-lg"
              />
              <h3 className="text-lg font-semibold mb-2 mx-auto  ">G2 Hostel</h3>
              <p className="text-gray-200">
              Safety and security are paramount in the girls<span>&apos;</span> hostels, with 24/7 monitoring by trained security personnel and restricted access to ensure a safe living environment. The hostels adhere to strict policies and guidelines to maintain a respectful and harmonious atmosphere. Regular maintenance and cleanliness are prioritized to provide a hygienic and comfortable space for students to study, relax, and engage in various activities. The girls<span>&apos;</span> hostels at TPGIT are dedicated to supporting students<span>&apos;</span> academic pursuits and personal growth, creating a holistic and supportive residential experience.
              </p>
            </motion.div>
          </div>
        </section>
        {/* /* Facilities Section */}
        <div className="flex flex-col justify-center ">
          <motion.h2 variants={fadeIn("up", 0.4)} initial="hidden" whileInView={"show"} viewport={{once:true, amount: 0.7}} className=" text-3xl font-semibold text-center  mb-8">
            Facilities
            <motion.div variants={fadeIn("down", 0.4)} initial="hidden" whileInView={"show"} viewport={{once:true, amount: 0.7}} className="flex justify-center">
              <hr className="mt-4 border-t-8 border-[#62408f] w-1/6"/>
            </motion.div>
          </motion.h2>
          <div  className="grid grid-cols-1 sm:grid-cols-2 lg:ml-32 m-8 mt-10 md:grid-cols-3 gap-y-6 text-white">
            <motion.div variants={fadeIn("right", 0.2)} initial="hidden" whileInView={"show"} viewport={{once:true, amount: 0.7}} className="bg-secondary h-60 w-80 p-10 border-none rounded-3xl shadow-xl   hover:shadow-2xl">
                <div className="flex text-center ">
                    <FaWater className="w-14 mt-1" />
                    <h1 className="text-xl font-medium " >Water Facility</h1>
                </div>
                <p className="mt-8 text-md ml-4 text-gray-300">24/7 access to clean and hygienic water.</p>
            </motion.div>
            <motion.div variants={fadeIn("right", 0.4)} initial="hidden" whileInView={"show"} viewport={{once:true, amount: 0.7}} className="bg-secondary h-60 w-80  p-10 border-none rounded-3xl shadow-xl  hover:shadow-2xl">
                <div className="flex text-center ">
                    <FaNewspaper className="w-12 mt-2" />
                    <h1 className="text-xl font-medium " >Newspaper and Magazines</h1>
                </div>
                
                <p className="mt-2 text-md ml-4 text-gray-300">Subscribed newspapers and magazines for students<span>&apos;</span> reading pleasure.</p>
            </motion.div>
            <motion.div variants={fadeIn("right", 0.2)} initial="hidden" whileInView={"show"} viewport={{once:true, amount: 0.7}} className="bg-secondary h-60 w-80  p-10 border-none rounded-3xl shadow-xl  hover:shadow-2xl  ">
                <div className="flex text-center ">
                    <FaDumbbell className="w-14 mt-1" />
                    <h1 className="text-xl font-medium" >Mini-Gym</h1>
                </div>
                <p className="mt-8 text-md ml-4 text-gray-300 ">Fitness equipment available for students use.</p>
            </motion.div>
            <motion.div variants={fadeIn("left", 0.6)} initial="hidden" whileInView={"show"} viewport={{once:true, amount: 0.7}} className="bg-secondary h-60 w-80  p-10 border-none rounded-3xl shadow-xl  hover:shadow-2xl  ">
                <div className="flex text-center ">
                    <FaTv className="w-14 mt-1" />
                    <h1 className="text-xl font-medium" >TV Facility</h1>
                </div>

                <p className="mt-8 text-md ml-4 text-gray-300">TVs  for entertainment purpose.</p>
            </motion.div>
            <motion.div variants={fadeIn("left", 0.4)} initial="hidden" whileInView={"show"} viewport={{once:true, amount: 0.7}} className="bg-secondary h-60 w-80   p-10 border-none rounded-3xl shadow-xl  hover:shadow-2xl  ">
                <div className="flex text-center ">
                    <FaRunning className="w-14 mt-1" />
                    <h1 className="text-xl font-medium" >Sports Kit</h1>
                </div>
                <p className="mt-8 text-md ml-4 text-gray-300">Take advantage of our top-notch sports facilities for various athletic activities</p>
            </motion.div>
            <motion.div variants={fadeIn("left", 0.2)} initial="hidden" whileInView={"show"} viewport={{once:true, amount: 0.7}} className="bg-secondary h-60 w-80  p-4 border-none rounded-3xl shadow-xl  hover:shadow-2xl  ">
                <div className="flex text-center ">
                    <FaBed className="w-14 mt-1" />
                    <h1 className="text-xl font-medium" >Separate Cot, Table, and Chair</h1>
                </div>
                <p className="mt-6 text-md ml-4 text-gray-300">Individual furniture provided for each students comfort and study areas with comfortable furniture for focused learning and collaboration.</p>
            </motion.div>
            <motion.div variants={fadeIn("right", 0.6)} initial="hidden" whileInView={"show"} viewport={{once:true, amount: 0.7}} className="bg-secondary h-60 w-80  p-10 border-none rounded-3xl shadow-xl hover:shadow-2xl ">
                <div className="flex text-center ">
                    <FaPhone className="w-14 mt-1" />
                    <h1 className="text-xl font-medium" >STD Booth</h1>
                </div>
                <p className="mt-8 text-md ml-4 text-gray-300">Booths available for student<span>&apos;</span>s private phone calls.</p>
            </motion.div>
            <motion.div variants={fadeIn("right", 0.4)} initial="hidden" whileInView={"show"} viewport={{once:true, amount: 0.7}} className="bg-secondary h-60 w-80  p-10 border-none rounded-3xl shadow-xl hover:shadow-2xl ">
                <div className="flex text-center ">
                    <BsBrowserChrome className="w-14 mt-1" />
                    <h1 className="text-xl font-medium" >Browsing Center</h1>
                </div>
                <p className="mt-8 text-md ml-4 text-gray-300">Computer terminals with internet access for browsing.</p>
            </motion.div>
            <motion.div variants={fadeIn("right", 0.2)} initial="hidden" whileInView={"show"} viewport={{once:true, amount: 0.7}} className="bg-secondary h-60 w-80  p-10 border-none rounded-3xl  shadow-xl hover:shadow-2xl ">
                <div className="flex text-center ">
                    <FaFirstAid className="w-14 mt-1" />
                    <h1 className="text-xl font-medium" >First Aid</h1>
                </div>
                <p className="mt-8 text-md ml-4 text-gray-300">First-Aid is available to treat injuries.</p>
            </motion.div>
            
          </div>
          
        </div>
      </div>
    ); 
  };





