import './Navbar.css';
import {Link} from 'react-router-dom';

const Navbar = ({click}) => {
    return (
        <nav className='navbar'>
            {/*/ Logo */} 
            <div className='navbar_logo'>
                <h2>Shopping Cart</h2>
            </div>

            {/*/ Links */}
            <ul className='navbar_links'>
                <li>
                    <Link to='/cart' className='cart_link'>
                        {/* Icon */}
                        <i className='fas fa-shopping-cart'></i>
                        <span>
                            Cart
                            <span className='cartlogo_badge'>0</span>
                        </span>
                    </Link>
                </li>
                <li>
                    <Link to='/'>
                        Shop                        
                    </Link>
                </li>
            </ul>

            {/*/ Hamburger */}
            <div className='hamburger_menu' onClick={click}>
                <div></div>
                <div></div> 
                <div></div>
            </div>
        </nav>
    )
}

export default Navbar
