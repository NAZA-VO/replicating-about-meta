import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./static/Header"
import  Home  from "./pages/Home"
import About from "./pages/About"
import AIglasses from "./pages/AIglasses"


const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Header/>
      
      <Routes>
       <Route path="/" element = {<Home/>}/>
       <Route path="about" element = {<About/>}/>
       <Route path="ai-glasses" element = {<AIglasses/>}/>
      </Routes>
  
      </BrowserRouter>
    </div>
  )
}

export default App