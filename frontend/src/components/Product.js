import './Product.css';
import { Link } from 'react-router-dom';

const Product = () => {
    return (
        <div className='product'>
            <img src="https://images.unsplash.com/photo-1616070698578-e5e634af7e8a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="product name"/>

            <div className='product_info'>
                <p className='info_name'>Product 1</p>
                <p className='info_description'>                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum odit mollitia natus beatae optio, temporibus quaerat obcaecati blanditiis doloribus cupiditate quidem, assumenda veritatis praesentium vel magni ratione. At, odio reiciendis.</p>

                <p className='info_price'>$299.99</p>


                <Link to={`/product/${111}`} className='info_button'>View</Link>
            </div>
        </div>
    )
}

export default Product