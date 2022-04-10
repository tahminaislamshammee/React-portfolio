import Title from '../title/Title';
import {AiOutlineMail} from 'react-icons/ai'
import {BsMessenger, BsWhatsapp} from 'react-icons/bs'
import './contacts.css'
const Contacts = () => {
    return ( 
        <section id="contact">
            <Title title="contact" subtitle="Get In Touch"/>

            <div className="container contact__container">
                <div className='contact__options'>
                    <article className='contact__option'>
                        <h4><AiOutlineMail className='contact__option-icon'/></h4>
                        <h5>dummy.gmail.com</h5>
                        <a href="mailto:dummy.gmail.com">send a message</a>
                    </article>

                    <article className='contact__option'>
                        <h4><BsMessenger className='contact__option-icon'/></h4>
                        <h5>dummy.gmail.com</h5>
                        <a href="mailto:dummy.gmail.com">send a message</a>
                    </article>

                    <article className='contact__option'>
                        <h4><BsWhatsapp className='contact__option-icon'/></h4>
                        <h5>dummy.gmail.com</h5>
                        <a href="https://api.whatsapp.com/send?phone=+8801916029752" target="_blank">send a message</a>
                    </article>
                </div>
                <form action="">
                    <input type="text" name="name" placeholder='your full name' required/>

                    <input type="email" name="email" placeholder='your email' required/>

                    <textarea name="message" id="" placeholder="your message" rows="7" required></textarea>

                    <button type='submit' className='btn btn-primary'>Send Message</button>
                </form>
            </div>
        </section>
    );
}
 
export default Contacts;