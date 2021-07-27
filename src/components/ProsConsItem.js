import PropTypes from 'prop-types'

let ProsConsItem = ({message}) => {
    return(
        <li>{message}</li>
    )
}

ProsConsItem.propTypes = {
    message: PropTypes.string
}

export default ProsConsItem