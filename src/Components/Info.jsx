// import TextType from "./TextType";

// function Info() {
    
//     return (
//         <div
//             id="home"
//             className="w-[65%] min-h-6xl bg-[#262626] flex justify-around rounded-xs p-10 mt-25 gap-30 scroll-mt-[80px]"
//         >
//             {/* Heading Section */}
//             <div className="flex flex-col gap-8 ">
//                 {/* Text Animation (I am Akshansh) */}
//                 <TextType
//                     text={["I AM AKSHANSH"]}
//                     typingSpeed={75}
//                     pauseDuration={1500}
//                     showCursor={true}
//                     cursorCharacter="_"
//                     className="text-3xl font-bold"
//                 />

//                 {/* Heading -> Web Developerr */}
//                 <div className="text-5xl font-bold font-Pompiere bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
//                     WEB DEVELOPER
//                 </div>
//                 <div>
//                     <a href="#contact">
//                         <button className="bg-gradient-to-r from-orange-500 to-pink-500 rounded p-2 text-lg font-bold text-white hover:cursor-pointer active:scale-95 transition-transform duration-150 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-pink-500">
//                             Contact Me
//                         </button>
//                     </a>
//                 </div>
//             </div>
//             {/* Image */}
//             <div className="p-[3px] rounded-full bg-gradient-to-r from-orange-500 to-pink-500">
//                 <img
//                     src="src/assets/png/Profile.png"
//                     alt="Developer Profile"
//                     className="h-[200px] w-[200px] object-cover rounded-full"
//                 />
//             </div>
//         </div>
//     );
// }
// export default Info;


//  Responsive design 📱
import TextType from "./TextType";

function Info() {
    return (
        <div
            id="home"
            className="w-full md:w-[65%] min-h-6xl bg-[#262626] flex flex-col md:flex-row items-center justify-between rounded-xs p-6 md:p-10 mt-16 md:mt-25 gap-8 md:gap-30 scroll-mt-[80px]"
        >
            {/* Content Section - Order changes on mobile */}
            <div className="flex flex-col items-center md:items-start gap-6 md:gap-8 text-center md:text-left order-2 md:order-1">
                {/* Text Animation (I am Akshansh) */}
                <TextType
                    text={["I AM AKSHANSH"]}
                    typingSpeed={75}
                    pauseDuration={1500}
                    showCursor={true}
                    cursorCharacter="_"
                    className="text-2xl md:text-3xl font-bold"
                />

                {/* Heading -> Web Developer */}
                <div className="text-4xl md:text-5xl font-bold font-Pompiere bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
                    WEB DEVELOPER
                </div>
                
                <div>
                    <a href="#contact">
                        <button className="bg-gradient-to-r from-orange-500 to-pink-500 rounded p-2 text-base md:text-lg font-bold text-white hover:cursor-pointer active:scale-95 transition-transform duration-150 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-pink-500">
                            Contact Me
                        </button>
                    </a>
                </div>
            </div>

            {/* Profile Image - Now at the top on mobile */}
            <div className="p-[3px] rounded-full bg-gradient-to-r from-orange-500 to-pink-500 flex-shrink-0 order-1 md:order-2">
                <div className="w-40 h-40 md:w-48 md:h-48">
                    <img
                        src="src/assets/png/Profile.png"
                        alt="Developer Profile"
                        className="w-full h-full object-cover rounded-full"
                    />
                </div>
            </div>
        </div>
    );
}
export default Info;