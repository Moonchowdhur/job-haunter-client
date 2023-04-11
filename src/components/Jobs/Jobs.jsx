import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Jobdetails from '../Jobdetails/Jobdetails';

const Jobs = () => {
    const datas=useLoaderData()

    // const [ ]=useState([])
    // const existingproduct=datas.filter(data=>data.)
 
    return (
       <div>
       <div className="hero h-[40vh]" style={{ backgroundImage: `url("https://media.istockphoto.com/id/1356364268/photo/close-up-focus-on-persons-hands-typing-on-the-desktop-computer-keyboard-screens-show-coding.jpg?s=1024x1024&w=is&k=20&c=g9E8s_x8dL5e4oTrOuvgcmX8RhnJ6bo21quMcFVpa6g=")` }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Applied Jobs</h1>
    </div>
  </div>
       </div>
        <div className='md:px-20 items-center justify-end  my-8 p-4 gap-16 flex'>
         <button className='bg-violet-500 font-bold h-12  hover:bg-violet-700 text-white rounded-lg  px-3 py-3 text-xl'>Remote</button> 
         <button className='bg-violet-500 font-bold h-12  hover:bg-violet-700 text-white rounded-lg  px-3 py-3 text-xl'>OnSite</button> 
        </div>
           {
            datas.map(data=><Jobdetails key={data.id} data={data}></Jobdetails>)
           }
        </div>
    );
};

export default Jobs;