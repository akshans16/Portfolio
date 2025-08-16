// import Header from "./Components/Header";
// import Info from "./Components/Info";
// import AboutMe from "./Components/AboutMe";
// import Resume from "./Components/Resume";
// import Portfolio from "./Components/Portfolio";
// import Contact from "./Components/Contact";

// function App() {
//     return (
//         <>
//             <div className="flex items-center flex-col gap-10 bg-[#212121] text-white min-h-screen overflow-x-hidden">
//                 <Header />
//                 <Info />
//                 <AboutMe/>
//                 <Resume/>
//                 <Portfolio/>
//                 <Contact/>
//             </div>
//         </>
//     );
// }

// export default App;

import {useRef} from "react";
import Header from "./Components/Header";
import Info from "./Components/Info";
import AboutMe from "./Components/AboutMe";
import Resume from "./Components/Resume";
import Portfolio from "./Components/Portfolio";
import Contact from "./Components/Contact";
import {useIsVisible} from "./hooks/useIsVisible"; // You put your hook in src/hooks/useIsVisible.js

// Wrapper for scroll animations
function SectionWrapper({children}) {
    const ref = useRef();
    const isVisible = useIsVisible(ref);

    // Always preserve layout space, only animate opacity/transform
    return (
        <div className="w-full overflow-hidden flex flex-col justify-center items-center">
            <div
                ref={ref}
                style={{minWidth: 0}}
                className={` w-full  flex flex-col justify-center items-center transition-all ease-in duration-700 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
            >
                {children}
            </div>
        </div>
    );
}

function App() {
    return (
        <div className="overflow-x-hidden flex items-center flex-col bg-[#212121] text-white min-h-screen w-full  mx-auto overflow-x-hidden">
            <Header />
            <SectionWrapper>
                <Info />
            </SectionWrapper>
            <SectionWrapper>
                <AboutMe />
            </SectionWrapper>
            <SectionWrapper>
                <Resume />
            </SectionWrapper>
            <SectionWrapper>
                <Portfolio />
            </SectionWrapper>
            <SectionWrapper>
                <Contact />
            </SectionWrapper>
        </div>
    );
}

export default App;
