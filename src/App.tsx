import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home"
import Coins from "./pages/Coins";
import Layout from "./components/Layout";
import Coin from "./pages/Coin";




const App = () => {

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/coins" element={<Coins />} >
          <Route path=':coinId' element={<Coin />} />
          </Route>
        </Routes>
      </Layout>

    </BrowserRouter>
  )
}

export default App
