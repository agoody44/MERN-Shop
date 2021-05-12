import './ProductScreen.css'
import { useState, useEffect } from 'react';
import { useDispatch, useSelector, useStore } from 'react-redux';


// Actions
import { getProductDetails } from '../redux/actions/productActions';
import { addToCart } from '../redux/actions/cartActions';


const ProductScreen = ({ match, history }) => {

    const [ qty, setQty ] = useState(1);
    const dispatch = useDispatch();

    const productDetails = useSelector(state => state.getProductDetails);
    const { loading, error, product } = productDetails;

    useEffect(() => {
        if(product && match.params.id !== product._id ) {
            dispatch(getProductDetails(match.params.id))
        }
    }, [dispatch, product, match]); 


    return (
        <div className='productscreen'>
            {loading ? <h2>Loading...</h2> : error ? <h2>{error}</h2> : (
                <>
                <div className='productscreen_left'>
                <div className='left_image'>
                    <img 
                    src={product.imageUrl} 
                    alt={product.name}
                    />
                </div>


                <div className="left_info">
                    <p className='left_name'>{product.name}</p>
                    <p>Price: ${product.price}</p>
                    <p>
                    Description: {product.description}</p>
                </div>
            </div>

            <div className='productscreen_right'>
                <div className='right_info'>
                    <p>
                        Price: <span>$299.99</span>
                    </p>
                    <p>
                        Status: <span>In Stock</span>
                    </p>
                    <p>
                        Qty
                        <select>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                    </p>
                    <p>
                        <button type='button'>Add To Cart</button>
                    </p>

                </div>
            </div>
                </>
            )}
            
        </div>
    )
}

export default ProductScreen
