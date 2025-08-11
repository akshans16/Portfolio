export default function Header() {
    return (
        <header className="fixed top-0 left-0 w-full h-auto bg-[#262626] z-1">
            <div className="flex place-content-between">
                {/* Logo + Github + LinkedIn */}
                <div className="flex items-center justify-center gap-5">
                    <div className="ml-12 my-3 font-bold  text-3xl font-Pompiere bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
                        &lt;/&gt;
                    </div>
                    {/* Github */}
                    <div>
                        <a href="https://github.com/akshans16" target="_blank" rel="noopener noreferrer">
                            <i className="fa-brands fa-github my-3 text-3xl hover:cursor-pointer transform transition-transform duration-200 hover:scale-110"></i>
                        </a>
                    </div>
                    {/* LinkedIn */}
                    <div>
                        <a href="https://www.linkedin.com/in/akshansh-khare" target="_blank" rel="noopener noreferrer">
                            <i className="fa-brands fa-linkedin my-3 text-3xl hover:cursor-pointer transform transition-transform duration-200 hover:scale-110"></i>
                        </a>
                    </div>
                </div>

                {/* Menu Items */}
                <div>
                    <ul className="flex space-x-6 my-3 mx-6 font-bold text-white text-gray-950 hover:cursor-pointer ">
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
            </div>
        </header>
    );
}
