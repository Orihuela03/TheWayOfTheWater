import { BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "../pages/Home.jsx"
import Fotos from "../pages/fotos/Fotos.jsx"
import AboutUs from "../pages/aboutus/AboutUs.jsx"

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/fotos" element={<Fotos />} />
      <Route path="/aboutus" element={<AboutUs />} />
      <Route path="*" element={<Home />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
