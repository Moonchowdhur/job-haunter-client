import React from 'react';

const Catagory = ({data}) => {
    // console.log(data)
    const {picture, name, about}=data
    return (
        <div className='bg-slate-100 my-7 shadow-xl border rounded-lg p-8'>
           <img src={picture}  alt="" /> 
           <h2 className='text-xl font-bold my-3'>{name}</h2>
           <p className='-ms-6'>{about} Jobs Available</p>
        </div>
    );
};

export default Catagory;