import { FaLinkedin, FaGithub, FaTwitter, FaInstagram, FaCode } from "react-icons/fa";

const Navbar = () => {
  const githubUrl = import.meta.env.VITE_GITHUB_URL;
  const linkedinUrl = import.meta.env.VITE_LINKEDIN_URL;
  const instagramUrl = import.meta.env.VITE_INSTAGRAM_URL;
  const twitterUrl = import.meta.env.VITE_TWITTER_URL;

  return (
    <nav className="mb-2 flex items-center justify-evenly py-2">
      <div className="flex flex-shrink-0 items-center ">
        <FaCode/> 
        <h1 className="p-2">PP</h1>
      </div>
      <div className="m-2 flex items-center justify-center gap-4 text-1xl ">
        <a href={linkedinUrl} className="text-blue-300" ><FaLinkedin /></a>
        <a href={githubUrl}  className="text-gray-300"><FaGithub/></a>
        <a href={twitterUrl}  className="text-blue-300"><FaTwitter /></a>
        <a href={instagramUrl}  className="text-pink-300"><FaInstagram /></a>
      </div>
    </nav>
  );
}

export default Navbar;
