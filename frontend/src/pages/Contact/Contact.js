import './sass/contact.css';
import envelope from '../../assets/Contact/envelope.svg';
import phone from '../../assets/Contact/phone.svg';
import send from '../../assets/Contact/send.svg';
import emailjs from '@emailjs/browser';
import { useState, useRef, useEffect } from 'react';

export default function Contact({ height }) {
    return (
        <section style={{minHeight: height}} className="section s-contact">
            <h1>CONTACT US</h1>
            <h3>Do you have any <span style={{color: '#3A86FF'}}>questions</span>? Contact us below.</h3>
            <ContactForm />
            <div className="horizontal-line"></div>
            <div className="contact-info">
                <div><img src={envelope} alt="" /><span>divideproject.business@gmail.com</span></div>
                <div>
                    <img src={phone} alt="" />
                    <span>+48 790-541-511</span>
                    <span>+48 666-278-116</span>
                </div>
            </div>
        </section>
    )
}

function ContactForm() {
    const form = useRef();
    const [status, setStatus] = useState('')
    const [emailText, setEmailText] = useState('')
    const [messageText, setMessageText] = useState('')

    const handleSubmit = e => {
        e.preventDefault();
        setStatus('Sending...')
        console.log(status)
        emailjs.sendForm('service_qwy9ukk', 'template_jbqh8vm', form.current, 'i1vA2ABNAGWOSY4Qd')
            .then(() => {
                setStatus('An email has been sent.')
                setEmailText('')
                setMessageText('')
                console.log(status)
            }, (error) => {
                setEmailText('')
                setMessageText('')
                console.log(error)
            });
        
    }


    return (
        <form ref={form} onSubmit={handleSubmit}>
            <div className="form">
                <div className="input-div">
                    <label htmlFor="email">Email address</label>
                    <input type="email" id="email" name='email' required value={emailText} onChange={e => setEmailText(e.target.value)} placeholder="Type your email" />
                </div>
                <div className="input-div">
                    <label htmlFor="message">Message</label>
                    <textarea id="message" name='message' required value={messageText} onChange={e => setMessageText(e.target.value)} placeholder="Type your message" />
                </div>
                <div className="send">
                    <button type="submit">Send<img src={send} alt="" /></button>
                    <div className="alert" style={status === 'Sending...' ? {color: 'white'} : status === 'An email has been sent.' ? {color: 'green'} : {color: 'red'}}>{status}</div>
                </div>
            </div>
        </form>
    )
}
