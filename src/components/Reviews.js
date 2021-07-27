import Review from "./Review"
import { useDispatch } from "react-redux"
import { toggleAddReviewFormShow, toggleReviewsShow } from "../app/createSlice"

let Reviews = ({reviewsShow, reviews, name, id}) => {
    let dispatch = useDispatch()

    let onClick = () => {
        dispatch(toggleAddReviewFormShow());
        dispatch(toggleReviewsShow());
    }

    return(
        <div className={reviewsShow ? "darkBackground show" : "darkBackground"}>
            <div className={reviewsShow ? "reviews show" : "reviews"}>
                <div className="modal_header">
                    <h1 className="modal_title">Отзывы: {name}</h1>
                    <button className="modal_close btn btn-outline-danger" onClick={() => {dispatch(toggleReviewsShow())}}>X</button>
                </div>
                <div className="modal_body">
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
                <button className="btn btn-outline-success" onClick={() => onClick()}>Добавить отзыв</button>
            </div>
        </div>
    )
}

export default Reviews