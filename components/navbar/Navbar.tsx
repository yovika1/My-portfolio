
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { TbArticle } from "react-icons/tb";
import { RxCross2 } from "react-icons/rx";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScroll,setIsScroll] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };


   useEffect(() => {
    const handleScroll = () => {
console.log(window.scrollY);

      if (window.scrollY > 120) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };


    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`border-x-2 border  sticky z-[5] p-8 md:p-10 ${isScroll? 'bg-whitee' : ' bg-transparent '} `} >
      <div className="container  mx-auto  ">
        <div className="flex items-center  ">
          {/* Hamburger icon for mobile */}
          <div className=" block md:hidden z-10">
            <button onClick={toggleMenu} className="text-white text-3xl absolute top-6 cursor-pointer">
              {isOpen ? (<RxCross2 className='text-2xl border border-cyan-400 fixed' />) : (<TbArticle className='fixed' />)}
            </button>
         </div>
        
          {/* Navigation links */}
          <div className=' flex md:flex-row-reverse  items-center md:w-full fixed  cursor-pointer top-6 md:top-6'>
          <div className={` bg-[#000000e8] h-screen md:h-6 text-center absolute  mr-16 md:bg-transparent -left-9 justify-end md:flex  w-60 md:w-screen md:static -top-[88%]  ${isOpen ? 'block' : 'hidden'}`}>
            <Link href="/">
              <div className="text-white hover:text-amber-500 mr-4 p-1 hover:shadow md:mt-0 shadow-white cursor-pointer mt-16 ">Home</div>
            </Link>
            <Link href="/about">
              <div className="text-white hover:text-amber-500 mr-4 p-1 hover:shadow md:mt-0 shadow-white cursor-pointer mt-4">About</div>
            </Link>
            <Link href="/Tools">
              <div className="text-white hover:text-amber-500 mr-4 p-1 hover:shadow md:mt-0 shadow-white cursor-pointer mt-4">Tools</div>
            </Link>
            <Link href="/Project">
              <div className="text-white hover:text-amber-500 mr-4 p-1 hover:shadow md:mt-0 shadow-white cursor-pointer mt-4">Project</div>
            </Link>
            <Link href="/Contact">
              <div className="text-white hover:text-amber-500 mr-4 p-1 hover:shadow md:mt-0 shadow-white cursor-pointer mt-4">Contact</div>
            </Link>
          </div>
        
          <div className="flex items-center justify-end w-[82vw] md:justify-start">
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
