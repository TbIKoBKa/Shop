import { useDispatch, useSelector } from "react-redux"
import { toggleAddReviewFormShow } from "../app/createSlice"

let AddReviewForm = () => {
    let { addReviewFormShow } = useSelector((state) => state.shop)
    let dispatch = useDispatch();
    
    let onSubmit = (e) => {
        e.preventDefault();
        dispatch(toggleAddReviewFormShow());
    }

    return(
        <div className={addReviewFormShow ? "darkBackground show" : "darkBackground"}>
            <div className="addReviewForm">
                <div className="addReviewForm-header modal_header">
                    <h1 className="modal_title">Оставить отзыв</h1>
                    <button className="modal_close btn btn-outline-danger" onClick={() => { dispatch(toggleAddReviewFormShow()) }}>X</button>
                </div>
                <div className="modal_body">
                    <form method="POST" onSubmit={(e) => onSubmit(e)}>
                        <div className="form-group">
                            <label htmlFor="firstname">Имя *</label>
                            <input type="text" className="form-control" id="firstname" placeholder="Введите имя" required></input>
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Комментарий</label>
                            <textarea className="form-control" id="message" rows="4"></textarea>
                        </div>
                        <div className="form-group">
                            <label htmlFor="pros">Плюсы</label>
                            <input type="text" className="form-control" id="pros" placeholder="Введите плюсы"></input>
                        </div>
                        <div className="form-group">
                            <label htmlFor="cons">Минусы</label>
                            <input type="text" className="form-control" id="cons" placeholder="Введите минусы"></input>
                        </div>
                        <button type="submit" className="btn btn-success mt-2">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddReviewForm