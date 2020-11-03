import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
    return (
        <div className="home">
            <img
                className="home__image"
                src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/Rajeshwari/september/GWbanners/DesktopHero_1500x600._CB406681182_.jpg"
                alt=""

            />
            <div className="home__row">
                <Product
                    id="1"
                    title="Palm Royal Handicrafts 10 inches Best Folding Wooden Handmade Chess Set Board "
                    price={1000.00}
                    rating={3}
                    image="https://images-na.ssl-images-amazon.com/images/I/81uVxTfDspL._SL1500_.jpg"
                />

                <Product
                    id="2"
                    title="Optimum Nutrition (ON) Gold Standard 100% Whey Protein Powder - 2 lbs, 907 g (Double Rich Chocolate)"
                    price={2773.00}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/716uIeq4rfL._SL1500_.jpg"
                />
                </div>

            <div className="home__row">
                <Product
                    id="3"
                    title="Yonex Nanoray Light 18i Graphite Badminton Racquet (77g, 30 lbs Tension"
                    price={2500.00}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/61WPK1RlUpL._SL1500_.jpg"
                />
                <Product
                    id="4"
                    title="Kore PVC 12 Kg Combo Home Gym Kit with Gym Rods + 2 x 14” Dumbbell Rods"
                    price={5000}
                    rating={2}
                    image="https://images-na.ssl-images-amazon.com/images/I/81TJvAhlY3L._SL1500_.jpg"
                />
                <Product
                    id="5"
                    title="Dyson Corrale Straightener (Black Nickel/Fuchsia)"
                    price={36, 900.00}
                    rating={1}
                    image="https://images-na.ssl-images-amazon.com/images/I/61VuR8D27FL._SL1200_.jpg"
                />
                <Product
                    id="5"
                    title="Philips TANX200 Portable Bluetooth Party Speaker,Built-in Carry Handle,2X mic inputs and 1x Guitar Input (6.3 mm)"
                    price={17,999.00}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/81bXpSN24qL._SL1500_.jpg"
                />
           </div>





            <div className="home__row">
                <Product
                    id="1"
                    title="Funskool Oggy 2 in 1 Puzzle"
                    price={175.00}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/91jlWUPHgwL._SL1500_.jpg"
                />

                <Product
                    id="1"
                    title="Funskool Oggy 2 in 1 Puzzle"
                    price={175.00}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/91jlWUPHgwL._SL1500_.jpg"
                />
                <Product
                    id="1"
                    title="Funskool Oggy 2 in 1 Puzzle"
                    price={175.00}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/91jlWUPHgwL._SL1500_.jpg"
                />

            </div>
            </div>
);}
export default Home;