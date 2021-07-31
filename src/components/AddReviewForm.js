import { useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { toggleAddReviewFormShow, addReview } from "../app/productsSlice"
import StarRating from "./StarRating"

let AddReviewForm = () => {
    let theme = useSelector((state) => state.theme)
    let dispatch = useDispatch()
    let [ rateReviewFormShow, setRateReviewFormShow ] = useState(1);
    const nameRef = useRef(null)
    const messageRef = useRef(null)
    const prosRef = useRef(null)
    const consRef = useRef(null)
    let onSubmit = (e) => {
        e.preventDefault()
        dispatch(addReview({ 
            from: nameRef.current.value,
            message: messageRef.current.value,
            pros: prosRef.current.value,
            cons: consRef.current.value,
            rating: rateReviewFormShow
        }))
    }

    return(
        <div className="darkBackground">
            <div className="addReviewForm modal_" style={{ backgroundColor: theme.props.backgroundColor }}>
                <div className={theme.id === 0 ? "addReviewForm-header modal_header" : "addReviewForm-header modal_header dark"}>
                    <h1 className="modal_title">Отзыв</h1>
                    <button className="modal_close btn btn-outline-danger" onClick={() => { dispatch(toggleAddReviewFormShow()) }}>X</button>
                </div>
                <div className="modal_body">
                    <form method="POST" onSubmit={(e) => onSubmit(e)}>
                        <div className="form-group">
                            <label htmlFor="firstname">Оцените товар *</label>
                            <StarRating toRate={true} changeRate={ setRateReviewFormShow } rating={ rateReviewFormShow }/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="firstname">Имя *</label>
                            <input ref={nameRef} type="text" className="form-control" id="firstname" placeholder="Введите имя" required></input>
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Комментарий</label>
                            <textarea ref={messageRef} className="form-control" id="message" rows="4"></textarea>
                        </div>
                        <div className="form-group">
                            <label htmlFor="pros">Плюсы</label>
                            <input ref={prosRef} type="text" className="form-control" id="pros" autoComplete="off" placeholder="Введите плюсы"></input>
                        </div>
                        <div className="form-group">
                            <label htmlFor="cons">Минусы</label>
                            <input ref={consRef} type="text" className="form-control" id="cons" autoComplete="off" placeholder="Введите минусы"></input>
                        </div>
                        <button type="submit" className="btn btn-success mt-2">Отправить</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddReviewForm