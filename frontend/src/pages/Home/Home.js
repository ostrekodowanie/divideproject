import './sass/home.css';
import arrowDown from '../../assets/Home/arrow-down.png'
import www from '../../assets/Home/WWW.png'
import advOne from '../../assets/Home/adv1.png'
import advTwo from '../../assets/Home/adv2.png'
import buttonArrow from '../../assets/Home/button-arrow.png'
import Logo from '../../assets/Logo.png';
import { Link } from "react-router-dom";
import gsap, {Power1} from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef, useEffect } from 'react';

export default function Home({height}) {
    return (
        <>
            <Landing height={height} />
            <Description />
            <Advantages />
        </>
    )
}

function Landing({ height }) {
    const title = useRef(null)
    const buttons = useRef(null)

    useEffect(() => {
        let lines = title.current.querySelectorAll('.line')
        let delayCounter = lines.length
        lines.forEach(line => {
            line.classList.remove('line-active')
            line.classList.add('line-active')
            buttons.current.classList.remove('active')
            buttons.current.classList.add('active')
            delayCounter--
            line.style.transitionDelay = `calc(150ms * ${delayCounter})`
        })
    }, [])

    return (
        <section className="section s-landing" style={{minHeight: height}}>
            <div className="main-titles">
                <h1 ref={title}>
                    <span className="line-wrapper"><span className="line">We create website </span></span> 
                    <span className="line-wrapper"><span className="line">experiences.</span></span>
                </h1>
                <div ref={buttons} className="main-buttons">
                    <Link to="/contact">START A PROJECT<img src={buttonArrow} alt="" /></Link>
                    <Link to="/portfolio"><span>VIEW PORTFOLIO</span><div className='button-background'></div></Link>
                </div>
            </div>
            <div className="landing-logo">
                <Link to="/"><img src={Logo} alt="" /></Link>
            </div>
            <Link to="/" className="arrow-down"><img src={arrowDown} alt='' /></Link>
        </section>
    )
}

function Description() {
    const desc = useRef()
    gsap.registerPlugin(ScrollTrigger)

    useEffect(() => {
        gsap.to(':root', {
            '--custom-width': '100%',
            ease: Power1.easeOut,
            duration: 1,
            scrollTrigger: {
                trigger: desc.current,
                start: 'top center'
            }
        })
    }, [])

    return (
        <section className="section s-description">
            <div ref={desc} className="description">
                <img src={www} alt="" />
                <p>We create professional, dynamic and responsive websites fully adapted to the needs of your business or project. We would like to invite you to cooperate with us.</p>
            </div>
        </section>
    )
}

function Advantages() {
    return (
        <section className="section s-advantages">
            <div className="advantages-grid">
                <div className="advantage-div">
                    <img src={advOne} alt="" />
                    <h2>We are self studied</h2>
                    <p>As a result of that we have gained a deep understanding of the most web concepts out there and we are able to create estetic and accessible layouts with our knowledge.</p>
                </div>
                <div className="advantage-div">
                <img src={advTwo} alt="" />
                    <h2>Our abilities</h2>
                    <p>Our capabilities allow us to create a website that is fully tailored to the needs of your company.</p>
                </div>
            </div>
        </section>
    )
}