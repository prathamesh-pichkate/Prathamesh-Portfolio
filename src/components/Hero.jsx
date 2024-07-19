import { motion } from "framer-motion"

const container = (delay) =>({
  hidden:{x:-100,opacity:0},
  visible:{
    x:0,
    opacity:1,
    transition: {duration:0.5,delay:delay},
  }
});

const container2 = (delay) =>({
  hidden:{x:100,opacity:0},
  visible:{
    x:0,
    opacity:1,
    transition: {duration:0.5,delay:delay},
  }
});
const Hero = () => {
    return (
      <div className="h-full mx-8 my-8 p-10">
        <div className="flex flex-col justify-center items-center h-full text-center">
          <motion.div
          variants={container2(0.2)}
          initial="hidden"
          animate='visible'
          className="w-48 h-48 rounded-full overflow-hidden mb-4">
            <img src="MyPic.jpeg" alt="My Image" className="w-full h-full object-cover border-b" />
          </motion.div>
          <div className="flex flex-col justify-center items-center">
            <motion.h1 
             variants={container(0.2)}
             initial="hidden"
             animate='visible'
            className="text-2xl sm:text-3xl md:text-4xl font-bold p-2 whitespace-nowrap tracking-tight">Prathamesh Pichkate</motion.h1>
            <motion.h3
             variants={container(0.7)}
             initial='hidden'
             animate='visible'
            className="text-lg sm:text-xl md:text-2xl font-thin tracking-tight">Full Stack Developer</motion.h3>
          </div>
        </div>
      </div>
    );
  }
  
  export default Hero;
  