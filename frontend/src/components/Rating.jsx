import React from 'react'
import {FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa"

const Rating = ({value, text}) => {
  return (
    <div className='rating'>
        <span>
            {value >=1 ? <FaStar/> : value >= 0.5 ? <FaStarHalfAlt/> :
            <FaRegStar/>}
        </span>
    </div>
  )
}

export default Rating