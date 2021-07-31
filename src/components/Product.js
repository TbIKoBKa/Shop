import formatPrice from '../lib/formatPrice'
import { useDispatch, useSelector } from "react-redux"
import { toggleReviewsShow, setReviewsProductId } from '../app/productsSlice'
import StarRating from "./StarRating"

let Product = (props) => {
    let { id, name, img, price, rating } = props.data;
    let dispatch = useDispatch();
    let theme = useSelector((state) => state.theme);

    let onClick = (id) => {
        dispatch(toggleReviewsShow())
        dispatch(setReviewsProductId(id))
    }
    
    return(
        <li className="products__item">
            <article className={ theme.id === 0 ? "product" : "product dark" }>
                <div className="product-photo">
                    <img src={img} alt={name}></img>
                </div>

                <h3 className="product-title">{name}</h3>
                <div className="price-rating d-flex justify-content-between align-items-center  mb-2">
                    <p className="price m-0">{formatPrice(price)}</p>
                    <StarRating rating={rating} />
                </div>
                <button className="comment-button-open btn btn-outline-success" onClick={() => onClick(id)}>Отзывы</button>
            </article>
        </li>
    )
}

export default Product