import React, { useState } from 'react';

const Cart = ({ cart, removeFromCart }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const cartCount = cart.length;

  return (
    <>
      <button type="button" className="btn btn-success mx-2" style={{textWrap:"nowrap"}}  onClick={handleShow}>
        Open Cart
      </button>

      <div className={`modal ${show ? 'show' : ''}`} tabIndex="-1" style={{ display: show ? 'block' : 'none' }}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Shopping Cart</h5>
              <button type="button" className="btn-close" onClick={handleClose}></button>
            </div>
            <div className="modal-body">
              <p>Cart Count: {cartCount}</p>
              <ul className="list-group">
                {cart.map((item) => (
                  <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
                    {item.title} - ${item.price}
                    <button className="btn btn-danger" onClick={() => removeFromCart(item.id)}>
                      Remove
                    </button>
                  </li>
                ))}
              </ul>
              <div className="mt-3">
                <h6>Total Amount: $ {cart.reduce((total, item) => total + item.price, 0).toFixed(2)}</h6>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={handleClose}>
                Close
              </button>
              <button type="button" className="btn btn-primary" onClick={handleClose}>
               Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
