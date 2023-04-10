import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Featuredetails = () => {

  const {id} =useParams()
 
  const [features,setFeatures]=useState(null)
  useEffect(()=>{
 
let jobdataFunc=async()=>{
    let res=await fetch("/jobs.json")
    let data=await res.json()
    const exixting=data.find(feature=>feature.id==id)
     setFeatures(exixting)
}
jobdataFunc()
  },[id])

console.log(features)


    return (
        <div className='md:flex justify-around md:mx-12 mt- p-4'>
        <div className='md:w-[70%] p-4 rounded-md  my-16 bg-opacity-60  bg-[#FCC8D1]'>
          <h2 className='text-xl my-5'><span className='font-bold'>Job Description:</span>{features?.description}</h2>
          <p className='text-xl my-5'> <span className='font-bold'>Job Responsibity: </span>{features?.responsibity}</p>
          <p className='text-xl my-5'><span className='font-bold'>Educational Requirements:</span><br/>{features?.education}</p>
          <p className='text-xl my-5'><span className='font-bold my-4'>Experiences:</span><br/>{features?.experiences}</p>
        </div>
        <div className='md:w-[30%] my-16 p-4 bg-[#FCC8D1] rounded-md mx-7 '>
            <h2 className='text-2xl my-5 font-bold'>Job Details</h2>
            <hr />
            <p className='my-5'>{features?.salary}</p>
            <p>{features?.name}</p>
            <h2 className='text-2xl mt-8 mb-3 font-bold '>Contact Information</h2><hr />
            <p>{features?.phone}</p>
            <p>{features?.email}</p>
            <p>{features?.address}</p>
            <button className='bg-violet-500 text-center font-bold hover:bg-violet-700 text-white rounded-lg my-7 px-3 w-full py-2 text-2xl'>Apply Now</button>
        </div>
        </div>
    );
};

export default Featuredetails;