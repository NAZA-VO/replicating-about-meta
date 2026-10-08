import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./static/Header"
import About from "./pages/About"
import AIglasses from "./pages/AIglasses"
import MetaQuest from "./pages/MetaQuest"


const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Header/>
      <Routes>
       <Route path="/" element = {<About/>}/>
       <Route path="ai-glasses" element = {<AIglasses/>}/>
       <Route path="meta-quest" element = {<MetaQuest/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App