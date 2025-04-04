import { Link } from "react-router-dom";
import React from "react";
import { MdDehaze } from "react-icons/md";
import { MdOutlineClose } from "react-icons/md";
import Logo from "../assets/logo.png";

export function Navbar() {



  const links = [
    { name: "Home", path: "/" },
    { name: "Servicios", path: "/services" },
    { name: "Contacto", path: "/contact" },

  ]

  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-black md:h-auto h-16 flex items-center">
      <button
        className="md:hidden bg-black p-2 rounded"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <MdOutlineClose size={24} color="#ffffff" /> : <MdDehaze size={24} color="#ffffff" />}
      </button>
      <div className=" md:hidden pr-10 flex-grow flex justify-center">
        <img className="h-10 w-auto object-contain" src={Logo} alt="Logo" />
      </div>
      <ul
        className={`navbar FirstFont bg-black text-white md:flex md:flex-row md:justify-center md:items-center md:w-full md:h-16 md:p-10 md:relative
                ${isOpen ? "flex" : "hidden"} flex-col p-20 w-1/2 h-screen absolute justify-center items-center top-12 md:top-0
                `}
      >
        {links.map((link) => (
          <li className="navhover p-5 md:pl-30 md:pr-30 md:py-10 hover:bg-gray-800" key={link.name}>
            <Link
              to={link.path}
              onClick={() => setIsOpen(false)} // Close navbar on click
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );

}