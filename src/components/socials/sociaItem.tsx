
type Props = {
    url: string;
    icon: string;
}

const SocialItem = ({ icon, url }: Props) => {
    return (
        <a
            className=" w-10 h-10 bg-slate-400 hover:bg-[--c-secondry]
            mx-1 my-2 flex justify-center items-center p-1 rounded-full transition  "
            href={url} target="_blank">
            <i className={`bx ${icon} text-xl`}></i>
        </a>
    )
}

export default SocialItem