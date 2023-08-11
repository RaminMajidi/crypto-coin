import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home"
import Layot from "./components/Layot";




const App = () => {

  return (
    <BrowserRouter>
      <Layot>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Layot>

    </BrowserRouter>
  )
}

export default App
