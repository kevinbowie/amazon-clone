import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2020/Holiday/GiftGuide/Fuji_TallHero_GG2_en_US_1x._CB418256337_.jpg"
          alt="Banner"
        />

        <div className="home_row">
          <Product
            key={1}
            id={1}
            title="Blue Driver Bluetooth"
            price={19.99}
            image="https://m.media-amazon.com/images/I/41-PrU1phUL._AA210_.jpg"
            rating={5}
          />
          <Product
            key={2}
            id={2}
            title="Kenwood kmix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            price={19.99}
            image="https://m.media-amazon.com/images/I/41-PrU1phUL._AA210_.jpg"
            rating={4}
          />
        </div>
        <div className="home_row">
          <Product
            key={3}
            id={3}
            title="Blue Driver Bluetooth"
            price={19.99}
            image="https://m.media-amazon.com/images/I/41-PrU1phUL._AA210_.jpg"
            rating={5}
          />
          <Product
            key={4}
            id={4}
            title="Blue Driver Bluetooth"
            price={19.99}
            image="https://m.media-amazon.com/images/I/41-PrU1phUL._AA210_.jpg"
            rating={3}
          />
          <Product
            key={5}
            id={5}
            title="Blue Driver Bluetooth"
            price={19.99}
            image="https://m.media-amazon.com/images/I/41-PrU1phUL._AA210_.jpg"
            rating={5}
          />
        </div>
        <div className="home_row">
          <Product
            key={6}
            id={6}
            title="Blue Driver Bluetooth"
            price={19.99}
            image="https://m.media-amazon.com/images/I/41-PrU1phUL._AA210_.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
