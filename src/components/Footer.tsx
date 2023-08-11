import Socials from "./socials/Socials"
import { Link } from "react-router-dom"


const Footer = () => {
  return (
    <footer className="w-full relative px-3 py-6 grid
     grid-cols-12 gap-2  border">
      <article className="col-span-12 md:col-span-4">
        <div className="w-2/3 p-2">
          <img
            className="w-full"
            src="/images/logo.png"
            loading="lazy"
            alt="logo" />
        </div>
        <div className=" p-2">
          <p className="text-slate-300 text-justify p-1">
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Nam vitae quam nec ante
            fringilla vel at erat convallis elit.
          </p>
        </div>
        <div>
          <Socials />
        </div>
      </article>

      <article className="col-span-12 md:col-span-4 px-3">
        <h3 className="text-3xl mb-2 ">Quick Links</h3>
        <div className="flex flex-col gap-2">
          <Link
            className="text-blue-500 text-lg"
            to={"/"}>
            CryptoCoin
          </Link>
          <Link
            className="text-blue-500 text-lg"
            to={"/signin"}>
            Sign in
          </Link>
          <Link
            className="text-blue-500 text-lg"
            target="_blank"
            to={"https://www.coingecko.com/en/api/documentation"}>
            CryptoApi
          </Link>
          <Link
            className="text-blue-500 text-lg"
            target="_blank"
            to={"https://www.coingecko.com/en/news"}>
            CryptoNews
          </Link>


        </div>

      </article>

      <article className="col-span-12 md:col-span-4 border">

      </article>


    </footer>
  )
}

export default Footer