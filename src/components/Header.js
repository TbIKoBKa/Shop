import { useDispatch } from "react-redux"
import { toggleTheme } from "../app/themeSlice"

let Header = () => {
    let dispatch = useDispatch()
    return(
        <header className="header py-3 ">
            <div className="container d-flex justify-content-between align-items-center">
                <div className="logo"><span className="logo-text d-block h-100 fs-2 fw-bold text-uppercase">Shop</span></div>
                <div className="header-button-container">
                    <button className="btn btn-outline-light" onClick={() => {dispatch(toggleTheme())}}>THEME</button>
                </div>
            </div>
        </header>
    )
}

export default Header