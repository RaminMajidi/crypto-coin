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
        <>
            {socilasData.map((item) => (
                <SocialItem
                    key={item.icon}
                    icon={item.icon}
                    url={item.url} />
            ))}
        </>
    )
}

export default Socials