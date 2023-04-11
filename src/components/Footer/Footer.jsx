import React from 'react';
import {  BsFacebook,BsInstagram,BsTwitter} from "react-icons/bs";
const Footer = () => {
    return (
        <div className='bg-neutral text-neutral-content'>
          <footer className="footer md:px-14 p-10 ">
    <div>
    <span className="footer-title text-3xl font-bold">InSearch</span> 
    <p>This website is for applying in different type of jobs.</p>
    <div className='flex text-3xl items-center gap-4 my-5'>
    <BsFacebook className='text-blue-500'/>
    <BsInstagram className='text-orange-600' />
    <BsTwitter className='text-blue-500'/>
    </div>
    
  </div> 

  <div>
    <span className="footer-title">Company</span> 
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Work</a>
    <a className="link link-hover">Latest News</a>
    <a className="link link-hover">Careers</a>
  </div> 
  <div>
    <span className="footer-title">Product</span> 
    <a className="link link-hover">Prototype</a>
    <a className="link link-hover">Plans & Pricing</a>
    <a className="link link-hover">Integrations</a>
  </div>
  <div>
    <span className="footer-title">Support</span> 
    <a className="link link-hover">Help Desk</a>
    <a className="link link-hover">Sales</a>
    <a className="link link-hover">Become a Partner</a>
    <a className="link link-hover">Developers</a>
   </div> 
</footer>  
<hr />
   <div className='flex  justify-around md:px-14 p-10 items-center py-5'>
   <p>@2023 InSearch. All Rights Reserved</p>
   <p>Powered by InSearch</p>
   </div>
        </div>
    );
};

export default Footer;