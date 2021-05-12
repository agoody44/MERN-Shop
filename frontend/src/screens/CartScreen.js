import './CartScreen.css';
import CartItem from '../components/CartItem'
// import { useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';

import{ Link } from 'react-router-dom';

// Actions
import {addToCart} from '../redux/actions/cartActions';


const CartScreen = () => {

    const dispatch = useDispatch();

    const cart = useSelector( state => state.cart );
    const { cartItems } = cart;

    const qtyChangeHandler = (id, qty) => {
        dispatch(addToCart(id, qty))
    }

    return (
        <div className='cartscreen'>
            <div className='cartscreen_left'>
            <h2>Shopping Cart</h2>
                {cartItems.length === 0 ? (
                    <div>
                        Your cart is empty <Link to='/'>Go Back</Link>
                    </div>
                ) : cartItems.map(item => (
                    <CartItem 
                    key={item.product}
                    item={item} 
                    qtyChangeHandler={qtyChangeHandler} />
                ))}
            </div>

            <div className='cartscreen_right'>
                <div className='cartscreen_info'>
                    <p>Subtotal (0) items</p>
                    <p>$299.99</p>
                </div>
                <div>
                    <button>Proceed To Checkout</button>
                </div>
            </div>
        </div>
    )
}

export default CartScreen
