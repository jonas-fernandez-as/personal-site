import { HashRouter, Link, Route, Routes } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Main from "./Main";
import Projects from "./Pojects";



export default function Router(){
    return(
 <HashRouter>
  <Routes>
          <Route index element={<Main/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/projects" element={<Projects/>}/>
          <Route path="/contact" element={<Contact/>}/>
      </Routes>
 </HashRouter>
  )

}