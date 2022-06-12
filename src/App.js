import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from './pages/Home/Home';
import Portfolio from './pages/Portfolio/Portfolio';
import Contact from './pages/Contact/Contact';
import './sass/App.css';
import { Routes, Route } from 'react-router-dom';
import { useLocation } from 'react-router';
import { useState, useEffect } from "react";

export default function App() {
  const [overlayActive, setOverlay] = useState(false)

  let screenHeight = window.document.documentElement.clientHeight
  const [height, setHeight] = useState(screenHeight)

  const currentState = (navbarState) => {
    setOverlay(navbarState)
  }

  const disableNav = () => {
    setOverlay(false)
  }
  
  const heightCallback = () => {
      screenHeight = window.document.documentElement.clientHeight
      setHeight(screenHeight)
  }

  useEffect(() => {
      window.addEventListener('resize', heightCallback)
      return () => {
          window.removeEventListener('resize', heightCallback)
      }
  })

  return (
    <div className="wrapper">
      <Header currentState={currentState} overlay={overlayActive} height={height} />
      <main>
        <div className={overlayActive ? "overlay active" : "overlay"} onClick={disableNav} onTouchMove={disableNav}></div>
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Home overlay={overlayActive} height={height} />} />
            <Route path="/portfolio" element={<Portfolio overlay={overlayActive} height={height} />} />
            <Route path="/contact" element={<Contact overlay={overlayActive} height={height} />} />
          </Routes>
        </ScrollToTop>
      </main>
      <Footer />
    </div>
  );
}

const ScrollToTop = (props) => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return <>{props.children}</>
}