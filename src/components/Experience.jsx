import { motion } from "framer-motion";

const EXPERIENCES = [
  {
    year: "2024 - Present",
    role: "Full Stack Web Developer",
    company: "MusicTech",
    description: `Full Stack Web Developer Intern at an innovative music tech startup, responsible for developing and maintaining web applications, ensuring responsive design, optimizing for performance, and collaborating with cross-functional teams to deliver scalable solutions.`,
    technologies: [
      "HTML",
      "CSS",
      "Javascript",
      "Reactjs",
      "Nodejs",
      "Expressjs",
      "MongoDB",
    ],
    delay: 0.4,
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

const Experience = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-2xl">Experience</h1>

      <div>
        {EXPERIENCES.map((experience, index) => (
          <motion.div
            variants={container(experience.delay)}
            initial="hidden"
            whileInView="visible"
            key={index}
            className="mb-8 flex flex-wrap lg:justify-center"
          >
            <div className="w-full lg:w-1/4">
              <p className="mb-2 text-xl text-neutral-400">{experience.year}</p>
            </div>
            <div className="w-full max-w-xl lg:w-3/4">
              <h6 className="mb-2 font-semibold">
                {experience.role} -{" "}
                <span className="text-sm text-purple-100">
                  {experience.company}
                </span>
              </h6>
              <p className="mb-4 text-neutral-400">{experience.description}</p>
              <div className="flex flex-wrap">
                {experience.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
