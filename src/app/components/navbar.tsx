import Image from 'next/image';
import React from 'react';
import Logo from '../assets/Logo.svg';

const links = [
  {
    link: 'Creon Pass',
  },
  {
    link: 'Token',
    time: 'SOON'
  },
  {
    link: 'AI Revenue',
    time: 'SOON'
  },
  {
    link: 'AI Launchpad',
    time: 'SOON'
  },
];

const Navbar = () => {
  return (
    <div className='flex flex-row justify-between items-center px-8 py-5'>
      <Image
        alt='logo'
        src={Logo}
        width={140}
        height={39}
        className=''
      />

      <div className="flex flex-row items-center justify-between">
        {links.map(link => (
          <span className='text-lg text-white font-bold pr-7 text-satoshi' key={link.link}>
            {link.link}
            {link.time && (
              <sup
                className='gap-2 bg-black rounded-[100px] py-[2px] px-1 text-[10px] text-center text-[#ab23ff]'>
                {link.time}
              </sup>
            )}
          </span>
        ))}

        <button
          className="flex flex-row items-center justify-center border-2 border-solid border-white 
          w-32 h-11 rounded-md text-satoshi font-bold text-lg text-center text-white ml-10"
        >
          Connect
        </button>
      </div>
    </div>
  );
};

export default Navbar;
