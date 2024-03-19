import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import BakeryItem from "./components/BakeryItem";

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */

  const [cartItems, setCartItems] = useState([]);

  const addToCart = (itemToAdd) => {
    setCartItems((prevCartItems) => {
      const existingItemIndex = prevCartItems.findIndex(item => item.id === itemToAdd.id);
      if (existingItemIndex > -1) {
        const updatedCartItems = [...prevCartItems];
        const existingItem = updatedCartItems[existingItemIndex];
        updatedCartItems[existingItemIndex] = { ...existingItem, quantity: existingItem.quantity + 1 };
        return updatedCartItems;
      } else {
        return [...prevCartItems, { ...itemToAdd, quantity: 1 }];
      }
    });
  };

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity, 
    0
  );

  return (
    <div className="App">
      <h1>Patricia's Bakery</h1> {/* OK: TODO: personalize your bakery (if you want) */}
      <div className="main-page">
      <div className="items-page">
          {bakeryData.map((item, index) => ( // OK: TODO: map bakeryData to BakeryItem components
            <BakeryItem
            key={index}
            image={item.image}
            name={item.name}
            description={item.description}
            price={item.price}
            addToCart={() => addToCart(item)}
            />
          ))}
      </div>
      
      <div className="cart-page">
       <h2>My cart</h2>
        {/* Render a list of items in the cart */}
         {cartItems.length > 0 ? (
            <>
              {cartItems.map((item) => (
                <div key={item.id} className="cart-item">
                  <p>{item.name} x {item.quantity}</p>
                </div>
              ))}
              <p><strong>Total: ${totalPrice.toFixed(2)}</strong></p>
            </>
          ) : (
            <p>Your cart is empty.</p>
          )}
        </div>

      </div>
    </div>
  );
}

export default App;
