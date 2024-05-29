import React, { useState, useEffect } from "react";
import ParticleApp from "../components/particles/Particles";
import { AnimateText } from "../components/animation/Animate";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import Link from "next/link";

const Home = () => {
  const [loaded, setLoaded] = useState(false);
  const [showParticles, setShowParticles] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoaded(true);
    }, 500);

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const aboutMeSection = document.getElementById("aboutMe");

      if (aboutMeSection) {
        const aboutMeOffsetTop = aboutMeSection.offsetTop;
        if (scrollPosition > aboutMeOffsetTop) {
          setShowParticles(false);
        } else {
          setShowParticles(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      clearTimeout(timeout);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className=" all h-[80vh] md:h-[90vh] bg-cover bg-center md:flex cursor-pointer">
      {showParticles && <ParticleApp />}
      <div className="flex  w-full mx-auto flex-wrap md:flex-nowrap item-center md:h-full md:w-full">
        <div
          className={` left-0 top-10 w-full h-full transition-transform duration-1000 ${
            loaded ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="px-8 md:ml-24 mt-14 md:mt-28 flex w-full md:h-full">
            <div id="aboutMe">
              <h1 className="text-white mb-6 text-[16px]">
                WELCOME TO MY WORLD
              </h1>
              <div>
                <h1 className="xl:text-[50px] lg:text-[40px] sm:text-[35px] text-[25px] font-semibold leading-3 mb-6 text-white">
                  Hi, I'M <span className="text-amber-500">Yovika</span>
                </h1>
                <AnimateText />
              </div>
              <div className="flex mt-6 justify-between w-80 h-8">
                <Link href="/Contact">
                  <button className="text hover:bg-purple-600 ">
                    Hire ME Now
                  </button>
                </Link>
                <button className="text hover:bg-purple-600">
                  Download CV
                </button>
              </div>

              <div className="flex space-x-8  mt-11  ">
                <div className="group relative">
                  <FaGithub className="text-white  text-3xl group-hover:text-fuchsia-700 transition duration-300" />
                  <div className="absolute  -top-1 w-full h-1 bg-fuchsia-700 blue-500 transition-all duration-300 group-hover:top-full group-hover:left-0"></div>
                </div>
                <div className="group relative">
                  <FaLinkedin className="  text-white text-3xl group-hover:text-blue-800 transition duration-300" />
                  <div className="absolute -top-1 w-full h-1 bg-blue-800 transition-all duration-300 group-hover:top-full group-hover:left-0"></div>
                </div>
                <div className="group relative">
                  <BiLogoGmail className="text-white -mt-1 text-4xl group-hover:text-red-600 transition duration-300" />
                  <div className="absolute -top-1  w-full h-1 bg-red-600 transition-all duration-300 group-hover:top-full group-hover:left-0"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden md:block">
          <img
            src="/Media/image 1.png"
            className={`.${
              loaded ? " translate-x-0" : " translate-x-full"
            } transition-transform duration-1000 hover:opacity-50  w-96 md:w-[50vw] `}
            style={{
              borderBottomLeftRadius: "50%",
              borderTopLeftRadius: "50%",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
