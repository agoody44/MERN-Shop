import './ProductScreen.css'

const ProductScreen = () => {
    return (
        <div className='productscreen'>
            <div className='productscreen_left'>
                <div className='left_image'>
                    <img 
                    src="https://images.unsplash.com/photo-1616070698578-e5e634af7e8a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="product name"
                    />
                </div>


                <div className="left_info">
                    <p className='left_name'>Nintendo Swith</p>
                    <p>Price: 299.99</p>
                    <p>
                    Description: Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
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
        </div>
    )
}

export default ProductScreen
