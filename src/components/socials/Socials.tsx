import SocialItem from "./sociaItem"

const socilasData = [
    {
        url: "#",
        icon: "bxl-telegram"
    },
    {
        url: "#",
        icon: "bxl-twitter"
    },
    {
        url: "#",
        icon: "bxl-linkedin"
    },
    {
        url: "#",
        icon: "bxl-youtube"
    }
]



const Socials = () => {
    return (
        <div className="text-slate-200 flex p-1">
            {socilasData.map((item) => (
                <SocialItem
                    key={item.icon}
                    icon={item.icon}
                    url={item.url} />
            ))}
        </div>
    )
}

export default Socials