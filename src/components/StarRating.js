import Star from "./Star";

let StarRating = ({rating}) => {
    let StarArray = new Array(5).fill(0);
    return(
        <ul className="star-rating ms-1 d-flex align-items-center">
            { StarArray.map((_, i) => <Star key={i} isActive={i < rating} />) }
        </ul>
    )
}

export default StarRating