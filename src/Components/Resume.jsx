function Resume() {
    return (
        <>
            <div
                id="resume"
                className="w-full h-auto bg-[#232323] flex flex-col items-center p-5 gap-10 scroll-mt-[80px] md:w-[90%] lg:w-[65%] "
            >
                {/* Resume Heading */}

                <div className=" text-2xl font-bold font-Pompiere bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
                    My Resume
                </div>

                {/* Skills + Education Container */}
                <div className="flex flex-col justify-center h-full w-full gap-4  md:flex-row ">
                    {/* Skills */}
                    <div className="flex flex-col gap-15 justify-center  w-full ">
                        <div className="flex gap-4 justify-center">
                            <img src="png/stack.png" alt="Stack Icon" className="w-[32px]" />
                            <h3 className="text-2xl font-bold font-Pompiere text-[#f49108] text-center">Tech Stack</h3>
                        </div>

                        <div className="flex flex-col gap-10 items-center justify-center w-full h-full mb-10 ">
                            {/* Row - 1 */}
                            <div className="flex gap-10">
                                <div className="flex flex-col items-center gap-2">
                                    <img src="png/html.png" alt="html png" />
                                    <span>HTML</span>
                                </div>
                                <div className="flex flex-col items-center gap-2">
                                    <img src="png/css.png" alt="css png" />
                                    <span>CSS</span>
                                </div>
                                <div className="flex flex-col items-center gap-2">
                                    <img src="png/javascript.png" alt="js png" />
                                    <span>JavaScript</span>
                                </div>
                            </div>
                            {/* Row - 2 */}
                            <div className="flex gap-10">
                                <div className="flex flex-col items-center gap-2">
                                    <img src="png/java.png" alt="java png" />
                                    <span>Java</span>
                                </div>
                                <div className="flex flex-col items-center gap-2">
                                    <img src="png/sql.png" alt="sql png" />
                                    <span>SQL</span>
                                </div>
                                <div className="flex flex-col items-center gap-2">
                                    <img src="png/react.png" alt="react png" />
                                    <span>React</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div />
                    {/* Education */}
                    <div className="flex flex-col justify-center  w-full gap-15  ">
                        <div className="flex gap-4 justify-center">
                            <img src="png/education.png" alt="Eduation Icon" className="w-[32px]" />
                            <h3 className="text-2xl font-bold font-Pompiere text-[#f49108] text-center">Education</h3>
                        </div>

                        {/* Education Items Container 👇 */}
                        <div className="flex flex-col gap-10 items-start  w-full h-full">
                            {/* Education Item 1 */}
                            <div className="flex items-start gap-4">
                                {/* Arrow box */}
                                <div className="bg-yellow-400 text-black font-bold px-4 w-28 text-sm clip-arrow h-8 flex items-center justify-center whitespace-nowrap">
                                    2024-2026
                                </div>

                                {/* Text */}
                                <div>
                                    <p className="font-semibold">Oriental Institute Of Technology</p>
                                    <p className="text-sm text-gray-300">
                                        Bhopal, Computer-Application Master's Program
                                    </p>
                                </div>
                            </div>

                            {/* Education Item 2 */}
                            <div className="flex items-start gap-4">
                                <div className="bg-yellow-400 text-black font-bold px-4 w-28 text-sm clip-arrow h-8 flex items-center justify-center whitespace-nowrap">
                                    2021-2024
                                </div>

                                <div>
                                    <p className="font-semibold">MCBU University</p>
                                    <p className="text-sm text-gray-300">Chhatarpur, Bachelor's in Computer Science</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Resume;
