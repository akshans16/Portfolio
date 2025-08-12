// function AboutMe() {
//     return (
//         <>
//             <div id="about" className=" w-[65%] h-[400px]  flex bg-[#262626] scroll-mt-[80px]">
//                 {/* About section */}
//                 <div className="flex flex-col gap-8 w-1/2 p-8">
//                     <h3 className="text-3xl font-bold font-Pompiere bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
//                         About Me
//                     </h3>

//                     <h1 className="font-bold text-5xl">I am a Web Developer</h1>

//                     <p className="overflow-hidden ">
//                         I work with Java, Spring Boot, SQL, React, HTML, CSS, and JS. Cooking up new ideas and
//                         making tech do cool things. Big fan of solving weird bugs.
//                         <b> Always experimenting, always building, always learning.</b>
//                     </p>
//                 </div>
//                 {/* Image */}
//                 <div className="w-1/2 h-full ">
//                     <img
//                         src="src/assets/png/developerImg.gif"
//                         alt="Developer Image"
//                         className="w-full h-full object-cover"
//                     />
//                 </div>
//             </div>
//         </>
//     );
// }
// export default AboutMe;


// Responsive Code 

function AboutMe() {
    return (
        <div id="about" className="w-full md:w-[65%] h-auto md:h-[400px] flex flex-col md:flex-row bg-[#262626] scroll-mt-[80px]">
            {/* Text Content - Top on mobile, left on desktop */}
            <div className="flex flex-col gap-4 md:gap-4 w-full md:w-1/2 p-6 md:p-8">
                <h3 className="text-2xl md:text-3xl font-bold font-Pompiere bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
                    About Me
                </h3>

                <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl">
                    I am a Web Developer
                </h1>

                <p className="text-base md:text-lg">
                    I work with Java, Spring Boot, SQL, React, HTML, CSS, and JS. Cooking up new ideas and
                    making tech do cool things. Big fan of solving weird bugs.
                    <b className="block mt-2"> Always experimenting, always building, always learning.</b>
                </p>
            </div>
            
            {/* Image - Bottom on mobile, right on desktop */}
            <div className="w-full md:w-1/2 h-64 md:h-full p-5">
                <img
                    src="src/assets/png/developerImg.gif"
                    alt="Developer Image"
                    className="w-full h-full object-cover"
                />
            </div>
        </div>
    );
}
export default AboutMe;