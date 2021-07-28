import Star from "./Star";

let StarRating = ({ changeRate, toRate=false, rating}) => {
    let StarArray = new Array(5).fill(0);
    return(
        <>
            {
                toRate && 
                StarArray.map((_, i) => <input key={i} type="radio" className="btn-check" name="rate" id={`rate${i}`} autoComplete="off" onClick={() => changeRate(i+1)}></input>)
            }
            <ul className="star-rating d-flex align-items-center">
                { StarArray.map((_, i) => <Star key={i} toRate={{isToRate: toRate, value: i}} isActive={i < rating} />) }
            </ul>
        </>
    )
}

export default StarRating