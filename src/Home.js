import React from 'react';
import './Home.css';
import Product from './Product';


function Home() {
    return (
        <div className='home'>

            <div className="home_container">
                <img className="home_image" src="https://images-eu.ssl-images-amazon.
com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x
600_PV_en-GB._CB428684220_.jpg" alt="not found" />
            </div>
            <div className="home_row">
                <Product title="The lean startup" price={29.99} image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
                    rating={5} />
                <Product id="4903850"
                    title="Samsung LC49RG90SSUXEN 49 Curved LED Gaming Monitor"
                    price={199.99}
                    rating={3}
                    image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg" />
            </div>
            <div className="home_row">
                <Product id="23445930"
                    title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
                    price={98.99}
                    rating={5}
                    image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$" />
                <Product id="3254354345"
                    title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) Silver (4th Generation)"
                    price={598.99}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg" />
                <Product title="Pigeon Polypropylene Mini Handy and Compact Chopper with 3 Blades for Effortlessly Chopping Vegetables
                 and Fruits for Your Kitchen (12420, Green, 400 ml)"
                    price={39.0}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/51RXzjrUmkL._SL1000_.jpg" />
            </div>
            <div className="home_row">
                <Product title="Xiaomi 138 cm (55 inches) X 4K Dolby Vision Series Smart Google TV L55M8-A2IN (Black)"
                    price={349.0}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/71V798w4qhL._SL1500_.jpg" />
            </div>
        </div>
    )
}

export default Home
