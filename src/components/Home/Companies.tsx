import { Link } from "react-router-dom"
import Tooltip from "../designs/tooltip/Tooltip"

const companiesData = [
    {
        title: "UiDesk",
        img: "/images/uideck.svg",
        url: "#"
    },
    {
        title: "PlainAdmin",
        img: "/images/PlainAdmin.svg",
        url: "#"
    },
    {
        title: "TailGrids",
        img: "/images/TailGrids.svg",
        url: "#"
    },
    {
        title: "LineIcons",
        img: "/images/LineIcons.svg",
        url: "#"
    },
    {
        title: "AyroUI",
        img: "/images/AyroUI.svg",
        url: "#"
    }
]


const Companies = () => {
    return (
        <div className="w-[96%] border-[var(--c-text)] mb-2 border-b-2 border-t-2 mx-auto py-10 ">
            <h3 className="text-center mb-8 text-lg font-bold md:text-2xl">
                Join the 20,000+ companies using the our platform
            </h3>
            <div className="flex  flex-wrap justify-center items-center">
                {companiesData.map(item => (
                    <div key={item.title} className="group 
                     relative mx-2 md:mx-4 my-4">
                        <Tooltip title={item.title} />
                        <Link to={item.url} target="_blank">
                            <img
                                className=" group"
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