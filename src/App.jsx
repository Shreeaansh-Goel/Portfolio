import React, { useState, useEffect } from "react";
import Preloader from "./component/pre.jsx";
import NavbarP from "./component/NavbarP.jsx";
import Home from "./component/Home/Home";
import About from "./component/About/About";
import Projects from "./component/Projects/Projects.jsx";
import Footer from "./component/footer.jsx";
import { BrowserRouter as Router, Routes,Route  } from "react-router-dom";
import scroll from "./component/scroll";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"} >
        <NavbarP />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="*" element={<Navigate to="/"/>} /> */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;