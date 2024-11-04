import React from "react";
import "./App.css";
import Header from "./component/Header.tsx";
import Footer from "./component/Footer.tsx";
import Page from "./pages/page.tsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Services from "./pages/Services.jsx";
import ContactPage from "./component/Contact/ContectPage.jsx";
import AboutPage from "./component/About/AboutPage.tsx";
import Projects from "./component/projectsSection/Projects.jsx";
import Features from "./component/projectsSection/Featuress/Features.jsx";


function App() {
  return (
    <BrowserRouter>
     
        <Header />
        <Routes>
          <Route path="/" element={<Page />} />
          <Route path="/services" element={<Services />} />
          <Route path="/Contact" element={<ContactPage />} /> 
          <Route path="/About" element={<AboutPage />} /> 
          <Route path="/Projects" element={<Projects />} /> 
          <Route path="/Projects/Features" element={<Features />} /> 

        </Routes>
        <Footer />
    </BrowserRouter>
  );
}

export default App;
