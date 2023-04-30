import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import NewProject from "./components/pages/NewProject";
import Company from "./components/pages/Company";
import Contact from "./components/pages/Contact";
import Projects from "./components/pages/Projects";

import Navbar from "./layouts/Navbar";
import Footer from './layouts/Footer'

function App() {
  return (
    <Router>
      <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Navbar/>

      <div style={{ flex: 1 }}>
      <Routes>
       
        <Route exact path="/" element={<Home />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/projects" element={<Projects />} />
        <Route exact path="/NewProject" element={<NewProject />} />
        <Route exact path="/company" element={<Company />} />
      
      </Routes>
      </div>
      <Footer/>
      </div>
    </Router>
  );
}

export default App;