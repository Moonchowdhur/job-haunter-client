import React, { useEffect, useState } from 'react';
import img from '../../../public/All Images/P3OLGJ1 copy 1.png'
import Catagory from '../Catagory/Catagory';
const Home = () => {
  const [datas,setDatas]=useState([])
  useEffect(()=>{
    fetch("catagory.json")
    .then(res=>res.json())
    .then(data=>setDatas(data))
  },[])

  // console.log(datas)
    return (
        <div className='my-8' >

        {/* first home section */}
          <div className='md:flex  p-4 md:px-12 justify-between items-center'>
            <div className='text-xl'>
              <h2 className='font-bold text-6xl tracking-wider'>Your Passion<br/><span className='text-violet-500 '>Begins</span> Here</h2>
              <p className='my-7 text-xl font-medium'>Explore thousands of job opportunities with all the<br/> information you need. Its your future. Come find it. Manage all<br/> your job application from start to finish.</p>
              <button className='bg-violet-500 font-bold hover:bg-violet-700 text-white rounded-lg my-4 px-3 py-2 text-2xl'>Get Started</button>
            </div>
            <img src={img} className='md:w-1/2 w-full' alt="" />
          </div>
        {/* end home section */}

        {/* Job Category List section */}
        <div className='my-28 text-center p-4 md:px-12'>
            <h2 className='text-4xl font-bold'>Job Category List</h2>
            <p className='my-4 text-xl'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className='md:flex p-4 md:px-12 justify-around items-center '>
              {
                datas.map(data=><Catagory key={data.id} data={data}></Catagory>)
              }
            </div>
        </div>


        </div>
    );
};

export default Home;