import React from 'react'
import "./index.scss";
import FeaturesCards from '../FeaturesCards';
const Features = () => {
  return (
    <>
    <section id='features'>
        <div className='features_container'>
            <div className='features_content'>
                <div className='features_title'>
                    <h2>Features That Make Us Hero</h2>
                    <p>If you are looking at blank cassettes on the web, you may be very confused at the difference in price. You may see some for as low as $.17 each.</p>
                </div>
                <FeaturesCards/>
            </div>
        </div>
    </section>
    </>
  )
}

export default Features