import React from 'react'
import "./featured.css"

const Featured = () => {
  return (
    <div className='featured'>
        <div className="featuredItem">
            <img src="https://images.unsplash.com/photo-1630784032398-c9713a60d3d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8RHVibGluJTIwaG90ZWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=900&q=60" alt="" className='featuredImg'/>
            <div className="featuredTitles">
                <h1>Dublin</h1>
                <h4>123 Properties</h4>
            </div>
        </div>
        <div className="featuredItem">
            <img src="https://images.unsplash.com/photo-1601379463077-bba00ffe7da9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGFyaXMlMjBob3RlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=900&q=60" alt="" className='featuredImg'/>
            <div className="featuredTitles">
                <h1>Paris</h1>
                <h4>567 Properties</h4>
            </div>
        </div>
        <div className="featuredItem">
            <img src="https://images.unsplash.com/photo-1676196920290-b4daec5f93c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdGVscyUyMG1hbGRpdmVzfGVufDB8fDB8fHww&auto=format&fit=crop&w=900&q=60" alt="" className='featuredImg'/>
            <div className="featuredTitles">
                <h1>Maldives</h1>
                <h4>890 Properties</h4>
            </div>
        </div>
    </div>
  )
}

export default Featured