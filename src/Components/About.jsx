import React from 'react'
import { FaWhatsapp } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";
const About = () => {
  return (
    <div className='about' id='about' >
        <h1 >ABOUT AS </h1>
        <p>Email: Travelo_All_country@gmail.com</p>
        <p>Contact: +21677250852/+21677800424</p>
        <div className='media'>
        <a href="http://www.whatsapp.com"><FaWhatsapp className='whatsapp' /></a>
        <a href="http://www.youtube.com"><FaYoutube  className='facebook' /></a>
        <a href="http://www.instagram.com"><BsInstagram className='instagram' /></a>
        <a href="http://www.twitter.com"><FaTwitter className='twitter' /></a>
        </div>
        <hr />
        <p>copyright@2024</p>
    </div>
  )
}

export default About