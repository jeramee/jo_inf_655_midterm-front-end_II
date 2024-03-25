import React from 'react';

const Cart = ({ cartItems, onRemove, onUpdateQuantity }) => {
  const removeFromCart = (productId) => {
    onRemove(productId);
  };

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id} style={{ paddingTop: '10px' }}> {/* Add inline style for padding top */}
              <img src={item.image} style={{ paddingTop: '10px' }} alt={item.name} />
              <div style={{ paddingTop: '10px', paddingBottom: '10px'}}>
                <h3>{item.name} </h3>
                <p>Price: ${item.price}</p>
                <p>
                  Quantity: 
                  <span style={{ paddingRight: '10px', paddingLeft: '10px' }}>
                    <button onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}>-</button>
                  </span>
                  {item.quantity}
                  <span style={{ paddingLeft: '10px' }}>
                    <button onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}>+</button>
                  </span>
                </p>
                <button onClick={() => removeFromCart(item.id)}>
                  Remove from Cart
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
