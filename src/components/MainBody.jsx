import React from 'react'
import './MainBody.scss'
import shoe_image from '../assets/shoe_image.svg'
import flipkart from '../assets/flipkart.svg'
import amazon from '../assets/amazon.svg'

const MainBody = () => {
  return (
    <div className='m-body'>
      <div className="container">
        <div className="left-content">
          <div className="top">
            <h2>
            YOUR FEET DESERVE THE BEST
            </h2>
          </div>
          <div className="bottom">
            <h4>
            YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.
            </h4>
            <div className="btns-group">
              <button className='sn'>Shop Now</button>
              <button className='cat'>Category</button>
            </div>
            <p>Also Available On</p>
            <div className="img-group">
              <img src={flipkart} alt="" />
              <img src={amazon} alt="" />
            </div>
          </div>
        </div>
        <div className="right-content">
          <div className="prod-img">
            <img src={shoe_image} alt="Product image" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainBody