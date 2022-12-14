import React from 'react';
import './App.css';

import { Route, Routes} from "react-router-dom";

// IMPORT COMPONENTS
import Header from "./components/Header";
import Footer from "./components/Footer";

// IMPORT PAGES
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";


function App() {

const URL = 'https://benbakerportfolio.herokuapp.com/'
  return (
    <div className="App">
    <Header URL={URL} key={Footer}/>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/projects" element={<Projects URL={URL} key={Projects.index} />} />
        <Route path="/about" element={<About URL={URL} />} />
      </Routes>
      <Footer className="footer-container" URL={URL}/>
    </div>
  );
}

export default App;
