import React from 'react';
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import "./Checkout.css";
import Subtotal from "./Subtotal";

function Checkout() {
    const [{ basket }] = useStateValue();

    return (
        <div className="checkout">
            <div className="checkout__left">

                <img
                    className="checkout__ad"
                    src="https://images-eu.ssl-images-amazon.com/images/G/31/digital/music/merch/India/2017/Weekly/0912/Download_the_apps_music_india_hero.jpg"
                    alt=""
                />
                {basket?.length === 0 ? (
                    <div>
                        <h2>Shopping Cart</h2>
                        <h2>Your Shopping Cart is empty. </h2>
                        <p> You have items saved to buy later. To buy one or more now, click "Move to cart" next to the item.</p>
                    </div>
                ) : (
                        <div>
                            <h2 className="checkout__title">Your shopping basket</h2>
                            {basket.map((item) => (
                                <CheckoutProduct
                                    id={item.id}
                                    title={item.title}
                                    image={item.image}
                                    price={item.price}
                                    rating={item.rating}
                                />
                            ))}
                        </div>
                    )}
            </div>
            {basket.length > 0 && (
                <div className="checkout__right">
                    <Subtotal />
                </div>
            )}
        </div>
    );
}


export default Checkout;