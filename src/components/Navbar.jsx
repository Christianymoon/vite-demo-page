import { Link } from "react-router-dom";
import React from "react";
import { MdDehaze } from "react-icons/md";
import { MdOutlineClose } from "react-icons/md";

export function Navbar() {



  const links = [
    { name: "Home", path: "/" },
    { name: "Servicios", path: "/services" },
    { name: "Contacto", path: "/contact" },

  ]

  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-black">
      <button
        className="md:hidden bg-black p-2 rounded"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <MdOutlineClose size={24} color="#ffffff" /> : <MdDehaze size={24} color="#ffffff" />}
      </button>
      <ul
        className={`navbar FirstFont bg-black text-white md:flex md:flex-row md:justify-center md:items-center md:w-full md:h-16 md:p-10 md:relative 
                ${isOpen ? "flex" : "hidden"} flex-col p-20 w-1/2 h-screen absolute justify-center items-center
                `}
      >
        {links.map((link) => (
          <li className="navhover p-5 md:p-30" key={link.name}>
            <Link to={link.path}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );

}