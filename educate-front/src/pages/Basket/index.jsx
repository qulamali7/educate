import React, { useContext } from 'react'
import "./index.scss";
import { BasketContext } from '../../context/BasketContext';
import { Helmet } from 'react-helmet-async';
const Basket = () => {
    const {basket,removeBasket,increaseCount,decreaseCount,} = useContext(BasketContext)
  return (
    <>
    <Helmet>
      <title>Basket</title>
    </Helmet>
    <section id='basket'>
    <div className="features_cards">
        {basket &&
          basket
            .map((x) => (
              <div className="features_card">
                <div className="features_card_content">
                  <div className="icon">
                    <i className={x.icon}></i>
                  </div>
                  <div className="text">
                    <h4>{x.title}</h4>
                    <p>{x.text}</p>
                  </div>
                  <div>
                    <button onClick={()=>removeBasket(x)}>delete</button>
                    <button onClick={()=>increaseCount(x)}>+</button>
                    <p>{x.count}</p>
                    <button onClick={()=>decreaseCount(x)}>-</button>
                  </div>
                </div>
              </div>
            ))}
      </div>
    </section>
    </>
  )
}

export default Basket