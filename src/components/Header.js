import PropTypes from 'prop-types'
import Button from './Button'


const Header = ({title, onAdd}) => {


    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button color='green' text='Add' onClick= {onAdd} />
        </header>
    )
}
Header.defaultProps  = {
    title: 'Todo list',
}

// Css in JS
// const headingStyle = {
//     color: 'red',
//     backgroundColor: 'black',
// }

Header.propTypes = {
    title: PropTypes.string.isRequired,
}
export default Header
