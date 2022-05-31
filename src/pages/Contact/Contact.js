import './sass/contact.css';
import envelope from '../../assets/Contact/envelope.svg';
import phone from '../../assets/Contact/phone.svg';

export default function Contact({ height }) {
    return (
        <section style={{minHeight: height}} className="section s-contact">
            <h1>CONTACT US</h1>
            <h3>Do you have any <span style={{color: '#3A86FF'}}>questions</span>? Contact us below.</h3>
            <form>
                <div className="form">
                    <div className="input-div">
                        <label for="email">Email address</label>
                        <input type="email" id="email" name='email' placeholder="Type your email" />
                    </div>
                    <div className="input-div">
                        <label for="message">Message</label>
                        <textarea id="message" name='email' placeholder="Type your message" />
                    </div>
                    <button type="submit">Spierdalaj stad kretynska palo</button>
                </div>
            </form>
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
