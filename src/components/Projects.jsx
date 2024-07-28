import { FaHeart } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { GrLinkNext } from "react-icons/gr";
import { motion } from "framer-motion";
import { useState } from "react";

const Projects = () => {
  const portfolioLink = import.meta.env.VITE_PORTFOLIO_LINK;
  const portfolioGithub = import.meta.env.VITE_PORTFOLIO_GITHUB;
  const currencyLink = import.meta.env.VITE_CURRENCY_LINK;
  const currencyGithub = import.meta.env.VITE_CURRENCY_GITHUB;

  const [heartColors, setHeartColors] = useState({
    1: "white",
    2: "white",
  });

  const changeColor = (id) => {
    setHeartColors((prevColors) => ({
      ...prevColors,
      [id]: prevColors[id] === "white" ? "red" : "white",
    }));
  };

  const projects = [
    {
      id: 1,
      title: "Portfolio Website",
      description: "Developed a personal portfolio website to showcase my skills, projects, and experience as a full stack web developer. Utilized modern web technologies like React and Tailwind to create a responsive, user-friendly design.",
      imageUrl: "Portfolio.png",
      icons: [
        { icon: <FaHeart key="heart" onClick={() => changeColor(1)} color={heartColors[1]} /> }, 
        { icon: <FaGithub key="github" />, link: portfolioGithub },
        { icon: <GrLinkNext key="link" />, link: portfolioLink }
      ],
      delay: 0.7,
    },
    {
      id: 2,
      title: "Currency Convertor",
      description: "I developed a fully functional Currency Converter website using HTML, CSS, and JavaScript. This project leverages a reliable currency conversion API to provide real-time exchange rates. It allows users to convert amounts between different currencies.",
      imageUrl: "Currency.png",
      icons: [
        { icon: <FaHeart key="heart" onClick={() => changeColor(2)} color={heartColors[2]} /> },
        { icon: <FaGithub key="github" />, link: currencyGithub },
        { icon: <GrLinkNext key="link" />, link: currencyLink }
      ],
      delay: 0.5,
    }
  ];

  const container = (delay) => ({
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, delay: delay },
    },
  });

  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1
        variants={container(0.5)}
        initial="hidden"
        whileInView="visible"
        className="my-20 text-center text-2xl"
      >
        Projects
      </motion.h1>
      <div className="flex flex-wrap justify-center overflow-x-auto">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            variants={container(project.delay)}
            initial="hidden"
            whileInView="visible"
            className="w-30 md:w-64 rounded-lg shadow-md p-6 mx-2 mb-4"
          >
            <img
              src={project.imageUrl}
              alt="Project"
              className="rounded-md mb-4 h-36 w-60 object-fill"
            />
            <h2 className="text-base font-bold mb-2">{project.title}</h2>
            <p className="text-gray-600 mb-4" style={{ fontSize: '10px' }}>
              {project.description}
            </p>
            <div className="flex flex-row">
              {project.icons.map((iconObj, index) => (
                <div key={index} className="text-sm text-white-500 mr-2">
                  {iconObj.link ? (
                    <a href={iconObj.link} target="_blank" rel="noopener noreferrer">
                      {iconObj.icon}
                    </a>
                  ) : (
                    <div>{iconObj.icon}</div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
