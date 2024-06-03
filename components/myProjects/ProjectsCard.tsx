import React, { useState } from "react";
import { motion } from "framer-motion";

interface Props {
  title: string;
  text: string;
  image: string;
  url: string;
}

const ProjectsCard: React.FC<Props> = ({ image, title, text, url }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isAnimate, setIsAnimate] = useState(false);

  function handleFlip() {
    if (!isAnimate) {
      setIsFlipped(!isFlipped);
      setIsAnimate(true);
    }
  }

  return (
    <div
      onClick={handleFlip}
      className="relative w-full md:w-[300px] md:h-[200px] border-purple-600 border-2 rounded-xl cursor-pointer "
    >
      <motion.div
        className=" w-full h-full card mr-52 "
        initial={false}
        animate={{ rotateX: isFlipped ? 0 : 180 }}
        transition={{ duration: 0.6 }}
        onAnimationComplete={() => setIsAnimate(false)}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front Side */}

        <div className="absolute w-[200px] h-[200px] md:w-full md:h-full  backface-hidden  ">
          <img
            src={image}
            alt={title}
            className="w-[200px] h-[200px]  md:w-full md:h-full object-cover rounded-lg"
          />
          <div className="absolute inset-0 flex items-center justify-center text-white text-[20px] pb-10 opacity-0 hover:opacity-100 transition-opacity duration-300">
            Learn more &gt;
          </div>
        </div>

        <div
          className="absolute w-[220px] h-[250px] md:w-full md:h-full text-orange-300 bg-slate-100 rounded-lg p-4"
          style={{
            transform: "rotateX(180deg)",
            backfaceVisibility: "hidden",
            backgroundColor: "rgba(241, 245, 249, 0.8)",
          }}
        >
          <div className="flex flex-col h-full justify-center items-center">
            <h1 className="text-2xl font-semibold">{title}</h1>
            <p className="text-[12px] mt-4">{text}</p>
            <a
              href={url}
              target="_blank"
              className="mt-4 text-blue-400 underline"
            >
              Visit
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectsCard;
