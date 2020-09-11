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
                    clasName="checkout__ad"
                    src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/AmazonBusiness/SummerSale2019/Nonprime/Main-Banner_1500_400_0205._CB465490718_.jpg"
                    alt=""
                />
                {basket?.length === 0 ? (
                    <div>
                        <h2>Your Shopping Basket is empty </h2>
                        <p> you have no items blablablabla</p>
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