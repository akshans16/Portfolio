import Header from "./Components/Header";
import Info from "./Components/Info";
import AboutMe from "./Components/AboutMe";
import Resume from "./Components/Resume";
import Portfolio from "./Components/Portfolio";
import Contact from "./Components/Contact";

function App() {
    return (
        <>
            <div className="flex items-center flex-col gap-10 bg-[#212121] text-white min-h-screen">
                <Header />
                <Info />
                <AboutMe/>
                <Resume/>
                <Portfolio/>
                <Contact/>
            </div>
        </>
    );
}

export default App;
