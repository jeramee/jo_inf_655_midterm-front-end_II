import React, { useState } from 'react';

const Cart = ({ cartItems, onRemove, onUpdateQuantity, onSelectProduct }) => {
  const [totalPrice, setTotalPrice] = useState(0);

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

  const calculateTotalPrice = () => {
    let total = 0;
    cartItems.forEach(item => {
      total += item.price * item.quantity;
    });
    setTotalPrice(total);
  };

  const handleCheckout = () => {
    calculateTotalPrice();
    // Open a new window with a form for shipping information
    const shippingWindow = window.open('', 'Shipping Information', 'width=500, height=600');
    shippingWindow.document.write('<h2>Shipping Information</h2>');
    shippingWindow.document.write(`<p>Total Price: $${totalPrice}</p>`);
    shippingWindow.document.write('<form id="shippingForm">');
    shippingWindow.document.write('<label htmlFor="name">Name:</label>');
    shippingWindow.document.write('<input type="text" id="name" name="name" required><br>');
    shippingWindow.document.write('<label htmlFor="address">Address:</label>');
    shippingWindow.document.write('<input type="text" id="address" name="address" required><br>');
    shippingWindow.document.write('<label htmlFor="city">City:</label>');
    shippingWindow.document.write('<input type="text" id="city" name="city" required><br>');
    shippingWindow.document.write('<label htmlFor="state">State:</label>');
    shippingWindow.document.write('<input type="text" id="state" name="state" required><br>');
    shippingWindow.document.write('<label htmlFor="zip">Zip:</label>');
    shippingWindow.document.write('<input type="text" id="zip" name="zip" required><br>');
    shippingWindow.document.write('<button type="submit">Submit</button>');
    shippingWindow.document.write('</form>');
  
    // Thank you message and redirection
    setTimeout(() => {
      shippingWindow.document.write('<h2>Thank You!</h2>');
      setTimeout(() => {
        shippingWindow.close();
        window.location.href = '/'; // Redirect to the home page
      }, 25000); // Close the window after 25 seconds
    }, 2000); // Display thank you message after 2 seconds
  };

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Cart is empty.</p>
      ) : (
        <div>
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
          <div>
            <button onClick={handleCheckout}>Checkout</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
