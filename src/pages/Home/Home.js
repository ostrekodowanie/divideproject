import './sass/home.css';
import arrowDown from '../../assets/Home/arrow-down.png'
import www from '../../assets/Home/WWW.png'
import advOne from '../../assets/Home/adv1.png'
import advTwo from '../../assets/Home/adv2.png'
import buttonArrow from '../../assets/Home/button-arrow.png'
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
    return (
        <section className="section s-landing" style={{minHeight: height}}>
            <div className="main-titles">
                <h1>We create website experiences.</h1>
                <h2>Get the website you would expect to have.</h2>
                <div className="main-buttons">
                    <Link to="/contact-us">CONTACT US<img src={buttonArrow} alt="" /></Link>
                    <Link to="/portfolio">VIEW PORTFOLIO</Link>
                </div>
            </div>
            <Link to="/" className="arrow-down"><img src={arrowDown} alt='' /></Link>
        </section>
    )
}

function Description() {
    const desc = useRef(null)
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
                <p>We create professionally made websites that can be the future of your brands. Your project is the most important part of our company.</p>
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
                    <p>As a result of that we have gained a deep understanding of the most of the web concepts out there and we are able to create estetic and accessible layouts with our knowledge.</p>
                </div>
                <div className="advantage-div">
                <img src={advTwo} alt="" />
                    <h2>Our abilities</h2>
                    <p>Our capabilities allow us to create a website that is fully tailored to the needs of your Company.</p>
                </div>
            </div>
        </section>
    )
}