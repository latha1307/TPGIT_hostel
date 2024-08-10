import Aprofle from '../../assets/User_Icon.png'
import studreq from '../../assets/student Request.png'
import leaveReq from '../../assets/leave.png'
import vacateReq from '../../assets/vacating.png'
import building from '../../assets/hostels.png'
import grocery from '../../assets/grocery-cart.png'

export const AAccesses = () => {
  return (
    <>
      <div className='bg-gray-600' >
      <div className='grid lg:grid-cols-3 grid-cols-1 gap-x-24 gap-y-8 lg:space-y-0 space-y-4 lg:p-10 lg:ml-10 pb-10'>
        <div className='lg:h-60 h-48 w-56 m-auto mt-10 lg:w-80 p-4 lg:m-0 bg-orange-400 flex flex-col hover:cursor-pointer hover:translate-y-2 justify-center items-center text-white border-none rounded-3xl shadow-xl hover:shadow-2xl'>
          <img src={Aprofle} alt="" className='h-5/6'/>
          <h1 className='lg:text-xl text-md mt-2'>ADMIN DETAILS</h1>
        </div>
        <div className='lg:h-60 h-48 w-56 m-auto mt-10 lg:w-80 p-4 bg-[#388D7E] flex flex-col justify-center hover:cursor-pointer hover:translate-y-2 items-center  text-white border-none rounded-3xl shadow-xl hover:shadow-2xl'>
          <img src={studreq} alt="" className='h-4/6 pb-2'/>
          <h1 className='lg:text-xl text-md mt-4'>STUDENT REQUEST</h1>
        </div>
        <div className='lg:h-60 h-48 w-56 m-auto mt-10 lg:w-80 p-4 bg-[#9FC700] flex flex-col justify-center hover:cursor-pointer hover:translate-y-2 items-center text-white border-none rounded-3xl shadow-xl hover:shadow-2xl'>
          <img src={leaveReq} alt="" className='h-4/6 pb-2'/>
          <h1 className='lg:text-xl text-md mt-4'>LEAVE REQUESTS</h1>
        </div>
        <div className='lg:h-60 h-48 w-56 m-auto mt-10 lg:w-80 lg:-ml-1 p-4 bg-[#39D420] flex flex-col hover:cursor-pointer hover:translate-y-2 justify-center items-center text-white border-none rounded-3xl shadow-xl hover:shadow-2xl'>
          <img src={vacateReq} alt="" className='h-4/6 pb-2'/>
          <h1 className='lg:text-xl text-md mt-4'>VACATE REQUESTS</h1>
        </div>
        <div className='lg:h-60 h-48 w-56 m-auto mt-10 lg:w-80 p-4 bg-[#8D90DB] flex flex-col justify-center hover:cursor-pointer hover:translate-y-2 items-center text-white border-none rounded-3xl shadow-xl hover:shadow-2xl'>
          <img src={building} alt="" className='h-5/6'/>
          <h1 className='lg:text-xl text-md '>BLOCKS</h1>
        </div>
        <div className='lg:h-60 h-48 w-56 m-auto mt-10 lg:w-80 p-4 bg-[#008FF7] flex flex-col justify-center hover:cursor-pointer hover:translate-y-2 items-center text-white border-none rounded-3xl shadow-xl hover:shadow-2xl'>
          <img src={grocery} alt="" className='h-4/6 pb-2'/>
          <h1 className='lg:text-xl text-md mt-4'>GROCERY BILLS</h1>
        </div>
      </div>
    </div>
    </>
  )
}
