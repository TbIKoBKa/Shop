import ProsCons from "./ProsCons"
import StarRating from "./StarRating";

let Review = ({ review }) => {
    let { message, pros, cons, rating, from, date } = review;
    return(
        <li className="review">
            <div className="review-header d-flex justify-content-between align-items-center">
                <div className="review-from-rate d-flex align-items-start">
                    <p className="review-from">{from}</p>
                    <StarRating rating={rating} />
                </div>
                
                <p>{date}</p>
            </div>
            <div className="review-body">
                <p className="review-message">{message}</p>
                <ProsCons title="Плюсы" messages={pros} />
                <ProsCons title="Минусы" messages={cons} />
            </div>
        </li>
    )
}

export default Review