import { motion } from "framer-motion"
import { fadeIn } from "./variants";

export const Welcome = () => {
  return (
    <>
        <div> 
            <motion.div variants={fadeIn("right", 0.2)} initial="hidden" whileInView={"show"} viewport={{once:true, amount: 0.7}} className="bgWelcomebg text-white  text-center h-[80vh] lg:w-1/2 lg:space-y-10 space-x-6 flex flex-col border-none rounded-3xl m-auto justify-items-center items-center">
              <h1 className="font-semibold lg:text-3xl text-xl p-6 md:p-6 mt-6 sm:mt-8 border-b">HOSTEL MANAGEMENT</h1>
              <hr className="my-2"/>
              <p className="m-8 md:m-8 text-md text-clip lg:text-xl lg:mb-28 mb-10 p-4 tracking-wider">The Hostel is managed by the Hostel Residents Council consisting of Patron, Chief Warden, Wardens, Manager, Deputy Wardens, Resident Tutors and Student Representatives.Ragging in all its forms is banned as it is treated as a cognizable offence. Any resident found guilty of ragging will be dismissed from hostel and college. Further, legal action will be taken against the defaulters.</p>
            </motion.div>
        </div>
      
    </>
  )
}






// import Boys from '../assets/Boys-Hostel.jpg';



// export const Welcome = () => {


//   return (
//     <>
//       <div className='flex flex-col item-center space-y-10 '>
//         <div className="flex flex-col items-center mt-10 ml-20 mr-20 space-y-10">
//           <h1 className="font-bold text-primary text-center mt-10 tracking-wider text-2xl border-b" >Welcome to TPGIT Hostels</h1>
//           <p className="mt-5 lg:mr-48 lg:ml-48 text-md font-sans">  <span className="font-bold font-sans text-secondary">Home Away From Home, </span>there are separate hostels for both boys & girls. The hostel rooms capacitating 3 beds.The Hostel is managed by the Hostel Residents Council consisting of Patron, Chief Warden, Wardens, Manager, Deputy Wardens, Resident Tutors and Student Representatives.</p>
        
      
//           <img src={Boys} alt="Hostel image" className='lg:size-6/12 size-full'/>
        
//         </div>
//       </div>
//     </>
//   );
// };
