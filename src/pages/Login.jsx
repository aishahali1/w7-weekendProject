import React from 'react'
import { Link } from 'react-router'
import { MdAlternateEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";


function Login() {
  return (
    <>
   <div className="flex flex-col lg:flex-row min-h-screen">
  <div
    className="w-full lg:w-1/2 flex items-center rounded-lg justify-center bg-center bg-cover bg-no-repeat lg:bg-cover lg:bg-no-repeat lg:bg-left"
    style={{
      backgroundImage:
        'url("https://images.pexels.com/photos/6214968/pexels-photo-6214968.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")',
    }}
  >
    <div className="bg-[#384D48]/85 p-6 rounded-lg flex flex-col items-center justify-center w-full h-full">
      <img src="logo.png" alt="Logo" className="w-60 h-auto" />
      <p className='md:hidden text-xl text-[#fefcfd]'>Your space to chat, chill, and catch up.</p>
      <p className='md:hidden p-1 text-lg text-[#ccc9b9] font-extrabold'>Join now and start connecting!</p>
      <div className='hidden md:flex md:flex-col'>
      <p className='text-xl text-[#fefcfd]'>Where conversations begin — your space to chat, chill, and catch up.</p>
      <p className='text-lg text-[#ccc9b9] font-extrabold'>Join now and start connecting!</p>
      </div>
    </div>
  </div>
  <div className="w-full lg:w-1/2 flex items-center justify-center px-4 py-10">
    <form className="bg-stone-50 shadow-2xl rounded-2xl w-full max-w-md p-8 space-y-5">
      <h2 className="text-2xl font-bold text-[#384D48]">Login</h2>
      <div className='flex flex-row'>
         <div className='bg-[#384D48] w-12 h-12.5 flex justify-center items-center rounded-l-md'>
      <MdAlternateEmail className='text-white text-lg' /></div>
        <input
        type="email"
        placeholder="Enter email"
        className="border border-[#ACAD94] w-full p-3 rounded-r-md focus:outline-none focus:ring focus:ring-[#384D48]"
        required
      />
      </div>
      <div className='flex flex-row'>
       <div className='bg-[#384D48] w-12 h-12.5 flex justify-center items-center rounded-l-md'>
      <RiLockPasswordFill className='text-white text-lg' /></div>
        <input
        type="password"
        placeholder="Enter password"
        className="border border-[#ACAD94] w-full p-3 rounded-r-md focus:outline-none focus:ring focus:ring-[#384D48]"
        required
      />
      </div>
   <Link to='/chat'>   <button
        type="submit"
        className="bg-[#384D48] hover:bg-[#2F3F3B] text-white font-semibold uppercase w-full py-3 rounded-lg transition duration-200" 
      >
        Login
      </button></Link>
      <span>Create a new account? <Link to="/register" className='underline text-[#266154]'>Register here</Link></span>
    </form>
  </div>
</div>
    </>
  )
}

export default Login