import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from './pages/Home/Home';
import Portfolio from './pages/Portfolio/Portfolio';
import Contact from './pages/Contact/Contact';
import './sass/App.css';
import D from './assets/D.svg';
import { Routes, Route } from 'react-router-dom';
import { useLocation } from 'react-router';
import { useState, useEffect, useCallback, useRef } from "react";

export default function App() {
  const [overlayActive, setOverlay] = useState(false)

  let screenHeight = window.document.documentElement.clientHeight
  const [height, setHeight] = useState(screenHeight)

  const [location, setLocation] = useState()

  const currentState = (navbarState) => {
    setOverlay(navbarState)
  }

  const disableNav = useCallback(() => {
    setOverlay(false)
  }, [])

  const changeLocation = location => {
    setLocation(location)
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
      <Transitioner location={location} />
      <Header changeLocation={changeLocation} currentState={currentState} overlay={overlayActive} height={height} />
      <main>
        <div className={overlayActive ? "overlay active" : "overlay"} onClick={disableNav} onTouchMove={disableNav}></div>
        <ScrollToTop disableNav={disableNav} changeLocation={changeLocation}>
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

const ScrollToTop = ({ children, disableNav, changeLocation }) => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
    disableNav();
  }, [location, disableNav]);

  return <>{children}</>
}

function Transitioner({ location }) {
  const [isActive, setActive] = useState(false)
  const timer = useRef()

  useEffect(() => {
    clearTimeout(timer.current)
    setActive(true)
    timer.current = setTimeout(() => {
      setActive(false)
    }, 500)
  }, [location])

  return (
      <div className="transitioner" style={isActive ? {transform: 'scaleX(100%)', transformOrigin: 'left'} : {transform: 'scaleX(0%)', transformOrigin: 'right'}}>
          <img src={D} alt='' />
      </div>
  )
}