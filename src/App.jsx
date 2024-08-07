import Navbar from "./components/common/Navbar"
import HomePages from "./Pages/HomePages"
import Recipe from "./Pages/Recipe"
import { BrowserRouter as Router, Routes, Route  } from "react-router-dom"

function App() {

  return (
    <>
   <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePages />} />
        <Route path="/recipe" element={<Recipe />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
