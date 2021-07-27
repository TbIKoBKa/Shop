import Products from "./Products"
import AddReviewForm from "./AddReviewForm"
import Reviews from "./Reviews"
import { useSelector } from "react-redux"

let Main = () => {
    let { reviewsShow, addReviewFormShow, reviewsProductId, products } = useSelector((state) => state.shop);
    let reviews = [];
    if(reviewsProductId)
        reviews = products.filter(product => product.id === reviewsProductId)[0].reviews

    return(
        <main className="main main-light">
            <div className="container">
                <Products/>
                { addReviewFormShow && <AddReviewForm /> }
                { reviewsShow && <Reviews reviewsShow={reviewsShow} reviews={reviews} id={reviewsProductId}/> }
            </div>
        </main>
    )
}

export default Main