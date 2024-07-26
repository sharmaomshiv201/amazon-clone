import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
function Header() {
    return (
        <div className='header'>
            <Link to="/">
                <img className='header_logo' src="https://pngimg.com/uploads/amazon/amazon_PNG25.png" alt="not found" />
            </Link>

            <div className="header_search">
                <input type="text" className="header_searchInput" placeholder='Search' />
                <img className='header_searchlogo' src="https://img.icons8.com/?size=100&id=132&format=png&color=000000" alt="not found" />
            </div>
            <div className="header_nav">
                <div className="header_option">
                    <span className="header_lineone">
                        Hello Guest
                    </span>
                    <span className="header_linetwo">
                        Sign in
                    </span>
                </div>
                <div className="header_option">
                    <span className="header_lineone">
                        Returns
                    </span>
                    <span className="header_linetwo">
                        &Orders
                    </span>
                </div>
                <div className="header_option">
                    <span className="header_lineone">
                        Your
                    </span>
                    <span className="header_linetwo">
                        Prime
                    </span>
                </div>
                <Link to="checkout">
                    <div className="header_basketoption">
                        <img className='header_basket' src="https://img.icons8.com/?size=100&id=84924&format=png&color=FFFFFF" alt="" />
                        <span className="header_basketcount header_linetwo ">0</span>
                    </div>
                </Link>

            </div>
        </div>
    )
}

export default Header
