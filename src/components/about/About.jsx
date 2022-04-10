import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {BsFolderCheck} from "react-icons/bs"
import './about.css'
import Title from '../title/Title'
const About = () => {
    return ( 
        <section id="about">

           <Title subtitle="About Me" title="Get To Know"/>

           <div className="container about__container">
               <div className="about__me">
                   <div className="about__me-img">
                       <img src={ME} alt="about image" />
                   </div>
               </div>

               <div className="about__content">
                   <div className="about__cards">
                       <article className='about__card'>
                           <FaAward className='about__icon'/>
                          <h5>Experience</h5> 
                          <small>
                              1.5+ years working
                          </small>
                       </article>

                       <article className='about__card'>
                           <FiUsers className='about__icon'/>
                          <h5>Clients</h5> 
                          <small>
                              200+ Worldwide
                          </small>
                       </article>

                       <article className='about__card'>
                           <BsFolderCheck className='about__icon'/>
                          <h5>Projects</h5> 
                          <small>
                              80+ Completed projects
                          </small>
                       </article>
                   </div>
                   <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem ex nostrum vel! Temporibus, similique odio error ullam maxime cum et obcaecati delectus voluptates iure repellendus placeat esse magnam nobis dolorum.</p>

                   <a href="#contact"className='btn btn-primary'> Let's Talk</a>
               </div>
           </div>
        </section>
    );
}
 
export default About;