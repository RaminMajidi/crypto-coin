import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import DarkSwitch from "./designs/toggleSwitch/DarkSwitch";
import { NavContext } from "../context/NavActiveContext";


const Navbar = () => {
  const { navActive } = useContext(NavContext)
  const navigate = useNavigate();

  return (
    <header className='w-full fixed top-0 left-0
    flex justify-between items-center
     px-2 py-1 h-[10dvh] bg-glass z-50'>
      <div className="hidden sm:block w-36 h-2/3 p-1">
        <img
          className="w-full h-full cursor-pointer"
          src="/images/logo.png" />
      </div>
      <nav className="text-lg flex justify-around">
        <button
          onClick={() => navigate("")}
          type="button"
          className={`${navActive === "home" ? "text-[var(--c-secondry)] font-semibold"
            : ""} mx-2 hover:text-blue-500 transition`}>
          HOME
        </button>

        <button
          onClick={() => navigate("coins")}
          type="button"
          className={`${navActive === "coins" ? "text-[var(--c-secondry)] font-semibold"
            : ""} mx-2 hover:text-blue-500 transition`}>
          COINS
        </button>
      </nav>
      <div className="mx-1">
        <DarkSwitch />
      </div>
    </header>
  )
}

export default Navbar