import HomeLanding from "../components/Home/HomeLanding"
import Companies from "../components/Home/Companies"
import CryptoFeaures from "../components/Home/CryptoFeaures"
import TokenSale from "../components/Home/TokenSale"
import { NavContext } from "../context/NavActiveContext"
import { useContext } from "react"

type Props = {}

const Home = (props: Props) => {

  const { setNavActive } = useContext(NavContext)
  setNavActive("home")

  return (
    <>
      <HomeLanding />
      <Companies />
      <CryptoFeaures />
      <TokenSale />
    </>
  )
}

export default Home