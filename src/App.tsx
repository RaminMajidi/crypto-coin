import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home"
import Layout from "./components/Layout";




const App = () => {

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Layout>

    </BrowserRouter>
  )
}

export default App
