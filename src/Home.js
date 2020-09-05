import React from "react";
import "./Home.css";
import Product from "./Product";

function Home()  {
return (
<div className="home">
<img
className="home__image"
src="https://weareultraviolet.org/wp-content/uploads/2016/03/Amazon.com-Logo.svg_1-1960x1960.png"
alt=""

/>
<div className="home__row">
<Product
id="1"
title="Optimum Nutrition (ON) Gold Standard 100% Whey Protein Powder - 2 lbs, 907 g (Double Rich Chocolate)"
price={2773.00 }
rating={5}
image="https://images-na.ssl-images-amazon.com/images/I/716uIeq4rfL._SL1500_.jpg"
/>

<Product
id="1"
title="Optimum Nutrition (ON) Gold Standard 100% Whey Protein Powder - 2 lbs, 907 g (Double Rich Chocolate)"
price={2773.00 }
rating={5}
image="https://images-na.ssl-images-amazon.com/images/I/716uIeq4rfL._SL1500_.jpg"
/>

</div>

<div className="home__row">


<Product
id="1"
title="Optimum Nutrition (ON) Gold Standard 100% Whey Protein Powder - 2 lbs, 907 g (Double Rich Chocolate)"
price={2773.00 }
rating={5}
image="https://images-na.ssl-images-amazon.com/images/I/716uIeq4rfL._SL1500_.jpg"
/>


<Product
id="1"
title="Optimum Nutrition (ON) Gold Standard 100% Whey Protein Powder - 2 lbs, 907 g (Double Rich Chocolate)"
price={2773.00 }
rating={5}
image="https://images-na.ssl-images-amazon.com/images/I/716uIeq4rfL._SL1500_.jpg"
/>


<Product
id="1"
title="Optimum Nutrition (ON) Gold Standard 100% Whey Protein Powder - 2 lbs, 907 g (Double Rich Chocolate)"
price={2773.00 }
rating={5}
image="https://images-na.ssl-images-amazon.com/images/I/716uIeq4rfL._SL1500_.jpg"
/>
</div>


<div className="home__row">




<Product
id="1"
title="Optimum Nutrition (ON) Gold Standard 100% Whey Protein Powder - 2 lbs, 907 g (Double Rich Chocolate)"
price={2773.00 }
rating={5}
image="https://images-na.ssl-images-amazon.com/images/I/716uIeq4rfL._SL1500_.jpg"
/>
    </div>

















</div>



);
}

export default Home;