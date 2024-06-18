import { motion } from "framer-motion"
import { fadeIn } from "./variants";

export const Contact = () => {
  return (
    <>
        <div className="space-y-3">
            <div className="container mx-auto px-4 py-8 ">
                <motion.h1 variants={fadeIn("down", 0.2)} initial="hidden" whileInView={"show"} viewport={{once:true, amount: 0.7}} className="lg:text-3xl text-2xl font-semibold  text-center ">CONTACT INFORMATION</motion.h1>
                <motion.div variants={fadeIn("up", 0.4)} initial="hidden" whileInView={"show"} viewport={{once:true, amount: 0.7}} className="flex justify-center">
                <hr className="mt-4 border-t-8 border-[#62408f] w-1/6"/>
                </motion.div>
            </div>
            <motion.div variants={fadeIn("left", 0.4)} initial="hidden" whileInView={"show"} viewport={{once:true, amount: 0.7}}>
                <h3 className="lg:text-3xl text-2xl ml-4 font-semibold">Phone number:</h3>
                <motion.div variants={fadeIn("left", 0.4)} initial="hidden" whileInView={"show"} viewport={{once:true, amount: 0.7}} className="flex">
                <hr className="mt-1 ml-4 border-t-8 border-[#62408f] w-1/12"/>
                </motion.div>
                <div className="lg:text-xl  text-xl ml-8 p-3 space-y-1 ">
                    <p> Girls Hostel - 0422-4304888</p>
                    <p> Boys Hostel - 0422-2572177</p>
                </div>
            
            <h3 className="lg:text-3xl text-2xl ml-4 font-semibold">Email ID:</h3>
            <motion.div variants={fadeIn("left", 0.4)} initial="hidden" whileInView={"show"} viewport={{once:true, amount: 0.7}} className="flex">
            <hr className="mt-1 ml-4 border-t-8 border-[#62408f] w-1/12"/>
            </motion.div>
            <div  className="lg:text-xl  text-xl ml-8 p-3 space-y-1 ">
                <p>warden.gh@tpgit.ac.in</p>
                <p>warden.lh@tpgit.ac.in</p>
            </div>
            </motion.div>
        </div>
    </>
  )
}
