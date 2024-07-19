import { FaLinkedin, FaGithub, FaTwitter, FaInstagram, FaCode } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-2 flex items-center justify-evenly py-2">
      <div className="flex flex-shrink-0 items-center ">
        <FaCode/> 
        <h1 className="p-2">PP</h1>
      </div>
      <div className="m-2 flex items-center justify-center gap-4 text-1xl ">
        <FaLinkedin />
        <FaGithub/>
        <FaTwitter />
        <FaInstagram />
      </div>
    </nav>
  );
}

export default Navbar;
