import React from 'react'
import { useHistory } from 'react-router-dom'


const Home = () => {

return (
    <div className='home-wrapper'>
        <img className='home-image' src="" alt="" />
        <button 
        onClick={routeToPizza}
        className="order-pizza"
        id="order-pizza">Order Pizza</button> 
    </div>
  )
}