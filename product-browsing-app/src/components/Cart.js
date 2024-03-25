import React from 'react';

const Cart = ({ cartItems, onRemove, onUpdateQuantity, onSelectProduct }) => {
  const removeFromCart = (productId) => {
    onRemove(productId);
  };

  const handleProductDetail = (productId) => {
    const selectedProduct = cartItems.find(item => item.id === productId);
    if (selectedProduct) {
      window.open('', 'Product Description', 'width=500, height=500');
      // Write the selected product description to the new window
      const productDescription = selectedProduct.description;
      const descriptionWindow = window.open('', 'Product Description', 'width=500, height=500');
      descriptionWindow.document.write(`<h1>${selectedProduct.name}</h1>`);
      descriptionWindow.document.write(`<p>${productDescription}</p>`);
    } else {
      console.error('Product not found in cart.');
    }
  };

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id} style={{ paddingTop: '10px' }}>
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
                <div>
                  <div>
                    <button onClick={() => handleProductDetail(item.id)} style={{ marginRight: '15px' }}>Product Detail</button>
                    <button onClick={() => removeFromCart(item.id)} className="remove-button">Remove from Cart</button>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;

