import React from 'react'
import './testmonials.css'
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image1 from '../../assets/avatar-1.svg'
import Image3 from '../../assets/avatar-3.svg'

// swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const data = [
  {
    id: 1,
    image: Image1,
    title: "John Doe",
    subtitle: "Product designer at Dribble",
    comment:
      "I enjoy working with the theme and learn so much. You guys make the process fun and interesting. Good luck! 👍",
  },
  {
    id: 2,
    image: Image3,
    title: "John Doe",
    subtitle: "Product designer at Dribble",
    comment:
      "I enjoy working with the theme and learn so much. You guys make the process fun and interesting. Good luck! 👍",
  },
];

const Testmonials = () => {
  return (
    <section className="testmonials container section">
      <h2 className="section-title">Clients & Reviews</h2>

      <Swiper className="testmonials__container grid"
        modules={[Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        grabCursor={true}
        pagination={{ clickable: true }}
      >
        {data.map(({ id, image, title, subtitle, comment }) => {
          return (
            <SwiperSlide className="testmonial__item" key={id}>
              <div className="thumb">
                <img src={image} alt="" />
              </div>
              <h3 className="testmonials__title">{title}</h3>
              <span className="subtitle">{subtitle}</span>
              <div className="comment">{comment}</div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </section>
  )
}

export default Testmonials
