import React from 'react';
import {BiLocationPlus,BiRupee } from "react-icons/bi";
const Jobdetails = ({data}) => {
    console.log(data)
    const {picture,company,name,salary,site,time,location}=data
    return (
        <>
        {/* <div className="hero h-[40vh]" style={{ backgroundImage: `url("https://media.istockphoto.com/id/1356364268/photo/close-up-focus-on-persons-hands-typing-on-the-desktop-computer-keyboard-screens-show-coding.jpg?s=1024x1024&w=is&k=20&c=g9E8s_x8dL5e4oTrOuvgcmX8RhnJ6bo21quMcFVpa6g=")` }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Applied Jobs</h1>
    </div>
  </div>
</div> */}
        {/* applied job section */}
        <div>
        
          <div className='md:px-20 items-center border shadow-lg my-8 p-4 gap-16 flex' >
           <img src={picture} className='w-36 h-32' alt="" />
           <div className='flex items-center gap-60'>  
           <div>
           <h1 className='font-bold text-2xl my-3'>{name}</h1>
           <h2 className='font-medium py-4 text-xl'>{company}</h2>
           <div className='flex items-center gap-8 my-5'>
            <button className='border-violet-400 border px-2 py-3 rounded-lg'> {site}</button>
            <button  className='border-violet-400 border px-2 py-3 rounded-lg'> {time}</button>
          </div>
          <div className='flex gap-6 items-center font-medium  my-5'>
            <div className='flex items-center'>
                <span className='text-violet-400 text-2xl'> <BiLocationPlus/></span>
                {location}
            </div>
            <div className='flex items-center'>
                <span className='text-violet-400 text-2xl'> <BiRupee/></span>
                Salary: {salary}
            </div>
          </div>
          </div>
          <button className='bg-violet-500 font-bold h-12  hover:bg-violet-700 text-white rounded-lg  px-3 py-2 '>View Details</button></div>
          </div>  
        </div>
        </>
    );
};

export default Jobdetails;