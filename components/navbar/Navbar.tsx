
import { useState } from 'react';
import Link from 'next/link';
import { TbArticle } from "react-icons/tb";
import { RxCross2 } from "react-icons/rx";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className=" border-y-2 sticky z-[1] p-4  ">
      <div className="container mx-auto  ">
        <div className="flex items-center  ">
          {/* Hamburger icon for mobile */}
          <div className=" block md:hidden">
            <button onClick={toggleMenu} className="text-white mt-2  text-3xl ">
              {isOpen ? (<RxCross2 className='-mt-24 text-2xl border border-cyan-400' />) : (<TbArticle />)}
            </button>
         </div>
        
          {/* Navigation links */}
          <div className='  flex justify-between md:flex-row-reverse  items-center w-full'>
          <div className={` md:flex  ${isOpen ? 'block' : 'hidden'}`}>
            <Link href="/">
              <div className="text-white hover:text-amber-500 mr-4 p-1 hover:shadow shadow-white cursor-pointer z-20">Home</div>
            </Link>
            <Link href="/about">
              <div className="text-white hover:text-amber-500 mr-4 p-1 hover:shadow shadow-white cursor-pointer">About</div>
            </Link>
            <Link href="/Tools">
              <div className="text-white hover:text-amber-500 mr-4 p-1 hover:shadow shadow-white cursor-pointer">Tools</div>
            </Link>
            <Link href="/Project">
              <div className="text-white hover:text-amber-500 mr-4 p-1 hover:shadow shadow-white cursor-pointer">Project</div>
            </Link>
            <Link href="/Contact">
              <div className="text-white hover:text-amber-500 p-1 hover:shadow shadow-white cursor-pointer">Contact</div>
            </Link>
          </div>
        
          <div className=" ml-auto md:ml-0  ">
            <Link href="/">
              <div className="text-white font-bold text-xl">Port
              <span className=' text-amber-500'>folio</span>
              </div>
              
            </Link>
          </div>
        </div>
        </div>
      </div>
    </nav>
    
  );
};

export default Navbar;
