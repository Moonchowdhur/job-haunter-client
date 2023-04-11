import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaHamburger } from "react-icons/fa";
import { ImCross } from "react-icons/im";
const Header = () => {
    const [open,setOpen]=useState(false)

    return (
      <>
   
        <div className='bg-yellow-400 font-bold md:flex p-4 md:px-12 text-center justify-between'>
            <h2 className='text-5xl'>InSearch</h2>
             {/* hambar start---- */}
             <div className='md:hidden' onClick={()=>setOpen(!open)}>
            <span>
           {
          open? <ImCross className='text-4xl'/>: <FaHamburger className='text-4xl'/>
           }
        </span>
       
          </div>
         {/* hambar end---- */}
            <ul className={`md:flex mt-2 bg-violet-200 md:bg-transparent text-center text-2xl gap-6 md:static absolute ${open? "top-32": "-top-40"} `}>
            
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
        </>
    );
};

export default Header;