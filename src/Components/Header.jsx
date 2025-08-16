
// Responsive Design

import {useState, useRef, useEffect} from "react";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef(null);
    const buttonRef = useRef(null);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Close menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            // Only close if clicking outside both menu and button
            if (isMenuOpen && !menuRef.current?.contains(event.target) && !buttonRef.current?.contains(event.target)) {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isMenuOpen]);

    return (
        <header className="fixed top-0 left-0 w-full h-auto bg-[#262626] z-50">
            <div className="flex justify-between items-center">
                {/* Logo + Social Icons (always visible) */}
                <div className="flex items-center gap-5 pl-4 md:pl-12">
                    <div className="my-3 font-bold text-2xl md:text-3xl font-Pompiere bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
                        &lt;/&gt;
                    </div>
                    {/* GitHub */}
                    <a href="https://github.com/akshans16" target="_blank" rel="noopener noreferrer">
                        <i className="fa-brands fa-github text-2xl md:text-3xl hover:cursor-pointer transform transition-transform duration-200 hover:scale-110"></i>
                    </a>
                    {/* LinkedIn */}
                    <a href="https://www.linkedin.com/in/akshansh-khare" target="_blank" rel="noopener noreferrer">
                        <i className="fa-brands fa-linkedin text-2xl md:text-3xl hover:cursor-pointer transform transition-transform duration-200 hover:scale-110"></i>
                    </a>
                </div>

                {/* Desktop Menu Items */}
                <div className="hidden md:block">
                    <ul className="flex space-x-6 my-3 mx-6 font-bold text-white ">
                        <li className="hover:text-gray-500 transition-colors duration-300">
                            <a href="#home">Home</a>
                        </li>
                        <li className="hover:text-gray-500 transition-colors duration-300">
                            <a href="#about">About</a>
                        </li>
                        <li className="hover:text-gray-500 transition-colors duration-300">
                            <a href="#resume">Resume</a>
                        </li>
                        <li className="hover:text-gray-500 transition-colors duration-300">
                            <a href="#portfolio">Portfolio</a>
                        </li>
                        <li className="hover:text-gray-500 transition-colors duration-300">
                            <a href="#contact">Contact</a>
                        </li>
                    </ul>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden pr-4">
                    <button
                        ref={buttonRef}
                        onClick={toggleMenu}
                        className="text-white focus:outline-none"
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? (
                            <i className="fa-solid fa-xmark text-3xl"></i>
                        ) : (
                            <i className="fa-solid fa-bars text-3xl"></i>
                        )}
                    </button>
                </div>
            </div>
            {/* Mobile Menu Dropdown - Horizontal Row */}
            <div
                ref={menuRef}
                className={`md:hidden bg-[#262626] w-full transition-all duration-300 ease-in-out overflow-hidden ${
                    isMenuOpen ? "max-h-16 mt-3" : "max-h-0 mt-0"
                }`}
            >
                <ul className="flex justify-around items-center py-3 font-bold text-white">
                    <li className="hover:text-gray-500 transition-colors duration-300">
                        <a href="#home" onClick={() => setIsMenuOpen(false)}>
                            Home
                        </a>
                    </li>
                    <li className="hover:text-gray-500 transition-colors duration-300">
                        <a href="#about" onClick={() => setIsMenuOpen(false)}>
                            About
                        </a>
                    </li>
                    <li className="hover:text-gray-500 transition-colors duration-300">
                        <a href="#resume" onClick={() => setIsMenuOpen(false)}>
                            Resume
                        </a>
                    </li>
                    <li className="hover:text-gray-500 transition-colors duration-300">
                        <a href="#portfolio" onClick={() => setIsMenuOpen(false)}>
                            Portfolio
                        </a>
                    </li>
                    <li className="hover:text-gray-500 transition-colors duration-300">
                        <a href="#contact" onClick={() => setIsMenuOpen(false)}>
                            Contact
                        </a>
                    </li>
                </ul>
            </div>
        </header>
    );
}
