import { useState } from "react"
import { useNavigate } from "react-router-dom"
import DarkSwitch from "./designs/toggleSwitch/DarkSwitch";


const Navbar = () => {

  const navigate = useNavigate();
  const [active, setActive] = useState<string>('');

  function navigateHndler(value: string) {
    navigate(`/${value}`)
    setActive(value);
  }

  return (
    <header className='w-full fixed top-0 left-0
    flex justify-between items-center px-2 py-1 h-[10dvh] bg-glass'>
      <div className="w-36 h-2/3 p-1">
        <img
          className="w-full h-full cursor-pointer"
          src="/images/logo.png" />
      </div>
      <nav className="text-lg flex justify-around">
        <button
          onClick={() => navigateHndler("")}
          type="button"
          className={`${active === "" ? "text-[var(--c-secondry)] font-bold"
            : ""} mx-2 hover:text-blue-500 transition`}>
          HOME
        </button>

        <button
          onClick={() => navigateHndler("NFT")}
          type="button"
          className={`${active === "NFT" ? "text-[var(--c-secondry)] font-bold"
            : ""} mx-2 hover:text-blue-500 transition`}>
          NFT
        </button>

        <button
          onClick={() => navigateHndler("NEWS")}
          type="button"
          className={`${active === "NEWS" ? "text-[var(--c-secondry)] font-bold"
            : ""} mx-2 hover:text-blue-500 transition`}>
          NEWS
        </button>
        <div className="mx-1">
          <DarkSwitch />
        </div>
      </nav>
    </header>
  )
}

export default Navbar