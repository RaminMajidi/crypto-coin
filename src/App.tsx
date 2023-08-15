import React from "react"
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home"
import Coins from "./pages/Coins";
import Exchanges from "./pages/Exchanges";
import Layout from "./components/Layout";
import Coin from "./pages/Coin";
import { NavContext, NavType } from "./context/NavActiveContext";

const App = () => {

  const [navActive, setNavActive] = React.useState<NavType>("");

  return (
    <NavContext.Provider value={{ navActive, setNavActive }}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/coins" element={<Coins />} />
            <Route path='/coins/:coinId' element={<Coin />} />
            <Route path='/exchanges' element={<Exchanges />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </NavContext.Provider>

  )
}

export default App
