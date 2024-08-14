import React from 'react'
import './testimonials.css'
import Avt1 from '../../assets/avatar1.jpg'
import Avt2 from '../../assets/avatar2.jpg'
import Avt3 from '../../assets/avatar3.jpg'
import Avt4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



const data = [
  {
    avatar: Avt1,
    name: 'NxtWave',
    review: 'Srihari has demonstrated a solid understanding of the MERN stack through their work and projects. They have effectively utilized MongoDB for database management, Express.js for backend development, React.js for creating dynamic user interfaces, and Node.js for server-side operations. Their ability to integrate these technologies showcases their potential as a full-stack developer.'
  }, 
  {
    avatar: Avt2,
    name: 'Guru Sai Tharun',
    review: '"As a fresher, they quickly grasped the intricacies of the MERN stack and consistently demonstrated a strong commitment to learning and improving. SriHari Palakollu has shown exceptional skills in developing and deploying full-stack applications, displaying a deep understanding of both frontend and backend technologies."'
  },
]


const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
      // install Swiper modules
      modules={[ Pagination ]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
        {
          data.map(({avatar, name, review}, index) => {
            return(
              <SwiperSlide key={index} className="testimonial">
                <div className="client__avatar">
                  <img src={avatar} alt="Avtar" />
                </div>
                <h5 className='client__name'>{name}</h5>
                <small className='client__review'>
                  {review}
                </small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials