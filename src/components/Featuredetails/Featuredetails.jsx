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

console.log(features?.description)


    return (
        <div>
        <div >
          <h2>{features?.description}</h2>

        </div>
        </div>
    );
};

export default Featuredetails;