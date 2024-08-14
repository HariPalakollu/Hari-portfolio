import React from 'react'
import './contact.css'
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_wf686rm', 'template_mmepbes', form.current, {
        publicKey: 'k_Layu0-QVHmTmS-m',
      })
      e.target.reset()
  };


  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
          <MdOutlineMarkEmailRead className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>palakolluh@gmail.com</h5>
            <a href="mailto:palakolluh@gmail.com" target='_blank'>Send a Message</a>
          </article>
          <article className='contact__option'>
          <FaInstagram className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Hari</h5>
            <a href="https://instagram.com" target='_blank'>Send a Message</a>
          </article>
          <article className='contact__option'>
          <FaWhatsapp className='contact__option-icon'/>
            <h4>What's App</h4>
            <h5>+91 ......0872</h5>
            <a href="https://api.whatsapp.com/send?phone=+919676330872" target='_blank'>Send a Message</a>
          </article>
        </div>

        {/* End of Contact Options */}

        <form ref={form} on onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact