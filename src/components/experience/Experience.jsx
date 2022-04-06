import Title from "../title/Title";
import {BsFillPatchCheckFill} from 'react-icons/bs'
import './experience.css'
const Experience = () => {
    return ( 
        <section id="experience">
            <Title subtitle="What Skills I Have" title="My Experience"/>

            <div className="container experience__container">
                <div className="experience__frontend">
                    <h3>Frontend Development</h3>
                    <div className="experience__content">
                        <article className="experience__details">
                            <BsFillPatchCheckFill className="experience__details-iocns"/>
                            <div>
                            <h4>HTML</h4>
                            <small className="text-light">Experienced</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsFillPatchCheckFill className="experience__details-iocns"/>
                            <div>
                            <h4>CSS</h4>
                            <small className="text-light">Experienced</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsFillPatchCheckFill className="experience__details-iocns"/>
                            <div>
                            <h4>Javascript</h4>
                            <small className="text-light">Intermediate</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsFillPatchCheckFill className="experience__details-iocns"/>
                            <div>
                            <h4>Bootstrap</h4>
                            <small className="text-light">Experienced</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsFillPatchCheckFill className="experience__details-iocns"/>
                            <div>
                            <h4>Tailwind</h4>
                            <small className="text-light">Experienced</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsFillPatchCheckFill className="experience__details-iocns"/>
                            <div>
                            <h4>SCSS</h4>
                            <small className="text-light">Experienced</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsFillPatchCheckFill className="experience__details-iocns"/>
                            <div>
                            <h4>React</h4>
                            <small className="text-light">Beginner</small>
                            </div>
                        </article>
                    </div>
                </div>
                <div className="experience__backend">
                <h3>Backend Development</h3>
                    <div className="experience__content">
                        <article className="experience__details">
                            <BsFillPatchCheckFill className="experience__details-iocns"/>
                            <div>
                            <h4>MongoDB</h4>
                            <small className="text-light">Experienced</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsFillPatchCheckFill className="experience__details-iocns"/>
                            <div>
                            <h4>PHP</h4>
                            <small className="text-light">Experienced</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsFillPatchCheckFill className="experience__details-iocns"/>
                            <div>
                            <h4>MySQL</h4>
                            <small className="text-light">Intermediate</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsFillPatchCheckFill className="experience__details-iocns"/>
                            <div>
                            <h4>Python</h4>
                            <small className="text-light">Experienced</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsFillPatchCheckFill className="experience__details-iocns"/>
                            <div>
                            <h4>Firebase</h4>
                            <small className="text-light">Experienced</small>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    );
}
 
export default Experience;