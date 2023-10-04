import React from 'react'
import "./propertyList.css"

const PropertyList = () => {
  return (
    <div className='pList'>
        <div className="pListItem">
            <img src="https://images.pexels.com/photos/1458457/pexels-photo-1458457.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className="pListImg" />
            <div className="pListTitles">
                <h1>Hotels</h1>
                <h3>233 hotels</h3>
            </div>
        </div>
        <div className="pListItem">
            <img src="https://images.pexels.com/photos/2111768/pexels-photo-2111768.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className="pListImg" />
            <div className="pListTitles">
                <h1>Apartments</h1>
                <h3>233 apartments</h3>
            </div>
        </div>
        <div className="pListItem">
            <img src="https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className="pListImg" />
            <div className="pListTitles">
                <h1>Resorts</h1>
                <h3>233 resorts</h3>
            </div>
        </div>
        <div className="pListItem">
            <img src="https://images.pexels.com/photos/1134175/pexels-photo-1134175.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className="pListImg" />
            <div className="pListTitles">
                <h1>Villas</h1>
                <h3>233 villas</h3>
            </div>
        </div>
        <div className="pListItem">
            <img src="https://images.pexels.com/photos/314937/pexels-photo-314937.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className="pListImg" />
            <div className="pListTitles">
                <h1>Cabins</h1>
                <h3>233 cabins</h3>
            </div>
        </div>
    </div>
  )
}

export default PropertyList