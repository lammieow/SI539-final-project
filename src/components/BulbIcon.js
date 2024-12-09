import React from 'react'
import bulb from "../assets/bulb.svg"
import "../components/Bulb.css"
import ScrollAni from "../components/ScrollAni";


function BulbIcon() {
  return (
    <>
      <div className='bulb-container'>
        <ScrollAni />
        <img id="bulb-svg" src={bulb} alt="light bulb"></img>
      </div>

    </>
  )
}

export default BulbIcon