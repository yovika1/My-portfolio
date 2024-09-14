import React, { useState, useEffect } from "react"; 
import ParticleApp from "../components/particles/Particles";
import { AnimateText } from "../components/animation/Animate";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { BiLogoGmail } from "react-icons/bi";
import Link from "next/link";

const Home = () => {
  const [loaded, setLoaded] = useState(false);
  const [voicePlayed, setVoicePlayed] = useState(false);

  const speakWelcomeMessage = (voices) => {
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance("Welcome to my Portfolio. Hi, I'm Yovikaa.");

    utterance.pitch = 0.98;
    utterance.rate = 1;
    utterance.volume = 1;

    // Choose Google UK English Female or the first available voice
    const selectedVoice = voices.find((voice) => voice.name === "Google UK English Female") || voices[0];
    if (selectedVoice) {
      utterance.voice = selectedVoice;
    }

    // Speak the message
    synth.speak(utterance);
  };

  useEffect(() => {
    setLoaded(true);
    const synth = window.speechSynthesis;

    // Function to load voices and trigger the welcome message
    const loadVoicesAndPlayMessage = () => {
      const voices = synth.getVoices();
      if (voices.length && !voicePlayed) {
        speakWelcomeMessage(voices);
        setVoicePlayed(true);
        localStorage.setItem("welcomeMessagePlayed", "true");
      }
    };

    // If voices aren't loaded yet, wait for them
    if (synth.onvoiceschanged !== undefined) {
      synth.onvoiceschanged = loadVoicesAndPlayMessage;
    } else {
      // Immediately try to load voices and play the message
      loadVoicesAndPlayMessage();
    }

  }, [voicePlayed]);

  return (
    <div className="h-[80vh] xl:min-h-min mt-20 bg-cover bg-center md:flex cursor-pointer">
      <ParticleApp />
      <div className="flex w-full -mx-2 flex-wrap md:flex-nowrap items-center">
        <div
          className={`left-0 mt-10 w-full h-full transition-transform duration-1000 ${
            loaded ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="px-8 ml-2 mt-14 md:mt-28 flex w-full md:h-full">
            <div id="aboutMe">
              <h1 className="text-white mb-6 text-[16px]">WELCOME TO MY WORLD</h1>
              <div>
                <h1 className="xl:text-[50px] lg:text-[40px] sm:text-[35px] text-[25px] font-semibold leading-3 mb-6 text-white">
                  Hi, I'M <span className="text-amber-500">Yovika</span>
                </h1>
                <div className="md:w-[60vw] relative">
                  <AnimateText />
                </div>
              </div>
              <div className="flex mt-6 -mx-2 justify-between w-80 h-8">
                <Link href="/Contact">
                  <button className="text hover:bg-purple-600">Hire ME Now</button>
                </Link>
                <a href="/Media/My-Resume.pdf" download="My_Resume.pdf">
                  <button className="text hover:bg-purple-600">Download CV</button>
                </a>
              </div>

              <div className="flex space-x-8 mt-11">
                <div className="group relative">
                  <a href="https://github.com/dashboard">
                    <FaGithub className="text-white text-3xl group-hover:text-fuchsia-700 transition duration-300" />
                  </a>
                  <div className="absolute -top-1 w-full h-1 bg-fuchsia-700 transition-all duration-300 group-hover:top-full group-hover:left-0"></div>
                </div>
                <div className="group relative">
                  <a href="https://www.linkedin.com/in/yovika-rg786">
                    <FaLinkedin className="text-white text-3xl group-hover:text-blue-800 transition duration-300" />
                  </a>
                  <div className="absolute -top-1 w-full h-1 bg-blue-800 transition-all duration-300 group-hover:top-full group-hover:left-0"></div>
                </div>
                <div className="group relative">
                  <a href="https://mail.google.com/mail/u/1/#inbox?compose=GTvVlcRzBlQczclRHdgsGdjRHbJMJcqqQFmVcQgCVKvRbMVmvRRdlHkcRwQNgqDXdNHHWdvlFPPDz">
                    <BiLogoGmail className="text-white -mt-1 text-4xl group-hover:text-red-600 transition duration-300" />
                  </a>
                  <div className="absolute -top-1 w-full h-1 bg-red-600 transition-all duration-300 group-hover:top-full group-hover:left-0"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden md:block absolute ml-[74vw] -mt-20">
          <div className="group">
            <video
              src="/Media/Myvideo.mp44"
              autoPlay
              loop
              muted
              className={`${
                loaded ? "translate-x-0" : "translate-x-full"
              } lg:w-[60vh]  md:w-[60vw] group-hover:animate-opacity-sequence`}
              style={{
                borderBottomLeftRadius: "50%",
                borderTopLeftRadius: "50%",
              }}
            ></video>
          </div>
        </div>
      </div>

      <div className="sm:visible absolute inset-x-0 top-[94vh] flex justify-center">
        <IoIosArrowDown className="animated-icon text-4xl" />
      </div>
    </div>
  );
};

export default Home;
