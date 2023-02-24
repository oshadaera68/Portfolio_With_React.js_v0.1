import React from 'react'
import './testmonials.css'
import Image1 from '../../assets/avatar-1.svg'
import Image3 from '../../assets/avatar-3.svg'

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

      <div className="testmonials__container grid">
      
      </div>
    </section>
  )
}

export default Testmonials
