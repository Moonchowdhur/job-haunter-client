import React from 'react';
import {BiLocationPlus,BiRupee } from "react-icons/bi";
const Feature = ({catagory}) => {
    console.log(catagory)
    const {id,company,name,location,salary,site,time,picture}=catagory
    return (
        <div className=' shadow-xl border border-violet-500 rounded-lg p-7'>
          <img src={picture} className='w-40' alt="" />
          <h1 className='font-bold text-2xl my-3'>{name}</h1>
          <h2 className='font-medium py-4 text-xl my-3'>{company}</h2>
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
          <button className='bg-violet-500 font-bold hover:bg-violet-700 text-white rounded-lg my-7 px-3 py-2 '>View Details</button>
        </div>
    );
};

export default Feature;