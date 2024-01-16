import React, { useContext, useEffect, useState } from "react";
import "./index.scss";
import { SearchContext } from "../../context/SearchContext";
import { BasketContext } from "../../context/BasketContext";
import { WishlistContext } from "../../context/WishlistContext";
const FeaturesCards = () => {
  const {addBasket} = useContext(BasketContext)
  const {handleWishlist} = useContext(WishlistContext)
  const [data, setData] = useState([]);
  const [sortproperty, setSortproperty] = useState(null);
  const { search, handleSearch } = useContext(SearchContext);
  async function Getfetch() {
    try {
      await fetch("http://localhost:3100/features")
        .then((res) => res.json())
        .then((data) => setData(data));
    } catch (error) {
      console.log(error.message);
    }
  }
  useEffect(() => {
    Getfetch();
  }, []);

  return (
    <>
      <div className="search_sort">
        <input type="text" onChange={handleSearch} />
        <button
          onClick={() => setSortproperty({ property: "title", asc: true })}
        >
          A-Z
        </button>
        <button
          onClick={() => setSortproperty({ property: "title", asc: false })}
        >
          Z-A
        </button>
        <button onClick={() => setSortproperty(null)}>default</button>
      </div>
      <div className="features_cards">
        {data &&
          data
            .filter((x) => x.title.toLowerCase().includes(search.toLowerCase()))
            .sort((a, b) => {
              if (sortproperty && sortproperty.asc) {
                return a[sortproperty.property].toLowerCase() >
                  b[sortproperty.property].toLowerCase()
                  ? 1
                  : b[sortproperty.property].toLowerCase() >
                    a[sortproperty.property].toLowerCase()
                  ? -1
                  : 0;
              } else if (sortproperty && sortproperty.asc === false) {
                return a[sortproperty.property].toLowerCase() <
                  b[sortproperty.property].toLowerCase()
                  ? 1
                  : b[sortproperty.property].toLowerCase() <
                    a[sortproperty.property].toLowerCase()
                  ? -1
                  : 0;
              } else {
                return;
              }
            })
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
                    <button onClick={()=>addBasket(x)}>Add Basket</button>
                    <button onClick={()=>handleWishlist(x)}>Add Wishlist</button>
                  </div>
                </div>
              </div>
            ))}
      </div>
    </>
  );
};

export default FeaturesCards;
