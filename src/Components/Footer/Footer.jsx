import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="relative left-0 bottom-0 h-[10vh] flex flex-col sm:flex-row items-center justify-between text-white bg-gray-800 sm:px-20">
      <section>Copyright 2023 | All rights reserved</section>
      <section className="flex items-center justify-center gap-3 text-2xl text-white">
        <Link className="hover:text-yellow-500 transition-all ease-in-out duration-300">
          <FaFacebook />
        </Link>
        <Link className="hover:text-yellow-500 transition-all ease-in-out duration-300">
          <FaLinkedin />
        </Link>
        <Link className="hover:text-yellow-500 transition-all ease-in-out duration-300">
          <FaInstagram />
        </Link>
        <Link className="hover:text-yellow-500 transition-all ease-in-out duration-300">
          <FaTwitter />
        </Link>
      </section>
    </footer>
  );
}
