import Link from 'next/link';
import React, { useEffect, useRef } from 'react';

const About = () => {

  const videoRef = useRef(null); 

  useEffect(() => {
    const text = `
      Hello, I am here to tell you about Yovika. 
      Passionate Full Stack Developer with completed 1 year of internships at two different companies, 
      hands-on experience in MERN (MongoDB, Express.js, React, Node.js) stack development. 
      Proven ability to enhance project efficiency by 30%, certified by Microsoft in Power BI. 
      Skilled in AI hacks and concurrent programming, with a strong commitment to delivering high-quality solutions. 
      Achieved a 20% improvement in system performance through optimization techniques.
    `; 

    // Function to trigger speech synthesis in chunks
    const speak = (text) => {
      const synth = window.speechSynthesis;
      const sentences = text.split('. '); 
      let currentIndex = 0;

      const speakNextSentence = () => {
        if (currentIndex < sentences.length) {
          const utterance = new SpeechSynthesisUtterance(sentences[currentIndex]);

          utterance.pitch = 0.5; 
          utterance.rate = 1;
          utterance.volume = 1; 

          let voices = synth.getVoices();
          utterance.voice = voices.find(voice => voice.name === 'Google UK English Male') || voices[0];

          synth.speak(utterance);

          utterance.onend = () => {
            currentIndex++;
            speakNextSentence(); 
          };
        }
      };

      speakNextSentence();
    };

    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          speak(text); 
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      root: null, 
      threshold: 0.5 
    });

    if (videoRef.current) {
      observer.observe(videoRef.current); 
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
      window.speechSynthesis.cancel();
    };

  }, []);

  return (
    <div className="xl:max-h-min  text-white  w-full xl:-mx-0 flex ">
      <div className="grid grid-cols-1 border-line  md:grid-cols-2 gap-4 items-center w-full mt-28  md:h-[88vh] border-b-2 border-cyan-600">
        
        <div className="flex justify-center">
          <video 
            ref={videoRef} 
            id="myVideo"
            src="/Media/about-video.mp4" 
            className="w-48 h-72 md:w-96 md:h-96 rounded-full opacity-75" 
            data-aos="zoom-in-right"   
            autoPlay 
            loop 
            muted
          />
        </div>
        
        <div data-aos="zoom-in-left" className="text-center mx-4 md:text-left">
          <h1 className="text-white font-semibold text-xs md:text-sm">LET ME INTRODUCE MYSELF</h1>
          <div>
            <h2 className="text-amber-700 text-2xl p-2 md:text-3xl font-semibold ">ABOUT ME</h2>
            <p className="text-sm md:text-lg">
              Passionate Full Stack Developer with completed 1 year of internships at two different companies hands-on experience in MERN (MongoDB, Express.js, React, Node.js) stack development. Proven ability to enhance project efficiency by 30%, certified by Microsoft in Power BI. Skilled in AI hacks and concurrent programming, with a strong commitment to delivering high-quality solutions. Achieved a 20% improvement in system performance through optimization techniques.
            </p>
          </div>
          <Link href='/Contact'>
            <button className='p-1 text-sm md:text-base rounded-md mb-6 mt-4 border-2 font-semibold font-serif hover:bg-purple-600 text text-white'>
              Contact Me
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
