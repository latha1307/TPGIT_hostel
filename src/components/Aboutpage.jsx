
  

  import g1 from "../assets/girls.jpeg";
  import girlshostel from "../assets/images.jpeg";
  import b1 from "../assets/B1.png";
  import b2 from "../assets/b2.jpeg";
  import b3 from "../assets/b3.jpeg";

 
  import {
    FaWater,
    FaNewspaper,
    FaDumbbell,
    FaTv,
    FaBed,
    FaPhone,
    FaRunning
  } from "react-icons/fa";
  import { BsBrowserChrome } from "react-icons/bs";
  
  
  export const Aboutpage = () => {
    return (
      <div className="container text-white mx-auto px-4 py-8 h-fit bg-gradient-to-t from-fuchsia-600 to-purple-800">
        <h1 className="text-3xl font-semibold mb-4 text-center ">
          About TPGIT Hostel
        </h1>
        {/* Boys Hostel Section */}
        <section className="mb-12 lg:m-20 m-10">
          <h2 className="text-2xl mb-4 font-medium">Boys Hostel</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 text-white ">
            <div className="border-none rounded-3xl  p-6  bg-gray-100 bg-gradient-to-t from-indigo-900 from-10% via-sky-800 via-30% to-emerald-600 to-90% ">
              <img src={b1} alt="Boys Hostel" className="mb-4  rounded-3xl" />
              <h3 className="text-lg font-semibold mb-2">B1 Hostel</h3>
              <p className="text-gray-200">
                Welcome to B1 Hostel.The B1 Hostel offers accommodation for
                approximately 210 members within the college hostel premises,
                providing comfortable living spaces for male students.
              </p>
            </div>
            <div className="border-none rounded-3xl p-6  bg-gray-100 bg-gradient-to-t from-indigo-900 from-10% via-sky-800 via-30% to-emerald-600 to-90% ">
              <img src={b2} alt="Boys Hostel" className="mb-4 rounded-md" />
              <h3 className="text-lg font-semibold mb-2">B2 Hostel</h3>
              <p className="text-gray-200">
                With space for approximately 165 members,the B2 Hostel provides
                accomodation within the college hostel,ensuring a convenient
                living environment for male students.
              </p>
            </div>
            <div className="border-none rounded-3xl p-6   bg-gray-100 bg-gradient-to-t from-indigo-900 from-10% via-sky-800 via-30% to-emerald-600 to-90%">
              <img src={b3} alt="Boys Hostel" className="mb-4 rounded-md" />
              <h3 className="text-lg font-semibold mb-2 text-white">B3 Hostel</h3>
              <p className="text-gray-200">
                Hosting around 100-500 members,the B3 Hostel serves as a
                comfortable residence for male students,totallly offers
                accommodation for approximately 120 students in Boy<span>&lsquo;</span>s Hostel
                contributing to a vibrant living community.
              </p>
            </div>
          </div>
        </section>
        {/* Girls Hostel Section */}
        <section className="mb-12 lg:m-20 m-10">
          <h2 className="text-2xl font-medium mb-4">Girls Hostel</h2>
          <div className="grid md:grid-cols-12 gap-12 justify-items-center">
            <div className="col-span-4 justify-items-center lg:p-10 p-4 border-none text-white rounded-3xl bg-gradient-to-t from-indigo-700 via-purple-800 to-cyan-900">
              <img
                src={g1}
                alt="Girls Hostel"
                className="mb-4  rounded-3xl  flex items-center space-x-4 mx-auto"
              />
              <h3 className="text-lg font-semibold mb-2">G1 Hostel</h3>
              <p className="text-gray-200 ">
                Designed to accommodate approximately 152 members, the G1
                Hostel provides comfortable living arrangements for female
                students, fostering a supportive environment within the college
                premises.
              </p>
            </div>
            <div className="col-span-4  border-none lg:p-10 p-4 text-white rounded-3xl bg-gradient-to-t from-indigo-700 via-purple-800 to-cyan-900 ">
              <img
                src={girlshostel}
                alt="Girls Hostel"
                className="mb-4 rounded-3xl flex items-center space-x-4 mx-auto shadow-lg"
              />
              <h3 className="text-lg font-semibold mb-2 mx-auto  ">G2 Hostel</h3>
              <p className="text-gray-200">
                Offering accommodation for approximately 180 members, the
                G2 Hostel serves as a residence for female students within the
                college campus, totally offers accommodation for approximately
                1000 students ensuring a conducive living space for academic and
                personal growth.
              </p>
            </div>
          </div>
        </section>
        {/* Facilities Section */}
        <div className="flex flex-col justify-center ">
          <h2 className=" text-3xl font-semibold text-center mb-8">
            Facilities
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:ml-32 m-8 mt-10 md:grid-cols-3 gap-y-6 text-white">
            <div className="bg-secondary h-60 w-80 p-10 border-none rounded-3xl shadow-xl  hover:translate-y-2 hover:shadow-2xl ease-in-out   duration-300 ">
                <div className="flex text-center ">
                    <FaWater className="w-14 mt-1" />
                    <h1 className="text-xl font-medium " >Water Facility</h1>
                </div>
                <p className="mt-8 text-md ml-4 text-gray-300">24/7 access to clean and hygienic water.</p>
            </div>
            <div className="bg-secondary h-60 w-80 p-10 border-none rounded-3xl shadow-xl hover:translate-y-2 hover:shadow-2xl ease-in-out   duration-300 ">
                <div className="flex text-center ">
                    <FaNewspaper className="w-12 mt-2" />
                    <h1 className="text-xl font-medium " >Newspaper and Magazines</h1>
                </div>
                
                <p className="mt-2 text-md ml-4 text-gray-300">Subscribed newspapers and magazines for students<span>&apos;</span> reading pleasure.</p>
            </div>
            <div className="bg-secondary h-60 w-80 p-10 border-none rounded-3xl shadow-xl hover:translate-y-2 hover:shadow-2xl ease-in-out   duration-300 ">
                <div className="flex text-center ">
                    <FaDumbbell className="w-14 mt-1" />
                    <h1 className="text-xl font-medium" >Mini-Gym</h1>
                </div>
                <p className="mt-8 text-md ml-4 text-gray-300 ">Fitness equipment available for students use.</p>
            </div>
            <div className="bg-secondary h-60 w-80 p-10 border-none rounded-3xl shadow-xl hover:translate-y-2 hover:shadow-2xl ease-in-out   duration-300 ">
                <div className="flex text-center ">
                    <FaTv className="w-14 mt-1" />
                    <h1 className="text-xl font-medium" >TV Facility</h1>
                </div>

                <p className="mt-8 text-md ml-4 text-gray-300">TVs  for entertainment purpose.</p>
            </div>
            <div className="bg-secondary h-60 w-80 p-10 border-none rounded-3xl shadow-xl hover:translate-y-2 hover:shadow-2xl ease-in-out   duration-300 ">
                <div className="flex text-center ">
                    <FaRunning className="w-14 mt-1" />
                    <h1 className="text-xl font-medium" >Sports Kit</h1>
                </div>
                <p className="mt-8 text-md ml-4 text-gray-300">Take advantage of our top-notch sports facilities for various athletic activities</p>
            </div>
            <div className="bg-secondary h-60 w-80 p-4 border-none rounded-3xl shadow-xl hover:translate-y-2 hover:shadow-2xl ease-in-out   duration-300 ">
                <div className="flex text-center ">
                    <FaBed className="w-14 mt-1" />
                    <h1 className="text-xl font-medium" >Separate Cot, Table, and Chair</h1>
                </div>
                <p className="mt-6 text-md ml-4 text-gray-300">Individual furniture provided for each students comfort and study areas with comfortable furniture for focused learning and collaboration.</p>
            </div>
            
          </div>
          <div className="grid grid-cols-1 lg:m-auto ml-8  lg:space-x-24 mt-2 lg:grid-cols-2 gap-y-6 text-white">
            <div className="bg-secondary h-60 w-80 p-10 border-none rounded-3xl shadow-xl hover:translate-y-2 hover:shadow-2xl ease-in-out   duration-300 ">
                <div className="flex text-center ">
                    <FaPhone className="w-14 mt-1" />
                    <h1 className="text-xl font-medium" >STD Booth</h1>
                </div>
                <p className="mt-8 text-md ml-4 text-gray-300">Booths available for student<span>&apos;</span>s private phone calls.</p>
            </div>
            <div className="bg-secondary h-60 w-80 p-10 border-none rounded-3xl shadow-xl hover:translate-y-2 hover:shadow-2xl ease-in-out   duration-300 ">
                <div className="flex text-center ">
                    <BsBrowserChrome className="w-14 mt-1" />
                    <h1 className="text-xl font-medium" >Browsing Center</h1>
                </div>
                <p className="mt-8 text-md ml-4 text-gray-300">Computer terminals with internet access for browsing.</p>
            </div>
            </div>
        </div>
      </div>
    );
  };





