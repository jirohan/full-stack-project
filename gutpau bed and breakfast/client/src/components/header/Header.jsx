import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faCalendarDays,
  faCar,
  faLocationDot,
  faPerson,
  faPlane,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";
import "./header.css"
import {DateRange} from 'react-date-range';
import 'react-date-range/dist/styles.css'; 
import 'react-date-range/dist/theme/default.css';
import { format } from "date-fns";


const Header = () => {
    const [openDate, setOpenDate] = useState(false);
    
    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection',
          }
    ]); 
    console.log('date:', date);
  return (
    <div className="header">
      <div className="headerContainer">
        <div className="headerList">
          <div className="headerListItem active">
            <FontAwesomeIcon icon={faBed} />
            <span>Stays</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faPlane} />
            <span>Flight</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faCar} />
            <span>Car Rentals</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Attractions</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faTaxi} />
            <span>Airport Taxi</span>
          </div>
        </div>
        <h1 className="headerTitle">
            A lifetime experience. Explore the world.
        </h1>
        <p className="headerDesc">
            Get reward for your travels - unlock instant savings of 10% or more with a free booking.
        </p>
        <button className="headerBtn">Sign in / Register</button>
        <div className="headerSearch">
            <div className="headerSearchItem">
            <FontAwesomeIcon icon={faBed} className="headerIcon" />
            <input 
                type="text" 
                placeholder="Where are you going?"  
                className="headerSearchInput"/>
            </div>
            <div className="headerSearchItem">
            <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
            <span className="headerSearchText">{`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(date[0].endDate, "dd/MM/yyyy")}`}</span>
            <DateRange 
                editableDateInputs={true}
                onChange={item => setDate([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={date}
                className="date"
                />
            </div>
            <div className="headerSearchItem">
            <FontAwesomeIcon icon={faPerson} className="headerIcon" />
            <span className="headerSearchText">2 adults 2 children 1 room</span>
            </div>
            <div className="headerSearchItem">
            <button className="headerBtn">Search</button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
