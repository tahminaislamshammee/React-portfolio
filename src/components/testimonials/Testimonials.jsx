import Title from '../title/Title';
import AVTR1 from '../../assets/avatar1.jpg'

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import './testimonials.css'

const data = [
    {
        avatar: AVTR1,
        name: 'Tina Snow',
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati distinctio reprehenderit libero eos tenetur laborum debitis consequuntur error possimus similique!'
    },
    {
        avatar: AVTR1,
        name: 'Tina Snow',
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati distinctio reprehenderit libero eos tenetur laborum debitis consequuntur error possimus similique!'
    },
    {
        avatar: AVTR1,
        name: 'Tina Snow',
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati distinctio reprehenderit libero eos tenetur laborum debitis consequuntur error possimus similique!'
    },
    {
        avatar: AVTR1,
        name: 'Tina Snow',
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati distinctio reprehenderit libero eos tenetur laborum debitis consequuntur error possimus similique!'
    }

]

const Testimonials = () => {
    return ( 
    <section id="testimonials">
        <Title title="Testimonials" subtitle="Review from Clients"/>


        <Swiper className="container testimonials__container"
        
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={40}
        slidesPerView={1}
        
        pagination
      
      >

            {
                data.map(({avatar, name, review}, index)=>{
                    return (
                        <SwiperSlide key={index}  className='testimonial'>
                <div className="client__avatar">
                    <img src={avatar} alt=" avatar one" />
                </div>
                <h5>{name}</h5>
                    <small className='client__review'>{review}</small>

            </SwiperSlide>
                    )
                })
            }
            
            
            
        </Swiper>
    </section>
    );
}
 
export default Testimonials;