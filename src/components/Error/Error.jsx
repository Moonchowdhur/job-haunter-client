import React from 'react';

const Error = () => {
    return (
        <div className='bg-violet-400 animate-bounce text-9xl justify-center items-center h-screen flex'>
           <h1 className='text-6xl text-center  text-red-600 font-bold'>E</h1> 
           <h1 className='text-6xl text-red-600 font-bold'>R</h1> 
           <h1 className='text-6xl text-red-600 font-bold'>R</h1> 
           <div className='animate-spin rounded-lg '>O</div>
           <h1 className='text-6xl text-red-600 font-bold'>R</h1> 
          
        </div>
    );
};

export default Error;