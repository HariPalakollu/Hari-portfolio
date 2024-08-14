import React from 'react'
import './services.css'
import { CiBookmarkCheck } from "react-icons/ci";

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className='service'>
          <div className="service__head">
            <h3> MERN-stack Devlopment</h3>
          </div>

          <ul className='service__list'>
            <li>
              <CiBookmarkCheck className='service__list-icon'/>
              <p>MongoDB: Understand NoSQL databases, how to model data, and perform CRUD operations.</p>
            </li>
            <li>
              <CiBookmarkCheck className='service__list-icon'/>
              <p>Express.js: Learn to build RESTful APIs, middleware, and routing.</p>
            </li>
            <li>
              <CiBookmarkCheck className='service__list-icon'/>
              <p>React.js: Master component-based architecture, state management (using hooks or libraries like Redux), and frontend routing</p>
            </li>
            <li>
              <CiBookmarkCheck className='service__list-icon'/>
              <p>Node.js: Get comfortable with server-side JavaScript, asynchronous programming, and managing dependencies using npm.</p>
            </li>
          </ul>
        </article>
        {/* End of Web Development */}
      </div>
    </section>
  )
}

export default Services