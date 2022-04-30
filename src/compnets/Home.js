import React from 'react'
import { useHistory } from 'react-router-dom'


const Home = () => {

    const history = useHistory();

    const routeToPizza = () => {
        history.push("/pizza")
    }

return (
    <div className='home-wrapper'>
        <img className='home-image' src="https://img.freepik.com/free-photo/mixed-ingredient-pizza-wooden-board_114579-9317.jpg?t=st=1651298582~exp=1651299182~hmac=4dfc4da6017c949a27071512fa04444d6bcde2c23b7873d2827f47e20e7ea62e&w=1800" alt="" />
        <button 
        onClick={routeToPizza}
        className="order-pizza"
        id="order-pizza">Order Pizza</button> 
    </div>
  )
}
export default Home