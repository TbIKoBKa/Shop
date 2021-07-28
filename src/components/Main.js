import Products from "./Products"
import AddReviewForm from "./AddReviewForm"
import Reviews from "./Reviews"
import { useSelector } from "react-redux"

let Main = () => {
    let { reviewsShow, addReviewFormShow, reviewsProductId, products, theme } = useSelector((state) => state.shop);
    let reviews = [];
    if(reviewsProductId)
        reviews = products.filter(product => product.id === reviewsProductId)[0].reviews

    return(
        <main className="main" style={{ backgroundColor: theme.props.backgroundColor, color: theme.props.fontColor }}>
            <div className="container">
                <Products/>
                { addReviewFormShow && <AddReviewForm /> }
                { reviewsShow && <Reviews reviewsShow={reviewsShow} reviews={reviews} id={reviewsProductId}/> }
            </div>
        </main>
    )
}

export default Main