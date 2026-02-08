import React from 'react';

function Cart({ cartItems, removeFromCart }) {
  // Calculem el total sumant els preus
  const total = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <aside className="cart-section">
      <h2>La Teva Ruta</h2>
      {cartItems.length === 0 ? (
        <p className="empty-msg">No has seleccionat cap activitat.</p>
      ) : (
        <>
          <ul className="cart-list">
            {cartItems.map((item) => (
              <li key={item.id} className="cart-item">
                <div>
                    <strong>{item.name}</strong>
                    <br/>
                    <small>{item.price}€</small>
                </div>
                <button onClick={() => removeFromCart(item.id)} className="btn-remove">
                  X
                </button>
              </li>
            ))}
          </ul>
          <div className="cart-total">
            <h3>Total: {total}€</h3>
            <button className="btn-checkout">Reservar Ara</button>
          </div>
        </>
      )}
    </aside>
  );
}

export default Cart;