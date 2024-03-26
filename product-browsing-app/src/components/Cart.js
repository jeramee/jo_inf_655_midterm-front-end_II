import React, { useState, useEffect } from 'react';

const Cart = ({ cartItems, onRemove, onUpdateQuantity, onSelectProduct }) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [verboseInfo, setVerboseInfo] = useState('');
  const [checkoutInitiated, setCheckoutInitiated] = useState(false);

  const calculateTotalPrice = () => {
    let total = 0;
    let verbose = '';

    cartItems.forEach(item => {
      const itemTotal = item.price * item.quantity;
      total += itemTotal;
      verbose += `Item: ${item.name}, Price: ${item.price}, Quantity: ${item.quantity}, Total: ${itemTotal}\n`;
    });

    setTotalPrice(total);
    setVerboseInfo(verbose);
  };

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

  const clearCart = () => {
    // Call the onRemove function for each cart item to clear the cart
    cartItems.forEach(item => {
      onRemove(item.id);
    });
  };

  const handleCheckout = () => {
    calculateTotalPrice();
    setCheckoutInitiated(true);
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
    shippingWindow.document.write('<button type="submit" id="submitBtn">Submit</button>');
    shippingWindow.document.write('</form>');

    // Add event listener to the submit button
    shippingWindow.document.getElementById('submitBtn').addEventListener('click', () => {
      // Display "Thank You" message after the submit button is clicked
      setTimeout(() => {
        shippingWindow.document.write('<h2>Thank You!</h2>');
        setTimeout(() => {
          shippingWindow.close();
          window.location.href = '/'; // Redirect to the home page
        }, 25000); // Close the window after 25 seconds
      }, 2000); // Display thank you message after 2 seconds
    });

    // Clear cart items when checkout process is initiated
    // You need to implement the clearCart function
    clearCart();
  };
    
  // Redirect to the home page and display "Thank You" message after 25 seconds
  useEffect(() => {
    if (checkoutInitiated) {
      const timer = setTimeout(() => {
        window.location.href = '/';
      }, 25000);
      return () => clearTimeout(timer);
    }
  }, [checkoutInitiated]);

  // Call calculateTotalPrice whenever cartItems change
  useEffect(() => {
    calculateTotalPrice();
  }, [cartItems]);

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Cart is empty.</p>
      ) : (
        <div>
          <ul>
            {/* Your existing JSX for displaying cart items */}
          </ul>
          <div>
            <button onClick={handleCheckout}>Checkout</button>
          </div>
        </div>
      )}
      <div style={{ marginTop: '20px' }}>
        <h3>Running Total: ${totalPrice}</h3>
        <pre>{verboseInfo}</pre>
      </div>
      {/* Display "Thank You" message only if checkout is initiated */}
      {checkoutInitiated && (
        <div>
          <h2>Thank You!</h2>
        </div>
      )}
    </div>
  );
};

export default Cart;