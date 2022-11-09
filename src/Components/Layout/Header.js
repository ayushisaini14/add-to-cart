import { Fragment } from "react"
// import mealsImage from '../../Assets/shopping.jpg'
import './Header.css'
import HeaderCartButton from './HeaderCartButton'
const Header = (props) =>{
    return(<Fragment>
        <header className='header'>
            <h1>AddToCart.in</h1>
            <HeaderCartButton/>
        </header>
    </Fragment>)
}

export default Header