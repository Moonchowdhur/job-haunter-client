import React, { useEffect, useState } from 'react';
import img from '../../../public/All Images/women.png'
import Catagory from '../Catagory/Catagory';

import Feature from '../Feature/Feature';
const Home = () => {

  const [show,setShow]=useState(false)
  const [datas,setDatas]=useState([])
  const [catagories,setCatagories]=useState([])
  useEffect(()=>{
    fetch("catagory.json")
    .then(res=>res.json())
    .then(data=>setDatas(data))
  },[])

  useEffect(()=>{
    fetch("jobs.json")
    .then(res=>res.json())
    .then(data=>setCatagories(data))
  },[])


    return (
        <div className='md:my-8 my-28' >

        {/* first home section */}
          <div className='md:flex bg-[#FEF2F4]  p-4 md:px-12 justify-between items-center'>
            <div className='text-xl'>
              <h2 className='font-bold text-6xl tracking-wider'>Your Passion<br/><span className='text-violet-500 '>Begins</span> Here</h2>
              <p className='my-7 text-xl font-medium'>Everything you need to succeed is already inside you,<br/> you just have to access your inner-power and make it happen.<br/> The future depends on what you do today.</p>
              <button className='bg-violet-500 font-bold hover:bg-violet-700 text-white rounded-lg my-4 px-3 py-2 text-2xl'>Get Started</button>
            </div>
            <img src={img} className='md:w-1/2 w-full h-2/3' alt="" />
          </div>
        {/* end home section */}

      

        {/* Job Category List section */}
        <div className='my-28 text-center p-4 md:px-12'>
            <h2 className='text-4xl font-bold'>Job Category List</h2>
            <p className='my-4 text-xl'>Education is the most powerful weapon which you can use to change the world. Its your future</p>
            <div className='md:flex p-4 md:px-12 justify-around items-center '>
              {
                datas.map(data=><Catagory key={data.id} data={data}></Catagory>)
              }
            </div>
        </div>
{/* Job Category List end */}

{/* Featured Jobs section---- */}
      <div className='my-28  p-4 md:px-12'>
         <h2 className='text-4xl text-center font-bold'>Featured Jobs</h2>
         <p className='my-4 text-center text-xl'>Education is the most powerful weapon which you can use to change the world. Its your future</p>
         <div className=' my-5 p-4 grid grid-cols-1 gap-12 md:grid-cols-2 md:px-12'>
            {
             catagories.slice(0,show?8:4).map(catagory=><Feature key={catagory.id} catagory={catagory}></Feature>)
            }
         </div>
         <div className='text-center'>
          {
            !show && (<button onClick={()=>setShow(true)} className='bg-violet-500 text-center font-bold hover:bg-violet-700 text-white rounded-lg my-7 px-3 py-2 text-2xl'>See All Jobs</button>)
          }
         
         </div>
      </div>
{/* Featured Jobs end ---- */}

        </div>
    );
};

export default Home;