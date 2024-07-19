import { CiHeart } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { GrLinkNext } from "react-icons/gr";
import { motion } from "framer-motion";

const Projects = () => {
  // Sample project data
  const projects = [
    {
      id: 1,
      title: "Portfolio Website",
      description: "Developed a personal portfolio website to showcase my skills, projects, and experience as a full stack web developer. Utilized modern web technologies like React and Tailwind to create a responsive, user-friendly design.",
      imageUrl: "Portfolio.png",
      icons: [<CiHeart key="heart" />, <FaGithub key="github" />, <GrLinkNext key="link" />],
      delay: 0.7,
    },
    {
      id: 2,
      title: "Pure Calm",
      description: "Developed a Pure Calm website using React for a hackathon project. Collaborated with a team of four to create a comprehensive platform offering various types of therapies. Also created a responsive and user-friendly design.",
      imageUrl: "PureCalm.png",
      icons: [<CiHeart key="heart" />, <FaGithub key="github" />, <GrLinkNext key="link" />],
      delay: 0.5,
    },{
      id: 3,
      title: "Blog Website",
      description: "Created a full stack blog application with user authentication and password hashing using salt. Users can log in, add blogs, and share their posts with everyone. The application ensures secure user data handling and provides a seamless blogging experience for all users.",
      imageUrl: "BlogWebsite.png",
      icons: [<CiHeart key="heart" />, <FaGithub key="github" />, <GrLinkNext key="link" />],
      delay: 0.2,
    },
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
      className="my-20 text-center text-2xl">Projects</motion.h1>
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
            <p className="text-gray-700 mb-4" style={{ fontSize: '10px' }}>
              {project.description}
            </p>
            <div className="flex flex-row">
              {project.icons.map((icon, index) => (
                <div key={index} className="text-sm text-white-500 mr-2">
                  {icon}
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
