import { RiReactjsLine } from "react-icons/ri";
import { FaHtml5, FaCss3Alt, FaNodeJs, FaLinux, FaGitAlt, FaGithub } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { BiLogoMongodb } from "react-icons/bi";
import { GrMysql } from "react-icons/gr";
import { motion } from "framer-motion";

const technologies = [
  { icon: FaHtml5, color: "text-red-500", speed: 2.5 },
  { icon: FaCss3Alt, color: "text-cyan-500", speed: 2.1 },
  { icon: FaNodeJs, color: "text-green-500", speed: 1.7 },
  { icon: RiReactjsLine, color: "text-cyan-500", speed: 1.9 },
  { icon: FaLinux, color: "text-white-500", speed: 2},
  { icon: FaGitAlt, color: "text-red-500", speed: 2.5 },
  { icon: FaGithub, color: "text-white-500", speed: 2.1 },
  { icon: TbBrandJavascript, color: "text-cyan-500", speed: 1.8 },
  { icon: BiLogoMongodb, color: "text-green-500", speed: 2.5 },
  { icon: GrMysql, color: "text-green-500", speed: 2 },
];

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 mb-6">
      <motion.h1
      whileInView={{opacity:1,y:0}}
      initial ={{opacity:0,y:100}}
      transition={{duration:1.5}}
      className="my-8 text-center text-xl">Technologies</motion.h1>
      <motion.div
      whileInView={{opacity:1,y:0}}
      initial ={{opacity:0,y:100}}
      transition = {{duration:3.5}}

      className="flex flex-wrap items-center justify-center gap-4 mb-10">
        {technologies.map((tech, index) => {
          const IconComponent = tech.icon;
          return (
            <motion.div
              variants={iconVariants(tech.speed)}
              initial="initial"
              animate="animate"
              key={index}
              className="rounded-xl border-2 border-neutral-800 p-2"
            >
              <IconComponent className={`text-4xl ${tech.color}`} />
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default Technologies;
