import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Jobdetails from '../Jobdetails/Jobdetails';

const Jobs = () => {
    const datas=useLoaderData()
 
    return (
        <div>
           {
            datas.map(data=><Jobdetails key={data.id} data={data}></Jobdetails>)
           }
        </div>
    );
};

export default Jobs;