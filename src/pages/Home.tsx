import HomeLanding from "../components/Home/HomeLanding"
import Companies from "../components/Home/Companies"
import CryptoFeaures from "../components/Home/CryptoFeaures"
import TokenSale from "../components/Home/TokenSale"


type Props = {}

const Home = (props: Props) => {
  return (
    <>
      <HomeLanding />
      <Companies />
      <CryptoFeaures />
      <TokenSale/>
    </>
  )
}

export default Home