import React from 'react';

function Header() {
  return (
    <div id="header" className='flex items-center border-b-2'>
      <img src="/assets/navbar_icon.png" alt="Navbar Icon" className='size-10'/>
      <img src="/assets/Youtube_icon.png" alt="Youtube_icon" className='w-32 h-8 m-1 ' />      
      <div className="flex items-center justify-center flex-grow">
        <input type="text" className="border rounded-l-3xl  pt-2 pb-2 pl-4 w-[60%] mt-2 mb-2" placeholder="Search..." />
        <button className='bg-[#f0f0f0] w-16 h-full pt-2 pb-2 border rounded-r-3xl flex items-center justify-center'>
        <svg id="search-icon" className='w-5 h-6 translate-x-[-4px]'>
        <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
        <path d="M0 0h24v24H0z" fill="none"/>
         </svg>
        
          
        </button>
      </div>
   
    </div>
  );
}

export default Header;
