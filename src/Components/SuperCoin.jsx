import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const SuperCoin = () => {
    const [superCoins, setSuperCoins] = useState(0);
    const cartItems = useSelector(state => state.cart.cartItems);
    const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="super-coins" style={{textAlign:'center'}}>
  <h2 className="super-coins-title">Super Coins</h2>
  <p className="super-coins-info">You will earn {superCoins} super coins with this purchase.</p>
</div>
  );
};

export default SuperCoin;
