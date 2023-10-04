import React from 'react'
import "./featuredProperties.css"

const FeaturedProperties = () => {
  return (
    <div className='fp'>
        <img src="" alt="" className="fpImg" />
        <span className="fpName">Malla Hotel</span>
        <span className="fpCity">Kathmandu</span>
        <span className="fpPrice">Starting from $80</span>
        <div className="fpRating">
            <button>8.9</button>
            <span>Excellent</span>
        </div>
    </div>
  )
}

export default FeaturedProperties