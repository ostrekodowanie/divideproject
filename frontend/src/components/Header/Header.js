import { useState, useEffect, useRef } from 'react';
import { Link, useResolvedPath, useMatch } from 'react-router-dom';
import D from '../../assets/D.png';
import DelayLink from '../DelayLink/DelayLink';
import './header.css';
import Logo from '../../assets/Logo.png';

export default function Header({ currentState, overlay, height}) {
    const [currentNavbar, setNavbar] = useState(false)
    const [width, setWidth] = useState(window.document.documentElement.clientWidth)
    const [scrollPosition, setScrollPosition] = useState(0)
    const [location, setLocation] = useState()
    const header = useRef(null)
    const timer = useRef()
    
    const showNav = () => {
        setNavbar(!currentNavbar)
        currentState(!currentNavbar)
    }

    useEffect(() => {
        setNavbar(overlay)
    }, [overlay])

    const widthCallback = () => {
        setWidth(window.document.documentElement.clientWidth)
    }

    useEffect(() => {
        window.addEventListener('resize', widthCallback)
        return () => {
            window.removeEventListener('resize', widthCallback)
        }
    }, [width])

    useEffect(() => {
        const scrollCallback = () => {
            setScrollPosition(window.pageYOffset)
        }
        window.addEventListener('scroll', scrollCallback)
        return () => {
            window.removeEventListener('scroll', scrollCallback)
        }
    }, [scrollPosition])

    useEffect(() => {
        clearTimeout(timer.current)
        header.current.querySelector('.navbar').style.zIndex = '-100'
        timer.current = setTimeout(() => {
            header.current.querySelector('.navbar').style.zIndex = '0'
        }, 500)
    }, [location])
  
    return (
        <div className="header-wrapper" style={currentNavbar ? {zIndex: 100} : {}}>
            <header ref={header} className="header" style={scrollPosition < 100 ? {backgroundColor: 'transparent'} : {backgroundColor: '#181818'}}>
                <Transitioner location={location} />
                <div className="logo">
                    <Link to="/"><img src={Logo} alt="" /></Link>
                </div>
                <div onClick={() => showNav()} className={currentNavbar ? "burger burger-active" : "burger"}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <nav className={currentNavbar ? 'navbar nav-active' : 'navbar'} style={width < 1080 ? {minHeight: height} : {minHeight: 'auto'}}>
                    <CustomLink delay={400} to="/" className='active' onClick={showNav} onDelayStart={() => setLocation('/')}>HOME</CustomLink>     
                    <CustomLink delay={400} to="/portfolio" onClick={showNav} onDelayStart={() => setLocation('/portfolio')}>PORTFOLIO</CustomLink>     
                    <CustomLink delay={400} to="/contact" onClick={showNav} onDelayStart={() => setLocation('/contact')}>CONTACT US</CustomLink>     
                </nav>
            </header>
        </div>
    )
}

function CustomLink({ to, children, ...props }) {
    const activePath = useResolvedPath(to)
    const isActive = useMatch({ path: activePath.pathname, end: true })
    return <DelayLink to={to} {...props} className={isActive ? "active" : ""}>{children}</DelayLink>
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