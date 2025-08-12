import CustomCard from "./CustomCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Portfolio() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3, // desktop
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024, // <= 1024px
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768, // <= 768px (tablets)
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480, // <= 480px (phones)
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: false,
                },
            },
        ],
    };

    return (
        <div
            id="portfolio"
            className="portfolio  w-full md:w-[65%] min-h-auto bg-[#232323] flex flex-col items-center p-5 gap-5 scroll-mt-[80px]"
        >
            {/* Portfolio Heading */}
            <div className=" text-2xl font-bold font-Pompiere bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
                My Portfolio
            </div>
            {/* Container for heading (Recent Projects) */}
            <div className="flex justify-between space-around w-full min-h-auto p-4">
                <div className="flex gap-4">
                    <img src="png/project.png" alt="Projecs Icon" className="w-[32px]" />
                    <h3 className="text-2xl font-bold text-[#f49108]">Recent Projects</h3>
                </div>
            </div>

            {/* Project Cards Container */}
            <div className="w-full h-auto pt-0 px-6 pb-10 ">
                <Slider {...settings}>
                    {data.map((d) => (
                        <CustomCard image={d.image} title={d.title} text={d.text} />
                    ))}
                </Slider>
            </div>
        </div>
    );
}

// Data to be filled in custom cards
const data = [
    {
        title: `Project One`,
        image: `https://i.pinimg.com/1200x/17/1e/3f/171e3f199d666a40620fd6bf046ac489.jpg`,
        text: `This is a brief description of project one. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, deleniti?Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, dicta.`,
    },
    {
        title: `Project Two`,
        image: `https://i.pinimg.com/736x/1a/8d/ce/1a8dce1eec85cef8d1855ff3f85557cd.jpg`,
        text: `This is a brief description of project two.`,
    },
    {
        title: `Project Three`,
        image: `https://i.pinimg.com/736x/1a/8d/ce/1a8dce1eec85cef8d1855ff3f85557cd.jpg`,
        text: `This is a brief description of project three.`,
    },
    {
        title: `Project Four`,
        image: `https://i.pinimg.com/736x/1a/8d/ce/1a8dce1eec85cef8d1855ff3f85557cd.jpg`,
        text: `This is a brief description of project four.`,
    },
    {
        title: `Project Five`,
        image: `https://i.pinimg.com/736x/1a/8d/ce/1a8dce1eec85cef8d1855ff3f85557cd.jpg`,
        text: `This is a brief description of project five.`,
    },
];

export default Portfolio;
