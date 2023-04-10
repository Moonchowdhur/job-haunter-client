import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {BiLocationPlus,BiRupee} from "react-icons/bi";
import {MdSubtitlesOff} from "react-icons/md";
import {BsFillTelephoneFill} from "react-icons/bs";
import {AiOutlineMail} from "react-icons/ai";



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
           <div className='flex my-5 items-center'>
            <span className='text-3xl text-violet-500 font-bold'>
            <BiRupee/>
            </span>
           <p className=''><span className='font-bold text-xl'>Salary:
           </span>{features?.salary}(Per Month)</p>
           </div>
           <div className='flex items-center gap-2 '>
           <span className='text-xl text-violet-500 font-bold'>
            <MdSubtitlesOff/>
            </span>
           <p className=''><span className='font-bold text-xl'>Job Title:
           </span>{features?.name}</p>
          </div>
          <h2 className='text-2xl mt-10 mb-3 font-bold '>Contact Information</h2><hr />
          <div className='flex gap-2 mt-4 items-center'>
          <span className='text-xl text-violet-500 font-bold'>
            <BsFillTelephoneFill/>
            </span>
           <p className=''><span className='font-bold text-xl'>Phone:  
           </span>{features?.phone}</p>
          </div>
          <div className='flex gap-2 mt-4 items-center'>
          <span className='text-xl text-violet-500 font-bold'>
            <AiOutlineMail/>
            </span>
           <p className=''><span className='font-bold text-xl'>Email:
           </span>{features?.email}</p>
          </div>
          <div className='flex gap-2 mt-4 items-center'>
          <span className='text-2xl text-violet-500 font-bold'>
            <BiLocationPlus/>
            </span>
           <p className=''><span className='font-bold text-xl'>Address:
           </span> {features?.address}</p>
          </div>
          <button className='bg-violet-500 text-center font-bold hover:bg-violet-700 text-white rounded-lg my-7 px-3 w-full py-2 text-2xl'>Apply Now</button>
        </div>
        
        </div>
    );
};

export default Featuredetails;

