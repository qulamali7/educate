import React, { useContext } from 'react'
import "./index.scss";
import { WishlistContext } from '../../context/WishlistContext';
import { Helmet } from 'react-helmet-async';
const Wishlist = () => {
    const {wishlist,handleWishlist} = useContext(WishlistContext)
  return (
    <>
    <Helmet>
      <title>Wishlist</title>
    </Helmet>
     <section id="wishlist">
    <div className="features_cards">
        {wishlist &&
          wishlist
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
                    <button onClick={()=>handleWishlist(x)}>delete</button>
                  </div>
                </div>
              </div>
            ))}
      </div>
    </section>
    </>
  )
}

export default Wishlist