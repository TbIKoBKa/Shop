import Product from './Product'
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'

let Products = () => {
    let { products } = useSelector((state) => state.shop);
    return(
        <ul className="products-list d-flex justify-content-between flex-wrap">
            {products.map(item => <Product key={item.id} data={item} />)}
        </ul>
    )
}

Products.propTypes = {
    data: PropTypes.array
}

export default Products