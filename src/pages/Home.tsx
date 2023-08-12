import HomeLanding from "../components/designs/homeLanding/HomeLanding"
import Companies from "../components/designs/companies/Companies"
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