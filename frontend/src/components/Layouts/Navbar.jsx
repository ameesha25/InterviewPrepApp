import React from 'react';
import { Link } from 'react-router-dom';
import ProfileInfoCard from '../Cards/ProfileInfoCard';

const Navbar = () => {
  return (
    <div className='h-16 bg-white border-b border-gray-200/50 shadow-sm backdrop-blur-[2px] py-2.5 px-4 md:px-0 sticky top-0 z-30'>
      <div className='container flex items-center justify-between'>
        <Link to="/dashboard">
          <h2 className='px-4 md:px-8 text-lg md:text-xl font-medium text-black leading-5'>
            Interview Prep AI
          </h2>
        </Link>
        <div className='mr-15'><ProfileInfoCard /></div>
        
      </div>
    </div>
  );
};

export default Navbar;
