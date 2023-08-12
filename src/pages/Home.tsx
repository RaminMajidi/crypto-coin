import HomeLanding from "../components/Home/HomeLanding"
import Companies from "../components/Home/Companies"
type Props = {}

const Home = (props: Props) => {
  return (
    <>
      <HomeLanding />
      <Companies />
    </>
  )
}

export default Home