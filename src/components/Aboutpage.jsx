
  

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
            <div className="col-span-4 justify-items-center p-10 border-none text-white rounded-3xl bg-gradient-to-t from-indigo-700 via-purple-800 to-cyan-900">
              <img
                src={g1}
                alt="Girls Hostel"
                className="mb-4  rounded-3xl  flex items-center space-x-4 mx-auto"
              />
              <h3 className="text-lg font-semibold mb-2">G1 Hostel</h3>
              <p className="text-gray-200">
                Designed to accommodate approximately 152 members, the G1
                Hostel provides comfortable living arrangements for female
                students, fostering a supportive environment within the college
                premises.
              </p>
            </div>
            <div className="col-span-4 p-10 border-none text-white rounded-3xl bg-gradient-to-t from-indigo-700 via-purple-800 to-cyan-900 ">
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

  <div className="flex items-center bg-indigo-100 w-screen min-h-screen" style="font-family: 'Muli', sans-serif;">
  <div className="container ml-auto mr-auto flex flex-wrap items-start">
    <div className="w-full pl-5 lg:pl-2 mb-4 mt-4">
      <h1 className="text-3xl lg:text-4xl text-gray-700 font-extrabold">
        Best Sellers
      </h1>
    </div>
    <div className="w-full md:w-1/2 lg:w-1/4 pl-5 pr-5 mb-5 lg:pl-2 lg:pr-2">
      <div className="bg-white rounded-lg m-h-64 p-2 transform hover:translate-y-2 hover:shadow-xl transition duration-300">
        <figure className="mb-2">
          <img src="https://srv-cdn.onedio.com/store/bf2cbc886120f284ef46fd92a48f5fb58c62e6a50fbdf8fa796d057dd0ddc242.png" alt="" className="h-64 ml-auto mr-auto" />
        </figure>
        <div className="rounded-lg p-4 bg-purple-700 flex flex-col">
          <div>
            <h5 className="text-white text-2xl font-bold leading-none">
              iPhone 11 Pro Max
            </h5>
            <span className="text-xs text-gray-400 leading-none">And then there was Pro.</span>
          </div>
          <div className="flex items-center">
            <div className="text-lg text-white font-light">
              $1099,00
            </div>
            <button href="javascript:;" className="rounded-full bg-purple-900 text-white hover:bg-white hover:text-purple-900 hover:shadow-xl focus:outline-none w-10 h-10 flex ml-auto transition duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="stroke-current m-auto">
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div className="w-full md:w-1/2 lg:w-1/4 pl-5 pr-5 mb-5 lg:pl-2 lg:pr-2">
      <div className="bg-white rounded-lg m-h-64 p-2 transform hover:translate-y-2 hover:shadow-xl transition duration-300">
        <figure className="mb-2">
          <img src="https://srv-cdn.onedio.com/store/7fd6410ffac110960cb4a60b09878db19ebbdf3c8b6e842918d16f3c61784763.png" alt="" className="h-64 ml-auto mr-auto" />
        </figure>
        <div className="rounded-lg p-4 bg-purple-600 flex flex-col">
          <div>
            <h5 className="text-white text-2xl font-bold leading-none">
              iPhone 11
            </h5>
            <span className="text-xs text-gray-400 leading-none">Just the right amount of everything.</span>
          </div>
          <div className="flex items-center">
            <div className="text-lg text-white font-light">
              $699,00
            </div>
            <button href="javascript:;" className="rounded-full bg-purple-800 text-white hover:bg-white hover:text-purple-900 hover:shadow-xl focus:outline-none w-10 h-10 flex ml-auto transition duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="stroke-current m-auto">
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div className="w-full md:w-1/2 lg:w-1/4 pl-5 pr-5 mb-5 lg:pl-2 lg:pr-2">
      <div className="bg-white rounded-lg m-h-64 p-2 ">
        <figure className="mb-2">
          <img src="https://srv-cdn.onedio.com/store/988bccbdb9ca395f581f98faa9ce3a55123f12bfcef608c838532b813646e557.png" alt="" className="h-64 ml-auto mr-auto" />
        </figure>
        <div className="rounded-lg p-4 bg-gray-700 flex flex-col">
          <div>
            <h5 className="text-white text-2xl font-bold leading-none">
              iPhone XR
            </h5>
            <span className="text-xs text-gray-400 leading-none">Brilliant. In every way.</span>
          </div>
          <div className="flex items-center">
            <div className="text-lg text-white font-light">
              $599,00
            </div>
            <button href="javascript:;" className="rounded-full bg-gray-900 text-white hover:bg-white hover:text-purple-900 hover:shadow-xl focus:outline-none w-10 h-10 flex ml-auto transition duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="stroke-current m-auto">
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div className="w-full md:w-1/2 lg:w-1/4 pl-5 pr-5 mb-5 lg:pl-2 lg:pr-2">
      <div className="bg-white rounded-lg m-h-64 p-2 transform hover:translate-y-2 hover:shadow-xl transition duration-300">
        <figure className="mb-2">
          <img src="https://srv-cdn.onedio.com/store/cfdd8ebc1b39e215c44c7c9a02bfaa49287f79b806ec5743124d0aea25c2b0c3.png" alt="" className="h-64 ml-auto mr-auto" />
        </figure>
        <div className="rounded-lg p-4 bg-gray-600 flex flex-col">
          <div>
            <h5 className="text-white text-2xl font-bold leading-none">
              iPhone SE
            </h5>
            <span className="text-xs text-gray-400 leading-none">Lots to love.
              Less to spend.</span>
          </div>
          <div className="flex items-center">
            <div className="text-lg text-white font-light">
              $399,00
            </div>
            <button href="javascript:;" className="rounded-full bg-gray-800 text-white hover:bg-white hover:text-purple-900 hover:shadow-xl focus:outline-none w-10 h-10 flex ml-auto transition duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="stroke-current m-auto">
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

{/* <FacilityCard
              title="Water Facility"
              description="24/7 access to clean and hygienic water."
              icon="water"
            />
            <FacilityCard
              title="Newspaper and Magazines"
              description="Subscribed newspapers and magazines for students' reading pleasure."
              icon="newspaper"
            />
            <FacilityCard
              title="Mini-Gym"
              description="Fitness equipment available for students use."
              icon="gym"
            />
            <FacilityCard
              title=" TV Facility"
              description="TVs  for entertainment purpose."
              icon="tv"
            />
            <FacilityCard
              title="Sports Kit"
              description="Take advantage of our top-notch sports facilities for various athletic activities"
              icon="tv"
            />
            <FacilityCard
              title="Separate Cot, Table, and Chair"
              description="Individual furniture provided for each students comfort and study areas with comfortable furniture for focused learning and collaboration."
              icon="bed"
            />
            <FacilityCard
              title="STD Booth"
              description="Booths available for student's private phone calls."
              icon="phone"
            />
            <FacilityCard
              title="Browsing Center"
              description="Computer terminals with internet access for browsing."
              icon="computer"
            /> */}



