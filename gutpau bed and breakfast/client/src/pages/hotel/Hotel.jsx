import React from 'react'
import "./hotel.css"
import Navbar from "../../components/navbar/Navbar"
import Header from '../../components/header/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import MailList from '../../components/mailList/MailList'
import Footer from '../../components/footer/Footer'

const Hotel = () => {
  const photos = [
    {
      src: "https://images.pexels.com/photos/271643/pexels-photo-271643.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      src: "https://images.pexels.com/photos/1838554/pexels-photo-1838554.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      src: "https://images.pexels.com/photos/7587873/pexels-photo-7587873.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
    },
    {
      src: "https://images.pexels.com/photos/1571470/pexels-photo-1571470.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      src: "https://images.pexels.com/photos/4917176/pexels-photo-4917176.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      src: "https://images.pexels.com/photos/3019019/pexels-photo-3019019.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
  ]
  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="hotelContainer">
        <div className="hotelWrapper">
          <button className='booknow'>Reserve or Book Now!!</button>
          <h1 className="hotelTitle">Grand Hotel</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot}/>
            <span>Lhodegal Kirtipur Kathmandu</span>
          </div>
          <span className='hotelDistance'>
            Excellent location - 500m from center  
          </span>
          <span className='hotelPriceHighlight'>
            Book a stay over $150 at this property and get a free drinks and free airport taxi  
          </span>
          <div className="hotelImages">
            {photos.map(photo => (
              <div className="hotelImageWrapper">
                <img src={photo.src} alt="" className="hotelImg" />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsText">
              <h1 className="hotelTitle">Stay in the Hills of Kirtipur</h1>
              <p className="hotelDesc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea illum dignissimos sapiente ipsum voluptatibus facere et vitae quos ab quidem alias nobis, dolore reiciendis asperiores iure rerum, repellat omnis quas totam eos consectetur eligendi consequatur maxime! Maiores ab iusto blanditiis.
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for 4-night stay!</h1>
              <span>
                Located at the beautiful hills of kirtipur. Beautiful Sceneric view of Kathamandu Valley.
              </span>
              <h2>
                <b>$400</b> (4 nights)
              </h2>
              <button>Reserve or Book Now!</button>
            </div>
          </div>
        </div>
        <MailList/>
        <Footer/>
      </div>
    </div>
  )
}

export default Hotel