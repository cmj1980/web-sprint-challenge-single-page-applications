import React from 'react'
import { useHistory } from 'react-router-dom'
import "./Home.css"


const Home = () => {

    const history = useHistory();

    const routeToPizza = () => {
        history.push("/pizza")
    }

return (
    <div className='home-wrapper'>
        <section className='home-bg'>
            <div>

            </div>
        </section>
        <div>
        <button 
        onClick={routeToPizza}
        className="order-pizza"
        id="order-pizza">Order Pizza</button> 
        </div>
    </div>
  )
}
export default Home