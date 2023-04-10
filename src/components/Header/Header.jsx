import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    // const [open,setOpen]=useState(false)
    return (
        <div className='bg-yellow-400 font-bold md:flex p-4 md:px-12 text-center justify-between'>
            <h2 className='text-5xl'>InSearch</h2>
            <ul className='md:flex mt-2 text-center text-2xl gap-6'>
            
            <li>
             <NavLink
                    to="/"
                    className={({ isActive}) =>
                      isActive
                        ? "text-violet-600" : ""
                    }
                  >
                    Home
                  </NavLink> 
             </li> 
             <li>
             <NavLink
                    to="/statistics"
                    className={({ isActive}) =>
                      isActive
                        ? "text-violet-600" : ""
                    }
                  >
                    Statistics
                  </NavLink> 
             </li>

             <li>
             <NavLink
                    to="/jobs"
                    className={({ isActive}) =>
                      isActive
                        ? "text-violet-600" : ""
                    }
                  >
                    Applied Jobs
                  </NavLink> 
             </li>
             <li>
             <NavLink
                    to="/blog"
                    className={({ isActive}) =>
                      isActive
                        ? "text-violet-600" : ""
                    }
                  >
                    Blog
                  </NavLink> 
             </li>
            </ul>
         <button className='bg-violet-500 hover:bg-violet-700 font-bold text-white rounded-lg px-3 text-2xl'>Start Applying</button>
        </div>
    );
};

export default Header;