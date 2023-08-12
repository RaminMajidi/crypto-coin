import HomeLanding from "../components/Home/HomeLanding"
import Companies from "../components/Home/Companies"
import CryptoFeaures from "../components/Home/CryptoFeaures"
type Props = {}

const Home = (props: Props) => {
  return (
    <>
      <HomeLanding />
      <Companies />
      <CryptoFeaures />
    </>
  )
}

export default Home