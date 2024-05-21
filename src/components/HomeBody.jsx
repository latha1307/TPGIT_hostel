import hostel from '../assets/b2.jpeg'
import { PiArrowCircleRight } from "react-icons/pi";

export const HomeBody = () => {
  return (
    <>
        <div >
            <div className='lg:p-10 p-2'>
            <div className="h-auto w-auto flex flex-col items-center bg-primary rounded-md text-white ">
                <div className='m-4 lg:m-10'>
                    <h1 className="text-3xl text-center " >Accommodation & Facilities</h1>
                    <hr className="w-2/6 m-auto mt-3 mb-5 lg:mt-6 h-1 border-none bg-white"/>
                </div>
                <div className="lg:w-1/2 w-auto text-wrap border-none rounded-sm bg-white text-black m-6 p-4 lg:m-8 lg:p-10 -mt-4 items-center space-y-4">
                    <p>At TPGIT (Thanthai Periyar Government Institute of  Technology) provide  quality hostel accommodations designed to meet the  needs and budgets of our students.. Our goal is to ensure a comfortable stay while fostering an optimal learning environment for all our students.The students staying at TPGIT hostels are provided with healthy and sumptuous food options. </p>
                    <p>The quality of life is one of the most important factors considered by the students deciding to stay in the College hostels. By quality, it is not just the rooms but also the overall environment of the campus. Ours is one of the greenest Campuses’ in the country with all the facilities.The stay at our campus provides a wealth of experience by developing qualities such as humanity and social responsibility. Our students comprise a cosmopolitan mix from all parts of India.</p>
                    <p>Life on campus helps the students not only to study but also to socialize with the peers. Friendships formed on the campus last a lifetime. TPGIT provides a comfortable and safe housing to all its students. The students housed in the campus are encouraged to use the  playground, and all indoor gaming facilities.</p>
                </div>
            </div>
            </div>
            <div>
            <div className='p-10 hidden lg:block ' >
                <div className='flex h-1/2 w-full bg-gray-200 rounded-md space-x-96 p-10'>
                <ul className='space-y-8'>
                <h1 className='text-left text-3xl'>Vision</h1>
                    <div className='flex space-x-3'><PiArrowCircleRight className='mt-1' /><li> To make the students feel at home</li></div>
                    <div className='flex space-x-3'><PiArrowCircleRight className='mt-1' /><li>To provide a friendly, comfortable, well furnished and secure ambiance</li></div>
                    <div className='flex space-x-3'><PiArrowCircleRight className='mt-1' /><li>To provide a healthy competitive and diverse cultural learning environment</li></div>
                    <div className='flex space-x-3'><PiArrowCircleRight className='mt-1' /><li>To inculcate discipline and to make students more systematic and strategic</li></div>
                </ul>
                <img src={hostel} alt="" className='w-1/4 border-none rounded-md' />
                </div>
            </div>
            <div>
                <div className='flex lg:hidden flex-col h-1/2 w-full bg-gray-200 pb-3 rounded-md p-2'>
                    <img src={hostel} alt="" className='w-fit border-none rounded-md' />
                    <ul className='space-y-4 mt-2 text-wrap'>
                        <h1 className='text-left text-3xl '>Vision</h1>
                        <div className='flex space-x-3'><PiArrowCircleRight className='ml-2 m-1 ' /><li> To make the students feel at home</li></div>
                        <div className='flex space-x-3'><PiArrowCircleRight className='w-10 m-1' /><li>To provide a friendly, comfortable, well furnished and secure ambiance</li></div>
                        <div className='flex space-x-3'><PiArrowCircleRight className='w-10 m-1' /><li>To provide a healthy competitive and diverse cultural learning environment</li></div>
                        <div className='flex space-x-3'><PiArrowCircleRight className='w-10 m-1' /><li>To inculcate discipline and to make students more systematic and strategic</li></div>
                    </ul>
                </div>
            </div>
            </div>
        </div>
    </>
  )
}
