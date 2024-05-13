import '../App.css'

export const ALogin = () => {
  return (
    <>
        <div >
            <div className='bg-slate-800 border border-slate-600 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-lg bg-opacity-30 relative transition-all duration-200'>
                <h1 className='text-4xl text-white font-bold font-sans text-center mb-6'>Admin Login</h1>
                <form action="">
                <div className="relative my-10">
                    <input type="text" className='block w-72 py-2.3 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer'  placeholder='' />
                    <label htmlFor="" className='absolute font-sans text-sm text-white duration-300 transform -translate-y-6 scale-75 top-0 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>Admin ID</label>
                </div>
                <div className="relative my-10">
                    <input type="password" className='block w-72 py-2.3 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer' placeholder='' />
                    <label htmlFor="" className='absolute font-sans text-sm text-white duration-300 transform -translate-y-6 scale-75 top-0 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>Password</label>                    
                </div>
                <div className='flex justify-between items-center'>
                    <div className='flex gap-2 items-center'>
                        <input type="checkbox" name='' id='' />
                        <label htmlFor="Remember Me">Remember Me</label>
                    </div>
                    <span className='text-blue-500 font-sans'>Forget Password?</span>
                </div>
                <button className='w-full mb-4 font-sans text-[18px] mt-6 rounded-full bg-white text-orange-900 hover:bg-orange-600 hover:text-white py-2 transition-colors duration-300' type='submit'>Login</button>
                
                </form>
            </div>
        </div>
    </>
  )
}
