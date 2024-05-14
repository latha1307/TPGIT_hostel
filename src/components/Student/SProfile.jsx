import StudProfile from '../../assets/studentProfileImage.png' 

export const SProfile = () => {
  return (
    <>
        <div>
            {/* <div className='flex flex-col justify-center items-center'>
                <img src={StudProfile} alt="" className='w-2/3' />
                <h1>REG NO: 513121106704</h1>
                <button className='flex lg:flex mt-4 bg-[#499D34]  transition-all duration-300 rounded-lg text-white hover:bg-green-700 px-6 py-3 my-2'>Update Profile</button>
                <button className='flex lg:flex bg-[#EF821D]  transition-all duration-300 rounded-lg text-white hover:bg-orange-600 px-6 py-3 my-2'>Change Password</button>
            </div> */}
            <div className='flex flex-col justify-center items-center'>
                <img src={StudProfile} alt="" className=' max-w-sm  space-y-8 md:max-w-md w-full lg:w-2/3  lg:mt-0' /> {/* Adjust image width */}
                <h1 className='text-sm'>REG NO: 513121106703</h1> {/* Center align text */}
                <button className='mt-4 bg-[#499D34] text-sm transition-all duration-300 rounded-3xl text-white hover:bg-green-700 px-6 py-3 my-2 md:max-w-sm lg:max-w-md'>Update Profile</button> {/* Adjust button width */}
                <button className='bg-[#EF821D] text-sm  transition-all duration-300 rounded-3xl text-white hover:bg-orange-600 px-3 py-3 my-2  md:max-w-sm  '>Change Password</button> {/* Adjust button width */}
            </div>
        </div>
    </>
  )
}
