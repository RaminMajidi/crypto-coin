import { Link } from "react-router-dom"
import Tooltip from "../tooltip/Tooltip"

const companiesData = [
    {
        title: "UiDesk",
        img: "/images/uideck-white.svg",
        url: "#"
    },
    {
        title: "PlainAdmin",
        img: "/images/PlainAdmin-white.svg",
        url: "#"
    },
    {
        title: "TailGrids",
        img: "/images/TailGrids-white.svg",
        url: "#"
    },
    {
        title: "LineIcons",
        img: "/images/LineIcons-white.svg",
        url: "#"
    },
    {
        title: "AyroUI",
        img: "/images/AyroUI-white.svg",
        url: "#"
    }
]


const Companies = () => {
    return (
        <div className="w-[96%] border-b-2 border-t-2 mx-auto py-10">
            <h3 className="text-center mb-8 text-lg font-bold md:text-2xl">
                Join the 20,000+ companies using the our platform
            </h3>
            <div className="flex  flex-wrap justify-center items-center">
                {companiesData.map(item => (
                    <div className="group relative mx-2 md:mx-4 my-4">
                        <Tooltip title={item.title} />
                        <Link to={item.url} target="_blank">
                            <img
                                className="w-full group"
                                src={item.img}
                                alt={item.title} />
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Companies