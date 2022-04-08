import Title from '../title/Title';
import IMG1 from '../../assets/portfolio1.jpg'
import './portfolio.css'

const data = [
    {
        id: 1,
        image: IMG1,
        title: 'portfolio title here',
        github: 'https://github.com/',
        demo: 'https://dribbble.com/shots/17965903-EnDas-NFTs-Marketplace'
    },
    {
        id: 1,
        image: IMG1,
        title: 'portfolio title here',
        github: 'https://github.com/',
        demo: 'https://dribbble.com/shots/17965903-EnDas-NFTs-Marketplace'
    },
    {
        id: 1,
        image: IMG1,
        title: 'portfolio title here',
        github: 'https://github.com/',
        demo: 'https://dribbble.com/shots/17965903-EnDas-NFTs-Marketplace'
    },
    {
        id: 1,
        image: IMG1,
        title: 'portfolio title here',
        github: 'https://github.com/',
        demo: 'https://dribbble.com/shots/17965903-EnDas-NFTs-Marketplace'
    },
    {
        id: 1,
        image: IMG1,
        title: 'portfolio title here',
        github: 'https://github.com/',
        demo: 'https://dribbble.com/shots/17965903-EnDas-NFTs-Marketplace'
    },
    {
        id: 1,
        image: IMG1,
        title: 'portfolio title here',
        github: 'https://github.com/',
        demo: 'https://dribbble.com/shots/17965903-EnDas-NFTs-Marketplace'
    }
]


const Portfolio = () => {
    return ( 
        <section id="portfolio"> 
            <Title title="portfolio" subtitle="My Recent Work"/>

            <div className="container portfolio__container">

                {
                    data.map(({id, image, title, github, demo})=>{
                        return (
                            <article key={id}className='portfolio__item'>
                                <div className="portfolio__item-image">
                            <img src={image} alt="" /> 
                            </div>
                            <h3>{title}</h3>
                            <div className='portfolio__item-cta'>
                                <a href={github} className='btn'>Github</a>
                                <a href={demo} className='btn btn-primary' target="_blank">Live Demo</a>    
                            </div>
                            </article> 
                        )
                    })
                }
               
                
            </div>
        </section>
    );
}
 
export default Portfolio;