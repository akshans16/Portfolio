import TextType from "./TextType";

function Info() {
    
    return (
        <div
            id="home"
            className="w-[65%] min-h-6xl bg-[#262626] flex justify-around rounded-xs p-10 mt-25 gap-30 scroll-mt-[80px]"
        >
            {/* Heading Section */}
            <div className="flex flex-col gap-8 ">
                {/* Text Animation (I am Akshansh) */}
                <TextType
                    text={["I AM AKSHANSH"]}
                    typingSpeed={75}
                    pauseDuration={1500}
                    showCursor={true}
                    cursorCharacter="_"
                    className="text-3xl font-bold"
                />

                {/* <div className="text-3xl ">I AM AKSHANSH</div> */}
                <div className="text-5xl font-bold font-Pompiere bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
                    WEB DEVELOPER
                </div>
                <div>
                    <a href="#contact">
                        <button className="bg-gradient-to-r from-orange-500 to-pink-500 rounded p-2 text-lg font-bold text-white hover:cursor-pointer active:scale-95 transition-transform duration-150 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-pink-500">
                            Contact Me
                        </button>
                    </a>
                </div>
            </div>
            {/* Image */}
            <div className="p-[3px] rounded-full bg-gradient-to-r from-orange-500 to-pink-500">
                <img
                    src="src/assets/png/Profile.png"
                    alt="Developer Profile"
                    className="h-[200px] w-[200px] object-cover rounded-full"
                />
            </div>
        </div>
    );
}
export default Info;
