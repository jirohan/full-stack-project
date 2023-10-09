import React from 'react'
import "./featuredProperties.css"

const FeaturedProperties = () => {
  return (
    <div className='fp'>
      <div className="fpItem">
        <img src="https://images.pexels.com/photos/3659683/pexels-photo-3659683.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className="fpImg" />
        <span className="fpName">Malla Hotel</span>
        <span className="fpCity">Kathmandu</span>
        <span className="fpPrice">Starting from $80</span>
        <div className="fpRating">
            <button>8.9</button>
            <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img src="https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className="fpImg" />
        <span className="fpName">Malla Hotel</span>
        <span className="fpCity">Kathmandu</span>
        <span className="fpPrice">Starting from $80</span>
        <div className="fpRating">
            <button>8.9</button>
            <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img src="https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className="fpImg" />
        <span className="fpName">Malla Hotel</span>
        <span className="fpCity">Kathmandu</span>
        <span className="fpPrice">Starting from $80</span>
        <div className="fpRating">
            <button>8.9</button>
            <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img src="https://images.pexels.com/photos/6782574/pexels-photo-6782574.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className="fpImg" />
        <span className="fpName">Malla Hotel</span>
        <span className="fpCity">Kathmandu</span>
        <span className="fpPrice">Starting from $80</span>
        <div className="fpRating">
            <button>8.9</button>
            <span>Excellent</span>
        </div>
      </div>
    </div>
  )
}

export default FeaturedProperties