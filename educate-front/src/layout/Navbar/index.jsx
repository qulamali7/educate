import React from 'react'
import "./index.scss";
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <>
    <header id='header'>
        <div className='header_container'>
            <div className='header_content'>
                <div className='logo'>
                    <Link to={"/"}><img src="https://preview.colorlib.com/theme/educature/img/logo.png.webp" alt="" /></Link>
                </div>
                <nav>
                    <ul>
                        <li>
                            <Link to={"/"}>Home</Link>
                        </li>
                        <li>
                            <Link to={"/add"}>Add</Link>
                        </li>
                        <li>
                            <Link to={"/basket"}>Basket</Link>
                        </li>
                        <li>
                            <Link to={"/wishlist"}>Wishlist</Link>
                        </li>
                        <li>
                            <Link>Blog</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>
    </>
  )
}

export default Navbar