import HomeLanding from "../components/Home/HomeLanding"
import Companies from "../components/Home/Companies"
import CryptoFeaures from "../components/Home/CryptoFeaures"
import TokenSale from "../components/Home/TokenSale"
import { NavContext } from "../context/NavActiveContext"
import { useContext, useEffect } from "react"
import { Suspense } from "react"
import Loading from "../components/designs/loading/Index"


const Home = () => {

  const { setNavActive } = useContext(NavContext)
  useEffect(() => {
    setNavActive("home")
  }, [])
  return (
    <>
      <Suspense fallback={<Loading />}>
        <HomeLanding />
        <Companies />
        <CryptoFeaures />
        <TokenSale />
      </Suspense>

    </>
  )
}

export default Home