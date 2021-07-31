import Review from "./Review"
import { useDispatch, useSelector } from "react-redux"
import { toggleAddReviewFormShow, toggleReviewsShow } from "../app/productsSlice"

let Reviews = ({ reviews, name }) => {
    let dispatch = useDispatch()
    let theme = useSelector((state) => state.theme)

    let onClick = () => {
        dispatch(toggleAddReviewFormShow());
        dispatch(toggleReviewsShow());
    }

    return(
        <div className="darkBackground">
            <div className="modal_ reviews" style={{ backgroundColor: theme.props.backgroundColor }}>
                <div className={theme.id === 0 ? "reviews-header modal_header" : "reviews-header modal_header dark"}>
                    <h1 className="modal_title">Отзывы: {name}</h1>
                    <button className="modal_close btn btn-outline-danger" onClick={() => {dispatch(toggleReviewsShow())}}>X</button>
                </div>
                <div className="modal_body reviews-body">
                {
                    reviews.length > 0
                    ?
                    <ul>
                        { reviews.map(review => <Review key={review.id} review={review} />) }
                    </ul>
                    :
                    <p>Отзывы отсутствуют</p>
                }
                </div>
                <div className={theme.id === 0 ? "reviews-footer modal_footer" : "reviews-footer modal_footer dark"}>
                    <button className="addReviewBtn btn btn-outline-success" onClick={() => onClick()}>Добавить отзыв</button>
                </div>
            </div>
        </div>
    )
}

export default Reviews