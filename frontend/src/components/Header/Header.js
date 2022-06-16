import { useState, useEffect} from 'react';
import { Link, useResolvedPath, useMatch } from 'react-router-dom';
import './header.css';
import Logo from '../../assets/Logo.png';

export default function Header({ currentState, overlay, height }) {
    const [currentNavbar, setNavbar] = useState(false)
    const [width, setWidth] = useState(window.document.documentElement.clientWidth)

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

    return (
        <div className="header-wrapper" style={currentNavbar ? {zIndex: 100} : {}}>
            <header className="header">
                <div className="logo">
                    <Link to="/"><img src={Logo} alt="" /></Link>
                </div>
                <div onClick={() => showNav()} className={currentNavbar ? "burger burger-active" : "burger"}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <nav className={currentNavbar ? 'navbar nav-active' : 'navbar'} style={width < 1080 ? {minHeight: height} : {minHeight: 'auto'}}>
                    <CustomLink to="/" className='active' onClick={showNav}>HOME</CustomLink>     
                    <CustomLink to="/portfolio" onClick={showNav}>PORTFOLIO</CustomLink>     
                    <CustomLink to="/contact" onClick={showNav}>CONTACT US</CustomLink>     
                </nav>
            </header>
        </div>
    )
}

function CustomLink({ to, children, ...props }) {
    const activePath = useResolvedPath(to)
    const isActive = useMatch({ path: activePath.pathname, end: true })
    return <Link to={to} {...props} className={isActive ? "active" : ""}>{children}</Link>
}